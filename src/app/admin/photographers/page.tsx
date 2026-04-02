"use client";

import { useRouter } from "next/navigation";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import photographersData from "@/data/photographers.json";

const columns = [
  {
    key: "name",
    label: "Name",
    sortable: true,
    render: (value: unknown) => (
      <span className="font-headline font-bold text-on-surface">
        {String(value)}
      </span>
    ),
  },
  {
    key: "city",
    label: "City",
    sortable: true,
  },
  {
    key: "state",
    label: "State",
    sortable: true,
  },
  {
    key: "tier",
    label: "Tier",
    sortable: false,
    render: (value: unknown) => <StatusBadge status={String(value).toLowerCase()} />,
  },
  {
    key: "rating",
    label: "Rating",
    sortable: true,
    render: (value: unknown) => (
      <span className="inline-flex items-center gap-1 text-on-surface">
        <span className="material-symbols-outlined text-sm text-amber-500">
          star
        </span>
        {String(value)}
      </span>
    ),
  },
  {
    key: "reviewCount",
    label: "Reviews",
    sortable: true,
  },
  {
    key: "website",
    label: "Website",
    sortable: false,
    render: (value: unknown) => {
      const url = String(value || "");
      if (!url || url === "null") return <span className="text-on-surface-variant opacity-30">—</span>;
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:underline text-sm max-w-[180px] truncate"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="material-symbols-outlined text-sm">open_in_new</span>
          <span className="truncate">{url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
        </a>
      );
    },
  },
  {
    key: "address",
    label: "Address",
    sortable: true,
    render: (value: unknown) => {
      const addr = String(value || "");
      if (!addr || addr === "null") return <span className="text-on-surface-variant opacity-30">—</span>;
      return <span className="text-sm text-on-surface">{addr}</span>;
    },
  },
  {
    key: "googleMaps",
    label: "Google Maps",
    sortable: false,
    render: (value: unknown) => {
      const url = String(value || "");
      if (!url) return <span className="text-on-surface-variant opacity-30">—</span>;
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="material-symbols-outlined text-sm">map</span>
          View
        </a>
      );
    },
  },
  {
    key: "verified",
    label: "Verified",
    sortable: false,
    render: (value: unknown) => (
      <span
        className={`material-symbols-outlined text-base ${
          value ? "text-green-600" : "text-on-surface-variant opacity-30"
        }`}
      >
        {value ? "check_circle" : "cancel"}
      </span>
    ),
  },
];

function formatCity(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const tableData: Record<string, unknown>[] = photographersData.map((p) => {
  const cityName = formatCity(p.city);
  const query = encodeURIComponent(`${p.name} boudoir photographer ${cityName} ${p.state}`);
  return {
    name: p.name,
    slug: p.slug,
    city: cityName,
    state: p.state,
    tier: p.tier,
    rating: p.rating,
    reviewCount: p.reviewCount,
    website: (p as Record<string, unknown>).website || null,
    address: (p as Record<string, unknown>).address || null,
    googleMaps: `https://www.google.com/maps/search/${query}`,
    verified: p.verified,
  };
});

export default function PhotographersPage() {
  const router = useRouter();

  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-headline text-on-surface">
          Photographers
        </h1>
        <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
          {photographersData.length} registered photographers
        </p>
      </div>

      <DataTable
        columns={columns}
        data={tableData}
        searchKey="name"
        searchPlaceholder="Search photographers..."
        onRowClick={(row) => router.push(`/admin/photographers/${row.slug}`)}
      />
    </>
  );
}
