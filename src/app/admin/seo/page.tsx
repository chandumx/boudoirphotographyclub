"use client";

import MetricCard from "@/components/admin/MetricCard";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import statesData from "@/data/states.json";
import citiesData from "@/data/cities.json";
import photographersData from "@/data/photographers.json";

function countCitiesByState(stateAbbr: string): number {
  return citiesData.filter((c) => c.state === stateAbbr).length;
}

function countPhotographersByState(stateAbbr: string): number {
  return photographersData.filter((p) => p.state === stateAbbr).length;
}

function countPhotographersByCity(citySlug: string): number {
  return photographersData.filter((p) => p.city === citySlug).length;
}

const stateTableData: Record<string, unknown>[] = statesData.map((s) => {
  const cities = countCitiesByState(s.abbreviation);
  const photographers = countPhotographersByState(s.abbreviation);
  return {
    name: s.name,
    abbreviation: s.abbreviation,
    cities,
    photographers,
    seoStatus: photographers > 0 ? "healthy" : "warning",
  };
});

const topCities = [...citiesData]
  .sort((a, b) => b.population - a.population)
  .slice(0, 20)
  .map((c) => {
    const photographers = countPhotographersByCity(c.slug);
    return {
      city: c.name,
      state: c.state,
      population: c.population,
      photographers,
      status: photographers > 0 ? "healthy" : "warning",
    };
  });

const totalPages = statesData.length + citiesData.length;
const healthyStates = stateTableData.filter((s) => s.seoStatus === "healthy").length;
const warningStates = stateTableData.filter((s) => s.seoStatus === "warning").length;
const healthyPercent = Math.round((healthyStates / statesData.length) * 100);

const stateColumns = [
  {
    key: "name",
    label: "State",
    sortable: true,
    render: (value: unknown) => (
      <span className="font-headline font-bold text-on-surface">
        {String(value)}
      </span>
    ),
  },
  { key: "cities", label: "Cities", sortable: true },
  { key: "photographers", label: "Photographers", sortable: true },
  {
    key: "seoStatus",
    label: "SEO Status",
    sortable: false,
    render: (value: unknown) => <StatusBadge status={String(value)} />,
  },
  {
    key: "meta",
    label: "Meta",
    sortable: false,
    render: () => (
      <span className="material-symbols-outlined text-base text-green-600">
        check_circle
      </span>
    ),
  },
  {
    key: "content",
    label: "Content",
    sortable: false,
    render: () => (
      <span className="material-symbols-outlined text-base text-green-600">
        check_circle
      </span>
    ),
  },
];

const cityColumns = [
  {
    key: "city",
    label: "City",
    sortable: true,
    render: (value: unknown, row: Record<string, unknown>) => (
      <span className="font-headline font-bold text-on-surface">
        {String(value)}, {String(row.state)}
      </span>
    ),
  },
  {
    key: "population",
    label: "Population",
    sortable: true,
    render: (value: unknown) => Number(value).toLocaleString(),
  },
  { key: "photographers", label: "Photographers", sortable: true },
  {
    key: "status",
    label: "Status",
    sortable: false,
    render: (value: unknown) => <StatusBadge status={String(value)} />,
  },
];

export default function SeoPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-headline text-on-surface">
          SEO Page Management
        </h1>
        <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
          Health status of programmatic location pages
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <MetricCard
          icon="web"
          label="Total Pages"
          value={totalPages.toLocaleString()}
        />
        <MetricCard
          icon="check_circle"
          label="Healthy"
          value={`${healthyPercent}%`}
          trend={`${healthyStates} states`}
          trendUp
        />
        <MetricCard
          icon="warning"
          label="Warnings"
          value={warningStates}
        />
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-headline text-on-surface mb-6">
          State Pages
        </h2>
        <DataTable
          columns={stateColumns}
          data={stateTableData}
          searchKey="name"
          searchPlaceholder="Search states..."
          pageSize={15}
        />
      </section>

      <section>
        <h2 className="text-xl font-headline text-on-surface mb-6">
          Top City Pages
        </h2>
        <DataTable
          columns={cityColumns}
          data={topCities}
          searchKey="city"
          searchPlaceholder="Search cities..."
          pageSize={20}
        />
      </section>
    </>
  );
}
