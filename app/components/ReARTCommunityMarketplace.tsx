import Image from "next/image";

export default function ReARTCommunityMarketplace() {
  return (
    <section className="flex flex-col gap-4 items-center py-[clamp(3rem,10vw,5rem)] px-4 md:px-8 lg:px-12 bg-[#141414]">
      {/* Main Container */}
      <div className="flex flex-col gap-[clamp(1.5rem,6vw,3rem)] items-center w-full max-w-[1424px]">
        {/* Heading Section - 2025 Best Practice: Fluid typography */}
        <div className="flex flex-col gap-4 items-center text-center w-full px-4">
          <h2 className="text-white text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.5]">
            ReART Community & Marketplace
          </h2>
          <p className="text-[#f7f7f7] text-[clamp(1.125rem,3vw,2rem)] font-light leading-[1.5] text-center max-w-4xl">
            The Central Curation and Discovery Platform
          </p>
        </div>

        {/* Made for Section - 2025 Best Practice: Responsive badges */}
        <div className="flex flex-col gap-4 items-center py-4 md:py-8 w-full">
          <p className="text-white text-base md:text-lg font-semibold leading-6">
            Made for
          </p>
          <div className="flex gap-2 md:gap-3 items-center justify-center flex-wrap max-w-4xl px-4">
            <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-3 md:px-4 py-2 rounded-2xl min-h-[44px]">
              <span className="text-white text-xs md:text-sm font-normal leading-6">
                Artists
              </span>
            </div>
            <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-3 md:px-4 py-2 rounded-2xl min-h-[44px]">
              <span className="text-white text-xs md:text-sm font-normal leading-6 text-center">
                Museums and Galleries
              </span>
            </div>
            <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-3 md:px-4 py-2 rounded-2xl min-h-[44px]">
              <span className="text-white text-xs md:text-sm font-normal leading-6 text-center">
                Real Estate Developers & Interior Design Professionals
              </span>
            </div>
            <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-3 md:px-4 py-2 rounded-2xl min-h-[44px]">
              <span className="text-white text-xs md:text-sm font-normal leading-6 text-center">
                Art Buyers and Collectors
              </span>
            </div>
            <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-3 md:px-4 py-2 rounded-2xl min-h-[44px]">
              <span className="text-white text-xs md:text-sm font-normal leading-6 text-center">
                Real Estate & Property Investors
              </span>
            </div>
          </div>
        </div>

        {/* Main Content with Features and Mockups - 2025 Best Practice: Responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start lg:items-center justify-center w-full max-w-[1152px] py-4 md:py-8">
          {/* Features List - Left Side */}
          <div className="flex flex-col gap-6 md:gap-8 items-start w-full lg:w-[350px] lg:pt-20 px-4 lg:px-0">
            {/* Quality Curation */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-[1.4] tracking-[0.4px]">
                Quality Curation
              </h3>
              <p className="text-[#f7f7f7] text-[clamp(0.875rem,2vw,1rem)] font-normal leading-6">
                Vet and curate high-quality artworks to maintain marketplace standards
              </p>
            </div>

            {/* Discovery Engine */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-[1.4] tracking-[0.4px]">
                Discovery Engine
              </h3>
              <p className="text-[#f7f7f7] text-[clamp(0.875rem,2vw,1rem)] font-normal leading-6">
                Help buyers find relevant art through personalised recommendations and search
              </p>
            </div>

            {/* Event Coordination */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-[1.4] tracking-[0.4px]">
                Event Coordination
              </h3>
              <p className="text-[#f7f7f7] text-[clamp(0.875rem,2vw,1rem)] font-normal leading-6">
                Organise virtual & physical showcases, artist talks, and networking events.
              </p>
            </div>

            {/* Platform Management */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-[1.4] tracking-[0.4px]">
                Platform Management
              </h3>
              <p className="text-[#f7f7f7] text-[clamp(0.875rem,2vw,1rem)] font-normal leading-6">
                Facilitate transactions, manage disputes, and ensure smooth platform operations.
              </p>
            </div>

            {/* Trend Analysis */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-[1.4] tracking-[0.4px]">
                Trend Analysis
              </h3>
              <p className="text-[#f7f7f7] text-[clamp(0.875rem,2vw,1rem)] font-normal leading-6">
                Provide market insights and trending art styles to all stakeholders.
              </p>
            </div>
          </div>

          {/* Mobile Mockups - Center - 2025 Best Practice: Next.js Image */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start justify-center w-full lg:w-auto">
            <div className="relative w-[185px] md:w-[245px] h-[400px] md:h-[530px] rounded-[30px] overflow-hidden shadow-2xl">
              <Image
                src="/museum-mobile-1.png"
                alt="Community Marketplace Mobile View 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 185px, 245px"
              />
            </div>
            <div className="relative w-[185px] md:w-[245px] h-[400px] md:h-[530px] rounded-[30px] overflow-hidden shadow-2xl">
              <Image
                src="/museum-mobile-2.png"
                alt="Community Marketplace Mobile View 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 185px, 245px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
