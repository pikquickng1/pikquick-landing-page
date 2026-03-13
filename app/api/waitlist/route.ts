import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { waitlistSchema } from '@/lib/validations/waitlist';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input with Zod
    const validatedData = waitlistSchema.parse(body);

    // Check honeypot field - if filled, it's likely a bot
    if (validatedData.website && validatedData.website.length > 0) {
      // Silently reject bot submissions
      return NextResponse.json(
        { message: 'Successfully joined the waitlist' },
        { status: 200 }
      );
    }

    // Get user agent for tracking
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Get referrer for source tracking
    const referrer = request.headers.get('referer') || request.headers.get('referrer');
    const source = validatedData.source || referrer || 'direct';

    // Initialize Supabase admin client
    const supabase = getSupabaseAdmin();

    // Insert into waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert({
        full_name: validatedData.fullName,
        email: validatedData.email,
        phone_number: validatedData.phoneNumber || null,
        interest: validatedData.interest,
        source,
        user_agent: userAgent,
        utm_source: validatedData.utmSource || null,
        utm_medium: validatedData.utmMedium || null,
        utm_campaign: validatedData.utmCampaign || null,
      })
      .select()
      .single();

    // Handle duplicate email error
    if (error) {
      // PostgreSQL unique constraint violation code
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You are already on the waitlist' },
          { status: 409 }
        );
      }

      // Log error for debugging (in production, use proper logging service)
      console.error('Supabase error:', error);

      return NextResponse.json(
        { message: 'Failed to join waitlist. Please try again later.' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        message: 'Successfully joined the waitlist',
        data: {
          id: data.id,
          email: data.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const firstError = error.errors[0];
      return NextResponse.json(
        { message: firstError.message || 'Invalid form submission' },
        { status: 400 }
      );
    }

    // Handle missing environment variables
    if (error instanceof Error && error.message.includes('Missing Supabase')) {
      console.error('Configuration error:', error.message);
      return NextResponse.json(
        { message: 'Service configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Generic error handler
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint for health check
export async function GET() {
  return NextResponse.json(
    { status: 'ok', message: 'Waitlist API is running' },
    { status: 200 }
  );
}
