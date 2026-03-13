'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ErrandsSection } from '@/components/sections/ErrandsSection';
import { TrustSafety } from '@/components/sections/TrustSafety';
import { BecomeRunner } from '@/components/sections/BecomeRunner';
import { ReferralSection } from '@/components/sections/ReferralSection';
import { FAQ } from '@/components/sections/FAQ';
import { useWaitlist } from '@/components/providers/WaitlistProvider';

export default function Home() {
  const { openWaitlist } = useWaitlist();

  return (
    <main className="min-h-screen">
      <HeroSection onOpenWaitlist={openWaitlist} />
      <ProblemSection />
      <HowItWorks />
      <ErrandsSection />
      <TrustSafety />
      <BecomeRunner onOpenWaitlist={openWaitlist} />
      <ReferralSection onOpenWaitlist={openWaitlist} />
      <FAQ />
    </main>
  );
}
