import connectDB from '@/lib/mongodb';
import Experience from '@/models/Experience';

// GET all experiences
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (id) {
            const experience = await Experience.findById(id);
            if (!experience) {
                return Response.json(
                    { success: false, error: 'Experience not found' },
                    { status: 404 }
                );
            }
            return Response.json({ success: true, data: experience });
        }

        const experiences = await Experience.find({}).sort({ order: 1, startDate: -1 });
        return Response.json({ success: true, data: experiences });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new experience
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const experience = await Experience.create(body);

        return Response.json(
            { success: true, data: experience },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update experience
export async function PUT(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return Response.json(
                { success: false, error: 'ID is required' },
                { status: 400 }
            );
        }

        const body = await request.json();
        const experience = await Experience.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!experience) {
            return Response.json(
                { success: false, error: 'Experience not found' },
                { status: 404 }
            );
        }

        return Response.json({ success: true, data: experience });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE experience
export async function DELETE(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return Response.json(
                { success: false, error: 'ID is required' },
                { status: 400 }
            );
        }

        const experience = await Experience.findByIdAndDelete(id);

        if (!experience) {
            return Response.json(
                { success: false, error: 'Experience not found' },
                { status: 404 }
            );
        }

        return Response.json({ success: true, data: {} });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
