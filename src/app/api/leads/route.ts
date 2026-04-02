import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const leadsPath = path.join(process.cwd(), "src/data/leads.json");

function getLeads() {
  try {
    return JSON.parse(fs.readFileSync(leadsPath, "utf8"));
  } catch {
    return [];
  }
}

function saveLeads(leads: unknown[]) {
  fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, photographerSlug, photographerName, city, state } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const leads = getLeads();

    const newLead = {
      id: `lead-${Date.now()}`,
      name,
      email,
      phone,
      photographerSlug: photographerSlug || "",
      photographerName: photographerName || "",
      city: city || "",
      state: state || "",
      status: "new",
      createdAt: new Date().toISOString(),
    };

    leads.push(newLead);
    saveLeads(leads);

    return NextResponse.json({ success: true, lead: newLead });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const leads = getLeads();
  return NextResponse.json(leads);
}
