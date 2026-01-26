import mongoose from 'mongoose';

const CertificationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
        },
        issuer: {
            type: String,
            required: [true, 'Please provide an issuer'],
            trim: true,
        },
        issueDate: {
            type: Date,
            required: [true, 'Please provide an issue date'],
        },
        expirationDate: {
            type: Date,
        },
        credentialID: {
            type: String,
            trim: true,
        },
        credentialURL: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        image : {
            type: String,
            trim: true,
        },
        status: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Certification || mongoose.model('Certification', CertificationSchema);