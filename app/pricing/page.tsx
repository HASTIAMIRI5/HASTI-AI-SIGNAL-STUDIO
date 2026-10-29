import { DashboardShell } from '@/components/app-shell';

export default function PricingPage() {
  return (
    <DashboardShell title="Pricing">
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            name: 'Starter',
            price: '$29',
            features: ['3 brands', 'Daily summaries', 'Email alerts'],
            highlight: false,
          },
          {
            name: 'Growth',
            price: '$99',
            features: ['Unlimited brands', 'AI insights', 'Slack + webhooks'],
            highlight: true,
          },
          {
            name: 'Scale',
            price: '$249',
            features: ['Team workspaces', 'Custom models', 'Priority support'],
            highlight: false,
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 ${
              plan.highlight ? 'border-brand-500 bg-brand-500/10 shadow-glow' : 'border-slate-800 bg-slate-900/60'
            }`}
          >
            <p className="text-sm text-slate-400">{plan.name}</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="pb-1 text-slate-400">/ month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-xl px-4 py-2.5 text-sm font-medium ${plan.highlight ? 'bg-brand-500 text-white' : 'border border-slate-700 bg-slate-800 text-slate-100'}`}>
              {plan.highlight ? 'Start free trial' : 'Choose plan'}
            </button>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
