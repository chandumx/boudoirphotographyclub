interface MetricCardProps {
  icon: string;
  label: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
}

export default function MetricCard({ icon, label, value, trend, trendUp }: MetricCardProps) {
  return (
    <div className="bg-surface-container-low p-6 rounded-sm hover:bg-surface-container-lowest transition-colors">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-primary bg-primary-container/20 p-2 rounded-sm">
          {icon}
        </span>
        {trend && (
          <span className={`text-[10px] font-bold uppercase tracking-tighter ${trendUp ? "text-green-600" : "text-red-600"}`}>
            {trend}
          </span>
        )}
      </div>
      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mb-1">
        {label}
      </p>
      <p className="text-2xl font-headline text-on-surface">{value}</p>
    </div>
  );
}
