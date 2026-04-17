// import { NextRequest, NextResponse } from "next/server";
// import {
//   getFAQGroupById,
//   updateFAQGroup,
//   deleteFAQGroup,
// } from "@/lib/blog-store";

// type Params = { params: { id: string } };

// export async function GET(_req: NextRequest, { params }: Params) {
//   const group = getFAQGroupById(params.id);
//   if (!group) {
//     return NextResponse.json({ error: "FAQ group not found" }, { status: 404 });
//   }
//   return NextResponse.json({ group });
// }

// export async function PUT(req: NextRequest, { params }: Params) {
//   try {
//     const body = await req.json();
//     const group = updateFAQGroup(params.id, body);
//     if (!group) {
//       return NextResponse.json(
//         { error: "FAQ group not found" },
//         { status: 404 },
//       );
//     }
//     return NextResponse.json({ group });
//   } catch {
//     return NextResponse.json(
//       { error: "Failed to update FAQ group" },
//       { status: 500 },
//     );
//   }
// }

// export async function DELETE(_req: NextRequest, { params }: Params) {
//   const deleted = deleteFAQGroup(params.id);
//   if (!deleted) {
//     return NextResponse.json({ error: "FAQ group not found" }, { status: 404 });
//   }
//   return NextResponse.json({ success: true });
// }

import { NextRequest, NextResponse } from "next/server";
import {
  getFAQGroupById,
  updateFAQGroup,
  deleteFAQGroup,
} from "@/lib/blog-store";

// ✅ Updated type
type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;

  const group = getFAQGroupById(id);
  if (!group) {
    return NextResponse.json({ error: "FAQ group not found" }, { status: 404 });
  }

  return NextResponse.json({ group });
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;

  try {
    const body = await req.json();
    const group = updateFAQGroup(id, body);

    if (!group) {
      return NextResponse.json(
        { error: "FAQ group not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ group });
  } catch {
    return NextResponse.json(
      { error: "Failed to update FAQ group" },
      { status: 500 },
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { id } = await params;

  const deleted = deleteFAQGroup(id);
  if (!deleted) {
    return NextResponse.json({ error: "FAQ group not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
