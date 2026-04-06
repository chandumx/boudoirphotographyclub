import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/photographers.json");

function isAdmin(request: NextRequest) {
  return request.cookies.get("admin_session")?.value === "authenticated";
}

function loadPhotographers() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function savePhotographers(data: unknown[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

// GET: load photographer data by slug (admin-only, no token needed)
export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const photographers = loadPhotographers();
  const photographer = photographers.find(
    (p: { slug: string }) => p.slug === slug
  );

  if (!photographer) {
    return NextResponse.json(
      { error: "Photographer not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ photographer });
}

// POST: save photographer data (admin-only, no token needed)
export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      slug,
      name,
      bio,
      specialties,
      style,
      tier,
      website,
      imageUrl,
      gallery,
    } = body;

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const photographers = loadPhotographers();
    const index = photographers.findIndex(
      (p: { slug: string }) => p.slug === slug
    );

    if (index === -1) {
      return NextResponse.json(
        { error: "Photographer not found" },
        { status: 404 }
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
      if (style && parsed[0] !== style) {
        const filtered = parsed.filter((s: string) => s !== style);
        photographer.specialties = [style, ...filtered];
      } else {
        photographer.specialties = parsed;
      }
    } else if (style !== undefined) {
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
