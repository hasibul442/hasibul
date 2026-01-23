import mongoose from 'mongoose';

const GithubSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please provide a GitHub username'],
            trim: true,
        },
        public_repos: {
            type: Number,
            default: 0,
        },
        total_stars: {
            type: Number,
            default: 0,
        },
        followers: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Github || mongoose.model('Github', GithubSchema);