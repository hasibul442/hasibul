import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';
import { uploadToCloudinary, deleteFromCloudinary } from '@/lib/cloudinary';

// GET all projects or single project by ID
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const featured = searchParams.get('featured');

        if (id) {
            const project = await Project.findById(id);
            if (!project) {
                return NextResponse.json(
                    { success: false, error: 'Project not found' },
                    { status: 404 }
                );
            }
            return NextResponse.json({ success: true, data: project });
        }

        let query = {};
        if (featured === 'true') {
            query.featured = true;
        }

        const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create new project
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const projectData = { ...body };

        // Upload base64 image to Cloudinary if provided
        if (body.image && body.image.startsWith('data:image')) {
            // Convert base64 to buffer
            const base64Data = body.image.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const imageUrl = await uploadToCloudinary(buffer, 'portfolio/projects');
            projectData.image = imageUrl;
        }

        const project = await Project.create(projectData);

        return NextResponse.json(
            { success: true, data: project },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// PUT update project
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
        const projectData = { ...body };

        // Get existing project to check for old image
        const existingProject = await Project.findById(id);
        if (!existingProject) {
            return NextResponse.json(
                { success: false, error: 'Project not found' },
                { status: 404 }
            );
        }

        // Upload new base64 image to Cloudinary if provided
        if (body.image && body.image.startsWith('data:image')) {
            // Convert base64 to buffer
            const base64Data = body.image.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const imageUrl = await uploadToCloudinary(buffer, 'portfolio/projects');
            
            // Delete old image from Cloudinary
            if (existingProject.image) {
                await deleteFromCloudinary(existingProject.image);
            }
            
            projectData.image = imageUrl;
        }

        const project = await Project.findByIdAndUpdate(id, projectData, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({ success: true, data: project });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

// DELETE project
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

        const project = await Project.findById(id);

        if (!project) {
            return NextResponse.json(
                { success: false, error: 'Project not found' },
                { status: 404 }
            );
        }

        // Delete image from Cloudinary
        if (project.image) {
            await deleteFromCloudinary(project.image);
        }

        await Project.findByIdAndDelete(id);

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
