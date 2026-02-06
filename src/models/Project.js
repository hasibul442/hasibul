import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please provide a description'],
            trim: true,
        },
        longDescription: {
            type: String,
            trim: true,
        },
        technologies: [
            {
                type: String,
                trim: true,
            },
        ],
        image: {
            type: String,
            trim: true,
        },
        liveUrl: {
            type: String,
            trim: true,
        },
        githubUrl: {
            type: String,
            trim: true,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        order: {
            type: Number,
            default: 0,
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
