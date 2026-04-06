import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public/uploads/photographers");

function isAdmin(request: NextRequest) {
  return request.cookies.get("admin_session")?.value === "authenticated";
}

export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const slug = formData.get("slug") as string;
    const file = formData.get("file") as File | null;
    const purpose = (formData.get("purpose") as string) || "gallery";

    if (!slug || !file) {
      return NextResponse.json(
        { error: "Missing slug or file" },
        { status: 400 }
      );
    }

    const allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json(
        { error: "Only JPEG, PNG, WebP, and AVIF images are allowed" },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be under 10MB" },
        { status: 400 }
      );
    }

    const slugDir = path.join(UPLOAD_DIR, slug);
    fs.mkdirSync(slugDir, { recursive: true });

    const ext = file.name.split(".").pop() || "jpg";
    const filename = `${purpose}-${crypto.randomBytes(6).toString("hex")}.${ext}`;
    const filepath = path.join(slugDir, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filepath, buffer);

    const publicUrl = `/uploads/photographers/${slug}/${filename}`;

    return NextResponse.json({ success: true, url: publicUrl });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
