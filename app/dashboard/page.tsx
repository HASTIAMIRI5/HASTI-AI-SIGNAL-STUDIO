import { DashboardShell } from '@/components/app-shell';
import { StatCard, SignalFeed, TrendBars, OpportunityPanel } from '@/components/dashboard-widgets';
import { signals, kpis, opportunities } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <DashboardShell title="Dashboard">
      <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <StatCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glow">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Brand signal pulse</p>
              <h2 className="text-xl font-semibold text-white">Sentiment evolution</h2>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              +18.2% this week
            </span>
          </div>
          <TrendBars />
        </div>

        <OpportunityPanel items={opportunities} />
      </div>

      <div className="mt-6">
        <SignalFeed signals={signals} />
      </div>
    </DashboardShell>
  );
}
