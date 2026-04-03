import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const outreachPath = path.join(process.cwd(), "src/data/backlink-outreach.json");

export async function POST(request: NextRequest) {
  const { id, website } = await request.json();

  if (!website) {
    return NextResponse.json({ error: "Website URL required" }, { status: 400 });
  }

  try {
    // Fetch the photographer's website and check for our backlink
    const response = await fetch(website, {
      headers: { "User-Agent": "BoudoirDirectoryBot/1.0" },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return NextResponse.json({
        found: false,
        error: `Website returned ${response.status}`,
      });
    }

    const html = await response.text();
    const lowerHtml = html.toLowerCase();

    // Check for our backlink
    const backlinkPatterns = [
      "boudoirphotographyclub.com",
      "boudoir photography club",
      "boudoir directory",
      "boudoirdirectory.com",
    ];

    let found = false;
    let matchedPattern = "";

    for (const pattern of backlinkPatterns) {
      if (lowerHtml.includes(pattern)) {
        found = true;
        matchedPattern = pattern;
        break;
      }
    }

    // Update the outreach record if id provided
    if (id) {
      const records = JSON.parse(fs.readFileSync(outreachPath, "utf8"));
      const idx = records.findIndex((r: { id: string }) => r.id === id);
      if (idx !== -1) {
        records[idx].backlinkStatus = found ? "found" : "not_found";
        records[idx].backlinkCheckedAt = new Date().toISOString();
        if (found) records[idx].backlinkUrl = website;
        fs.writeFileSync(outreachPath, JSON.stringify(records, null, 2));
      }
    }

    return NextResponse.json({
      found,
      matchedPattern,
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      found: false,
      error: error instanceof Error ? error.message : "Failed to check website",
    });
  }
}
