import { NextResponse } from 'next/server';

type FormBody = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  message?: string;
};

export async function POST(request: Request) {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  if (!webhook) {
    return NextResponse.json(
      { ok: false, error: 'Form endpoint is not configured' },
      { status: 500 }
    );
  }

  let body: FormBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  if (body.type === 'contact') {
    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }
  } else if (body.type === 'anonymous') {
    if (!body.message?.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Message is required' },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json({ ok: false, error: 'Unknown form type' }, { status: 400 });
  }

  const payload =
    body.type === 'contact'
      ? {
          type: 'contact',
          name: body.name?.trim() ?? '',
          email: body.email?.trim() ?? '',
          phone: body.phone?.trim() ?? '',
          role: body.role?.trim() ?? '',
          message: body.message?.trim() ?? '',
          source: 'website',
        }
      : {
          type: 'anonymous',
          message: body.message?.trim() ?? '',
          source: 'website',
        };

  try {
    const sheetRes = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const text = await sheetRes.text();
    let data: { ok?: boolean; error?: string } = {};
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { ok: false, error: 'Unexpected response from Google Sheets' },
        { status: 502 }
      );
    }

    if (!sheetRes.ok || !data.ok) {
      return NextResponse.json(
        { ok: false, error: data.error || 'Failed to save to sheet' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Could not reach Google Sheets' },
      { status: 502 }
    );
  }
}
