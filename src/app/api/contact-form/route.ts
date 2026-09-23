import { NextResponse } from 'next/server';
import { checkRateLimit, sanitizeInput, isValidEmail, getClientIp } from '@/lib/security';

export async function POST(request: Request) {
  try {
    // 1. Rate limiting (max 10 requests per minute per IP)
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`contact_${ip}`, 10, 60);

    if (!rateLimit.success) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait a minute and try again.' },
        {
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    // 2. Parse and validate payload
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid payload structure.' },
        { status: 400 }
      );
    }

    // 3. Sanitize inputs
    const name = sanitizeInput(body.name, 120);
    const email = sanitizeInput(body.email, 150);
    const phone = sanitizeInput(body.phone, 30);
    const message = sanitizeInput(body.message, 2500);

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    console.log('Received sanitized contact message from:', {
      name,
      email: email.replace(/(.{2})(.*)(?=@)/, '$1***'),
      phone,
      messageLength: message.length,
    });

    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error('Contact form API error occurred:', error instanceof Error ? error.message : 'Unknown');
    return NextResponse.json(
      { success: false, error: 'Internal server error processing submission.' },
      { status: 500 }
    );
  }
}
