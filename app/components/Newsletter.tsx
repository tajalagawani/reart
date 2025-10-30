export default function Newsletter() {
  return (
    <section className="bg-white flex flex-col gap-12 items-center py-12 md:py-16 px-4 md:px-8">
      {/* Text Content */}
      <div className="flex flex-col gap-4 items-center justify-end text-center w-full max-w-[1152px]">
        <h2 className="text-[#141414] text-[24px] md:text-[32px] font-semibold leading-[36px] md:leading-[48px] w-full whitespace-pre-wrap">
          Unlock More with ReART Membership
        </h2>
        <p className="text-[#525252] text-sm md:text-base font-normal leading-6 w-full whitespace-pre-wrap">
          Be part of a global community. Access exclusive art, properties, and resources to grow your business.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-2 w-full max-w-[1152px]">
        {/* Email Input */}
        <div className="flex flex-col gap-2 items-start w-full max-w-[432px] min-w-[200px] relative">
          <div className="flex flex-col gap-2 items-start w-full">
            <div className="bg-white border border-[#e3e3e3] flex h-12 items-center justify-between px-4 rounded-2xl w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 text-sm font-normal italic leading-6 text-[#525252] outline-none bg-transparent"
              />
            </div>
          </div>
          {/* Label */}
          <div className="absolute bg-white flex gap-2 items-center justify-center left-4 px-2 rounded top-[-9px]">
            <p className="text-[#525252] text-xs font-normal leading-4">
              Email
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#141414] flex h-12 items-center justify-center px-6 py-2 rounded-2xl">
          <p className="text-white text-sm font-normal leading-6">
            Enquire membership
          </p>
        </button>
      </div>
    </section>
  );
}
