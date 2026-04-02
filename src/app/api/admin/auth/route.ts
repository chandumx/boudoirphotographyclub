import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = "admin123";

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
  const { password } = body;

  if (password && password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("admin_session");
  return response;
}
