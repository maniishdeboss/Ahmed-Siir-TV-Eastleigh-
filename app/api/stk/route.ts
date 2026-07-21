import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, msisdn, account_no } = body;

    const url = "https://backend.payhero.co.ke/api/v2/payments";
    
    const channelId = process.env.PAYHERO_CHANNEL_ID;
    const authToken = process.env.PAYHERO_API_TOKEN;

    if (!channelId || !authToken) {
      return NextResponse.json(
        { success: false, message: "Pay Hero configuration is missing on server." },
        { status: 500 }
      );
    }

    const payload = {
      amount: amount,
      phone_number: msisdn,
      channel_id: Number(channelId),
      provider: "mpesa",
      external_reference: account_no || "AhmedLiveTV",
      callback_url: "https://ahmed-sports-live-website-rnir90qtw.vercel.app/api/callback"
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authToken
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });

  } catch (error: any) {
    console.error("Pay Hero STK Error:", error);
    return NextResponse.json(
      { success: false, message: `Server error: ${error.message}` }, 
      { status: 500 }
    );
  }
}
