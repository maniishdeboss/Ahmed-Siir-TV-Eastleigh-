import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { amount, msisdn, account_no } = await request.json();

    if (!process.env.TINYPESA_API_KEY) {
      return NextResponse.json({ success: false, message: "TINYPESA_API_KEY missing in Vercel" }, { status: 500 });
    }

    // TinyPesa wuxuu rabaa 254...
    let phone = msisdn.toString().trim();
    if (phone.startsWith('0')) phone = '254' + phone.slice(1);
    if (phone.startsWith('+')) phone = phone.slice(1);

    const res = await fetch('https://tinypesa.com/api/v1/express/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Apikey': process.env.TINYPESA_API_KEY // <-- muhiim
      },
      body: JSON.stringify({
        amount: Number(amount),
        msisdn: phone,
        account_no: account_no || "AHMED_TV"
      })
    });

    const data = await res.json();
    console.log("TinyPesa Response:", data);
    return NextResponse.json(data, { status: res.status });

  } catch (error: any) {
    console.error("TinyPesa STK Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
