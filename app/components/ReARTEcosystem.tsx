export default function ReARTEcosystem() {
  return (
    <section className="flex flex-col gap-6 md:gap-8 items-center py-12 md:py-20 px-4 md:px-8">
      <div className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="flex flex-col gap-2 items-center text-[#141414]">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[42px] md:leading-[54px] lg:leading-[60px] text-center">
            The ReART Ecosystem
          </h2>
          <p className="text-[20px] md:text-[28px] lg:text-[32px] font-light leading-[30px] md:leading-[42px] lg:leading-[48px] text-center">
            A New Cultural Marketplace
          </p>
        </div>
        <div className="flex flex-col justify-center leading-6 text-sm md:text-base font-light text-center text-neutral-600 w-full max-w-[1152px] whitespace-pre-wrap">
          <p className="mb-0">
            ReART bridges the worlds of art, architecture, and real estate - creating a shared ecosystem where creativity and capital meet.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p>
            From museums and artists to investors and developers, each member gains access to new audiences, revenue opportunities, and collaborative possibilities - redefining how and where art lives.
          </p>
        </div>
      </div>

      {/* Who are you? Section */}
      <div className="flex flex-col gap-4 items-center py-6 md:py-8 w-full">
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[#141414] text-sm md:text-base font-semibold leading-6">
            Who are you?
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full max-w-[1152px]">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <div className="bg-[#0177dc] flex gap-2 h-8 items-center justify-center px-3 md:px-4 py-2 rounded-2xl">
              <p className="text-white text-xs md:text-sm font-normal leading-6">
                Museum or Gallery
              </p>
            </div>
            <div className="bg-[#0177dc] flex gap-2 h-8 items-center justify-center px-3 md:px-4 py-2 rounded-2xl">
              <p className="text-white text-xs md:text-sm font-normal leading-6">
                Artist
              </p>
            </div>
            <div className="bg-[#0177dc] flex gap-2 h-8 items-center justify-center px-3 md:px-4 py-2 rounded-2xl">
              <p className="text-white text-xs md:text-sm font-normal leading-6">
                Real Estate Developer or Interior Design Professional
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <div className="bg-[#0177dc] flex gap-2 h-8 items-center justify-center px-3 md:px-4 py-2 rounded-2xl">
              <p className="text-white text-xs md:text-sm font-normal leading-6">
                Art Buyer or Collector
              </p>
            </div>
            <div className="bg-[#0177dc] flex gap-2 h-8 items-center justify-center px-3 md:px-4 py-2 rounded-2xl">
              <p className="text-white text-xs md:text-sm font-normal leading-6">
                Real Estate Agent
              </p>
            </div>
            <div className="bg-[#0177dc] flex gap-2 h-8 items-center justify-center px-3 md:px-4 py-2 rounded-2xl">
              <p className="text-white text-xs md:text-sm font-normal leading-6">
                Real Estate and Property Investor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
