import connectDB from '@/lib/mongodb';
import Certification from '@/models/Certifications';
import { NextResponse } from 'next/server';

// GET all certifications
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const status = searchParams.get('status') || null;

        if (id) {
            const certification = await Certification.findById(id);
            if (!certification) {
                return NextResponse.json(
                    { success: false, error: 'Certification not found' },
                    { status: 404 }
                );
            }
            return NextResponse.json({ success: true, data: certification });
        }

        const certifications = await Certification.find(status ? { status } : {}).sort({ issueDate: -1 });
        return NextResponse.json({ success: true, data: certifications });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new certification
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const certification = await Certification.create(body);

        return NextResponse.json(
            { success: true, data: certification },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update certification
export async function PUT(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { success: false, error: 'ID is required' },
                { status: 400 }
            );
        }

        const body = await request.json();
        const certification = await Certification.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!certification) {
            return NextResponse.json(
                { success: false, error: 'Certification not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: certification });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE certification
export async function DELETE(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { success: false, error: 'ID is required' },
                { status: 400 }
            );
        }

        const certification = await Certification.findByIdAndDelete(id);

        if (!certification) {
            return NextResponse.json(
                { success: false, error: 'Certification not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Certification deleted successfully',
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}
