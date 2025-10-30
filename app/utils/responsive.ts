/**
 * 2025 Best Practices: Responsive Design Utilities
 * Centralized responsive design patterns for consistent implementation
 */

/**
 * Fluid typography classes using clamp()
 * Automatically scales between mobile and desktop sizes
 */
export const fluidText = {
  xs: "text-[clamp(0.75rem,0.7rem+0.25vw,0.875rem)]",
  sm: "text-[clamp(0.875rem,0.8rem+0.375vw,1rem)]",
  base: "text-[clamp(1rem,0.95rem+0.25vw,1.125rem)]",
  lg: "text-[clamp(1.125rem,1rem+0.625vw,1.5rem)]",
  xl: "text-[clamp(1.25rem,1.1rem+0.75vw,1.875rem)]",
  "2xl": "text-[clamp(1.5rem,1.3rem+1vw,2.25rem)]",
  "3xl": "text-[clamp(1.875rem,1.5rem+1.875vw,3rem)]",
  "4xl": "text-[clamp(2.25rem,1.75rem+2.5vw,3.75rem)]",
  "5xl": "text-[clamp(3rem,2rem+5vw,4.5rem)]",
} as const;

/**
 * Fluid spacing classes using clamp()
 * Automatically scales padding and margins
 */
export const fluidSpace = {
  xs: "clamp(0.5rem,0.45rem+0.25vw,0.75rem)",
  sm: "clamp(0.75rem,0.65rem+0.5vw,1rem)",
  md: "clamp(1rem,0.85rem+0.75vw,1.5rem)",
  lg: "clamp(1.5rem,1.2rem+1.5vw,2.5rem)",
  xl: "clamp(2rem,1.5rem+2.5vw,4rem)",
  "2xl": "clamp(3rem,2rem+5vw,6rem)",
} as const;

/**
 * Responsive container patterns
 */
export const containers = {
  // Standard container with max-width and responsive padding
  standard: "w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-12",

  // Fluid container that adapts padding based on viewport
  fluid: "w-full max-w-[1440px] mx-auto px-[clamp(1rem,5vw,2rem)]",

  // Full bleed container
  fullBleed: "w-full px-4 md:px-8 lg:px-16",

  // Narrow container for reading content
  narrow: "w-full max-w-3xl mx-auto px-4 md:px-8",
} as const;

/**
 * Common responsive grid patterns
 */
export const grids = {
  // 1 column mobile, 2 tablet, 3 desktop
  auto: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8",

  // 1 column mobile, 2 desktop
  simple: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8",

  // 4 column grid for cards
  cards: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6",

  // Auto-fit responsive grid
  autoFit: "grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 md:gap-6",
} as const;

/**
 * Touch-friendly button classes
 * Ensures minimum 44x44px touch targets on mobile
 */
export const touchButton = {
  base: "min-h-[44px] min-w-[44px] active:scale-95 transition-transform duration-200",
  hover: "hover:bg-opacity-90 hover:scale-105 transition-all duration-300",
  focus: "focus-visible:outline-2 focus-visible:outline-offset-2",
} as const;

/**
 * Responsive image patterns
 */
export const images = {
  // Full width responsive image
  responsive: "w-full h-auto object-cover",

  // Aspect ratio containers
  aspectVideo: "aspect-video object-cover",
  aspectSquare: "aspect-square object-cover",
  aspectPortrait: "aspect-[3/4] object-cover",
} as const;

/**
 * Accessibility helpers
 */
export const a11y = {
  // Screen reader only text
  srOnly: "sr-only",

  // Focus visible styles
  focusVisible: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]",

  // Skip to content link
  skipLink: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded",
} as const;

/**
 * Animation preferences
 */
export const animations = {
  // Respect reduced motion preference
  respectMotion: "motion-reduce:transition-none motion-reduce:animate-none",

  // Smooth transitions
  smooth: "transition-all duration-300 ease-in-out",

  // Fast transitions
  fast: "transition-all duration-150 ease-in-out",
} as const;

/**
 * Helper function to combine responsive classes
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Breakpoint values for JavaScript usage
 */
export const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Media query helper for client-side usage
 */
export function createMediaQuery(breakpoint: keyof typeof breakpoints): string {
  return `(min-width: ${breakpoints[breakpoint]}px)`;
}
