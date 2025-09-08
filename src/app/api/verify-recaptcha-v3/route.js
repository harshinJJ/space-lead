import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { token, action } = await req.json();

    const secret = process.env.RECAPTCHA_V3_SECRET_KEY;

    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: "POST" }
    );

    const data = await verifyRes.json();

    return NextResponse.json({
      success: data.success,
      score: data.score,
      action: data.action || action,
      challenge_ts: data.challenge_ts,
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
