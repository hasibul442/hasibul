import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

// POST register new user
export async function POST(request) {
    try {
        await connectDB();

        const { name, email, password, role } = await request.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return Response.json(
                { success: false, error: 'User already exists with this email' },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || 'user',
        });

        // Return user without password
        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
        };

        return Response.json(
            { success: true, data: userResponse },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}
