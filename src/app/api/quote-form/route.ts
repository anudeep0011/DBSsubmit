import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactName, email, phone, checkType, estimatedVolume } = body;

    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { success: false, error: 'Company name, contact name, and email are required.' },
        { status: 400 }
      );
    }

    console.log('Received quote form submission:', {
      companyName,
      contactName,
      email,
      phone,
      checkType,
      estimatedVolume,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote form API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing quote request.' },
      { status: 500 }
    );
  }
}
