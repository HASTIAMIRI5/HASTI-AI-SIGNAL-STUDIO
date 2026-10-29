import { DashboardShell } from '@/components/app-shell';
import { BrandCard } from '@/components/dashboard-widgets';
import { brands } from '@/lib/mock-data';

export default function BrandsPage() {
  return (
    <DashboardShell title="Brand intelligence">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">Portfolio overview</p>
          <h2 className="text-2xl font-semibold text-white">Managed brand accounts</h2>
        </div>
        <button className="rounded-xl border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-200">
          Add brand
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {brands.map((brand) => (
          <BrandCard key={brand.name} {...brand} />
        ))}
      </div>
    </DashboardShell>
  );
}
