import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/photographers.json");

function loadPhotographers() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function savePhotographers(data: unknown[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, token, name, bio, specialties, style, tier, website, imageUrl, gallery } =
      body;

    if (!slug || !token) {
      return NextResponse.json(
        { error: "Missing slug or token" },
        { status: 400 }
      );
    }

    const photographers = loadPhotographers();
    const index = photographers.findIndex(
      (p: { slug: string; editToken: string }) =>
        p.slug === slug && p.editToken === token
    );

    if (index === -1) {
      return NextResponse.json(
        { error: "Invalid token or photographer not found" },
        { status: 403 }
      );
    }

    const photographer = photographers[index];

    if (name !== undefined) photographer.name = name;
    if (bio !== undefined) photographer.bio = bio;
    if (website !== undefined) photographer.website = website;
    if (imageUrl !== undefined) photographer.imageUrl = imageUrl;
    if (gallery !== undefined) photographer.gallery = gallery;
    if (tier !== undefined) {
      const validTiers = ["FREE", "PRO", "FEATURED"];
      if (validTiers.includes(tier)) photographer.tier = tier;
    }
    if (specialties !== undefined) {
      const parsed = Array.isArray(specialties)
        ? specialties
        : specialties
            .split(",")
            .map((s: string) => s.trim())
            .filter(Boolean);
      // If style is provided, make it the first specialty
      if (style && parsed[0] !== style) {
        const filtered = parsed.filter((s: string) => s !== style);
        photographer.specialties = [style, ...filtered];
      } else {
        photographer.specialties = parsed;
      }
    } else if (style !== undefined) {
      // Style changed but specialties weren't — update first entry
      const existing = [...(photographer.specialties || [])];
      if (existing.length > 0) existing[0] = style;
      else existing.push(style);
      photographer.specialties = existing;
    }

    photographers[index] = photographer;
    savePhotographers(photographers);

    return NextResponse.json({ success: true, photographer });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const token = searchParams.get("token");

  if (!slug || !token) {
    return NextResponse.json(
      { error: "Missing slug or token" },
      { status: 400 }
    );
  }

  const photographers = loadPhotographers();
  const photographer = photographers.find(
    (p: { slug: string; editToken: string }) =>
      p.slug === slug && p.editToken === token
  );

  if (!photographer) {
    return NextResponse.json(
      { error: "Invalid token or photographer not found" },
      { status: 403 }
    );
  }

  const { editToken: _t, ...safe } = photographer;
  return NextResponse.json({ photographer: safe });
}
