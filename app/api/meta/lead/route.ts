import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PIXEL_ID = process.env.META_PIXEL_ID!;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN!;

function hashData(data: string) {
  return crypto
    .createHash("sha256")
    .update(data.trim().toLowerCase())
    .digest("hex");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, phone } = body;

    const payload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          user_data: {
            em: email ? [hashData(email)] : undefined,
            ph: phone ? [hashData(phone)] : undefined,
          },
          custom_data: {
            event_source: "website",
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
