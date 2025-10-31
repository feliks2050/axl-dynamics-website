# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Local Development Server
```bash
npm start
# or
npm run serve
# Runs Python HTTP server on http://localhost:8000
```

## Project Overview

This is a **static website** for AXL Dynamics built with **vanilla HTML, CSS, and JavaScript** - no frameworks or build tools. The project follows 2025 web design best practices with a focus on performance, accessibility, and modern UX patterns.

### Core Products Featured
- **MassTrade**: Multi-channel e-commerce management system (primary product)
- **Migratory**: Automated listing migration tool
- **Integrator**: OLX order management and BaseLinker integration

## Architecture & Structure

### HTML Structure
The site uses **semantic HTML5** with multiple pages:
- `index.html` - Main landing page with product overview
- `masstrade.html` - Dedicated MassTrade product page (referenced but not yet created)
- `pricing.html` - Interactive pricing comparison page (referenced but not yet created)

All pages share a consistent navigation structure and design system.

### CSS Architecture
Located in `css/styles.css`, the stylesheet uses:
- **CSS Custom Properties** (CSS variables) for the entire design system
- **Mobile-first responsive design** with breakpoints at 320px, 768px, 1024px, 1440px
- **Modern layout techniques**: Flexbox and CSS Grid
- **Smooth transitions** and micro-interactions throughout

#### Design System Variables (defined in `:root`)
- **Color Palette**: Warm 2025 palette with primary (#FF6B35 orange), secondary (#004E89 blue), accent (#F7B801 yellow)
- **Typography**: Poppins for headings, Inter for body text
- **Spacing Scale**: xs/sm/md/lg/xl/xxl using rem units
- **Border Radius**: sm/md/lg for consistent roundness
- **Shadows**: sm/md/lg for elevation

### JavaScript Architecture
`js/main.js` provides interactive functionality:
- **Mobile menu toggle** with hamburger animation and backdrop
- **Smooth scrolling** for anchor links with navbar offset calculation
- **Intersection Observer** patterns for scroll-triggered animations
- **Counter animations** for statistics
- **Lazy loading** for images
- **Button ripple effects** for tactile feedback

All interactions are vanilla JavaScript with no dependencies.

### Component Patterns

#### Navigation
- Sticky navbar with scroll effects
- Mobile-responsive hamburger menu (< 1024px)
- Close on outside click, ESC key, or window resize

#### Buttons
Four button variants with consistent API:
- `.btn-primary` - Primary CTAs (orange background)
- `.btn-secondary` - Secondary actions (blue background)
- `.btn-outline` - Outlined primary style
- `.btn-outline-light` - For dark backgrounds
- Add `.btn-large` for hero CTAs

#### Animations
- Elements with classes `.product-card`, `.feature-card`, `.testimonial-card`, `.showcase-item` auto-fade in on scroll
- Stats counter animates once when scrolling into view
- All animations use Intersection Observer API for performance

## Development Guidelines

### When Creating New Pages
1. Copy navigation structure from `index.html`
2. Use the same container class (`.container`) for consistent max-width
3. Follow section structure: `<section class="section-name">` with `.container` inside
4. Include `css/styles.css` and `js/main.js`
5. Add page link to navigation in all existing HTML files

### When Adding New Sections
1. Wrap in `<section>` with semantic ID
2. Use `.section-header` pattern for title + subtitle
3. Add appropriate ARIA labels for accessibility
4. Consider adding fade-in animation classes for cards

### CSS Best Practices
- Always use CSS custom properties (e.g., `var(--color-primary)`) instead of hardcoded values
- Use the existing spacing scale (`var(--spacing-*)`)
- Follow the existing shadow system (`var(--shadow-*)`)
- Maintain mobile-first approach: base styles for mobile, `@media (min-width: X)` for larger screens
- Ensure touch targets are minimum 44x44px

### JavaScript Best Practices
- Keep vanilla JavaScript approach - avoid adding dependencies
- Use event delegation where possible
- Clean up event listeners when elements are removed
- Use Intersection Observer for scroll-based effects (more performant than scroll listeners)
- Maintain accessibility: update ARIA attributes when UI state changes

## Accessibility (WCAG 2.1 AA)
- Semantic HTML structure throughout
- ARIA labels on interactive elements and landmarks
- Keyboard navigation support
- Touch-friendly tap targets (min 44x44px)
- Color contrast meets AA standards

## Browser Support
Modern browsers with ES6+ support. Uses:
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- Smooth scroll behavior

## Language
All content is in **Polish** (lang="pl"). When adding text content, maintain Polish language throughout.