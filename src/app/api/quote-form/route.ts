import { NextResponse } from 'next/server';
import { checkRateLimit, sanitizeInput, isValidEmail, getClientIp } from '@/lib/security';

export async function POST(request: Request) {
  try {
    // 1. Rate limiting (max 10 requests per minute per IP)
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`quote_${ip}`, 10, 60);

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
    const companyName = sanitizeInput(body.companyName, 120);
    const contactName = sanitizeInput(body.contactName, 120);
    const email = sanitizeInput(body.email, 150);
    const phone = sanitizeInput(body.phone, 30);
    const checkType = sanitizeInput(body.checkType, 80);
    const estimatedVolume = sanitizeInput(body.estimatedVolume, 50);

    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { success: false, error: 'Company name, contact name, and email are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Log securely without exposing full headers
    console.log('Received sanitized quote request for:', {
      companyName,
      contactName,
      email: email.replace(/(.{2})(.*)(?=@)/, '$1***'), // Partial mask for privacy
      phone: phone ? `${phone.slice(0, 3)}***` : undefined,
      checkType,
      estimatedVolume,
    });

    return NextResponse.json(
      { success: true, message: 'Quote enquiry received successfully.' },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error('Quote form API error occurred:', error instanceof Error ? error.message : 'Unknown');
    return NextResponse.json(
      { success: false, error: 'Internal server error processing quote request.' },
      { status: 500 }
    );
  }
}
