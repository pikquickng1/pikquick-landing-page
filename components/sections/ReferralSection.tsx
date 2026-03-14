import { Button } from '@/components/ui/Button';
import { FiUsers } from "react-icons/fi";
import { LuGift } from "react-icons/lu";
import { LuTrophy } from "react-icons/lu";
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

interface ReferralSectionProps {
  onOpenWaitlist: () => void;
}

export function ReferralSection({ onOpenWaitlist }: ReferralSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#EFF6FF] py-12 sm:py-16 md:py-20 lg:bg-[#EFF6FF] lg:py-24" style={{ fontFamily: 'var(--font-inter)' }}>
      
      {/* Decorative Background Icons - Desktop Only */}
      <div className="absolute inset-0 hidden overflow-hidden lg:block">
        {/* Trophy Icon - Bottom Left */}
        <div className="absolute bottom-16 rotate-355 left-16 opacity-10">
          <LuTrophy className="h-30 w-30 text-[#4A85E4]" />
        </div>
        
        {/* Gift Icon - Top Right (smaller) */}
        <div className="absolute right-20 top-16 opacity-10 z-10">
          <LuGift className="h-32 w-32 text-[#4A85E4]" />
        </div>
      </div>

      <AnimateOnScroll>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Content Card */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white px-5 py-8 sm:rounded-3xl sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
          
          {/* Icon */}
          <div className="flex justify-start lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DBEAFE] sm:h-16 sm:w-16 md:h-20 md:w-20">
              <FiUsers className="h-7 w-7 text-[#4A85E4] sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-left font-inter text-3xl font-bold leading-tight text-[#101828] sm:mt-6 md:text-4xl lg:text-center lg:text-[36px]">
            Invite friends. Earn rewards.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-left font-inter text-sm leading-relaxed text-[#6B7280] sm:mt-4 sm:text-base md:mt-5 md:text-lg lg:text-center">
            Spread the word about Pikquick and get rewarded! For every friend who signs up and completes their first task, you both earn credits towards your next errand.
          </p>

          {/* Highlight Text with Gift Icon on Mobile */}
          <div className="relative mt-6 overflow-hidden sm:mt-7 md:mt-8 lg:overflow-visible">
            {/* Slanted Gift Icon - Mobile Only */}
            <div className="absolute -right-8 top-1 bottom-0 opacity-20 lg:hidden z-10">
              <LuGift className="h-30 w-30 rotate-330 text-[#4A85E4]" />
            </div>
            
            <div className="rounded-xl bg-[#F0F7FF] px-6 py-6 text-left sm:px-5 sm:py-5 lg:mx-auto lg:max-w-fit lg:px-8 lg:text-center">
              <p className="font-inter text-2xl  font-bold text-[#1447E6]">
                Earn up to ₦25,000 monthly + perks
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center text-center sm:mt-7 md:mt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenWaitlist}
              className="w-full lg:max-w-fit"
            >
              Join the Waitlist & Start Earning
            </Button>
          </div>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
