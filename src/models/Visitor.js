import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema(
    {
        visitorId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        visitCount: {
            type: Number,
            default: 1,
        },
        firstVisit: {
            type: Date,
            default: Date.now,
        },
        lastVisit: {
            type: Date,
            default: Date.now,
        },
        ipAddress: {
            type: String,
        },
        userAgent: {
            type: String,
        },
        visits: [{
            timestamp: {
                type: Date,
                default: Date.now,
            },
            page: {
                type: String,
            },
            referrer: {
                type: String,
            }
        }]
    },
    {
        timestamps: true,
    }
);

// Create indexes for better query performance
VisitorSchema.index({ lastVisit: -1 });
VisitorSchema.index({ visitCount: -1 });

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
