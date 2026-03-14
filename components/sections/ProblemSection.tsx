import { LuCar, LuTimer } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { TbCircleCheck } from "react-icons/tb";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";


export function ProblemSection() {
  const problems = [
    {
      icon: <LuTimer className="h-7 w-7" />,
      title: "Wasting hours in long queues",
    },
    {
      icon: <LuCar className="h-7 w-7" />,
      title: "Stuck in endless city traffic",
    },
    {
      icon: <BsBoxSeam className="h-7 w-7" />,
      title: "Missing urgent package deliveries",
    },
    {
      icon: <FaRegClock 
 className="h-7 w-7" />,
      title: "No time for essential household chores",
    },
  ];

  return (
    <section className="relative bg-[#F9FAFB] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32" style={{ fontFamily: 'var(--font-inter)' }}>
      <AnimateOnScroll>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2 
            className="text-[#101828] md:bg-linear-to-r from-[#345088] via-[#101828] to-[#234B9B] md:text-transparent md:bg-clip-text text- font-inter font-bold text-[30px] leading-[36px] sm:text-[32px] sm:leading-[36px] md:text-[36px] md:leading-[40px]"
          >
            Life is busy. Errands shouldn't slow you down.
          </h2>
          <p 
            className="mt-6 font-inter font-normal text-[18px] tracking-[-0.44px] max-w-[579px] mx-auto leading-[28px] text-[#4A5565] sm:mt-5 md:mt-6"
          >
            We understand the frustration of a never-ending to-do list. Whether you're working late or just need a helping hand, we've got you covered.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-14 grid gap-6 sm:mt-14 sm:gap-8 md:mt-16 md:grid-cols-2 md:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-9 text-center sm:p-8 md:p-6 lg:p-8"
            >
              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF6FF] text-[#4A85E4] text-[28px]">
                {problem.icon}
              </div>
              
              {/* Title */}
              <h3 className="mt-4 text-base font-semibold md:font-normal tracking-[-0.31px] leading-snug text-[#101828] font-inter sm:mt-5 md:mt-4 lg:mt-5 lg:text-lg">
                {problem.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="mt-12 flex items-center justify-center sm:mt-14 md:mt-16 lg:mt-20">
          <div className="flex items-center gap-2 rounded-full bg-[#EFF6FF] px-5 py-3 sm:gap-3 sm:px-6 sm:py-3.5 md:px-7 md:py-4">
            <TbCircleCheck 
 className="hidden md:block md:h-6 md:w-6 text-[#4A85E4]" />

            <p className="text-sm font-bold text-center text-[#4A85E4] font-inter sm:text-base md:text-lg">
              Pikquick connects you with reliable people nearby who are ready to help, exactly when you need it.
            </p>
          </div>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
