import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const outreachPath = path.join(process.cwd(), "src/data/backlink-outreach.json");
const photographersPath = path.join(process.cwd(), "src/data/photographers.json");

interface OutreachRecord {
  id: string;
  photographerName: string;
  email: string;
  website: string;
  city: string;
  state: string;
  listingUrl: string;
  emailStatus: "pending" | "sent" | "opened" | "replied" | "bounced";
  backlinkStatus: "not_checked" | "not_found" | "found" | "verified";
  followUpStatus: "not_needed" | "scheduled" | "sent" | "replied";
  emailSentAt: string | null;
  followUpSentAt: string | null;
  backlinkCheckedAt: string | null;
  backlinkUrl: string | null;
  createdAt: string;
  notes: string;
}

function getOutreach(): OutreachRecord[] {
  try {
    const data = fs.readFileSync(outreachPath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveOutreach(records: OutreachRecord[]) {
  fs.writeFileSync(outreachPath, JSON.stringify(records, null, 2));
}

function formatCity(slug: string): string {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// GET - list all outreach records or generate from photographers
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  if (action === "generate") {
    // Generate outreach list from photographers with websites and emails
    const photographers = JSON.parse(fs.readFileSync(photographersPath, "utf8"));
    const existing = getOutreach();
    const existingWebsites = new Set(existing.map(r => r.website));

    const seen = new Set<string>();
    const newRecords: OutreachRecord[] = [];

    for (const p of photographers) {
      if (!p.website || seen.has(p.website) || existingWebsites.has(p.website)) continue;
      seen.add(p.website);

      newRecords.push({
        id: `outreach-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        photographerName: p.name,
        email: "",
        website: p.website,
        city: formatCity(p.city),
        state: p.state,
        listingUrl: `https://boudoirphotographyclub.com/photographer/${p.slug}`,
        emailStatus: "pending",
        backlinkStatus: "not_checked",
        followUpStatus: "not_needed",
        emailSentAt: null,
        followUpSentAt: null,
        backlinkCheckedAt: null,
        backlinkUrl: null,
        createdAt: new Date().toISOString(),
        notes: "",
      });
    }

    const all = [...existing, ...newRecords];
    saveOutreach(all);

    return NextResponse.json({
      success: true,
      newRecords: newRecords.length,
      total: all.length,
    });
  }

  if (action === "email-template") {
    const name = searchParams.get("name") || "Photographer";
    const city = searchParams.get("city") || "your city";
    const listingUrl = searchParams.get("listingUrl") || "https://boudoirphotographyclub.com";

    const subject = `We listed your boudoir photography profile`;
    const body = `Hi ${name},

We recently added your boudoir photography profile to our directory to help clients discover amazing photographers in ${city}.

Your listing:
${listingUrl}

Our goal is to help photographers get more visibility and bookings through organic search traffic.

To support you, we would like to offer 3 months of free leads from our platform.

In return, we ask if you could mention us on your website as a partner.

Example:

Recommended Partner
Boudoir Photography Club – Find Boudoir Photographers in ${city}
https://boudoirphotographyclub.com

This helps both of us grow visibility and attract more clients.

If you're happy with this, we will prioritize your listing and send leads your way.

Thanks and looking forward to working together.

Best regards,
Boudoir Photography Club Team`;

    return NextResponse.json({ subject, body });
  }

  if (action === "followup-template") {
    const name = searchParams.get("name") || "Photographer";

    const subject = `Quick follow-up about your boudoir directory listing`;
    const body = `Hi ${name},

Just following up regarding your listing on our directory.

We're offering 3 months of free leads and would love to feature your work more prominently.

If you can add a partner mention on your site, we will prioritize sending leads to your listing.

Thanks again and happy to collaborate.

Best regards,
Boudoir Photography Club Team`;

    return NextResponse.json({ subject, body });
  }

  const records = getOutreach();
  return NextResponse.json(records);
}

// POST - update outreach record
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { id, ...updates } = body;

  const records = getOutreach();
  const idx = records.findIndex(r => r.id === id);

  if (idx === -1) {
    return NextResponse.json({ error: "Record not found" }, { status: 404 });
  }

  records[idx] = { ...records[idx], ...updates };
  saveOutreach(records);

  return NextResponse.json({ success: true, record: records[idx] });
}

// PUT - batch update (mark emails as sent, etc)
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { ids, update } = body;

  const records = getOutreach();
  let updated = 0;

  for (const record of records) {
    if (ids.includes(record.id)) {
      Object.assign(record, update);
      updated++;
    }
  }

  saveOutreach(records);
  return NextResponse.json({ success: true, updated });
}
