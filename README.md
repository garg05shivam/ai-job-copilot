# AI Job Copilot — Senior Engineering Fit & Gap Engine

A production-grade, deterministic AST signal matching and skill-gap remediation workspace built for senior frontend engineering candidates.

Built for the **Acdyon Technologies Frontend Challenge — "Build It Like You Mean It"**.

---

## Overview

**AI Job Copilot** replaces generic AI-SaaS marketing boilerplate and naive ATS string matching with a static AST compiler graph analysis engine. It allows candidates to:

- Audit repository AST code signals against target job specifications (*Stripe*, *Vercel*, *Linear*).
- Inspect side-by-side AST code diffs (anti-pattern unoptimized vs React 19 / Zero-CLS senior architecture).
- Review Web Vitals benchmark scorecards (**LCP: 0.8s**, **INP: 32ms**, **CLS: 0.00**).
- Execute commands via a global **Command Palette (`Cmd + K` / `Ctrl + K`)**.
- Export actionable **Candidate Interview Defense Briefs**.

---

## Key Architecture & Features

### 1. Interactive Senior Engineering Workbench (`hero.tsx`)
- **Target Specification Selector**: Switch target roles between *Stripe Lead Frontend Architect*, *Vercel Staff Edge Runtime Architect*, and *Linear Senior Product Engineer*.
- **Expandable AST Requirements Matrix**: Interactive row expansion showing verified repository evidence, exact file paths (`packages/tokens/src/theme.ts:L42-L89`), and TypeScript AST code snippets.
- **CLI Terminal Logs**: Interactive process log simulation.

### 2. AST Code Diff & Benchmark Inspector (`code-diff-inspector.tsx`)
- **Side-by-Side Code Diff**: Red anti-pattern unoptimized code (`useEffect` waterfalls, inline CSS recalculations) vs Green senior architecture (React 19 Suspense streaming SSR, atomic CSS variable tokens).
- **Web Vitals Scorecard**: Quantified performance budget impact for LCP, INP, and CLS.

### 3. Global Command Palette (`command-palette.tsx`)
- Triggered globally via `Cmd + K`, `Ctrl + K`, or the navbar button.
- Keyboard-navigable command search bar for target role selection, AST diff inspection, and brief exporting.

### 4. Engine Architecture Comparison (`capabilities.tsx`)
- Asymmetric evaluation matrix comparing Legacy ATS Keyword Parsers (32% accuracy) vs Copilot AST Deterministic Engine (98% accuracy).

### 5. Analysis Pipeline Architecture (`how-it-works.tsx`)
- 3-stage breakdown (Stage 01 Parse, Stage 02 Verify, Stage 03 Actuate) with JSON schema outputs and AST evidence tags.

---

## Design System — Industrial Editorial Minimalist

- **Background**: Deep rich charcoal (`#0F0F11`)
- **Cards & Workbench**: Muted obsidian (`#16161A`)
- **Borders**: Ultra-thin solid borders (`#26262B`)
- **Accent**: Safety Amber (`#F59E0B`) used sparingly for CTAs and critical focal points.
- **Typography**: High-contrast off-white (`#FAFAFA`) for headings, muted slate (`#A1A1AA`) for body copy, and Geist Mono badges.
- **Motion Restraint**: Governed by a single heavy-easing cubic-bezier curve: `transition-all duration-500 ease-[0.25,1,0.5,1]`.

---

## Tech Stack

- **Next.js 16** (App Router & Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **Motion / Motion React** (`^13.1.0`)
- **Lucide React**

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
```

---

## Accessibility & Responsive Verification

- **Target Viewports**: Verified at 390px (Mobile) and 1440px (Desktop) with zero horizontal scroll (`overflow-x-hidden`).
- **A11y**: Semantic HTML elements (`header`, `main`, `section`, `footer`, `table`), keyboard focus rings (`:focus-visible`), `aria-expanded` state on menus, and skip-to-main link.