import connectDB from '@/lib/mongodb';
import Skill from '@/models/Skill';

// GET all skills or single skill by ID
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const category = searchParams.get('category');

        if (id) {
            const skill = await Skill.findById(id);
            if (!skill) {
                return Response.json(
                    { success: false, error: 'Skill not found' },
                    { status: 404 }
                );
            }
            return Response.json({ success: true, data: skill });
        }

        let query = {};
        if (category) {
            query.category = category;
        }

        const skills = await Skill.find(query).sort({ order: 1, name: 1 });
        return Response.json({ success: true, data: skills });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new skill
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const skill = await Skill.create(body);

        return Response.json(
            { success: true, data: skill },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update skill
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
        const skill = await Skill.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!skill) {
            return Response.json(
                { success: false, error: 'Skill not found' },
                { status: 404 }
            );
        }

        return Response.json({ success: true, data: skill });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE skill
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

        const skill = await Skill.findByIdAndDelete(id);

        if (!skill) {
            return Response.json(
                { success: false, error: 'Skill not found' },
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
