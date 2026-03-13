'use client';

import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What kind of errands can I post?",
      answer: "You can post almost anything that doesn't violate our safety policies. Common tasks include grocery shopping, picking up dry cleaning, waiting in line at government offices, parcel delivery, and even light household help.",
    },
    {
      question: "How are runners verified?",
      answer: "Every runner must undergo a rigorous onboarding process including government ID verification, background checks, and an orientation session to ensure they meet our high standards for safety and reliability.",
    },
    {
      question: "How do payments work?",
      answer: "When you post a task, you're quoted a fee. Once you accept a runner, the payment is securely held by Pikquick. It is only released to the runner after you confirm that the task has been completed satisfactorily.",
    },
    {
      question: "Can tasks be canceled?",
      answer: "Yes, tasks can be canceled. Depending on the timing and whether a runner has already started the errand, a small cancellation fee may apply to compensate the runner for their time.",
    },
    {
      question: "How do runners get paid?",
      answer: "Runners accumulate earnings in their in-app wallet after each successfully completed task. They can withdraw their funds to their local bank account daily.",
    },
    {
      question: "When is the launch?",
      answer: "We are currently in the final stages of beta testing. By joining the waitlist, you'll be among the first to be notified of our official launch date in your city!",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#F9FAFB] md:bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="container mx-auto sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Background Container */}
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#F9FAFB] px-6 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
          
          {/* Header */}
          <div className="text-left md:text-center">
            <h2 className="font-inter text-3xl font-bold leading-tight text-[#1F2937] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 font-inter text-lg leading-relaxed text-[#6B7280] sm:mt-4 sm:text-lg md:mt-5 md:text-xl">
              Everything you need to know about Pikquick.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mt-10 space-y-4 sm:mt-12 md:mt-14 lg:mt-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 sm:py-6 md:px-7 md:py-7"
                >
                  <span className="flex-1 font-inter text-base whitespace-nowrap font-bold text-[#1F2937] sm:text-lg md:text-xl">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-[#6B7280] transition-colors hover:bg-[#E5E7EB] sm:h-9 sm:w-9">
                    {openIndex === index ? (
                      <HiMinus className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : (
                      <HiPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-200 bg-white px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-6">
                    <p className="font-inter text-base leading-relaxed text-[#6B7280] sm:text-base md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
