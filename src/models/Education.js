import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema(
    {
        degree: {
            type: String,
            required: [true, 'Please provide a degree'],
            trim: true,
        },
        institution: {
            type: String,
            required: [true, 'Please provide an institution'],
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
        grade: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Education || mongoose.model('Education', EducationSchema);
