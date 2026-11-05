---
name: Spice Heritage Luxury
colors:
  surface: '#f9faee'
  surface-dim: '#d9dbcf'
  surface-bright: '#f9faee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f5e8'
  surface-container: '#edefe2'
  surface-container-high: '#e7e9dd'
  surface-container-highest: '#e2e4d7'
  on-surface: '#1a1d15'
  on-surface-variant: '#414843'
  inverse-surface: '#2e3129'
  inverse-on-surface: '#f0f2e5'
  outline: '#717973'
  outline-variant: '#c1c8c1'
  surface-tint: '#406652'
  primary: '#002717'
  on-primary: '#ffffff'
  primary-container: '#173d2b'
  on-primary-container: '#80a890'
  inverse-primary: '#a7d0b7'
  secondary: '#904c29'
  on-secondary: '#ffffff'
  secondary-container: '#fea67c'
  on-secondary-container: '#783a18'
  tertiary: '#2c1f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#463303'
  on-tertiary-container: '#b79b62'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c2ecd2'
  primary-fixed-dim: '#a7d0b7'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#294e3b'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#723614'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#e1c386'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#584413'
  background: '#f9faee'
  on-background: '#1a1d15'
  surface-variant: '#e2e4d7'
  surface-ivory: '#F8F5ED'
  surface-cream: '#F0EBDD'
  forest-deep: '#0D281D'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style
The design system reflects a luxury B2B agricultural export standard—grounded in authentic Indian provenance while speaking fluently to high-end global buyers, procurement heads, and culinary distributors. The aesthetic balances heritage craftsmanship with modern trade precision.

Drawing heavily from editorial luxury and understated classical minimalism, the interface relies on deep botanical greens, tactile spice undertones, warm ivory backdrops, and muted brass details. It avoids clinical corporate austerity in favor of quiet wealth, transparency, and agronomic dignity.

## Colors
The color palette establishes an organic, high-tier export atmosphere:

- **Primary (`#173D2B`)**: Deep Forest Green representing freshness, plantation roots, and institutional integrity.
- **Secondary (`#B66B45`)**: Warm Terracotta / Spice Rust honoring sun-dried spices, earth, and harvest warmth.
- **Tertiary (`#B69A61`)**: Muted Antique Gold applied selectively to precision badges, certification accents, and brass flourishes.
- **Neutral (`#252820`)**: Deep Botanical Charcoal for crisp typography, high legibility, and architectural framing without stark digital black.
- **Canvas Tones (`#F8F5ED`, `#F0EBDD`)**: Provide a tactile, unbleached parchment base, replacing cold whites with natural fiber warmth.
- **Forest Deep (`#0D281D`)**: Reserved for dark immersion blocks, footer foundations, and executive credential sections.

## Typography
The typographic architecture pairs high-contrast editorial serifs with crisp, humanist geometric grotesques:

- **Headlines (`Playfair Display`)**: Deliver old-world export gravitas and literary elegance. Headings must always maintain ample line-height to prevent ascender collisions.
- **Body & Data (`Plus Jakarta Sans`)**: Provide high-density legibility for trade volume tables, phytosanitary specs, moisture indices, and bulk order figures.
- **Labels & Micro-copy**: Set in uppercase with wide tracking (`0.06em` to `0.08em`) to mimic stamped export crates and luxury apothecary labeling.

## Elevation & Depth
Depth is created through surface contrast and subtle framing rather than heavy drop shadows:

- **Tonal Layering**: Stacking occurs via tone transitions (Warm Ivory base `#F8F5ED` overlaid with Cream containers `#F0EBDD` or Forest Deep `#0D281D` feature modules).
- **Hairline Outlines**: Elements utilize fine, 1px semi-transparent borders (`rgba(37, 40, 32, 0.12)` or antique gold `rgba(182, 154, 97, 0.3)`) to emulate ledger lines and artisanal packaging edges.
- **Ambient Diffusion**: Where elevation is required (e.g., sticky trade inquiry drawers, active dropdowns), use soft ambient shadows with natural warm undertones: `box-shadow: 0 12px 32px -4px rgba(37, 40, 32, 0.08)`. Avoid cool gray or pitch-black shadows entirely.

## Shapes
A conservative roundedness value (`1` - Soft) maintains the architectural, formal, and authoritative presence required in global commodities trade:

- **Default Radius**: Base UI controls use `0.25rem` (4px).
- **Cards & Media**: Visual containers and product modules use `0.5rem` (8px) to prevent soft, toy-like roundness.
- **Badges & Pills**: Specific micro-labels (e.g., "Organic Certified", "Grade A Alleppey Bold") may utilize full pill geometry when framed by delicate 1px brass borders.

## Components

### Buttons
- **Primary**: Solid Forest Green (`#173D2B`) with Warm Ivory (`#F8F5ED`) text, `0.25rem` radius, and subtle letter-spaced label typography. Hover shifts background to Forest Deep (`#0D281D`).
- **Secondary (Brass Accent)**: Outlined with 1px Muted Gold (`#B69A61`), transparent background, and charcoal text. Hover transitions to a muted gold tint with smooth easing.
- **Tertiary (Spice Action)**: Warm Terracotta (`#B66B45`) reserved exclusively for primary conversion points (e.g., "Request Lot Sample", "Download Export Manifest").

### Chips & Badges
- Grounded, compact status tags. Inactive chips use `#F0EBDD` background with `#252820` text.
- Quality certifications (e.g., AGMARK, ISO, Spice Board of India) feature a 1px solid `#B69A61` border and uppercase tracked text.

### Cards (Spice Showcase & Origin)
- Structured on Cream (`#F0EBDD`) or pure Ivory (`#F8F5ED`) with 1px border (`rgba(37, 40, 32, 0.08)`).
- Card imagery uses a warm duotone tint or deep, natural product photography.
- Inner card details display harvest date, moisture content percentage, and origin coordinates in a dual-column monospace-styled specification list.

### Inputs & Form Fields
- Minimalist line-frame styling: 1px border using Charcoal at low opacity (`rgba(37, 40, 32, 0.2)`), Warm Ivory fill, and inset padding of `0.75rem 1rem`.
- Focus state activates a sharp 1px primary Forest Green stroke and subtle gold glow ring.

### Checkboxes & Radios
- Sharp, clean checkboxes with a 2px stroke in `#173D2B`.
- Checked state fills with `#173D2B` displaying a Warm Ivory check glyph.

### Specialized B2B Trade Elements
- **Specification Tables**: Alternating subtle ivory/cream zebra striping, 1px horizontal borders, and numerical columns right-aligned with fixed tabular figures.
- **Port of Origin Callouts**: Dark immersion blocks (`#0D281D`) featuring muted gold coordinates, botanical line-art icons, and shipping schedule indicators.