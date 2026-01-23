import { NextResponse } from 'next/server';

// Catch-all route for any unmatched API endpoints
export async function GET(request) {
    return NextResponse.json(
        {
            success: false,
            error: 'API endpoint not found',
            message: 'The requested API endpoint does not exist',
            path: request.url
        },
        { status: 404 }
    );
}

export async function POST(request) {
    return NextResponse.json(
        {
            success: false,
            error: 'API endpoint not found',
            message: 'The requested API endpoint does not exist',
            path: request.url
        },
        { status: 404 }
    );
}

export async function PUT(request) {
    return NextResponse.json(
        {
            success: false,
            error: 'API endpoint not found',
            message: 'The requested API endpoint does not exist',
            path: request.url
        },
        { status: 404 }
    );
}

export async function DELETE(request) {
    return NextResponse.json(
        {
            success: false,
            error: 'API endpoint not found',
            message: 'The requested API endpoint does not exist',
            path: request.url
        },
        { status: 404 }
    );
}

export async function PATCH(request) {
    return NextResponse.json(
        {
            success: false,
            error: 'API endpoint not found',
            message: 'The requested API endpoint does not exist',
            path: request.url
        },
        { status: 404 }
    );
}
