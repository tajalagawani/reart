export default function PlatformServices() {
  return (
    <section className="flex flex-col gap-8 items-center py-12 md:py-20 px-4 md:px-8 lg:px-[136px] bg-white">
      {/* Header */}
      <div className="flex flex-col gap-6 items-start justify-center w-full max-w-[1152px]">
        <div className="flex gap-4 items-center">
          <h2 className="text-[#141414] text-[32px] md:text-[48px] font-bold leading-[48px] md:leading-[72px]">
            The Platform & Services
          </h2>
        </div>
        <p className="text-[#343434] text-base md:text-lg font-normal leading-6 whitespace-pre-wrap">
          ReART will offer both a digital product and the following services
        </p>
      </div>

      {/* Main Content - Two Columns */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-[1152px]">
        {/* Left Column - ReART Product */}
        <div className="flex flex-col gap-8 items-start w-full lg:w-[299px]">
          {/* Badge */}
          <div className="bg-[#0047ab] flex gap-2 h-8 items-center justify-center px-4 rounded-[30px]">
            <p className="text-white text-xs font-semibold leading-[18px] text-center">
              ReART Product
            </p>
          </div>

          {/* Digital hybrid platform */}
          <div className="flex flex-col gap-4 items-start justify-center w-full">
            <div className="flex flex-col gap-4 items-start justify-center w-full">
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex gap-2 items-center justify-center py-2">
                  <h3 className="text-[#141414] text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
                    Digital hybrid platform
                  </h3>
                </div>
                <p className="text-[#343434] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                  The core features of the platform include:
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-col gap-4 items-start">
                <div className="bg-[#e3f2fe] flex gap-4 h-10 items-center justify-center px-4 rounded-lg">
                  <p className="text-[#141414] text-sm font-medium leading-[21px]">
                    Artwork submission
                  </p>
                </div>
                <div className="bg-[#e3f2fe] flex gap-4 h-10 items-center justify-center px-4 rounded-lg">
                  <p className="text-[#141414] text-sm font-medium leading-[21px]">
                    Curation
                  </p>
                </div>
                <div className="bg-[#e3f2fe] flex gap-4 h-10 items-center justify-center px-4 rounded-lg">
                  <p className="text-[#141414] text-sm font-medium leading-[21px]">
                    Viewing (AR capabilities)
                  </p>
                </div>
                <div className="bg-[#e3f2fe] flex gap-4 h-10 items-center justify-center px-4 rounded-lg">
                  <p className="text-[#141414] text-sm font-medium leading-[21px]">
                    Bidding
                  </p>
                </div>
                <div className="bg-[#e3f2fe] flex gap-4 h-10 items-center justify-center px-4 rounded-lg">
                  <p className="text-[#141414] text-sm font-medium leading-[21px]">
                    Purchase
                  </p>
                </div>
                <div className="bg-[#e3f2fe] flex gap-4 h-10 items-center justify-center px-4 rounded-lg">
                  <p className="text-[#141414] text-sm font-medium leading-[21px]">
                    Artwork Marketplace mobile application
                  </p>
                </div>
                <div className="bg-[#e3f2fe] flex gap-4 h-10 items-center justify-center px-4 rounded-lg">
                  <p className="text-[#141414] text-sm font-medium leading-[21px]">
                    Sign up to physical or virtual viewings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - ReART Services */}
        <div className="flex flex-col gap-8 items-start w-full lg:w-[800px]">
          {/* Badge */}
          <div className="bg-[#0047ab] flex gap-2 h-8 items-center justify-center px-4 rounded-[30px]">
            <p className="text-white text-xs font-semibold leading-[18px] text-center">
              ReART Services
            </p>
          </div>

          {/* Service Items */}
          <div className="flex flex-col gap-8 items-start w-full">
            {/* Acceptance & Community Inclusion */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex flex-1 gap-8 items-center">
                <div className="flex flex-1 flex-col gap-2 items-start justify-center p-2">
                  <h3 className="text-[#141414] text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
                    Acceptance & Community Inclusion
                  </h3>
                  <p className="text-[#343434] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                    Curated onboarding of independent artists via panel or museum partnerships to maintain quality & exclusivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Art & Property Matching */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex flex-1 gap-8 items-center">
                <div className="flex flex-1 flex-col gap-2 items-start justify-center p-2">
                  <h3 className="text-[#141414] text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
                    Art & Property Matching
                  </h3>
                  <p className="text-[#343434] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                    Curated art placements for high-end properties and exclusive viewer experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Bidding & Sales */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex flex-1 gap-8 items-center">
                <div className="flex flex-1 flex-col gap-2 items-start justify-center p-2">
                  <h3 className="text-[#141414] text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
                    Bidding & Sales
                  </h3>
                  <p className="text-[#343434] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                    Real-time bidding, secured transactions, and art leasing options, enabling seamless sales and movement.
                  </p>
                </div>
              </div>
            </div>

            {/* Community & Events */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex flex-1 gap-8 items-center">
                <div className="flex flex-1 flex-col gap-2 items-start justify-center p-2">
                  <h3 className="text-[#141414] text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
                    Community & Events
                  </h3>
                  <p className="text-[#343434] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                    Regular online showcases, exclusive virtual exhibitions, mentorship programs, and curated events to foster engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium & Concierge Services */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex flex-1 gap-8 items-center">
                <div className="flex flex-1 flex-col gap-2 items-start justify-center p-2">
                  <h3 className="text-[#141414] text-lg md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
                    Premium & Concierge Services
                  </h3>
                  <p className="text-[#343434] text-sm md:text-base font-normal leading-6 whitespace-pre-wrap">
                    Tailored curation, private auctions, art advisory, and bespoke interior integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
