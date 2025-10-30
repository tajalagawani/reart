import Image from "next/image";

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
                  <Image
                    src="/reart-logo.png"
                    alt="ReART"
                    className="object-contain"
                    fill
                    sizes="88px"
                  />
                </div>
                <p className="text-[#343434] text-base font-normal leading-6 text-center w-[224px]">
                  The Intersection between People, Art & Real Estate
                </p>
              </div>
            </div>

            {/* Navigation Links - 2025 Best Practice: Responsive grid */}
            <nav className="flex flex-col gap-8 items-center justify-center w-full" aria-label="Footer navigation">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-4xl">
                {/* Memberships Column */}
                <div className="flex flex-col gap-4 items-start justify-center px-4">
                  <div className="flex items-start pl-2">
                    <h3 className="text-[#141414] text-lg font-medium leading-8">
                      Memberships
                    </h3>
                  </div>
                  <a href="#membership-plans" className="flex gap-1 items-center justify-center p-2 rounded-2xl hover:bg-gray-200/50 transition-colors duration-200">
                    <span className="text-[#343434] text-base font-normal leading-6">
                      Membership Plans
                    </span>
                  </a>
                  <a href="#services" className="flex gap-1 items-center justify-center p-2 rounded-2xl hover:bg-gray-200/50 transition-colors duration-200">
                    <span className="text-[#343434] text-base font-normal leading-6">
                      Featured Services
                    </span>
                  </a>
                </div>

                {/* About us Column */}
                <div className="flex flex-col gap-4 items-start justify-center px-4">
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <div className="flex items-start pl-2 w-full">
                      <h3 className="text-[#141414] text-lg font-medium leading-8">
                        About us
                      </h3>
                    </div>
                    <a href="#who-we-are" className="flex gap-1 items-center justify-center p-2 rounded-2xl hover:bg-gray-200/50 transition-colors duration-200">
                      <span className="text-[#343434] text-base font-normal leading-6">
                        Who are we?
                      </span>
                    </a>
                    <a href="#vision-mission" className="flex gap-1 items-center justify-center p-2 rounded-2xl hover:bg-gray-200/50 transition-colors duration-200">
                      <span className="text-[#343434] text-base font-normal leading-6">
                        Vision & Mission
                      </span>
                    </a>
                    <a href="#values" className="flex gap-1 items-center justify-center p-2 rounded-2xl hover:bg-gray-200/50 transition-colors duration-200">
                      <span className="text-[#343434] text-base font-normal leading-6">
                        Our Values
                      </span>
                    </a>
                  </div>
                </div>

                {/* Contact us Column */}
                <div className="flex flex-col gap-4 items-start justify-center px-4 sm:col-span-2 lg:col-span-1">
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <div className="flex items-start pl-2 w-full">
                      <h3 className="text-[#141414] text-lg font-medium leading-8">
                        Contact us
                      </h3>
                    </div>
                    <a href="#support" className="flex gap-1 items-center justify-center p-2 rounded-2xl hover:bg-gray-200/50 transition-colors duration-200">
                      <span className="text-[#343434] text-base font-normal leading-6">
                        Support & FAQs
                      </span>
                    </a>
                    <a href="#careers" className="flex gap-1 items-center justify-center p-2 rounded-2xl hover:bg-gray-200/50 transition-colors duration-200">
                      <span className="text-[#343434] text-base font-normal leading-6">
                        Careers
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 relative hover:opacity-70 transition-opacity duration-200"
              aria-label="Follow us on Instagram"
            >
              <Image
                src="/social-instagram.svg"
                alt="Instagram"
                className="object-contain"
                fill
                sizes="24px"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 relative hover:opacity-70 transition-opacity duration-200"
              aria-label="Connect with us on LinkedIn"
            >
              <Image
                src="/social-linkedin.svg"
                alt="LinkedIn"
                className="object-contain"
                fill
                sizes="24px"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 relative hover:opacity-70 transition-opacity duration-200"
              aria-label="Follow us on X (Twitter)"
            >
              <Image
                src="/social-x.svg"
                alt="X (Twitter)"
                className="object-contain"
                fill
                sizes="24px"
              />
            </a>
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
