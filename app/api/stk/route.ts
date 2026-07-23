import { NextResponse } from 'next/server';

// Test - haddii aad browser ka gasho /api/stk waa inuu ku yiraa API is working
export async function GET() {
  return NextResponse.json({ message: "TinyPesa STK API is working - use POST" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, msisdn, account_no } = body;

    console.log("Incoming:", body);

    if (!process.env.TINYPESA_API_KEY) {
      return NextResponse.json({ success: false, message: "TINYPESA_API_KEY missing in Vercel" }, { status: 500 });
    }

    let phone = msisdn.toString().trim();
    if (phone.startsWith('0')) phone = '254' + phone.slice(1);
    if (phone.startsWith('+')) phone = phone.slice(1);

    const res = await fetch('https://tinypesa.com/api/v1/express/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Apikey': process.env.TINYPESA_API_KEY,
      },
      body: JSON.stringify({
        amount: Number(amount),
        msisdn: phone,
        account_no: account_no || `AHMED_${Date.now()}`,
      }),
    });

    const data = await res.json();
    console.log("TinyPesa:", data);
    return NextResponse.json(data, { status: res.status });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
