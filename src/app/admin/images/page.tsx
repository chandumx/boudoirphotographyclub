"use client";

import MetricCard from "@/components/admin/MetricCard";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import photographersData from "@/data/photographers.json";

const totalImages = photographersData.reduce((acc, p) => {
  let count = 0;
  if (p.imageUrl) count += 1;
  if (p.gallery) count += p.gallery.length;
  return acc + count;
}, 0);

const withImages = photographersData.filter((p) => p.imageUrl).length;
const missingImages = photographersData.filter((p) => !p.imageUrl).length;

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
    key: "imageStatus",
    label: "Image Status",
    sortable: true,
    render: (value: unknown) => (
      <StatusBadge status={value === "Has Image" ? "healthy" : "critical"} />
    ),
  },
  {
    key: "galleryCount",
    label: "Gallery Count",
    sortable: true,
  },
];

const tableData: Record<string, unknown>[] = photographersData.map((p) => ({
  name: p.name,
  imageStatus: p.imageUrl ? "Has Image" : "Missing",
  galleryCount: p.gallery ? p.gallery.length : 0,
}));

export default function ImagesPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-headline text-on-surface">
          Image Management
        </h1>
        <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
          Track and manage images across the directory
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <MetricCard
          icon="image"
          label="Total Images Used"
          value={totalImages.toLocaleString()}
        />
        <MetricCard
          icon="check_circle"
          label="With Profile Image"
          value={withImages}
          trend={`${Math.round((withImages / photographersData.length) * 100)}%`}
          trendUp
        />
        <MetricCard
          icon="broken_image"
          label="Missing Images"
          value={missingImages}
          trend={missingImages > 0 ? `${missingImages} need attention` : undefined}
          trendUp={false}
        />
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-headline text-on-surface mb-6">
          Photographer Images
        </h2>
        <DataTable
          columns={columns}
          data={tableData}
          searchKey="name"
          searchPlaceholder="Search photographers..."
          pageSize={15}
        />
      </section>

      <section>
        <h2 className="text-xl font-headline text-on-surface mb-6">
          Upload Images
        </h2>
        <div className="border-2 border-dashed border-outline-variant/30 rounded-sm p-16 flex flex-col items-center justify-center text-center hover:border-primary/40 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant opacity-30 mb-4">
            cloud_upload
          </span>
          <p className="text-on-surface font-headline text-lg mb-2">
            Drop images here or click to upload
          </p>
          <p className="text-xs text-on-surface-variant opacity-50">
            Supports JPG, PNG, WebP up to 10MB
          </p>
        </div>
      </section>
    </>
  );
}
