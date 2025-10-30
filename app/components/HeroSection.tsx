const imgHeroSection = "https://www.figma.com/api/mcp/asset/a8e25460-29a8-4b50-b90e-5241e986d0b5";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute left-0 max-w-none w-full h-full top-0 object-cover"
            src={imgHeroSection}
          />
        </div>
        <div className="absolute bg-[rgba(20,20,20,0.8)] inset-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 md:gap-8 px-4 md:px-8 lg:px-12">
        {/* Headline */}
        <div className="text-white text-[28px] md:text-[38px] lg:text-[48px] font-bold leading-[42px] md:leading-[57px] lg:leading-[72px] text-center">
          <p className="mb-0">The Next Generation of Spaces </p>
          <p>- Art, Architecture & AR</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 backdrop-blur-[2px]">
          <button className="flex items-center justify-center h-10 md:h-12 px-4 md:px-6 py-2 rounded-2xl border border-solid border-white w-full sm:w-auto">
            <p className="text-white text-xs md:text-sm font-normal leading-6">
              Contact us
            </p>
          </button>
          <button className="flex items-center justify-center h-10 md:h-12 px-4 md:px-6 py-2 rounded-2xl bg-white w-full sm:w-auto">
            <p className="text-[#141414] text-xs md:text-sm font-normal leading-6 whitespace-nowrap">
              Enquire membership
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
