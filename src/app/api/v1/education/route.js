import connectDB from '@/lib/mongodb';
import Education from '@/models/Education';

// GET all educations or single education by ID
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (id) {
            const education = await Education.findById(id);
            if (!education) {
                return Response.json(
                    { success: false, error: 'Education not found' },
                    { status: 404 }
                );
            }
            return Response.json({ success: true, data: education });
        }

        const educations = await Education.find({}).sort({ order: 1, startDate: -1 });
        return Response.json({ success: true, data: educations });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new education
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const education = await Education.create(body);

        return Response.json(
            { success: true, data: education },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update education
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
        const education = await Education.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!education) {
            return Response.json(
                { success: false, error: 'Education not found' },
                { status: 404 }
            );
        }

        return Response.json({ success: true, data: education });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE education
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

        const education = await Education.findByIdAndDelete(id);

        if (!education) {
            return Response.json(
                { success: false, error: 'Education not found' },
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
