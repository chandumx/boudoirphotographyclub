"use client";

interface ChartProps {
  data: { label: string; value: number }[];
  title: string;
  color?: string;
  height?: number;
}

export default function Chart({ data, title, color = "#7c5454", height = 200 }: ChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div>
      <h3 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mb-4">
        {title}
      </h3>
      <div className="flex items-end gap-1" style={{ height }}>
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
            <div
              className="w-full rounded-t-sm transition-all duration-300 hover:opacity-80 min-h-[2px]"
              style={{
                height: `${(d.value / max) * 100}%`,
                backgroundColor: color,
                opacity: 0.6 + (d.value / max) * 0.4,
              }}
            />
            <div className="absolute -top-8 bg-on-surface text-surface text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {d.value}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[9px] text-on-surface-variant opacity-40">{data[0]?.label}</span>
        <span className="text-[9px] text-on-surface-variant opacity-40">{data[data.length - 1]?.label}</span>
      </div>
    </div>
  );
}
