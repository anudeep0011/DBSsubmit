import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Serverless handler logic (e.g. Resend / SendGrid email dispatch)
    // If RESEND_API_KEY is configured in env, dispatch email here.
    console.log('Received contact form submission:', { name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing submission.' },
      { status: 500 }
    );
  }
}
