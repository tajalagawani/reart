export default function ReARTCommunityMarketplace() {
  return (
    <section className="flex flex-col gap-4 items-center py-12 md:py-20 px-4 md:px-8 bg-[#141414]">
      {/* Main Container */}
      <div className="flex flex-col gap-6 md:gap-8 items-center w-full max-w-[1424px]">
        {/* Heading Section */}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-[48px] md:leading-[72px]">
            ReART Community & Marketplace
          </h2>
          <p className="text-[#f7f7f7] text-lg md:text-[32px] font-light leading-[32px] md:leading-[48px] text-center max-w-[1152px] whitespace-pre-wrap">
            The Central Curation and Discovery Platform
          </p>
        </div>

        {/* Made for Section */}
        <div className="flex flex-col gap-4 items-center py-0 md:py-8">
          <p className="text-white text-base font-semibold leading-6">
            Made for
          </p>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center flex-wrap">
            <div className="flex gap-2 items-center justify-center flex-wrap">
              <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-4 py-2 rounded-2xl h-8">
                <p className="text-white text-sm font-normal leading-6">
                  Artists
                </p>
              </div>
              <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-4 py-2 rounded-2xl h-8">
                <p className="text-white text-sm font-normal leading-6">
                  Museums and Galleries
                </p>
              </div>
              <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-4 py-2 rounded-2xl h-8">
                <p className="text-white text-sm font-normal leading-6">
                  Real Estate Developers and Interior Design Professional
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center flex-wrap">
              <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-4 py-2 rounded-2xl h-8">
                <p className="text-white text-sm font-normal leading-6">
                  Art Buyer and Collectors
                </p>
              </div>
              <div className="bg-[#0177dc] flex gap-2 items-center justify-center px-4 py-2 rounded-2xl h-8">
                <p className="text-white text-sm font-normal leading-6">
                  Real Estate & Property Investors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Features and Mockups */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-center w-full max-w-[1152px] py-4 md:py-8">
          {/* Features List - Left Side */}
          <div className="flex flex-col gap-6 md:gap-8 items-start w-full md:w-[350px] md:pt-20">
            {/* Quality Curation */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-white text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] whitespace-pre-wrap">
                  Quality Curation
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#f7f7f7] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                  Vet and curate high-quality artworks to maintain marketplace standards
                </p>
              </div>
            </div>

            {/* Discovery Engine */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-white text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] whitespace-pre-wrap">
                  Discovery Engine
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#f7f7f7] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                  Help buyers find relevant art through personalised recommendations and search
                </p>
              </div>
            </div>

            {/* Event Coordination */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-white text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] whitespace-pre-wrap">
                  Event Coordination
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#f7f7f7] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                  Organise virtual & physical showcases, artist talks, and networking events.
                </p>
              </div>
            </div>

            {/* Platform Management */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-white text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] whitespace-pre-wrap">
                  Platform Management
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#f7f7f7] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                  Facilitate transactions, manage disputes, and ensure smooth platform operations.
                </p>
              </div>
            </div>

            {/* Trend Analysis */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-white text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] whitespace-pre-wrap">
                  Trend Analysis
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#f7f7f7] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                  Provide market insights and trending art styles to all stakeholders.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Mockups - Center */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start justify-center">
            <div className="w-[185px] md:w-[245px] h-[400px] md:h-[530px] rounded-[30px] overflow-hidden shadow-2xl bg-white">
              <img
                src="/museum-mobile-1.png"
                alt="Community Marketplace Mobile View 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[185px] md:w-[245px] h-[400px] md:h-[530px] rounded-[30px] overflow-hidden shadow-2xl bg-[#666]">
              <img
                src="/museum-mobile-2.png"
                alt="Community Marketplace Mobile View 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
