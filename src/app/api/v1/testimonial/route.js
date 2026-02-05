import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import { NextResponse } from 'next/server';
import { uploadToCloudinary, deleteFromCloudinary } from '@/lib/cloudinary';

// GET all testimonials or single testimonial by ID
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const is_show = searchParams.get('status') || null;

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

        const filter = {};
        if (is_show !== null) {
            filter.is_show = is_show === 'true';
        }

        const testimonials = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 });
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
        const testimonialData = { ...body };

        // Upload base64 avatar to Cloudinary if provided
        if (body.avatar && body.avatar.startsWith('data:image')) {
            // Convert base64 to buffer
            const base64Data = body.avatar.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const avatarUrl = await uploadToCloudinary(buffer, 'portfolio/testimonials');
            testimonialData.avatar = avatarUrl;
        }

        const testimonial = await Testimonial.create(testimonialData);

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
        const testimonialData = { ...body };

        // Get existing testimonial to check for old avatar
        const existingTestimonial = await Testimonial.findById(id);
        if (!existingTestimonial) {
            return NextResponse.json(
                { success: false, error: 'Testimonial not found' },
                { status: 404 }
            );
        }

        // Upload new base64 avatar to Cloudinary if provided
        if (body.avatar && body.avatar.startsWith('data:image')) {
            // Convert base64 to buffer
            const base64Data = body.avatar.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const avatarUrl = await uploadToCloudinary(buffer, 'portfolio/testimonials');
            
            // Delete old avatar from Cloudinary
            if (existingTestimonial.avatar) {
                await deleteFromCloudinary(existingTestimonial.avatar);
            }
            
            testimonialData.avatar = avatarUrl;
        }

        const testimonial = await Testimonial.findByIdAndUpdate(id, testimonialData, {
            new: true,
            runValidators: true,
        });

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

        const testimonial = await Testimonial.findById(id);

        if (!testimonial) {
            return NextResponse.json(
                { success: false, error: 'Testimonial not found' },
                { status: 404 }
            );
        }

        // Delete avatar from Cloudinary
        if (testimonial.avatar) {
            await deleteFromCloudinary(testimonial.avatar);
        }

        await Testimonial.findByIdAndDelete(id);

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
