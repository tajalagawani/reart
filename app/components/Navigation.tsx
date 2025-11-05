"use client";

import { useState } from "react";

const logoImg = "https://www.figma.com/api/mcp/asset/ecb05ec9-9403-47f6-b3af-65cda904733b";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-12 py-0 bg-white w-full">
      <div className="flex items-center gap-2 w-full max-w-[1152px]">
        {/* Left Side - Logo */}
        <div className="flex items-center h-14 shrink-0">
          <div className="relative w-[9.155px] h-[8.396px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28.787px] h-[28.787px]">
              <img
                alt="ReArt Logo"
                className="block max-w-none w-full h-full"
                src={logoImg}
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Center - Navbar items (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-2 lg:gap-4 min-h-px min-w-px">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex items-center justify-center gap-1 h-full px-2 lg:px-4 py-2 rounded-2xl">
              <div className="flex flex-col justify-center">
                <p className="text-[#343434] text-sm lg:text-base font-normal leading-6 whitespace-nowrap">
                  Membership
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center self-stretch">
            <div className="flex items-center justify-center gap-1 h-full px-2 lg:px-4 py-2 rounded-2xl">
              <div className="flex flex-col justify-center">
                <p className="text-[#343434] text-sm lg:text-base font-normal leading-6 whitespace-nowrap">
                  About us
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="flex items-center justify-center gap-1 h-full px-2 lg:px-4 py-2 rounded-2xl">
              <div className="flex flex-col justify-center">
                <p className="text-[#343434] text-sm lg:text-base font-normal leading-6 whitespace-nowrap">
                  Contact us
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex items-center justify-end gap-2 md:gap-4 shrink-0">
          <button className="hidden sm:flex items-center justify-center h-10 px-4 md:px-6 py-2 rounded-2xl border border-solid border-[#141414]">
            <p className="text-[#141414] text-sm font-normal leading-6">
              Login
            </p>
          </button>
          <button className="hidden sm:flex items-center justify-center h-10 px-4 md:px-6 py-2 rounded-2xl bg-[#141414]">
            <p className="text-white text-sm font-normal leading-6 whitespace-nowrap">
              Enquire membership
            </p>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#141414]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-t border-[#e3e3e3] shadow-lg z-50">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center justify-center gap-1 h-full px-4 py-3 rounded-2xl hover:bg-gray-50">
              <p className="text-[#343434] text-base font-normal leading-6">
                Membership
              </p>
            </div>
            <div className="flex items-center justify-center gap-1 h-full px-4 py-3 rounded-2xl hover:bg-gray-50">
              <p className="text-[#343434] text-base font-normal leading-6">
                About us
              </p>
            </div>
            <div className="flex items-center justify-center gap-1 h-full px-4 py-3 rounded-2xl hover:bg-gray-50">
              <p className="text-[#343434] text-base font-normal leading-6">
                Contact us
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-[#e3e3e3] items-center">
              <button className="flex items-center justify-center h-10 px-4 py-2 rounded-2xl border border-solid border-[#141414]">
                <span className="text-[#141414] text-xs font-normal leading-6">
                  Login
                </span>
              </button>
              <button className="flex items-center justify-center h-10 px-4 py-2 rounded-2xl bg-[#141414]">
                <span className="text-white text-xs font-normal leading-6 whitespace-nowrap">
                  Enquire membership
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
