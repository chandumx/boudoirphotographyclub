import { NextRequest, NextResponse } from "next/server";
import photographersData from "@/data/photographers.json";
import {
  getOverride,
  saveOverride,
  getPhotographerWithOverrides,
} from "@/lib/photographer-store";

interface PhotographerBase {
  slug: string;
  editToken?: string;
  specialties?: string[];
  [key: string]: unknown;
}

function validateToken(slug: string, token: string) {
  return (photographersData as PhotographerBase[]).find(
    (p) => p.slug === slug && p.editToken === token
  );
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

  if (!validateToken(slug, token)) {
    return NextResponse.json(
      { error: "Invalid token or photographer not found" },
      { status: 403 }
    );
  }

  const photographer = await getPhotographerWithOverrides(slug);
  if (!photographer) {
    return NextResponse.json(
      { error: "Photographer not found" },
      { status: 404 }
    );
  }

  // Strip editToken from response
  const { editToken: _t, ...safe } = photographer;
  return NextResponse.json({ photographer: safe });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, token, name, bio, specialties, style, tier, website, imageUrl, gallery } = body;

    if (!slug || !token) {
      return NextResponse.json(
        { error: "Missing slug or token" },
        { status: 400 }
      );
    }

    const base = validateToken(slug, token);
    if (!base) {
      return NextResponse.json(
        { error: "Invalid token or photographer not found" },
        { status: 403 }
      );
    }

    const existing: import("@/lib/photographer-store").PhotographerOverride =
      (await getOverride(slug)) || { slug, updatedAt: "" };

    if (name !== undefined) existing.name = name;
    if (bio !== undefined) existing.bio = bio;
    if (website !== undefined) existing.website = website;
    if (imageUrl !== undefined) existing.imageUrl = imageUrl;
    if (gallery !== undefined) existing.gallery = gallery;

    if (tier !== undefined) {
      const validTiers = ["FREE", "PRO", "FEATURED"];
      if (validTiers.includes(tier)) existing.tier = tier;
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
        existing.specialties = [style, ...filtered];
      } else {
        existing.specialties = parsed;
      }
    } else if (style !== undefined) {
      const current = existing.specialties || base.specialties || [];
      const copy = [...current];
      if (copy.length > 0) copy[0] = style;
      else copy.push(style);
      existing.specialties = copy;
    }

    existing.updatedAt = new Date().toISOString();
    await saveOverride(existing);

    const merged = await getPhotographerWithOverrides(slug);
    return NextResponse.json({ success: true, photographer: merged });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
