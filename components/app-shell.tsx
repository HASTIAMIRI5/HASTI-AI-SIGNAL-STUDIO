import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/brands', label: 'Brands' },
  { href: '/signals', label: 'Signals' },
  { href: '/reports', label: 'Reports' },
  { href: '/pricing', label: 'Pricing' },
];

export function AppShell({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-cyan-400 text-sm font-bold text-slate-950">
              H
            </span>
            Hasti AI Signal Studio
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 md:inline-flex">
              Sign in
            </button>
            <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-glow">
              Start free
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {title ? (
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Overview</p>
              <h1 className="text-3xl font-semibold text-white">{title}</h1>
            </div>
            <button className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200">
              Export report
            </button>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}

export function DashboardShell({ children, title }: { children: React.ReactNode; title: string }) {
  return <AppShell title={title}>{children}</AppShell>;
}
