import { NextRequest, NextResponse } from 'next/server';
import { trackEvent } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event_type, event_data } = body;

    if (!event_type || typeof event_type !== 'string') {
      return NextResponse.json(
        { error: 'Event type is required' },
        { status: 400 }
      );
    }

    trackEvent(event_type, event_data, request.headers.get('referer') || undefined);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}
