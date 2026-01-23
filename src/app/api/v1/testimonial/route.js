import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import { NextResponse } from 'next/server';

// GET all testimonials or single testimonial by ID
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (id) {
            const testimonial = await Testimonial.findById(id);
            if (!testimonial) {
                return NextResponse.json(
                    { success: false, error: 'Testimonial not found' },
                    { status: 404 }
                );
            }
            return NextResponse.json({ success: true, data: testimonial });
        }

        const testimonials = await Testimonial.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json({ success: true, data: testimonials });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new testimonial
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const testimonial = await Testimonial.create(body);

        return NextResponse.json(
            { success: true, data: testimonial },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update testimonial
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
        const testimonial = await Testimonial.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!testimonial) {
            return NextResponse.json(
                { success: false, error: 'Testimonial not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: testimonial });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE testimonial
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

        const testimonial = await Testimonial.findByIdAndDelete(id);

        if (!testimonial) {
            return NextResponse.json(
                { success: false, error: 'Testimonial not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
