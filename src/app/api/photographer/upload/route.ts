import { NextRequest, NextResponse } from "next/server";
import photographersData from "@/data/photographers.json";
import { uploadImage } from "@/lib/photographer-store";

interface PhotographerBase {
  slug: string;
  editToken?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const slug = formData.get("slug") as string;
    const token = formData.get("token") as string;
    const file = formData.get("file") as File | null;
    const purpose = (formData.get("purpose") as string) || "gallery";

    if (!slug || !token || !file) {
      return NextResponse.json(
        { error: "Missing slug, token, or file" },
        { status: 400 }
      );
    }

    const photographer = (photographersData as PhotographerBase[]).find(
      (p) => p.slug === slug && p.editToken === token
    );
    if (!photographer) {
      return NextResponse.json(
        { error: "Invalid token or photographer not found" },
        { status: 403 }
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

    const url = await uploadImage(slug, file, purpose);
    return NextResponse.json({ success: true, url });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
