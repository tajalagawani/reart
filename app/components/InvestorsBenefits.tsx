export default function InvestorsBenefits() {
  return (
    <section className="flex flex-col gap-4 items-center py-12 md:py-20 px-4 md:px-8">
      {/* Investors Intro */}
      <div className="flex flex-col gap-4 items-start w-full max-w-[1152px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center whitespace-pre-wrap">
          <p className="text-[#0177dc] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] w-full">
            Investor
          </p>
          <p className="text-[#141414] text-base md:text-lg font-semibold leading-6 w-full">
            Real Estate &amp; Property Investors
          </p>
        </div>

        {/* Description Paragraph */}
        <div className="flex flex-col gap-4 items-start">
          <p className="text-[#343434] text-sm md:text-lg font-light leading-6 w-full max-w-[1072px] whitespace-pre-wrap">
            Standing out in a cutthroat market may be challenging for real estate and property investors. ReART, is a high potential to network which is also the ecosystem that enables investors to access off-market real estate investment prospects, and access to an exclusive network of HNWIs.
          </p>
        </div>

        {/* Mobile Mockups */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start py-6 md:py-8 w-full justify-center">
          <div className="w-[165px] sm:w-[185px] h-[356px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/museum-mobile-1.png"
              alt="Investor Mobile View 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[165px] sm:w-[185px] h-[356px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/museum-mobile-2.png"
              alt="Investor Mobile View 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col gap-4 items-start w-full max-w-[1152px] pt-8 md:pt-12">
        <div className="w-full max-w-[1152px]">
          <h3 className="text-[#343434] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
            How can Real Estate &amp; Property Investors benefit from being ReART members?
          </h3>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 items-start py-4 w-full max-w-[1152px]">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Access to Exclusive Off-Market Opportunities
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Gain early access to art-integrated developments and exclusive property collaborations available only within the ReART network.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Portfolio Diversification
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Invest in properties that combine financial performance with cultural capital. ReART connects investors to art-integrated developments that appeal to both buyers and tenants seeking experiential value.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Enhanced Asset Value
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Properties featuring curated art achieve stronger differentiation and appreciation potential, driven by design-led appeal and market storytelling.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Visibility &amp; Brand Positioning
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Align your investment portfolio with a forward-thinking cultural platform that merges real estate, design, and art innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Investor Partnerships &amp; Insights
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Collaborate with developers, curators, and architects to identify high-impact investment opportunities supported by creative partnerships and experiential branding.
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
