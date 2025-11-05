export default function MemberBenefits() {
  return (
    <section className="flex flex-col gap-4 items-center py-12 md:py-20 px-4 md:px-8">
      <div className="w-full max-w-[1152px]">
        <h2 className="text-[#141414] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[48px] md:leading-[54px] lg:leading-[60px]">
          How each Member Benefits
        </h2>
      </div>

      {/* Museums & Galleries Section */}
      <div className="flex flex-col gap-4 items-start w-full max-w-[1152px] pt-12 md:pt-20">
        {/* Intro Section */}
        <div className="flex flex-col gap-4 w-full">
          {/* Title and Subtitle */}
          <div className="flex flex-col items-center whitespace-pre-wrap">
            <p className="text-[#0177dc] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px] w-full">
              Museum &amp; Gallery
            </p>
            <p className="text-[#141414] text-base md:text-lg font-semibold leading-6 w-full">
              Cultural institutions and exhibition spaces
            </p>
          </div>

          {/* Description Paragraph */}
          <div className="flex flex-col gap-4 items-start">
            <p className="text-[#343434] text-sm md:text-base font-light leading-6 w-full max-w-[1072px] whitespace-pre-wrap">
              Galleries and museums are limited with space and capacity, whilst some face challenges with reach. ReART provides a new medium to enable growth, the ecosystem allows them to expand their reach, stay innovative and introduce new revenue streams by showcasing their art collections through property viewings.
            </p>
          </div>

          {/* Mobile Mockups */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start py-8 w-full">
            <div className="w-[185px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <img
                src="/imageslandingpage/Museum & Galleries profile.png"
                alt="Museum & Gallery Featured Artists Profile"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[185px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <img
                src="/imageslandingpage/Museum & Galleries profile-1.png"
                alt="Museum & Gallery Art Property Viewings"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1152px]">
          <h3 className="text-[#343434] text-[20px] md:text-[24px] font-bold leading-[32px] md:leading-[40px] tracking-[0.4px]">
            How can Museums &amp; Galleries benefit from being ReART members?
          </h3>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 items-start py-4 w-full max-w-[1152px]">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  New Audiences &amp; Environment
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Showcase iconic collections in extraordinary spaces. ReART connects your exhibitions with innovative property viewings, introducing your works to high-value audiences who experience art in living, architectural contexts.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  New Revenue Streams
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Generate direct sales from curated property viewings and extend your institution&apos;s commercial reach beyond traditional walls.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Extended Exhibition Space
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Overcome spatial limitations. ReART&apos;s art-integrated property viewings allow you to expand your curatorial footprint - turning premium real estate into additional exhibition and sales venues.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Increased Visibility Among Key Stakeholders
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Gain visibility among real estate developers, architects, interior designers, art buyers, and collectors - the ecosystem shaping where art lives.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl">
              <div className="flex gap-2 items-center w-full">
                <p className="flex-1 text-[#141414] text-base md:text-lg font-semibold leading-6 whitespace-pre-wrap">
                  Talent Discovery &amp; Collaboration
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center w-full">
                <p className="flex-1 text-[#343434] text-sm md:text-base font-light leading-6 whitespace-pre-wrap">
                  Identify and recruit emerging artists featured through ReART&apos;s ecosystem for future exhibitions or permanent collections. The platform acts as a live discovery space for curators and art directors.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center pt-4">
              <button className="flex h-[48px] w-[184px] items-center justify-center gap-2 rounded-2xl border border-solid border-[#141414] bg-transparent hover:bg-[#141414] hover:text-white transition-colors duration-200 px-6 py-2">
                <span className="text-[#141414] hover:text-white text-sm font-normal leading-6 whitespace-nowrap">
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
