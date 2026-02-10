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

        // Find existing visitor or create new one
        let visitor = await Visitor.findOne({ visitorId });

        if (visitor) {
            // Update existing visitor
            visitor.visitCount += 1;
            visitor.lastVisit = new Date();
            visitor.ipAddress = ipAddress;
            visitor.userAgent = userAgent;
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
                }]
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

// GET - Get visitor statistics
export async function GET(request) {
    try {
        await connectDB();

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

        return NextResponse.json({
            success: true,
            data: {
                totalUniqueVisitors: totalVisitors,
                totalVisits: totalVisits,
                visitorsToday: visitorsToday,
                visitorsThisWeek: visitorsThisWeek,
                visitorsThisMonth: visitorsThisMonth,
                averageVisitsPerVisitor: parseFloat(avgVisits)
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
