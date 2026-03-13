import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

export function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-14 sm:pt-16 md:pt-16 lg:pt-16 xl:pt-20">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#F1F7FF_0%,#F9FAFB_70%,#F9FAFB_100%)]" />

      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12 xl:py-16">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">

          {/* Left Content */}
          <div className="space-y-5 text-left sm:space-y-6 sm:text-center md:space-y-7 lg:space-y-8 lg:text-left">

            {/* Heading */}
            <h1 className="mx-auto max-w-xl mt-6 text-[36px] font-semibold leading-[1.15] tracking-tight text-[#101828] font-inter sm:text-[38px] sm:leading-[1.2] md:text-[44px] lg:mx-0 lg:text-[60px] xl:text-[60px] 2xl:text-[60px]">
              Get errands done without leaving<span className="block md:display"> your seat.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#4A5565] font-inter sm:text-lg md:text-xl lg:mx-0 lg:text-lg xl:text-xl" style={{ fontFamily: 'var(--font-inter)' }}>
              From deliveries to queue standing, hire trusted people nearby to handle your errands — fast, safe, and stress-free.
            </p>

            {/* CTA */}
            <div className="flex mt-12 mb-6 flex-col items-start gap-3 sm:items-center sm:justify-center sm:gap-4 lg:items-start lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenWaitlist}
                icon={<ArrowRightIcon />}
                className="w-full sm:w-auto"
              >
                Join the Waitlist
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-[380px] sm:max-w-md md:max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl lg:h-[450px] lg:aspect-auto xl:h-[520px] 2xl:h-[580px]">
              <Image
                src="/hero.png"
                alt="Happy person wearing yellow sunglasses"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  )
}
