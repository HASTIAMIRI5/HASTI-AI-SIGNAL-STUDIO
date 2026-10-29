export function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-glow">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-3xl font-semibold text-white">{value}</span>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
          {delta}
        </span>
      </div>
    </div>
  );
}

export function SignalFeed({ signals }: { signals: Array<{ id: number; source: string; title: string; summary: string; sentiment: 'positive' | 'neutral' | 'negative'; time: string }> }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glow">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Live signal feed</p>
          <h2 className="text-xl font-semibold text-white">Recent brand mentions</h2>
        </div>
        <button className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-200">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {signals.map((signal) => (
          <div key={signal.id} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  {signal.source}
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                    signal.sentiment === 'positive'
                      ? 'bg-emerald-500/10 text-emerald-300'
                      : signal.sentiment === 'negative'
                        ? 'bg-rose-500/10 text-rose-300'
                        : 'bg-amber-500/10 text-amber-300'
                  }`}
                >
                  {signal.sentiment}
                </span>
              </div>
              <span className="text-xs text-slate-400">{signal.time}</span>
            </div>

            <h3 className="mt-3 text-base font-medium text-white">{signal.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{signal.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrendBars() {
  const bars = [52, 58, 64, 70, 72, 68, 88];

  return (
    <div className="flex h-52 items-end gap-3">
      {bars.map((value, index) => (
        <div key={index} className="flex flex-1 flex-col items-center gap-2">
          <div
            className={`w-full rounded-t-xl ${index === bars.length - 1 ? 'bg-gradient-to-t from-emerald-500 to-brand-400' : 'bg-gradient-to-t from-brand-500/70 to-cyan-400/80'}`}
            style={{ height: `${value}%` }}
          />
          <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function OpportunityPanel({ items }: { items: Array<{ title: string; detail: string; score: string }> }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glow">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">AI opportunities</p>
          <h2 className="text-xl font-semibold text-white">Priority watchlist</h2>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-medium text-white">{item.title}</h3>
              <span className="rounded-full bg-brand-500/10 px-2 py-1 text-[10px] font-medium text-brand-200">
                {item.score}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandCard({
  name,
  category,
  health,
  mentions,
  trend,
}: {
  name: string;
  category: string;
  health: string;
  mentions: string;
  trend: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-400">{category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
          {health}
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Mentions</p>
          <p className="mt-2 text-2xl font-semibold text-white">{mentions}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Trend</p>
          <p className="mt-2 text-2xl font-semibold text-brand-200">{trend}</p>
        </div>
      </div>
    </div>
  );
}

export function ReportCard({ title, type, status, date }: { title: string; type: string; status: string; date: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glow">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
          {type}
        </span>
        <span className="text-xs text-slate-400">{date}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-slate-300">{status}</span>
        <button className="rounded-lg bg-brand-500 px-3 py-2 text-xs font-medium text-white">Open</button>
      </div>
    </div>
  );
}
