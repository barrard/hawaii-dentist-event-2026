import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import PageView from '@/models/PageView';

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { url, userId } = await req.json(); // Destructure userId
    const ipAddress = req.headers.get('x-forwarded-for'); // Get IP address
    const userAgent = req.headers.get('user-agent'); // Get User-Agent header

    if (!url) {
      return NextResponse.json({ message: 'URL is required' }, { status: 400 });
    }

    const newPageView = await PageView.create({
      url,
      ipAddress,
      userAgent,
    });

    return NextResponse.json({ message: 'Page view recorded', pageView: newPageView }, { status: 200 });
  } catch (error) {
    console.error('Page view tracking API error:', error);
    return NextResponse.json({ message: 'Failed to record page view', error: (error as Error).message }, { status: 500 });
  }
}