import { HiOutlineShieldCheck } from "react-icons/hi";
import { FiUserCheck } from "react-icons/fi";

import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

export function TrustSafety() {
  const features = [
    {
      icon: <FiUserCheck className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Verified runner profiles",
      description: "Every runner undergoes multi-level identity verification.",
    },
    {
      icon: <MdOutlinePayment className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Secure in-app payments",
      description: "Payments are held in escrow and released only when task is done.",
    },
    {
      icon: <AiOutlineStar className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Ratings & reviews",
      description: "Browse honest feedback from our community before choosing a runner.",
    },
    {
      icon: <BiSupport className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Dispute support",
      description: "Our 24/7 dedicated support team is always here to help.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#4A85E4] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"  style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl sm:h-80 sm:w-80 lg:-left-10 lg:top-32 lg:h-96 lg:w-96"></div>
        <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl sm:h-80 sm:w-80 lg:-right-10 lg:bottom-32 lg:h-96 lg:w-96"></div>
        <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-white/5 blur-3xl sm:h-64 sm:w-64"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm sm:mb-8">
              <HiOutlineShieldCheck className="h-5 w-5 text-white" />
              <span className="font-inter text-sm font-medium text-white sm:text-base">
                YOUR SAFETY IS OUR PRIORITY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-inter text-[32px] font-bold leading-tight text-white sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]">
              Built on trust <span className="block">and safety</span>
            </h2>

            {/* Description */}
            <p className="mt-5 font-inter text-xl tracking-[-0.45px] leading-[32.5px] text-white/90 sm:mt-6 sm:text-lg md:text-xl lg:mt-7">
              We've designed Pikquick with multiple layers of protection to ensure every transaction is smooth, safe, and transparent.
            </p>
          </div>

          {/* Right Features */}
          <div className="space-y-5 sm:space-y-6 md:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-all hover:bg-white/15 sm:gap-5 sm:p-6 md:p-6"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white sm:h-14 sm:w-14">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-inter text-lg font-semibold text-white sm:text-xl md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 font-normal text-base text-left tracking-[-0.31px] leading-7 max-w-[222px] sm:max-w-sm md:max-w-md lg:max-w-lg text-white/80 sm:mt-2 sm:text-base md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
