import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true,
        },
        position: {
            type: String,
            required: [true, 'Please provide a position'],
            trim: true,
        },
        company: {
            type: String,
            trim: true,
        },
        testimonial: {
            type: String,
            required: [true, 'Please provide a testimonial'],
            trim: true,
        },
        avatar: {
            type: String,
            trim: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            default: 5,
        },
        order: {
            type: Number,
            default: 0,
        },
        is_show: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
