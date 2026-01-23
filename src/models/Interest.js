import mongoose from 'mongoose';

const InterestSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        icon: {
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

export default mongoose.models.Interest || mongoose.model('Interest', InterestSchema);
