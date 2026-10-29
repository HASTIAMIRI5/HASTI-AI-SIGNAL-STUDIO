import { AppShell } from '@/components/app-shell';
import { HeroSection, FeatureGrid, SocialProof, CTASection } from '@/components/sections';

export default function HomePage() {
  return (
    <AppShell>
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <HeroSection />
        <FeatureGrid />
        <SocialProof />
        <CTASection />
      </main>
    </AppShell>
  );
}
