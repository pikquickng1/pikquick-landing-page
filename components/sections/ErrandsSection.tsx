import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export function ErrandsSection() {
  const errands = [
     {
      image: "/errands/delivery.jpg",
      title: "Parcel & Gift Delivery",
      description: "Fast delivery of documents, gifts, or packages across the city.",
    },
    {
      image: "/errands/queue.jpg",
      title: "Queue Standing",
      description: "Hire someone to hold your spot at banks, registries, or events.",
    },
    {
      image: "/errands/shopping.jpg",
      title: "Shopping & Pickups",
      description: "Groceries, medicines, or that item you forgot at the store.",
    },
    {
      image: "/errands/document.jpg",
      title: "Document Dispatch",
      description: "Safe and timely handling of important papers and legal docs.",
    },
    {
      image: "/errands/helping.jpg",
      title: "Helping Hands",
      description: "General assistance with carrying heavy items or light chores.",
    },
  ];

  return (
    <section id="errands" className="relative bg-[#F9FAFB] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 scroll-mt-20" style={{ fontFamily: 'var(--font-inter)' }}>
      <AnimateOnScroll>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="font-inter text-[30px] md:[36px] font-bold leading-tight tracking-tight text-[#101828]">
Popular Errands          </h2>
          <p className="mt-3 text-lg leading-relaxed tracking-[-0.44px] text-[#4A5565] sm:mt-4 sm:text-lg md:mt-5">
See how people are using Pikquick to simplify their daily lives.          </p>
        </div>

        {/* Errands Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {errands.map((errand, index) => (
            <div
              key={index}
              className="group mx-auto overflow-hidden rounded-3xl bg-white transition-all"
            >
              {/* Image */}
              <div className="relative h-[215px] w-full overflow-hidden">
                <Image
                  src={errand.image}
                  alt={errand.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 345px, (max-width: 1024px) 50vw, 363px"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-6 lg:p-7">
                <h3 className="font-inter text-[20px] font-bold text-[#101828]">
                  {errand.title}
                </h3>
                <p className="mt-2 font-inter text-[16px] leading-[26px] tracking-[-0.31px] text-[#4A5565]">
                  {errand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
