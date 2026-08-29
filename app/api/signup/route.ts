import { NextRequest, NextResponse } from 'next/server';
import { addSignup } from '@/lib/db';
import { trackEvent } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, role } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Sanitize
    const cleanEmail = email.trim().toLowerCase();
    const validRoles = ['student', 'parent', 'mentor'];
    const cleanRole = validRoles.includes(role) ? role : 'student';

    // Store signup
    addSignup(cleanEmail, cleanRole);

    // Track conversion event
    trackEvent('signup', { email: cleanEmail, role: cleanRole }, request.headers.get('referer') || undefined);

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll email you the moment mentor booking opens."
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
