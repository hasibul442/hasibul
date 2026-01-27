import connectDB from '@/lib/mongodb';
import Language from '@/models/Language';
import { NextResponse } from 'next/server';

// GET all languages or single language by ID
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (id) {
            const language = await Language.findById(id);
            if (!language) {
                return NextResponse.json(
                    { success: false, error: 'Language not found' },
                    { status: 404 }
                );
            }
            return NextResponse.json({ success: true, data: language });
        }

        const languages = await Language.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: languages });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new language
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const language = await Language.create(body);

        return NextResponse.json(
            { success: true, data: language },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update language
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
        const language = await Language.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!language) {
            return NextResponse.json(
                { success: false, error: 'Language not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: language });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE language
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

        const language = await Language.findByIdAndDelete(id);

        if (!language) {
            return NextResponse.json(
                { success: false, error: 'Language not found' },
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
