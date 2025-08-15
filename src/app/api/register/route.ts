import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect'; // Import dbConnect
import Registration from '@/models/Registration'; // Import Registration model

export async function POST(req: NextRequest) {
    await dbConnect(); // Connect to the database

    try {
        const data = await req.json();

        // Create a new registration document
        const newRegistration = await Registration.create(data);

        return NextResponse.json({ message: 'Registration successful!', registration: newRegistration }, { status: 200 });
    } catch (error) {
        console.error('Registration API error:', error);

        return NextResponse.json({ message: 'Registration failed.', error: (error as Error).message }, { status: 500 });
    }
}