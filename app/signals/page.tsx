import { DashboardShell } from '@/components/app-shell';
import { SignalFeed } from '@/components/dashboard-widgets';
import { signals } from '@/lib/mock-data';

export default function SignalsPage() {
  return (
    <DashboardShell title="Signal monitor">
      <div className="mb-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <p className="mb-2 text-sm text-slate-400">Filtered sources</p>
          <div className="flex flex-wrap gap-2">
            {['Social', 'Review', 'News', 'Search', 'Forums', 'Competitors'].map((source) => (
              <span key={source} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
                {source}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-5">
          <p className="text-sm text-brand-200">AI summary</p>
          <p className="mt-2 text-lg font-medium text-white">High recall on product sentiment, with an emerging risk in pricing perception among Gen Z segments.</p>
        </div>
      </div>

      <SignalFeed signals={signals} />
    </DashboardShell>
  );
}
