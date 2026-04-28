import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

import CryptoJS from "crypto-js";

function hashData(data: string) {
  return CryptoJS.SHA256(data.trim().toLowerCase()).toString();
}

// POST: Create Lead
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, company, eventId } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 },
      );
    }

    const docRef = await addDoc(collection(db, "leads"), {
      name,
      email,
      company: company || "",
      phone: phone || "",
      event_id: eventId,
      service: service || "General Inquiry",
      message: message || "",
      status: "new",
      createdAt: Timestamp.now(),
    });

    const metaPayload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_id: eventId, // ✅ ADD THIS
          user_data: {
            em: [hashData(email)],
            ph: [hashData(phone.replace(/\s+/g, ""))], // also fixed
          },
        },
      ],
    };

    await fetch(
      `https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_META_PIXEL_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(metaPayload),
      },
    );

    return NextResponse.json(
      { message: "Lead saved successfully", id: docRef.id },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET: Fetch Leads (sorted latest first)
export async function GET() {
  try {
    const leadsRef = collection(db, "leads");
    const q = query(leadsRef, orderBy("createdAt", "desc")); // 🔥 sorted

    const snapshot = await getDocs(q);

    const leads = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt?.toDate().toLocaleString() || "",
    }));

    return NextResponse.json(leads, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH: Update Lead Status
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "ID and status are required" },
        { status: 400 },
      );
    }

    const leadRef = doc(db, "leads", id);

    await updateDoc(leadRef, {
      status,
    });

    return NextResponse.json(
      { message: "Status updated successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
