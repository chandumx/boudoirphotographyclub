import MetricCard from "@/components/admin/MetricCard";
import Chart from "@/components/admin/Chart";
import StatusBadge from "@/components/admin/StatusBadge";
import photographersData from "@/data/photographers.json";
import leadsData from "@/data/leads.json";
import analyticsData from "@/data/analytics.json";

export default function AdminDashboard() {
  const totalPhotographers = photographersData.length;
  const totalLeads = leadsData.length;
  const newLeads = leadsData.filter((l) => l.status === "new").length;

  const last30Days = analyticsData.daily.slice(-30);
  const monthlyVisitors = last30Days.reduce((sum, d) => sum + d.visitors, 0);

  const chartData = last30Days.map((d) => ({
    label: d.date.slice(5),
    value: d.visitors,
  }));

  const recentLeads = leadsData.slice(-5).reverse();

  return (
    <>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-headline text-on-surface">
          Atelier Dashboard
        </h1>
        <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
          Marketplace Overview
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <MetricCard
          icon="photo_camera"
          label="Total Photographers"
          value={totalPhotographers}
          trend="+4 new"
          trendUp
        />
        <MetricCard
          icon="mail"
          label="Total Leads"
          value={totalLeads}
          trend={`${newLeads} new`}
          trendUp
        />
        <MetricCard
          icon="visibility"
          label="Monthly Visitors"
          value={monthlyVisitors.toLocaleString()}
        />
        <MetricCard
          icon="payments"
          label="Revenue"
          value="$4,250"
          trend="+12%"
          trendUp
        />
      </div>

      {/* Traffic Chart */}
      <div className="bg-surface-container-low p-6 rounded-sm mb-10">
        <Chart
          data={chartData}
          title="Visitors -- Last 30 Days"
          color="#7c5454"
          height={220}
        />
      </div>

      {/* Two-Column: Top Cities & Top Photographers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Top Cities */}
        <div className="bg-surface-container-low rounded-sm p-6">
          <h3 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mb-5">
            Top Performing Cities
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3">
                  City
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3 text-right">
                  Views
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3 text-right">
                  Leads
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {analyticsData.topCities.map((city) => (
                <tr key={city.city}>
                  <td className="py-2.5 text-sm text-on-surface">
                    {city.city},{" "}
                    <span className="text-on-surface-variant opacity-60">
                      {city.state}
                    </span>
                  </td>
                  <td className="py-2.5 text-sm text-on-surface text-right tabular-nums">
                    {city.views.toLocaleString()}
                  </td>
                  <td className="py-2.5 text-sm text-on-surface text-right tabular-nums">
                    {city.leads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Photographers */}
        <div className="bg-surface-container-low rounded-sm p-6">
          <h3 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mb-5">
            Top Photographers
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3">
                  Name
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3 text-right">
                  Views
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3 text-right">
                  Leads
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {analyticsData.topPhotographers.map((p) => (
                <tr key={p.name}>
                  <td className="py-2.5 text-sm font-headline text-on-surface">
                    {p.name}
                  </td>
                  <td className="py-2.5 text-sm text-on-surface text-right tabular-nums">
                    {p.views.toLocaleString()}
                  </td>
                  <td className="py-2.5 text-sm text-on-surface text-right tabular-nums">
                    {p.leads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-surface-container-low rounded-sm p-6">
        <h3 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mb-5">
          Recent Leads
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3">
                  Name
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3">
                  Location
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3">
                  Photographer
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3">
                  Status
                </th>
                <th className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 pb-3 text-right">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td className="py-2.5 text-sm text-on-surface">
                    {lead.name}
                  </td>
                  <td className="py-2.5 text-sm text-on-surface-variant">
                    {lead.city}, {lead.state}
                  </td>
                  <td className="py-2.5 text-sm text-on-surface-variant">
                    {lead.photographer}
                  </td>
                  <td className="py-2.5">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="py-2.5 text-sm text-on-surface-variant text-right tabular-nums">
                    {new Date(lead.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
