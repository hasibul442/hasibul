import connectDB from '@/lib/mongodb';
import Github from '@/models/Github';

// GET github data
export async function GET(request) {
    try {
        await connectDB();

        const githubData = await Github.findOne({});
        if (!githubData) {
            return Response.json(
                { success: false, error: 'Github data not found' },
                { status: 404 }
            );
        }
        return Response.json({ success: true, data: githubData });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

// POST create or update github data
export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        let githubData = await Github.findOne({});

        if (githubData) {
            // Update existing github data
            githubData.username = body.username || githubData.username;
            githubData.public_repos = body.public_repos || githubData.public_repos;
            githubData.total_stars = body.total_stars || githubData.total_stars;
            await githubData.save();
        } else {
            // Create new github data
            githubData = await Github.create(body);
        }

        return Response.json(
            { success: true, data: githubData },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}