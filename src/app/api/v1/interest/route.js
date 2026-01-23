import connectDB from '@/lib/mongodb';
import Interest from '@/models/Interest';

// GET all interests or single interest by ID
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (id) {
            const interest = await Interest.findById(id);
            if (!interest) {
                return Response.json(
                    { success: false, error: 'Interest not found' },
                    { status: 404 }
                );
            }
            return Response.json({ success: true, data: interest });
        }

        const interests = await Interest.find({}).sort({ order: 1, title: 1 });
        return Response.json({ success: true, data: interests });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new interest
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const interest = await Interest.create(body);

        return Response.json(
            { success: true, data: interest },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update interest
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
        const interest = await Interest.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!interest) {
            return Response.json(
                { success: false, error: 'Interest not found' },
                { status: 404 }
            );
        }

        return Response.json({ success: true, data: interest });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE interest
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

        const interest = await Interest.findByIdAndDelete(id);

        if (!interest) {
            return Response.json(
                { success: false, error: 'Interest not found' },
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
