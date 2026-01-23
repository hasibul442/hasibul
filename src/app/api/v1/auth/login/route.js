import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

// POST login user
export async function POST(request) {
    try {
        await connectDB();

        const { email, password } = await request.json();

        if (!email || !password) {
            return Response.json(
                { success: false, error: 'Please provide email and password' },
                { status: 400 }
            );
        }

        // Find user with password field
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return Response.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return Response.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Return user without password
        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
        };

        return Response.json({
            success: true,
            data: userResponse,
            message: 'Login successful',
        });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
