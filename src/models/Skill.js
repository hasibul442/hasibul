import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a skill name'],
            trim: true,
        },
        category: {
            type: String,
            required: [true, 'Please provide a category'],
            trim: true,
            enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other'],
        },
        level: {
            type: String,
            enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
            default: 'Intermediate',
        },
        icon: {
            type: String,
            trim: true,
        },
        order: {
            type: Number,
            default: 0,
        },
        orbit: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
