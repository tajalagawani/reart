export default function CollectorsBenefits() {
  return (
    <section className="flex flex-col gap-4 items-center py-12 md:py-20 px-4 md:px-8">
      {/* Collectors Intro */}
      <div className="flex flex-col gap-4 items-start w-full max-w-[1152px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center whitespace-pre-wrap">
          <p className="text-[#0177dc] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] w-full">
            Art Buyer &amp; Collector
          </p>
          <p className="text-[#141414] text-base md:text-lg font-semibold leading-6 w-full">
            Art enthusiasts and investment-focused collectors
          </p>
        </div>

        {/* Description Paragraph */}
        <div className="flex flex-col gap-4 items-start">
          <p className="text-[#343434] text-sm md:text-base font-light leading-6 w-full max-w-[1072px] whitespace-pre-wrap">
            Diversifying assets by investing in distinctive real estate and high-value art, whilst accessing curated selections that align with their lifestyle and portfolio is somewhat challenging. ReART is the solution to how they may enhance their investments through integrated, high-quality artwork in a completely new setting.
          </p>
        </div>

        {/* Mobile Mockups */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start py-6 md:py-8 w-full justify-center">
          <div className="w-[165px] sm:w-[185px] h-[356px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/museum-mobile-1.png"
              alt="Art Buyer & Collector Mobile View 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[165px] sm:w-[185px] h-[356px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/museum-mobile-2.png"
              alt="Art Buyer & Collector Mobile View 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col gap-4 items-start w-full max-w-[1152px] pt-8 md:pt-12">
        <div className="w-full max-w-[1152px]">
          <h3 className="text-[#343434] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
            How can Art Buyers &amp; Collectors benefit from being ReART members?
          </h3>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 items-start py-4 w-full max-w-[1152px]">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Buy Curated Art from Anywhere
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Experience art viewings wherever you are - at home, in the office, or on the move. ReART&apos;s immersive property viewings and AR-enabled exhibitions let you explore and acquire curated works in both physical and virtual spaces.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Confident, Curated Discovery
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Browse a carefully vetted selection of high-quality artworks, with verified provenance and authenticity. Every piece is chosen to meet the standards of serious collectors and investors.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Build Your Art Investment Portfolio
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Access insights, market analytics, and valuation tools to build and manage a balanced art investment portfolio with confidence and clarity.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Secure Provenance &amp; Ownership Records
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  All artworks featured on ReART come with verified provenance and documentation, ensuring authenticity and long-term value protection for every acquisition.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Seamless Property Integration
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Discover art within real living spaces. ReART connects collectors directly with art-integrated properties, offering a unique opportunity to envision and acquire works in architectural and interior contexts.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center pt-4">
              <button className="flex h-10 md:h-12 items-center justify-center px-4 md:px-6 py-2 rounded-2xl border border-solid border-[#141414] w-full max-w-[184px]">
                <p className="text-[#141414] text-xs md:text-sm font-normal leading-6">
                  Enquire membership
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
