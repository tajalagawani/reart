export default function Footer() {
  return (
    <footer className="bg-[#f7f7fa] border border-[#f7f7f7] rounded-tl-[30px] rounded-tr-[30px] w-full">
      <div className="flex flex-col gap-16 items-center justify-center overflow-hidden pt-16 pb-0 px-4 md:px-16">
        {/* Main Content */}
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Top Section - Logo, Tagline, Nav, Social */}
          <div className="flex flex-col gap-16 items-center w-full max-w-[1152px]">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="w-22 h-22 relative">
                  <img
                    src="/reart-logo.png"
                    alt="ReART"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[#343434] text-base font-normal leading-6 text-center w-[224px]">
                  The Intersection between People, Art & Real Estate
                </p>
              </div>
            </div>

            {/* Navigation Links - 3 Columns Side by Side */}
            <div className="flex flex-col gap-8 items-center justify-center w-full">
              <div className="flex flex-col md:flex-row items-start justify-center w-full gap-8 md:gap-0">
                {/* Memberships Column */}
                <div className="flex flex-col gap-4 items-start justify-center px-4 flex-1">
                  <div className="flex items-start pl-2">
                    <h3 className="text-[#141414] text-lg font-medium leading-8">
                      Memberships
                    </h3>
                  </div>
                  <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                    <p className="text-[#343434] text-base font-normal leading-6">
                      Membership Plans
                    </p>
                  </div>
                  <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                    <p className="text-[#343434] text-base font-normal leading-6">
                      Featured Services
                    </p>
                  </div>
                </div>

                {/* About us Column */}
                <div className="flex flex-col gap-8 items-start justify-center px-4 flex-1">
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <div className="flex items-start pl-2 w-full">
                      <h3 className="text-[#141414] text-lg font-medium leading-8">
                        About us
                      </h3>
                    </div>
                    <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                      <p className="text-[#343434] text-base font-normal leading-6">
                        Who are we?
                      </p>
                    </div>
                    <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                      <p className="text-[#343434] text-base font-normal leading-6">
                        Vision & Mission
                      </p>
                    </div>
                    <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                      <p className="text-[#343434] text-base font-normal leading-6">
                        Our Values
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact us Column */}
                <div className="flex flex-col gap-8 items-start justify-center px-4 flex-1">
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <div className="flex items-start pl-2 w-full">
                      <h3 className="text-[#141414] text-lg font-medium leading-8">
                        Contact us
                      </h3>
                    </div>
                    <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                      <p className="text-[#343434] text-base font-normal leading-6">
                        Support & FAQs
                      </p>
                    </div>
                    <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                      <p className="text-[#343434] text-base font-normal leading-6">
                        Careers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 items-center">
            <div className="w-6 h-6 relative">
              <img
                src="/social-instagram.svg"
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-6 h-6 relative">
              <img
                src="/social-linkedin.svg"
                alt="LinkedIn"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-6 h-6 relative">
              <img
                src="/social-x.svg"
                alt="X (Twitter)"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Links & Copyright */}
        <div className="bg-[#f7f7fa] flex flex-col gap-8 items-center justify-center pb-8 w-full max-w-[1152px]">
          <div className="w-full">
            <div className="flex flex-col gap-2 items-center justify-center w-full">
              <div className="flex flex-wrap gap-8 items-center justify-center">
                <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                  <p className="text-[#343434] text-sm font-normal leading-6">
                    Cookie settings
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                  <p className="text-[#343434] text-sm font-normal leading-6">
                    Privacy
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                  <p className="text-[#343434] text-sm font-normal leading-6">
                    Platform terms
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center p-2 rounded-2xl">
                  <p className="text-[#343434] text-sm font-normal leading-6">
                    Accessibility
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex gap-2 items-center">
            <p className="text-[#141414] text-xs font-normal leading-4 text-center">
              Copyright © ReART 2025 | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
