# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ MANDATORY: DESIGN-SYSTEM.md governs all UI/UX work

For **any task that touches UI or UX** — creating or editing components, screens, styles, layout, colors, typography, spacing, icons, states — you **must** read and follow `DESIGN-SYSTEM.md` before writing code, and your output must comply with it. This is not optional guidance.

Specifically:
- Read `DESIGN-SYSTEM.md` (it is the authoritative reference, written in Vietnamese) at the start of any UI/UX task and apply its tokens, component contracts, and screen specs.
- Use **only** the defined design tokens (colors, typography, spacing, radius, shadow) — never hardcode hex/px values.
- Match the prescribed component model (Atomic Design, prop-driven variants) and directory structure.
- Implement the required component states and screen states the spec mandates.
- If a requested change conflicts with `DESIGN-SYSTEM.md`, **stop and flag the conflict** to the user rather than silently deviating. Only depart from the spec with explicit user approval.
- If something is genuinely not covered by the spec, follow its principles (§1) and choose the option most consistent with existing tokens/components.

The detailed rules below are a summary; `DESIGN-SYSTEM.md` is the source of truth.

## Project status

This is a **greenfield project**. The only artifact so far is `DESIGN-SYSTEM.md` — a complete UI/UX design system spec (in Vietnamese) derived from a Figma file for a "Coffee Shop Mobile App". There is no application code, build tooling, package manager, or tests yet. When scaffolding, follow the stack and structure that `DESIGN-SYSTEM.md` prescribes rather than introducing a different one.

## Intended stack

- **React + Tailwind CSS**, mobile-first (base frame 375×812, iPhone).
- Font: **Sora** (Google Fonts) for the entire app.
- Components organized by **Atomic Design**: Atoms → Molecules → Organisms.

The proposed directory layout (`DESIGN-SYSTEM.md` §5):

```
src/
├── styles/tokens.css       # CSS variables mirroring tailwind.config
├── components/
│   ├── ui/                 # Atoms (no business logic)
│   ├── product/ order/ delivery/ layout/   # Molecules & Organisms by domain
├── screens/                # Compose components + data only; no styling here
└── lib/                    # currency formatting, shared hooks
```

## Non-negotiable conventions (from DESIGN-SYSTEM.md)

These are the rules that are easy to violate and hard to recover from — enforce them from the first component:

- **Design tokens are the single source of truth.** Never hardcode hex colors or px values in components. All color/spacing/radius/shadow/typography values come from `tailwind.config.js` tokens (defined in §2.6) and `tokens.css`. Confirm/lock tokens *before* writing components.
- **`ui/` atoms know nothing about business logic**; `screens/` only compose components with data and never define their own styling.
- **Components use props (`variant` / `size` / `state`), not copies.** Add a variant prop rather than duplicating a component.
- **One `brand.primary` CTA per screen** — the brown accent (`#C67C4E`) is reserved for a single primary action. Text on a brown background is always `surface.card` (`#FDFDFF`) for contrast.
- **Page background is always `surface.page` (`#F9F2ED`); content blocks sit on `surface.card`.**
- Typography is limited to the defined scale (display/h1/h2/h3/body/caption/button/price); weights limited to 400/500/600. No ad-hoc sizes.
- Spacing follows the 4/8pt system: `4·8·12·16·20·24·32·40`. Screen gutter 16px, section gap 24px, grid gap 16px.
- Minimum touch target **44×44px**.
- Every component must define states: **default · pressed · focus · disabled · loading · selected**. Every data screen must define **empty · loading (skeleton) · error** — these are absent from the source Figma and must be added deliberately.

## Build order

The spec prescribes a bottom-up sequence (§6): tokens → atoms (with a showcase page for all variants) → molecules → organisms → screens (Home → Detail → Order → Delivery → Onboarding) → states & a11y.

## Notes

- Several token values (`brand.primaryPressed`, `neutral.muted`, `success`/`warning`/`danger`, shadows) are *proposed derivations* not present in the original Figma — flagged in `DESIGN-SYSTEM.md`. Verify against the Figma source before treating them as final.
- `DESIGN-SYSTEM.md` is written in Vietnamese; it is the authoritative reference for tokens, the component inventory (§3), and the screen list (§4).
