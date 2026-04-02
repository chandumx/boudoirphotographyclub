import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, city, state } = body;

    if (!name || !email || !city || !state) {
      return NextResponse.json(
        { error: "Name, email, city, and state are required" },
        { status: 400 }
      );
    }

    // TODO: Save to database when connected
    // For now, log the submission
    console.log("New photographer submission:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
