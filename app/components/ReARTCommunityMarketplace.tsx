'use client';

import { useState, useEffect } from 'react';

export default function ReARTCommunityMarketplace() {
  const images = [
    { src: '/imageslandingpage/Artist profile-1.png', alt: 'Artist Profile - Art Pieces' },
    { src: '/imageslandingpage/Artist profile.png', alt: 'Artist Profile - Property Viewings' },
    { src: '/imageslandingpage/Explore.png', alt: 'Explore Categories' },
    { src: '/imageslandingpage/Live auctions.png', alt: 'Live Auctions' },
    { src: '/imageslandingpage/Mobile.png', alt: 'Mobile App View' },
    { src: '/imageslandingpage/Mobile2.png', alt: 'Mobile App View 2' },
    { src: '/imageslandingpage/Museum & Galleries profile.png', alt: 'Museum & Galleries Profile' },
    { src: '/imageslandingpage/Museum & Galleries profile-1.png', alt: 'Museum & Galleries Property Viewings' },
    { src: '/imageslandingpage/Museum & Galleries profile_1.png', alt: 'Museum & Galleries View 1' },
    { src: '/imageslandingpage/Museum & Galleries profile_2.png', alt: 'Museum & Galleries View 2' },
    { src: '/imageslandingpage/Museum & Galleries profile-1_1.png', alt: 'Museum & Galleries Featured' },
    { src: '/imageslandingpage/ReART Property Viewings.png', alt: 'ReART Property Viewings' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col gap-4 items-center py-12 md:py-20 px-4 md:px-8 bg-[#141414]">
      {/* Main Container */}
      <div className="flex flex-col gap-6 md:gap-8 items-center w-full max-w-[1424px]">
        {/* Heading Section */}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-12 md:leading-[72px]">
            ReART Community & Marketplace
          </h2>
          <p className="text-[#f7f7f7] text-lg md:text-[32px] font-light leading-8 md:leading-12 text-center max-w-6xl">
            The Central Curation and Discovery Platform
          </p>
        </div>

        {/* Made for Section */}
        <div className="flex flex-col gap-4 items-center py-0 md:py-8 w-full">
          <p className="text-white text-base font-semibold leading-6">
            Made for
          </p>
          <div className="flex gap-2 items-center justify-center flex-wrap max-w-4xl px-4">
            <div className="bg-[#0177dc] flex items-center justify-center px-3 py-1.5 rounded-full min-h-8">
              <p className="text-white text-xs sm:text-sm font-normal leading-tight whitespace-nowrap">
                Artists
              </p>
            </div>
            <div className="bg-[#0177dc] flex items-center justify-center px-3 py-1.5 rounded-full min-h-8">
              <p className="text-white text-xs sm:text-sm font-normal leading-tight whitespace-nowrap">
                Museums and Galleries
              </p>
            </div>
            <div className="bg-[#0177dc] flex items-center justify-center px-3 py-1.5 rounded-full min-h-8">
              <p className="text-white text-xs sm:text-sm font-normal leading-tight whitespace-nowrap">
                Real Estate Developers
              </p>
            </div>
            <div className="bg-[#0177dc] flex items-center justify-center px-3 py-1.5 rounded-full min-h-8">
              <p className="text-white text-xs sm:text-sm font-normal leading-tight whitespace-nowrap">
                Interior Design Professionals
              </p>
            </div>
            <div className="bg-[#0177dc] flex items-center justify-center px-3 py-1.5 rounded-full min-h-8">
              <p className="text-white text-xs sm:text-sm font-normal leading-tight whitespace-nowrap">
                Art Buyers and Collectors
              </p>
            </div>
            <div className="bg-[#0177dc] flex items-center justify-center px-3 py-1.5 rounded-full min-h-8">
              <p className="text-white text-xs sm:text-sm font-normal leading-tight whitespace-nowrap">
                Real Estate & Property Investors
              </p>
            </div>
          </div>
        </div>

        {/* Main Content with Features and Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start w-full max-w-6xl py-4 md:py-8">
          {/* Features List - Left Side */}
          <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
            {/* Quality Curation */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-base md:text-lg font-bold leading-6 tracking-[0.4px]">
                Quality Curation
              </h3>
              <p className="text-[#f7f7f7] text-xs md:text-sm font-normal leading-5">
                Vet and curate high-quality artworks to maintain marketplace standards
              </p>
            </div>

            {/* Discovery Engine */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-base md:text-lg font-bold leading-6 tracking-[0.4px]">
                Discovery Engine
              </h3>
              <p className="text-[#f7f7f7] text-xs md:text-sm font-normal leading-5">
                Help buyers find relevant art through personalised recommendations and search
              </p>
            </div>

            {/* Event Coordination */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-base md:text-lg font-bold leading-6 tracking-[0.4px]">
                Event Coordination
              </h3>
              <p className="text-[#f7f7f7] text-xs md:text-sm font-normal leading-5">
                Organise virtual & physical showcases, artist talks, and networking events.
              </p>
            </div>

            {/* Platform Management */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-base md:text-lg font-bold leading-6 tracking-[0.4px]">
                Platform Management
              </h3>
              <p className="text-[#f7f7f7] text-xs md:text-sm font-normal leading-5">
                Facilitate transactions, manage disputes, and ensure smooth platform operations.
              </p>
            </div>

            {/* Trend Analysis */}
            <div className="flex flex-col gap-2 items-start pt-4 rounded-2xl w-full">
              <h3 className="text-white text-base md:text-lg font-bold leading-6 tracking-[0.4px]">
                Trend Analysis
              </h3>
              <p className="text-[#f7f7f7] text-xs md:text-sm font-normal leading-5">
                Provide market insights and trending art styles to all stakeholders.
              </p>
            </div>
          </div>

          {/* Mobile Mockups - Right Side - Carousel */}
          <div className="flex items-center justify-center w-full">
            <div className="relative w-[456px] overflow-hidden">
              <div
                className="flex gap-2 items-start transition-transform duration-1200 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 228}px)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-[220px] rounded-[30px] overflow-hidden shadow-2xl relative"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                    {index !== currentIndex && (
                      <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-1200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
