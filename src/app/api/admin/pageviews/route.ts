import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import PageView from '@/models/PageView';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const pageViews = await PageView.find({});
    return NextResponse.json({ pageViews }, { status: 200 });
  } catch (error) {
    console.error('Admin page views API error:', error);
    return NextResponse.json({ message: 'Failed to fetch page views', error: (error as Error).message }, { status: 500 });
  }
}