"use client";

import MetricCard from "@/components/admin/MetricCard";
import Chart from "@/components/admin/Chart";
import DataTable from "@/components/admin/DataTable";
import analyticsData from "@/data/analytics.json";

const daily = analyticsData.daily;
const last30 = daily.slice(-30);

const totalVisitors = daily.reduce((sum, d) => sum + d.visitors, 0);
const totalPageViews = daily.reduce((sum, d) => sum + d.pageViews, 0);
const totalLeads = daily.reduce((sum, d) => sum + d.leads, 0);
const conversionRate = totalVisitors > 0 ? ((totalLeads / totalVisitors) * 100).toFixed(2) : "0.00";

const visitorsChartData = last30.map((d) => ({
  label: d.date.slice(5),
  value: d.visitors,
}));

const leadsChartData = last30.map((d) => ({
  label: d.date.slice(5),
  value: d.leads,
}));

const trafficSources = analyticsData.trafficSources;

const topCitiesColumns = [
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
    key: "views",
    label: "Views",
    sortable: true,
    render: (value: unknown) => Number(value).toLocaleString(),
  },
  {
    key: "leads",
    label: "Leads",
    sortable: true,
  },
];

const topCitiesData: Record<string, unknown>[] = analyticsData.topCities.map(
  (c) => ({
    city: c.city,
    state: c.state,
    views: c.views,
    leads: c.leads,
  })
);

export default function AnalyticsPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-headline text-on-surface">
          Analytics &amp; Performance
        </h1>
        <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
          {daily.length} days of data
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
        <MetricCard
          icon="group"
          label="Total Visitors"
          value={totalVisitors.toLocaleString()}
        />
        <MetricCard
          icon="visibility"
          label="Total Page Views"
          value={totalPageViews.toLocaleString()}
        />
        <MetricCard
          icon="mail"
          label="Total Leads"
          value={totalLeads.toLocaleString()}
        />
        <MetricCard
          icon="percent"
          label="Avg. Conversion Rate"
          value={`${conversionRate}%`}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
        <div className="bg-surface-container-low p-6 rounded-sm">
          <Chart
            data={visitorsChartData}
            title="Visitors Over Time"
            color="#7c5454"
            height={220}
          />
        </div>
        <div className="bg-surface-container-low p-6 rounded-sm">
          <Chart
            data={leadsChartData}
            title="Leads Generated"
            color="#5c7c54"
            height={220}
          />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-headline text-on-surface mb-6">
          Traffic Sources
        </h2>
        <div className="bg-surface-container-lowest rounded-sm ring-1 ring-outline-variant/10 p-6 space-y-5">
          {trafficSources.map((source) => (
            <div key={source.source}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-on-surface font-headline">
                  {source.source}
                </span>
                <span className="text-xs text-on-surface-variant opacity-60">
                  {source.percentage}% &middot;{" "}
                  {source.sessions.toLocaleString()} sessions
                </span>
              </div>
              <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${source.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-headline text-on-surface mb-6">
          Top Cities
        </h2>
        <DataTable
          columns={topCitiesColumns}
          data={topCitiesData}
          searchKey="city"
          searchPlaceholder="Search cities..."
          pageSize={10}
        />
      </section>
    </>
  );
}
