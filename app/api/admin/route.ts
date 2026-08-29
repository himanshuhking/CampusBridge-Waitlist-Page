import { NextRequest, NextResponse } from 'next/server';
import { getAllSignups, getEventCounts } from '@/lib/db';

export async function GET(request: NextRequest) {
  // Simple protection: only allow from localhost or with a basic token
  const host = request.headers.get('host') || '';
  const isLocal = host.includes('localhost') || host.includes('127.0.0.1');

  const token = request.nextUrl.searchParams.get('token');
  const expectedToken = process.env.ADMIN_TOKEN;

  if (!isLocal && (!expectedToken || token !== expectedToken)) {
    return NextResponse.json(
      { error: 'Unauthorized. Provide ?token=your_admin_token or access from localhost.' },
      { status: 401 }
    );
  }

  const signups = getAllSignups();
  const eventCounts = getEventCounts();

  return NextResponse.json({
    total_signups: signups.length,
    signups,
    event_counts: eventCounts,
  });
}
