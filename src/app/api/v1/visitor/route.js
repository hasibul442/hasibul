import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Visitor from '@/models/Visitor';

// POST - Track a visitor
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const { visitorId, page, referrer } = body;

        if (!visitorId) {
            return NextResponse.json(
                { success: false, message: 'Visitor ID is required' },
                { status: 400 }
            );
        }

        // Get IP address and user agent from headers
        const forwarded = request.headers.get('x-forwarded-for');
        const ipAddress = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';
        const fullVisitorData = {
            headers: Object.fromEntries(request.headers.entries()),
            body
        };

        // Find existing visitor or create new one
        let visitor = await Visitor.findOne({ visitorId });

        if (visitor) {
            // Update existing visitor
            visitor.visitCount += 1;
            visitor.lastVisit = new Date();
            visitor.ipAddress = ipAddress;
            visitor.userAgent = userAgent;
            visitor.fullVisitorData = fullVisitorData;
            visitor.visits.push({
                timestamp: new Date(),
                page: page || '/',
                referrer: referrer || 'direct'
            });
            await visitor.save();
        } else {
            // Create new visitor
            visitor = await Visitor.create({
                visitorId,
                visitCount: 1,
                ipAddress,
                userAgent,
                visits: [{
                    timestamp: new Date(),
                    page: page || '/',
                    referrer: referrer || 'direct'
                }],
                fullVisitorData: fullVisitorData
            });
        }

        return NextResponse.json({
            success: true,
            data: {
                visitCount: visitor.visitCount,
                isNewVisitor: visitor.visitCount === 1
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Error tracking visitor:', error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// GET - Get visitor statistics and list
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type') || 'stats'; // 'stats' or 'list'
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const sortBy = searchParams.get('sortBy') || 'lastVisit';
        const order = searchParams.get('order') || 'desc';

        // If requesting visitor list
        if (type === 'list') {
            const skip = (page - 1) * limit;
            const sortOrder = order === 'asc' ? 1 : -1;

            const visitors = await Visitor.find()
                .sort({ [sortBy]: sortOrder })
                .skip(skip)
                .limit(limit)
                .select('-__v')
                .lean();

            const total = await Visitor.countDocuments();

            return NextResponse.json({
                success: true,
                data: {
                    visitors,
                    pagination: {
                        page,
                        limit,
                        total,
                        totalPages: Math.ceil(total / limit)
                    }
                }
            }, { status: 200 });
        }

        // Default: return statistics
        // Get total unique visitors
        const totalVisitors = await Visitor.countDocuments();

        // Get total visits (sum of all visit counts)
        const totalVisitsResult = await Visitor.aggregate([
            {
                $group: {
                    _id: null,
                    totalVisits: { $sum: '$visitCount' }
                }
            }
        ]);
        const totalVisits = totalVisitsResult.length > 0 ? totalVisitsResult[0].totalVisits : 0;

        // Get visitors today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const visitorsToday = await Visitor.countDocuments({
            lastVisit: { $gte: today }
        });

        // Get visitors this week
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const visitorsThisWeek = await Visitor.countDocuments({
            lastVisit: { $gte: weekAgo }
        });

        // Get visitors this month
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        const visitorsThisMonth = await Visitor.countDocuments({
            lastVisit: { $gte: monthAgo }
        });

        // Get average visits per visitor
        const avgVisits = totalVisitors > 0 ? (totalVisits / totalVisitors).toFixed(2) : 0;

        // Get recent visitors for preview
        const recentVisitors = await Visitor.find()
            .sort({ lastVisit: -1 })
            .limit(5)
            .select('visitorId visitCount firstVisit lastVisit ipAddress')
            .lean();

        return NextResponse.json({
            success: true,
            data: {
                totalUniqueVisitors: totalVisitors,
                totalVisits: totalVisits,
                visitorsToday: visitorsToday,
                visitorsThisWeek: visitorsThisWeek,
                visitorsThisMonth: visitorsThisMonth,
                averageVisitsPerVisitor: parseFloat(avgVisits),
                recentVisitors: recentVisitors
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Error getting visitor stats:', error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
