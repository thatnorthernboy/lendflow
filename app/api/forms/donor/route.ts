import { NextRequest, NextResponse } from 'next/server';
import { donorSchema } from '@/lib/validation';
import { airtableCreate } from '@/lib/airtable';

async function verifyHCaptcha(token?: string) {
  const secret = process.env.HCAPTCHA_SECRET;
  if (!secret || !token) return true; // allow if not configured during dev
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
    const parsed = donorSchema.parse(body);

    const ok = await verifyHCaptcha(parsed.hcaptcha_token);
    if (!ok) return NextResponse.json({ok:false, error:'Captcha failed'}, {status: 400});

    const fields = {
      name: parsed.name,
      email: parsed.email,
      city: parsed.city,
      amount_range: parsed.amount_range,
      whatsapp: parsed.whatsapp || '',
      source: 'landing',
      timestamp: new Date().toISOString()
    };

    await airtableCreate(process.env.AIRTABLE_DONORS_TABLE || 'Donors', fields);

    // Optional: upsert Brevo contact (server-side)
    if (process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID) {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: parsed.email,
          attributes: { FIRSTNAME: parsed.name, CITY: parsed.city, WHATSAPP: parsed.whatsapp || '' },
          listIds: [Number(process.env.BREVO_LIST_ID)],
          updateEnabled: true
        })
      }).catch(()=>{});
    }

    return NextResponse.json({ok:true});
  } catch (err: any) {
    return NextResponse.json({ok:false, error: err.message}, {status: 400});
  }
}
