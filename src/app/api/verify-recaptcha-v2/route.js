import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { token } = await req.json();

    const secret = process.env.RECAPTCHA_V2_SECRET_KEY;

    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: "POST" }
    );

    const data = await verifyRes.json();

    return NextResponse.json({
      success: data.success,
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
