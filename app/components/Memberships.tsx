export default function Memberships() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center py-10 px-4 md:px-8 lg:px-24 bg-white">
      <div className="bg-white flex flex-col gap-16 items-center rounded-[30px] w-full max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="h-20 w-[72.04px] relative">
            <img
              src="/reart-logo.png"
              alt="ReART Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-[#141414] text-[32px] md:text-[48px] font-bold leading-[48px] md:leading-[72px] text-center max-w-[620px]">
            Memberships
          </h2>
          <p className="text-[#343434] text-base md:text-lg font-light leading-6 text-center w-full whitespace-pre-wrap">
            Join a community of passionate artists, innovators, and visionaries with an exclusive membership to ReART globally
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap gap-6 items-start justify-center w-full">
          {/* Basic Plan */}
          <div className="bg-white border border-[#d2d2d2] rounded-2xl flex-1 min-w-[300px] max-w-[340px]">
            <div className="flex flex-col gap-8 p-6">
              {/* Header */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="text-[#2a2a2a] text-2xl font-bold leading-10 tracking-[0.4px] h-8">
                  Basic Plan
                </h3>
                <div className="flex flex-wrap gap-1 items-baseline w-full">
                  <p className="text-[#343434] text-[32px] font-bold leading-10">
                    From $200
                  </p>
                  <p className="text-[#8c8c8c] text-lg font-normal leading-7 flex-1 min-w-[120px]">
                    {` /per month`}
                  </p>
                </div>
                <p className="text-[#656565] text-base font-normal leading-6 w-full whitespace-pre-wrap">
                  Ideal for early-stage real estate agents or small galleries exploring the platform and artists who is not showcased in any museums.
                </p>
                <button className="bg-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl w-full">
                  <p className="text-white text-sm font-normal leading-6">
                    Enquire now
                  </p>
                </button>
                <button className="border border-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl w-full">
                  <p className="text-[#141414] text-sm font-normal leading-6">
                    Learn more
                  </p>
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#8c8c8c] w-full" />

              {/* Features */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-2 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Limited curated art listings:</span> Access to a selection of the most-high quality, vetted options
                  </p>
                </div>
                <div className="flex gap-3 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Basic virtual tour features: </span>Get hands on and experience high-end properties through AR
                  </p>
                </div>
                <div className="flex gap-3 items-center w-full max-w-[300px]">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Community Forums: </span>The ability to chat and connect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white border border-[#dddddd] rounded-2xl flex-1 min-w-[300px] max-w-[340px]">
            <div className="flex flex-col gap-8 p-6">
              {/* Header */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="text-[#343434] text-2xl font-bold leading-10 tracking-[0.4px] h-8">
                  Premium Plan
                </h3>
                <div className="flex flex-wrap gap-1 items-baseline w-full">
                  <p className="text-[#080708] text-[32px] font-bold leading-10">
                    From $700
                  </p>
                  <p className="text-[#8c8c8c] text-lg font-normal leading-7 flex-1 min-w-[120px]">
                    {` /per month`}
                  </p>
                </div>
                <p className="text-[#656565] text-base font-normal leading-6 w-full whitespace-pre-wrap">
                  Unlock the full potential of ReART. Ideal for someone who wants to take their real estate game to a higher level and increase market share of their art collection.
                </p>
                <button className="bg-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl w-full">
                  <p className="text-white text-sm font-normal leading-6">
                    Enquire now
                  </p>
                </button>
                <button className="border border-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl w-full">
                  <p className="text-[#141414] text-sm font-normal leading-6">
                    Learn more
                  </p>
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#8c8c8c] w-full" />

              {/* Features */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-2 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Full access </span>to all services, products and features and customisable to the brand
                  </p>
                </div>
                <div className="flex gap-3 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Premium AR tool: </span>the AR tool gives the highest level of engagement to entice more people
                  </p>
                </div>
                <div className="flex gap-3 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Dedicated Support: </span>Customer success will help with any technical support and marketing for a personal brand experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Custom Plan */}
          <div className="bg-white border border-[#dddddd] rounded-2xl flex-1 min-w-[300px] max-w-[340px]">
            <div className="flex flex-col gap-8 p-6">
              {/* Header */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="text-[#343434] text-2xl font-bold leading-10 tracking-[0.4px] h-8">
                  Enterprise Custom Plan
                </h3>
                <div className="flex flex-wrap gap-1 items-baseline w-full">
                  <p className="text-[#8c8c8c] text-lg font-normal leading-10 flex-1 min-w-[120px] whitespace-pre-wrap">
                    Contact for price
                  </p>
                </div>
                <p className="text-[#656565] text-base font-normal leading-6 w-full whitespace-pre-wrap">
                  Best suited for large-scale real estate developers who are well-known and aims to increase their brand awareness on a global stage, and for high-profile museums & galleries known for their collections.
                </p>
                <button className="bg-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl w-full">
                  <p className="text-white text-sm font-normal leading-6">
                    Enquire now
                  </p>
                </button>
                <button className="border border-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl w-full">
                  <p className="text-[#141414] text-sm font-normal leading-6">
                    Learn more
                  </p>
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#8c8c8c] w-full" />

              {/* Features */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-2 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Full access </span>to all services, products and features and customisable to the brand
                  </p>
                </div>
                <div className="flex gap-3 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-normal leading-6 flex-1 whitespace-pre-wrap">
                    <span className="font-semibold">Unique analytics </span>that works and measures customer feedback
                  </p>
                </div>
                <div className="flex gap-3 items-center w-full">
                  <div className="bg-white border border-[#f7f7fa] rounded-[20px] shrink-0 w-8 h-8 flex items-center justify-center">
                    <img
                      src="/checkmark-icon.png"
                      alt=""
                      className="w-4 h-3"
                    />
                  </div>
                  <p className="text-[#2a2a2a] text-base font-semibold leading-6 flex-1 whitespace-pre-wrap">
                    Expert and VIP Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Button */}
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <button className="border border-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl">
          <p className="text-[#141414] text-sm font-normal leading-6">
            Read more about memberships
          </p>
        </button>
      </div>
    </section>
  );
}
