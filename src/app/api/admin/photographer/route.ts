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
  [key: string]: unknown;
}

function isAdmin(request: NextRequest) {
  return request.cookies.get("admin_session")?.value === "authenticated";
}

export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const photographer = await getPhotographerWithOverrides(slug);
  if (!photographer) {
    return NextResponse.json(
      { error: "Photographer not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ photographer });
}

export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug, name, bio, specialties, style, tier, website, imageUrl, thumbnailUrl, gallery } = body;

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    // Verify photographer exists in base data
    const base = (photographersData as PhotographerBase[]).find(
      (p) => p.slug === slug
    );
    if (!base) {
      return NextResponse.json(
        { error: "Photographer not found" },
        { status: 404 }
      );
    }

    // Load existing override or create new
    const existing: import("@/lib/photographer-store").PhotographerOverride =
      (await getOverride(slug)) || { slug, updatedAt: "" };

    // Apply changes
    if (name !== undefined) existing.name = name;
    if (bio !== undefined) existing.bio = bio;
    if (website !== undefined) existing.website = website;
    if (imageUrl !== undefined) existing.imageUrl = imageUrl;
    if (thumbnailUrl !== undefined) existing.thumbnailUrl = thumbnailUrl;
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
      const current = existing.specialties || (base.specialties as string[]) || [];
      const copy = [...current];
      if (copy.length > 0) copy[0] = style;
      else copy.push(style);
      existing.specialties = copy;
    }

    existing.updatedAt = new Date().toISOString();
    await saveOverride(existing);

    // Return merged data
    const merged = await getPhotographerWithOverrides(slug);
    return NextResponse.json({ success: true, photographer: merged });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const base = (photographersData as PhotographerBase[]).find(
      (p) => p.slug === slug
    );
    if (!base) {
      return NextResponse.json(
        { error: "Photographer not found" },
        { status: 404 }
      );
    }

    // Mark as deleted in Blob override
    const existing = (await getOverride(slug)) || { slug, updatedAt: "" };
    (existing as import("@/lib/photographer-store").PhotographerOverride).deleted = true;
    (existing as import("@/lib/photographer-store").PhotographerOverride).updatedAt = new Date().toISOString();
    await saveOverride(existing as import("@/lib/photographer-store").PhotographerOverride);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
