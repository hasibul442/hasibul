import mongoose from 'mongoose';

const LanguageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a language name'],
            trim: true,
        },
        version: {
            type: String,
        },
        types: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Language || mongoose.model('Language', LanguageSchema);