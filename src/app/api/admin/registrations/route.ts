import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Registration from '@/models/Registration';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const registrations = await Registration.find({});
    return NextResponse.json({ registrations }, { status: 200 });
  } catch (error) {
    console.error('Admin registrations API error:', error);
    return NextResponse.json({ message: 'Failed to fetch registrations', error: (error as Error).message }, { status: 500 });
  }
}