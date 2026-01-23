import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
        },
        company: {
            type: String,
            required: [true, 'Please provide a company name'],
            trim: true,
        },
        location: {
            type: String,
            trim: true,
        },
        startDate: {
            type: Date,
            required: [true, 'Please provide a start date'],
        },
        endDate: {
            type: Date,
        },
        current: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
            trim: true,
        },
        technologies: [
            {
                type: String,
                trim: true,
            },
        ],
        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
