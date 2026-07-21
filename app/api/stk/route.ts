import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, msisdn, account_no } = body;

    const apiKey = process.env.TINYPESA_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "TINYPESA_API_KEY is missing in Vercel." },
        { status: 500 }
      );
    }

    const response = await fetch("https://tinypesa.com/api/v1/express/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ApiKey": apiKey,
        "Accept": "application/json"
      },
      body: JSON.stringify({ amount, msisdn, account_no }),
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: `TinyPesa Error (${response.status}): ${JSON.stringify(data)}` },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: `Server Exception: ${error.message}` }, 
      { status: 500 }
    );
  }
}
