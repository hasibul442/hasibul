import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
        },
        slug: {
            type: String,
            required: [true, 'Please provide a slug'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        excerpt: {
            type: String,
            trim: true,
        },
        content: {
            type: String,
            required: [true, 'Please provide content'],
        },
        author: {
            type: String,
            trim: true,
        },
        coverImage: {
            type: String,
            trim: true,
        },
        tags: [
            {
                type: String,
                trim: true,
            },
        ],
        published: {
            type: Boolean,
            default: false,
        },
        views: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
