# CLAUDE.md - AI Assistant Guide for ReART Codebase

> **Last Updated**: 2025-11-19
> **Version**: 0.1.0
> **Project**: ReART - The Next Generation of Realms

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Directory Structure](#directory-structure)
4. [Development Workflows](#development-workflows)
5. [Code Conventions](#code-conventions)
6. [Component Patterns](#component-patterns)
7. [Styling Guidelines](#styling-guidelines)
8. [Git Workflow](#git-workflow)
9. [Common Tasks](#common-tasks)
10. [Important Considerations](#important-considerations)

---

## Project Overview

**ReART** is a global art & real estate technology platform that bridges fine art, real estate, and AR/immersive technology. The current codebase is a **single-page landing site** built with the latest web technologies to showcase the platform's value proposition.

### Key Features
- Curated art marketplace connecting artists, museums, and collectors
- AR-enabled property viewings integrated with art exhibitions
- Multi-audience platform (Artists, Museums, Collectors, Real Estate, Investors)
- Membership-based model (Basic, Premium, Enterprise)
- Global accessibility with immersive technology

### Current State
- **Status**: Production-ready landing page
- **Pages**: Single homepage with 14 sections
- **Components**: 17 React components (2,180+ lines)
- **Assets**: 32 optimized images
- **Development**: ~3 weeks from initial commit to current state

---

## Tech Stack

### Core Dependencies
```json
{
  "next": "16.0.1",           // Latest Next.js with App Router
  "react": "19.2.0",          // Latest React with modern features
  "react-dom": "19.2.0",
  "typescript": "^5",         // TypeScript with strict mode
  "tailwindcss": "^4"         // Latest Tailwind CSS
}
```

### Key Technologies
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5+ (strict mode)
- **Styling**: Tailwind CSS 4 + PostCSS
- **Fonts**: Inter (Google Fonts)
- **Image Optimization**: Next.js Image with Figma API integration
- **Deployment Target**: Vercel Platform

### Browser Support
- Modern browsers (ES2017+)
- WebP image format support
- CSS Container Queries
- CSS Custom Properties (CSS Variables)

---

## Directory Structure

```
/home/user/reart/
├── app/
│   ├── components/          # All React components (17 files)
│   │   ├── Navigation.tsx            # Header nav (client component)
│   │   ├── HeroSection.tsx           # Hero banner
│   │   ├── ValuePropositions.tsx     # Auto-scroll carousel (client)
│   │   ├── WhatIsReART.tsx           # Platform description
│   │   ├── ReARTEcosystem.tsx        # Audience tags
│   │   ├── MemberBenefits.tsx        # General benefits
│   │   ├── ArtistBenefits.tsx        # Artist-specific benefits
│   │   ├── CollectorsBenefits.tsx    # Collector benefits
│   │   ├── RealEstateBenefits.tsx    # Real estate benefits
│   │   ├── InvestorsBenefits.tsx     # Investor benefits
│   │   ├── MuseumsBenefits.tsx       # Museum/gallery benefits
│   │   ├── ReARTCommunityMarketplace.tsx
│   │   ├── PlatformServices.tsx      # Services showcase
│   │   ├── Memberships.tsx           # Pricing tiers
│   │   ├── Newsletter.tsx            # Email signup
│   │   └── Footer.tsx                # Site footer
│   ├── utils/
│   │   └── responsive.ts    # Responsive design utilities
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage (imports all components)
│   └── globals.css          # Global styles + Tailwind config
├── docs/
│   └── figma-*.md           # Figma design documentation
├── public/
│   ├── imageslandingpage/   # Landing page images (13 files)
│   └── [various assets]     # Icons, logos, social media
├── .claude/                 # Claude Code configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js config (images, optimization)
├── postcss.config.mjs       # PostCSS + Tailwind setup
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

### Key Files to Know

| File | Purpose | When to Edit |
|------|---------|--------------|
| `app/page.tsx` | Homepage - imports all sections | Adding/removing sections |
| `app/layout.tsx` | Root layout, metadata, fonts | Site-wide changes, SEO |
| `app/globals.css` | Global styles, CSS variables | Theme changes, design tokens |
| `app/utils/responsive.ts` | Responsive utilities | Adding new responsive patterns |
| `next.config.ts` | Next.js configuration | Image domains, build settings |
| `tsconfig.json` | TypeScript settings | Type checking rules |

---

## Development Workflows

### Getting Started
```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Server
- **URL**: http://localhost:3000
- **Hot Reload**: Automatic on file save
- **Port**: 3000 (default)

### Build Process
1. TypeScript compilation
2. Component optimization (React 19)
3. Image optimization (WebP conversion)
4. CSS optimization (Tailwind purge)
5. Bundle splitting and minification

---

## Code Conventions

### File Naming
- **Components**: PascalCase (e.g., `ArtistBenefits.tsx`)
- **Utilities**: camelCase (e.g., `responsive.ts`)
- **Config**: kebab-case (e.g., `next.config.ts`)
- **CSS**: kebab-case (e.g., `globals.css`)

### Import Order
```tsx
// 1. Type imports
import type { Metadata } from "next";

// 2. Framework imports
import { Inter } from "next/font/google";
import Image from "next/image";

// 3. React imports
import { useState, useRef } from "react";

// 4. Local component imports
import Navigation from "./components/Navigation";

// 5. Utility imports
import { fluidText, containers } from "./utils/responsive";
```

### Component Structure
```tsx
// Add "use client" ONLY if needed for interactivity
"use client";

import { useState } from "react";

export default function ComponentName() {
  // 1. Hooks first
  const [state, setState] = useState();

  // 2. Event handlers
  const handleEvent = () => {
    // Logic here
  };

  // 3. Early returns for conditional rendering
  if (!data) return null;

  // 4. Main render
  return (
    <section className="...">
      {/* JSX with descriptive comments */}
    </section>
  );
}
```

### TypeScript Conventions
- **Strict Mode**: Always enabled
- **Type Imports**: Use `import type` for type-only imports
- **Inference**: Prefer type inference over explicit typing
- **Props**: Define inline for simple components
- **Refs**: Explicitly type refs (e.g., `useRef<HTMLDivElement>(null)`)

```tsx
// Good: Type inference
const [isOpen, setIsOpen] = useState(false);

// Good: Inline props typing
export default function Component({ title }: { title: string }) {}

// Good: Type imports
import type { Metadata } from "next";

// Good: Ref typing
const scrollRef = useRef<HTMLDivElement>(null);
```

---

## Component Patterns

### Server vs Client Components

**Default: Server Components**
- Use for static content, data fetching, SEO
- No `"use client"` directive needed
- Most components in this codebase

**Client Components** (require `"use client"`)
- When using React hooks (useState, useEffect, useRef)
- When handling browser events (onClick, onChange)
- When using browser APIs (localStorage, window)
- Examples in codebase: `Navigation.tsx`, `ValuePropositions.tsx`

### Image Handling
Always use Next.js Image component:
```tsx
import Image from "next/image";

<Image
  src="/path/to/image.png"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="..."
  priority={false}  // true for above-fold images
/>
```

### Responsive Components Pattern
```tsx
<section className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12">
  <div className="w-full md:w-1/2 lg:w-1/3">
    {/* Content */}
  </div>
</section>
```

### Container Pattern
```tsx
<section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-12">
  {/* Centered content with responsive padding */}
</section>
```

### Semantic HTML
Always use semantic elements:
- `<section>` for content sections
- `<nav>` for navigation
- `<header>` and `<footer>` for page structure
- `<h1>` (once), `<h2>`, `<h3>` for headings
- `<article>` for self-contained content

---

## Styling Guidelines

### Tailwind CSS 4 Approach

**Mobile-First Philosophy**
```tsx
// ✅ Good: Mobile-first
className="text-sm md:text-base lg:text-lg"

// ❌ Bad: Desktop-first
className="text-lg md:text-sm"
```

### Responsive Breakpoints
```
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Small laptops
xl:  1280px  // Desktops
2xl: 1536px  // Large desktops
```

### Design Tokens (from globals.css)

#### Colors
```css
--primary-black: #141414    /* Buttons, headings */
--secondary-black: #343434  /* Body text */
--brand-blue: #0177dc       /* Accents, links, tags */
--gray-52: #525252
--gray-65: #656565
--gray-8c: #8c8c8c
--gray-d2: #d2d2d2
--gray-e3: #e3e3e3
--background: #f7f7fa       /* Footer background */
--foreground: #ffffff       /* Main background */
```

#### Typography Scale (Fluid with clamp)
```css
--font-size-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
--font-size-sm:   clamp(0.875rem, 0.85rem + 0.25vw, 1rem)
--font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem)
--font-size-lg:   clamp(1.125rem, 1rem + 0.5vw, 1.25rem)
--font-size-xl:   clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)
--font-size-2xl:  clamp(1.5rem, 1.3rem + 1vw, 2rem)
--font-size-3xl:  clamp(2rem, 1.6rem + 2vw, 3rem)
--font-size-4xl:  clamp(2.5rem, 1.8rem + 3.5vw, 3.75rem)
--font-size-5xl:  clamp(3rem, 2rem + 5vw, 4.5rem)
```

#### Spacing Scale (Fluid with clamp)
```css
--space-xs:  clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem)
--space-sm:  clamp(0.75rem, 0.7rem + 0.25vw, 1rem)
--space-md:  clamp(1rem, 0.9rem + 0.5vw, 1.5rem)
--space-lg:  clamp(1.5rem, 1.3rem + 1vw, 2.5rem)
--space-xl:  clamp(2rem, 1.6rem + 2vw, 4rem)
--space-2xl: clamp(3rem, 2rem + 5vw, 6rem)
```

### Using Responsive Utilities

Import from `app/utils/responsive.ts`:
```tsx
import { fluidText, fluidSpace, containers, cn } from "./utils/responsive";

// Usage
<h1 className={cn(fluidText.text4xl, "font-bold")}>
<section className={cn(containers.default, fluidSpace.py.xl)}>
```

### Accessibility Classes
```tsx
// Focus visible
className="focus-visible:outline-2 focus-visible:outline-offset-2"

// Touch targets (minimum 44px)
className="min-h-[44px] min-w-[44px]"

// Screen reader only
className="sr-only"

// Reduced motion
className="transition-transform motion-reduce:transition-none"
```

---

## Git Workflow

### Branch Strategy
- **Main Branch**: `main` (not specified in current repo)
- **Feature Branches**: `claude/claude-md-{session-id}`
- **Current Branch**: `claude/claude-md-mi6jt7khq9cd3e4q-01QwhPcy7q7K4mrAXMJ3oFT1`

### Commit Message Style
Based on recent commits:
```
{type}: {concise description}
  - Detail 1
  - Detail 2
```

Examples:
```
feat: Add artist benefits section
  - Create ArtistBenefits component
  - Add benefit cards with icons
  - Integrate Figma assets

fix: Footer social media icons smaller on mobile
  - Mobile: 16px (w-4 h-4) with 12px gap
  - Desktop (md+): 24px (w-6 h-6) with 24px gap

refactor: Implement comprehensive responsive design
  - Create utils/responsive.ts
  - Add fluid typography and spacing
  - Add accessibility improvements
```

### Git Commands Workflow
```bash
# Check status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: Add new feature
  - Detail about what changed
  - Why it changed"

# Push to feature branch (with retry on failure)
git push -u origin claude/claude-md-{session-id}

# View commit history
git log --oneline -10
```

### Before Committing
1. ✅ Run `npm run lint` - ensure no linting errors
2. ✅ Run `npm run build` - ensure build succeeds
3. ✅ Test in browser at http://localhost:3000
4. ✅ Test mobile responsiveness (DevTools)
5. ✅ Check accessibility (keyboard navigation, screen reader)

---

## Common Tasks

### Adding a New Section/Component

1. **Create component file** in `app/components/`
   ```tsx
   // app/components/NewSection.tsx
   export default function NewSection() {
     return (
       <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 py-12 md:py-16">
         {/* Content */}
       </section>
     );
   }
   ```

2. **Import in homepage** (`app/page.tsx`)
   ```tsx
   import NewSection from "./components/NewSection";

   export default function Home() {
     return (
       <main>
         {/* ... existing components ... */}
         <NewSection />
       </main>
     );
   }
   ```

3. **Add images** (if needed) to `public/` directory

4. **Test responsiveness** at all breakpoints

### Modifying Styles

1. **For component-specific styles**: Use Tailwind classes directly
2. **For theme changes**: Edit `app/globals.css` CSS variables
3. **For new responsive patterns**: Add to `app/utils/responsive.ts`

### Adding Images

1. **Place image** in `public/` directory (appropriate subfolder)
2. **Use Next.js Image**:
   ```tsx
   import Image from "next/image";

   <Image
     src="/path/to/image.png"
     alt="Descriptive alt text"
     width={800}
     height={600}
     className="..."
   />
   ```

3. **For external images** (e.g., Figma): Add domain to `next.config.ts`
   ```ts
   images: {
     remotePatterns: [
       {
         protocol: "https",
         hostname: "example.com",
         pathname: "/path/**"
       }
     ]
   }
   ```

### Creating a Client Component

When you need interactivity (state, events):
```tsx
"use client";

import { useState } from "react";

export default function InteractiveComponent() {
  const [state, setState] = useState(false);

  return (
    <button onClick={() => setState(!state)}>
      {state ? "On" : "Off"}
    </button>
  );
}
```

### Adding a New Page (Future)

When the site expands beyond landing page:
```bash
# Create new route directory
mkdir app/about

# Create page component
touch app/about/page.tsx
```

```tsx
// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - ReART",
  description: "Learn about ReART platform"
};

export default function AboutPage() {
  return (
    <main>
      {/* Page content */}
    </main>
  );
}
```

---

## Important Considerations

### Performance
- ✅ Use server components by default (faster initial load)
- ✅ Next.js Image for automatic optimization
- ✅ Dynamic imports for heavy components (if needed)
- ✅ WebP images generated automatically
- ✅ Bundle splitting enabled by default

### Accessibility
- ✅ Always provide `alt` text for images
- ✅ Use semantic HTML (`<section>`, `<nav>`, etc.)
- ✅ Ensure keyboard navigation works
- ✅ Test with screen readers
- ✅ Maintain color contrast ratios (WCAG AA minimum)
- ✅ Touch targets minimum 44x44px
- ✅ Support reduced motion preferences

### SEO
- ✅ Metadata defined in `app/layout.tsx`
- ✅ Semantic HTML structure
- ✅ Descriptive alt text on images
- ✅ Proper heading hierarchy (h1 → h2 → h3)

### Mobile-First Development
1. **Always start with mobile design**
2. **Test at all breakpoints**: 375px, 640px, 768px, 1024px, 1440px
3. **Use responsive utilities** from `app/utils/responsive.ts`
4. **Touch-friendly**: 44px minimum touch targets
5. **Performance**: Mobile users often on slower connections

### TypeScript
- ✅ Strict mode is enabled - maintain type safety
- ✅ Avoid `any` type - use specific types or `unknown`
- ✅ Use type inference when obvious
- ✅ Explicitly type function parameters and returns when not obvious

### Testing Checklist
Before marking any UI task complete:
- [ ] Desktop view (1440px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)
- [ ] Lint passes (`npm run lint`)

---

## AI Assistant Guidelines

### When Adding Features
1. **Read existing components first** - maintain consistency
2. **Use established patterns** - follow existing component structure
3. **Mobile-first approach** - always start with mobile styles
4. **Accessibility by default** - include ARIA labels, semantic HTML
5. **Test thoroughly** - check all breakpoints

### When Modifying Code
1. **Understand context** - read related components
2. **Preserve patterns** - maintain existing code style
3. **Don't break responsiveness** - test mobile/tablet/desktop
4. **Update comments** - if changing functionality
5. **Run build** - ensure no TypeScript errors

### When Debugging
1. **Check browser console** - look for errors
2. **Verify imports** - ensure paths are correct
3. **Check Tailwind classes** - ensure valid class names
4. **Test responsive** - issue might be viewport-specific
5. **Review recent changes** - check git diff

### Communication Style
- **Be concise** - users want quick answers
- **Show code** - provide examples when explaining
- **Reference files** - use format `file.tsx:123` for line numbers
- **List steps** - use numbered lists for procedures
- **Provide context** - explain "why" not just "what"

---

## Useful Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint

# Git
git status               # Check status
git diff                 # See changes
git log --oneline -10    # Recent commits
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push -u origin branch-name  # Push to remote

# File operations (use tools, not bash)
# ❌ cat file.tsx
# ✅ Use Read tool

# Search (use tools, not bash)
# ❌ grep -r "pattern"
# ✅ Use Grep tool

# File finding (use tools, not bash)
# ❌ find . -name "*.tsx"
# ✅ Use Glob tool
```

---

## Project Roadmap (Inferred)

Based on current state, likely future developments:
1. **Additional pages**: About, Contact, Blog, Dashboard
2. **Authentication**: User login/signup
3. **Art marketplace**: Browse, search, filter artwork
4. **AR viewer**: Immersive property viewing
5. **User dashboard**: Profile, collections, memberships
6. **Admin panel**: Content management
7. **API integration**: Backend services
8. **Payment processing**: Membership checkout

---

## Resources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project Files
- `README.md` - Basic project setup
- `docs/figma-*.md` - Figma design documentation
- This file (CLAUDE.md) - AI assistant guide

### Design System
- Colors: See `app/globals.css` CSS variables
- Typography: Inter font family (300, 400, 600, 700)
- Spacing: Fluid scale in `app/utils/responsive.ts`
- Breakpoints: 640px, 768px, 1024px, 1280px, 1536px

---

## Version History

### v0.1.0 (Current)
- Initial CLAUDE.md creation
- Comprehensive codebase documentation
- Development workflow guidelines
- Code convention standards
- Component pattern documentation

---

**Last Updated**: 2025-11-19
**Maintained By**: AI Assistants working on ReART project
**Contact**: Review git history for contributor information

---

_This document should be updated whenever significant architectural changes, new patterns, or workflow modifications are introduced to the codebase._
