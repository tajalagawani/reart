"use client";

import { useState, useRef, useEffect } from "react";

export default function ValuePropositions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  // 2025 Best Practice: Touch gesture support
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const slides = [
    {
      title: "Unique integration of Art and Real Estate",
      description: "Combining curated high-quality art with luxury property sales to create immersive, lifestyle-driven experiences that accelerate property transactions."
    },
    {
      title: "Exclusive Artist Community & Curation",
      description: "A curated network of independent and museum-affiliated artists, providing access to premium art for high-net-worth clients and property developers. Maintaining quality and exclusivity through a vetted artist panel and museum partnerships."
    },
    {
      title: "New Revenue & Sales Channels",
      description: "The ReART Ecosystem unlocks a new path for revenue stream for artists, museums, galleries, interior design & architects, property developers and art collectors."
    },
    {
      title: "Dual Pathways for Artists",
      description: "Offers entry for artists either through independent acceptance or museum/gallery affiliation, ensuring quality while allowing scalable community growth."
    },
    {
      title: "Global Accessibility",
      description: "Making high-end art accessible to a worldwide clientele through a digital, immersive platform, democratising access to immersive art experiences."
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.querySelector('.slide-card')?.clientWidth || 0;
      const gap = 48; // gap-12 = 48px
      const newSlide = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentSlide(newSlide);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.slide-card')?.clientWidth || 0;
    const gap = 48; // gap-12 = 48px
    container.scrollTo({
      left: (cardWidth + gap) * index,
      behavior: "smooth"
    });
    setCurrentSlide(index);
  };

  // 2025 Best Practice: Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;

    // Pause auto-scroll on touch
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && currentSlide < slides.length - 1) {
        // Swipe left - next slide
        scrollToSlide(currentSlide + 1);
      } else if (swipeDistance < 0 && currentSlide > 0) {
        // Swipe right - previous slide
        scrollToSlide(currentSlide - 1);
      }
    }

    // Resume auto-scroll after a delay
    setTimeout(startAutoScroll, 2000);
  };

  // Auto scroll with improved start/stop logic
  const startAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }

    autoScrollInterval.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        scrollToSlide(nextSlide);
        return nextSlide;
      });
    }, 3000);
  };

  useEffect(() => {
    startAutoScroll();

    // Pause auto-scroll on hover/touch
    const container = scrollContainerRef.current;
    const handleMouseEnter = () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };

    const handleMouseLeave = () => {
      startAutoScroll();
    };

    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [slides.length]);

  return (
    <section className="relative bg-[#141414] flex flex-col gap-8 items-center justify-center py-10 md:py-16 overflow-hidden">
      {/* Horizontal Scroll Container - 2025 Best Practice: Touch-enabled */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full px-4 md:px-8 lg:px-[136px] gap-4 md:gap-6 lg:gap-8 touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide-card shrink-0 snap-start flex flex-col gap-2 items-start w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] min-w-[280px] px-4 md:px-6"
          >
            <h3 className="text-white text-lg font-semibold leading-6 w-full">
              {slide.title}
            </h3>
            <p className="text-[#f7f7fa] text-base font-light leading-6 w-full">
              {slide.description}
            </p>
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-2 items-center justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-2 h-2 bg-white"
                : "w-1.5 h-1.5 bg-[#8c8c8c]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* 2025 Best Practice: Smooth scroll with reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .slide-card {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
