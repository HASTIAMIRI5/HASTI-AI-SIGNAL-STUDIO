export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/60 px-6 py-12 shadow-glow sm:px-8 lg:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-200">
            AI-powered brand intelligence
          </div>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn every mention into action.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Monitor brand signals, detect sentiment shifts, and uncover growth opportunities before competitors do.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow">
              Start free trial
            </button>
            <button className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200">
              Book demo
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span>• 24/7 signal monitoring</span>
            <span>• AI summarization</span>
            <span>• Executive-ready reports</span>
          </div>
        </div>

        <div className="relative">
          <div className="grid-pattern absolute inset-0 rounded-[28px] opacity-60" />
          <div className="relative rounded-[28px] border border-slate-800 bg-slate-950/80 p-5 shadow-glow">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Brand pulse</p>
                <h2 className="text-xl font-semibold text-white">Northstar Labs</h2>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                +24.8%
              </span>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Positive mentions', value: '68%', color: 'text-emerald-300' },
                { label: 'Risk alerts', value: '3', color: 'text-amber-300' },
                { label: 'Campaign lift', value: '+12.1%', color: 'text-brand-200' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                    <span>{item.label}</span>
                    <span className={item.color}>{item.value}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 via-cyan-400 to-emerald-400"
                      style={{ width: item.label === 'Positive mentions' ? '68%' : item.label === 'Risk alerts' ? '20%' : '72%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  const features = [
    {
      title: 'Signal discovery',
      text: 'Track social conversations, reviews, search demand, and competitor moves in one command center.',
    },
    {
      title: 'AI risk detection',
      text: 'Surface negative spikes, sentiment risk, and emerging trust issues before they become headlines.',
    },
    {
      title: 'Smart reporting',
      text: 'Generate executive summaries, campaign recaps, and stakeholder updates with a single click.',
    },
    {
      title: 'Automated alerts',
      text: 'Send insights to Slack, email, or CRM workflows at the exact moment your brand needs attention.',
    },
  ];

  return (
    <section className="mt-20">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-200">Capabilities</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Built for teams that need signal clarity.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glow">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-cyan-400/20 text-lg text-brand-200">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="mt-20 rounded-[28px] border border-slate-800 bg-slate-900/60 p-8">
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { value: '8.2x', label: 'Faster signal response' },
          { value: '94%', label: 'Forecasting confidence' },
          { value: '41%', label: 'Better campaign attribution' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-center">
            <div className="text-4xl font-bold text-white">{item.value}</div>
            <div className="mt-2 text-sm text-slate-300">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="mt-20 text-center">
      <div className="rounded-[30px] border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-cyan-500/10 p-10">
        <p className="text-sm uppercase tracking-[0.22em] text-brand-200">Launch smarter</p>
        <h2 className="mt-4 text-3xl font-bold text-white">Turn noise into a competitive advantage.</h2>
        <button className="mt-8 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow">
          Get started with Hasti
        </button>
      </div>
    </section>
  );
}
