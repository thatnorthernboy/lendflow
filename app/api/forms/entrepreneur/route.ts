import { NextRequest, NextResponse } from 'next/server';
import { entrepreneurSchema } from '@/lib/validation';
import { airtableCreate } from '@/lib/airtable';

async function verifyHCaptcha(token?: string) {
  const secret = process.env.HCAPTCHA_SECRET;
  if (!secret || !token) return true;
  try {
    const res = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token })
    });
    const data = await res.json();
    return !!data.success;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = entrepreneurSchema.parse(body);

    const ok = await verifyHCaptcha(parsed.hcaptcha_token);
    if (!ok) return NextResponse.json({ok:false, error:'Captcha failed'}, {status: 400});

    const fields = {
      name: parsed.name,
      business_type: parsed.business_type,
      city: parsed.city,
      funding_need: parsed.funding_need,
      whatsapp: parsed.whatsapp || '',
      status: 'New',
      timestamp: new Date().toISOString()
    };

    await airtableCreate(process.env.AIRTABLE_ENTREPRENEURS_TABLE || 'Entrepreneurs', fields);
    return NextResponse.json({ok:true});
  } catch (err: any) {
    return NextResponse.json({ok:false, error: err.message}, {status: 400});
  }
}
