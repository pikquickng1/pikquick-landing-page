import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { MdOutlineCalendarToday, MdOutlineCheckCircle } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";

interface BecomeRunnerProps {
  onOpenWaitlist: () => void;
}

export function BecomeRunner({ onOpenWaitlist }: BecomeRunnerProps) {
  const benefits = [
    {
      icon: <MdOutlineCalendarToday className="h-4 w-4" />,
      text: "Flexible work hours",
    },
    {
      icon: <MdOutlineCheckCircle className="h-4 w-4" />,
      text: "Choose your own tasks",
    },
    {
      icon: <BiWallet className="h-4 w-4" />,
      text: "Earn daily income",
    },
    {
      icon: <HiOutlineUserCircle className="h-4 w-4" />,
      text: "Build a trusted profile",
    },
  ];

  return (
    <section className="relative bg-[#F9FAFB] py-12 sm:py-16 md:py-20 lg:py-24" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Card Container */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#1F2937]">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
            
            {/* Content */}
            <div className="px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:px-12">
              
              {/* Heading */}
              <h2 className="font-inter text-[26px] font-bold leading-tight text-white sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[36px]">
                Turn your free  <span className="block">time into income</span>
              </h2>

              {/* Description */}
              <p className="mt-3 font-inter text-xl leading-relaxed text-[#99A1AF] sm:mt-4 ">
                Join our network of runners and help your community while earning on your own terms.
              </p>

              {/* Benefits - Single column on mobile, 2 columns on desktop */}
              <div className="mt-5 space-y-3 sm:mt-6 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 backdrop-blur-sm sm:gap-2.5 sm:px-3.5 sm:py-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4A85E4] text-white">
                      {benefit.icon}
                    </div>
                    <span className="font-inter text-base font-medium text-[#E5E7EB] whitespace-nowrap">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-7 md:mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenWaitlist}
                  className="w-full sm:w-auto"
                >
                  Become a Runner
                </Button>
              </div>
            </div>

            {/* Image - Bottom on mobile, right on desktop */}
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-full lg:min-h-[400px] xl:min-h-[450px]">
              <Image
                src="/runner.png"
                alt="Runner shopping in grocery store"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
