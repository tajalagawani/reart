export default function MuseumsBenefits() {
  return (
    <section className="flex flex-col gap-4 items-center pt-8 pb-0 px-8">
      <div className="w-[1152px]">
        <h2 className="text-[#343434] text-[24px] font-bold leading-[40px] tracking-[0.4px]">
          How can Museums & Galleries benefit from being ReART members?
        </h2>
      </div>
      <div className="flex flex-col gap-8 items-start py-4 w-[1152px]">
        {/* First Row */}
        <div className="flex gap-8 items-center w-[1072px]">
          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                New Audiences & Environment
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Showcase iconic collections in extraordinary spaces. ReART connects your exhibitions with innovative property viewings, introducing your works to high-value audiences who experience art in living, architectural contexts.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                New Revenue Streams
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Generate direct sales from curated property viewings and extend your institution&apos;s commercial reach beyond traditional walls.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Extended Exhibition Space
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Overcome spatial limitations. ReART&apos;s art-integrated property viewings allow you to expand your curatorial footprint - turning premium real estate into additional exhibition and sales venues.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8 items-center w-[1072px]">
          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Increased Visibility Among Key Stakeholders
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Gain visibility among real estate developers, architects, interior designers, art buyers, and collectors - the ecosystem shaping where art lives.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Talent Discovery & Collaboration
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Identify and recruit emerging artists featured through ReART&apos;s ecosystem for future exhibitions or permanent collections. The platform acts as a live discovery space for curators and art directors.
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2 items-start justify-center h-full">
            <button className="flex h-12 items-center justify-center px-6 py-2 rounded-2xl border border-solid border-[#141414] w-[184px]">
              <p className="text-[#141414] text-sm font-normal leading-6">
                Enquire membership
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
