import { DashboardShell } from '@/components/app-shell';
import { ReportCard } from '@/components/dashboard-widgets';

const reports = [
  {
    title: 'Weekly brand pulse',
    type: 'Executive brief',
    status: 'Ready to send',
    date: 'Today',
  },
  {
    title: 'Campaign lift review',
    type: 'Performance memo',
    status: 'Generating',
    date: 'Tomorrow',
  },
  {
    title: 'Competitor benchmark',
    type: 'Strategy note',
    status: 'Draft',
    date: 'Friday',
  },
];

export default function ReportsPage() {
  return (
    <DashboardShell title="Reports & insights">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">AI-generated content</p>
          <h2 className="text-2xl font-semibold text-white">Insight library</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white">
          New report
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((report) => (
          <ReportCard key={report.title} {...report} />
        ))}
      </div>
    </DashboardShell>
  );
}
