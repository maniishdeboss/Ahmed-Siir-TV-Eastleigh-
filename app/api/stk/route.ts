import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, msisdn, account_no } = body;

    const apiKey = process.env.TINYPESA_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Server Error: TINYPESA_API_KEY is missing in Vercel Environment Variables." },
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

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("Detailed Proxy STK Error:", error);
    return NextResponse.json(
      { success: false, message: `Server error: ${error.message || "Unknown error"}` }, 
      { status: 500 }
    );
  }
}
