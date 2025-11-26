import Image from "next/image";

const imgHeroSection = "https://www.figma.com/api/mcp/asset/a8e25460-29a8-4b50-b90e-5241e986d0b5";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] h-[clamp(400px,60vh,800px)]">
      {/* Background - 2025 Best Practice: Next.js Image with priority */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt="Hero background"
            className="object-cover"
            src={imgHeroSection}
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(20,20,20,0.7)] to-[rgba(20,20,20,0.85)] inset-0" />
      </div>

      {/* Hero Content - 2025 Best Practice: Fluid typography */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-[clamp(1rem,4vw,2rem)] px-4 md:px-8 lg:px-12">
        {/* Headline */}
        <h1 className="text-white text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.5] text-center max-w-4xl">
          <span className="block">Hello ORCHA!</span>
          <span className="block">- Art, Architecture & AR</span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 backdrop-blur-[2px]">
          <button className="flex items-center justify-center h-10 md:h-12 px-4 md:px-6 py-2 rounded-2xl border border-solid border-white w-full sm:w-auto hover:bg-white hover:text-[#141414] transition-all duration-300 active:scale-95">
            <span className="text-white text-xs md:text-sm font-normal leading-6">
              Contact us
            </span>
          </button>
          <button className="flex items-center justify-center h-10 md:h-12 px-4 md:px-6 py-2 rounded-2xl bg-white w-full sm:w-auto hover:bg-opacity-90 transition-all duration-300 active:scale-95">
            <span className="text-[#141414] text-xs md:text-sm font-normal leading-6 whitespace-nowrap">
              Enquire membership
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
