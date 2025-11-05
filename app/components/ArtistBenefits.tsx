export default function ArtistBenefits() {
  return (
    <section className="flex flex-col gap-4 items-center py-12 md:py-20 px-4 md:px-8">
      {/* Artist Intro */}
      <div className="flex flex-col gap-4 items-start w-full max-w-[1152px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center whitespace-pre-wrap">
          <p className="text-[#0177dc] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] w-full">
            Artist
          </p>
          <p className="text-[#141414] text-base md:text-lg font-semibold leading-6 w-full">
            Creative professionals seeking exposure and revenue
          </p>
        </div>

        {/* Description Paragraphs */}
        <div className="flex flex-col gap-4 items-start">
          <p className="text-[#343434] text-sm md:text-base font-light leading-6 w-full max-w-[1072px] whitespace-pre-wrap">
            For already established artists, expanding their reach and exploring new revenue streams can feel constrained by traditional channels. ReART allows them to embrace a modern approach that returns art to its rightful place within homes, connects them with a new audience of passionate collectors, and celebrates their work in an innovative new space - in a home during property viewings.
          </p>
          <p className="text-[#343434] text-sm md:text-base font-light leading-6 w-full max-w-[1072px] whitespace-pre-wrap">
            For emerging artists, breaking into the traditional art market may be challenging with gallery commissions and limited control over sales. ReART provides emerging artists a new platform where they can showcase their work, reach a broader audience of high-end buyers, and gain fair compensation for our creations with or without being tied to established institutions through the dual pathway entry.
          </p>
        </div>

        {/* Mobile Mockups */}
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start py-8 w-full">
          <div className="w-[185px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <img
              src="/imageslandingpage/Artist profile-1.png"
              alt="Artist Art Pieces Gallery"
              className="w-full h-auto"
            />
          </div>
          <div className="w-[185px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <img
              src="/imageslandingpage/Artist profile.png"
              alt="Artist Art Property Viewings"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col gap-4 items-start w-full max-w-[1152px] pt-8 md:pt-12">
        <div className="w-full max-w-[1152px]">
          <h3 className="text-[#343434] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
            How can Artists benefit from being ReART members?
          </h3>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 items-start py-4 w-full max-w-[1152px]">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Curated Visibility &amp; Sales
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Showcase your work in ReART&apos;s vetted marketplace and property exhibitions, reaching a discerning audience of collectors, developers, and curators.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Multiple Income Streams
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Earn through direct sales, commissions, licensing, and exhibition fees - expanding your revenue opportunities beyond traditional gallery representation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Commission Opportunities
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Receive bespoke art requests from real estate professionals, interior designers, and collectors for custom installations and property viewings.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Community &amp; Collaboration
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Engage with a growing community of artists, curators, architects, and design professionals. ReART fosters cross-disciplinary collaborations that amplify your creative reach.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Museum &amp; Gallery Partnerships
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Collaborate with leading cultural institutions through art-integrated property projects, positioning your work within prestigious architectural settings.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center pt-4">
              <button className="flex h-[48px] w-[184px] items-center justify-center gap-2 rounded-2xl border border-solid border-[#141414] bg-transparent hover:bg-[#141414] hover:text-white transition-colors duration-200 px-6 py-2">
                <span className="text-[#141414] text-sm font-normal leading-6 whitespace-nowrap">
                  Enquire membership
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
