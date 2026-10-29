export const kpis = [
  { label: 'Brand mentions', value: '24.8k', delta: '+12.4%' },
  { label: 'Positive sentiment', value: '72%', delta: '+6.1%' },
  { label: 'Risk alerts', value: '18', delta: '-3.2%' },
  { label: 'AI recommendations', value: '41', delta: '+9.8%' },
];

export const signals = [
  {
    id: 1,
    source: 'Social',
    title: 'Product launch sentiment spikes after creator review drop',
    summary: 'Positive conversation volume climbed 21% after the new onboarding campaign started trending on creator channels.',
    sentiment: 'positive',
    time: '12 min ago',
  },
  {
    id: 2,
    source: 'News',
    title: 'Competitor pricing backlash gains traction',
    summary: 'Analysts are discussing competitor pricing restructuring, creating an opportunity to reposition your value proposition.',
    sentiment: 'neutral',
    time: '39 min ago',
  },
  {
    id: 3,
    source: 'Review',
    title: 'Customer support sentiment dipped in high-velocity segments',
    summary: 'Several reviews cite response delays; the AI model suggests proactive outreach and improved FAQ content.',
    sentiment: 'negative',
    time: '1 hr ago',
  },
];

export const opportunities = [
  { title: 'Pricing perception shift', detail: 'Gen Z conversations increasingly mention value and transparency. Position bundle messaging.', score: 'High' },
  { title: 'Creator advocacy window', detail: 'Influencer voices are amplifying product value in niche communities without paid amplification.', score: 'Strong' },
  { title: 'Support friction risk', detail: 'Support satisfaction is tightening after onboarding flow adjustments — fix with guided education.', score: 'Medium' },
];

export const brands = [
  { name: 'Northstar Labs', category: 'B2B SaaS', health: 'Healthy', mentions: '8.4k', trend: '+18%' },
  { name: 'Helio Commerce', category: 'Retail', health: 'Rising', mentions: '5.1k', trend: '+11%' },
  { name: 'Byte Harbor', category: 'Consumer App', health: 'Watchlist', mentions: '3.7k', trend: '+7%' },
  { name: 'Aster Studio', category: 'Creative', health: 'Healthy', mentions: '6.3k', trend: '+22%' },
  { name: 'Prism Forge', category: 'Security', health: 'Stable', mentions: '4.9k', trend: '+9%' },
  { name: 'Nova Peak', category: 'Fintech', health: 'Rising', mentions: '7.8k', trend: '+16%' },
];
