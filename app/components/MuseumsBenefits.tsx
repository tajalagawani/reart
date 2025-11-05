import Image from 'next/image';

export default function MuseumsBenefits() {
  return (
    <section className="flex flex-col gap-8 items-center pt-8 pb-0 px-4 sm:px-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="w-full max-w-[1152px]">
        <h2 className="text-[#343434] text-xl sm:text-2xl font-bold leading-[40px] tracking-[0.4px]">
          How can Museums & Galleries benefit from being ReART members?
        </h2>
        <p className="text-[#343434] text-sm sm:text-base mt-2 font-light">
          Cultural institutions and exhibition spaces
        </p>
      </div>

      {/* Mobile Mockups Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full">
        <div className="relative w-full max-w-[300px] lg:max-w-[350px]">
          <Image
            src="/imageslandingpage/Museum & Galleries profile.png"
            alt="Museum & Galleries Featured Artists Profile"
            width={392}
            height={844}
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>
        <div className="relative w-full max-w-[300px] lg:max-w-[350px]">
          <Image
            src="/imageslandingpage/Museum & Galleries profile-1.png"
            alt="Museum & Galleries Art Property Viewings"
            width={392}
            height={844}
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="flex flex-col gap-8 items-start py-4 w-full max-w-[1152px]">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col gap-2 items-start pt-4 pb-0 rounded-2xl">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6">
                New Audiences & Environment
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6">
                Showcase iconic collections in extraordinary spaces. ReART connects your exhibitions with innovative property viewings, introducing your works to high-value audiences who experience art in living, architectural contexts.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start pt-4 pb-0 rounded-2xl">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6">
                New Revenue Streams
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6">
                Generate direct sales from curated property viewings and extend your institution&apos;s commercial reach beyond traditional walls.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start pt-4 pb-0 rounded-2xl">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6">
                Extended Exhibition Space
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6">
                Overcome spatial limitations. ReART&apos;s art-integrated property viewings allow you to expand your curatorial footprint - turning premium real estate into additional exhibition and sales venues.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col gap-2 items-start pt-4 pb-0 rounded-2xl">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6">
                Increased Visibility Among Key Stakeholders
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6">
                Gain visibility among real estate developers, architects, interior designers, art buyers, and collectors - the ecosystem shaping where art lives.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start pt-4 pb-0 rounded-2xl">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6">
                Talent Discovery & Collaboration
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6">
                Identify and recruit emerging artists featured through ReART&apos;s ecosystem for future exhibitions or permanent collections. The platform acts as a live discovery space for curators and art directors.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start justify-center">
            <button className="flex h-12 items-center justify-center px-6 py-2 rounded-2xl border border-solid border-[#141414] hover:bg-[#141414] hover:text-white transition-colors duration-300">
              <p className="text-sm font-normal leading-6">
                Enquire membership
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
