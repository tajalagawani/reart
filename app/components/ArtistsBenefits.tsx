export default function ArtistsBenefits() {
  return (
    <section className="flex flex-col gap-4 items-center pt-8 pb-0 px-8">
      <div className="w-[1152px]">
        <h2 className="text-[#343434] text-[24px] font-bold leading-[40px] tracking-[0.4px]">
          How can Artists benefit from being ReART members?
        </h2>
      </div>
      <div className="flex flex-col gap-8 items-start py-4 w-[1152px]">
        {/* First Row */}
        <div className="flex gap-8 items-center w-[1072px]">
          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Curated Visibility &amp; Sales
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Showcase your work in ReART&apos;s vetted marketplace and property exhibitions, reaching a discerning audience of collectors, developers, and curators.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Multiple Income Streams
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Earn through direct sales, commissions, licensing, and exhibition fees - expanding your revenue opportunities beyond traditional gallery representation.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Commission Opportunities
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Receive bespoke art requests from real estate professionals, interior designers, and collectors for custom installations and property viewings.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8 items-center w-[1072px]">
          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Community &amp; Collaboration
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Engage with a growing community of artists, curators, architects, and design professionals. ReART fosters cross-disciplinary collaborations that amplify your creative reach.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center pt-4 pb-0 rounded-2xl w-[312px]">
            <div className="flex gap-2 items-center w-full">
              <p className="flex-1 text-[#141414] text-lg font-semibold leading-6 whitespace-pre-wrap">
                Museum &amp; Gallery Partnerships
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p className="flex-1 text-[#343434] text-base font-light leading-6 whitespace-pre-wrap">
                Collaborate with leading cultural institutions through art-integrated property projects, positioning your work within prestigious architectural settings.
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
