import { FiPlusCircle, FiUserCheck, FiCheckCircle } from "react-icons/fi";
import { RiWallet3Line } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { IoFlashOutline } from "react-icons/io5";



export function HowItWorks() {
  const requestersSteps = [
    {
      number: "1",
      icon: <FiPlusCircle className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Post a task",
      description: "Tell us what you need done and when.",
    },
    {
      number: "2",
      icon: <FiUserCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Choose a runner",
      description: "Pick from verified local runners based on reviews.",
    },
    {
      number: "3",
      icon: <FiCheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Track & confirm",
      description: "Follow progress and pay only when complete.",
    },
  ];

  const runnersSteps = [
    {
      number: "1",
      icon: <FiUserPlus className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Sign up & verify",
      description: "Create your profile and pass our safety checks.",
    },
    {
      number: "2",
      icon: <IoFlashOutline className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Go available",
      description: "Browse tasks nearby and pick what suits you.",
    },
    {
      number: "3",
      icon: <RiWallet3Line className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Complete & earn",
      description: "Get paid daily for every completed errand.",
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <h2 className="font-inter text-[30px] font-bold leading-[36px] md:leading-[40px] tracking-[0.4px] text-[#101828] md:text-[36px]">
            Simple steps to get started
          </h2>
          <p className="mt-3 font-inter text-[18px] leading-[28px] text-[#4A5565] sm:mt-4 md:mt-5">
            Whether you're delegating or earning, we've made it easy.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="mt-12 grid gap-8 sm:mt-14 md:mt-16 md:gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          
          {/* For Requesters */}
          <div>
            <div className="mb-6 flex items-center gap-2 sm:mb-8">
              <div className="h-8 w-2 rounded-full bg-[#155DFC]"></div>
              <h3 className="font-inter text-2xl mb-2 font-bold text-[#101828]">
                For Requesters
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {requestersSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-[#F3F4F6] bg-[#F9FAFB80] p-5 transition-all hover:bg-[#F3F4F6] sm:gap-5 sm:p-6 md:p-6"
                >
                  {/* Number Badge */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#DBEAFE] font-inter text-lg font-semibold text-[#4A85E4] sm:h-12 sm:w-12 sm:text-xl">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[#155DFC]">{step.icon}</span>
                      <h4 className="font-inter text-lg font-bold text-[#101828] tracking-[-0.44px]">
                        {step.title}
                      </h4>
                    </div>
                    <p className="font-inter text-base leading-[24px] tracking-[-0.31px] text-[#6B7280]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Runners */}
          <div>
            <div className="mb-6 mt-2 flex items-center gap-2 sm:mb-8">
              <div className="h-8 w-2 rounded-full bg-[#4A85E4] sm:w-1 md:w-1"></div>
              <h3 className="font-inter text-2xl font-bold text-[#101828] mb-2">
                For Runners
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {runnersSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-[#F3F4F6] bg-[#F9FAFB80] p-5 transition-all hover:bg-[#F3F4F6] sm:gap-5 sm:p-6 md:p-6"
                >
                  {/* Number Badge */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#DBEAFE] font-inter text-lg font-semibold text-[#4A85E4] sm:h-12 sm:w-12 sm:text-xl">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[#155DFC]">{step.icon}</span>
                      <h4 className="font-inter text-lg font-bold text-[#101828] tracking-[-0.44px]">
                        {step.title}
                      </h4>
                    </div>
                    <p className="font-inter text-base leading-[24px] tracking-[-0.31px] text-[#6B7280]">
                      {step.description}
                    </p>
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
