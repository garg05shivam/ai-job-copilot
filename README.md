# AI Job Copilot

A frontend product concept for understanding job requirements, evaluating candidate fit, identifying skill gaps, and preparing stronger applications.

Built as part of the Acdyon Technologies Frontend Challenge — "Build It Like You Mean It".

## Overview

AI Job Copilot presents a focused AI-powered career workspace where a candidate can:

- Understand a job role and its requirements
- Review a simulated fit analysis
- Identify potential skill gaps
- Get application preparation guidance
- Navigate the experience across desktop and mobile layouts

The homepage is designed around a product-first experience rather than a purely marketing-driven landing page.

## Key Features

### Interactive Job Analysis

The main product interaction demonstrates an analysis workflow:

1. Start the job analysis
2. Display an analyzing state
3. Present a simulated match result
4. Surface an example skill gap
5. Provide application preparation guidance

The analysis is intentionally presented as a frontend demonstration. No real AI model or backend service is represented as active.

### Responsive Navigation

The navigation adapts between desktop and mobile layouts.

On mobile, the navigation becomes a collapsible menu with accessible controls.

### Product-focused Homepage

The homepage includes:

- Hero section
- Interactive job analysis
- How It Works
- Capabilities
- Application Preparation
- Final CTA
- Footer

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- Lucide React

## Design Direction

The interface uses a dark, minimal visual system with:

- High-contrast typography
- Restrained borders
- Generous spacing
- Blue accent color
- Product-focused cards
- Subtle motion and interaction

The goal was to create a premium technology product experience without unnecessary visual noise.

## Responsive Design

The interface was tested across the assignment's target viewport sizes, including:

- 390px mobile
- 1440px desktop

The layout is designed to avoid horizontal overflow and adapt its navigation, grids, typography, and spacing for smaller screens.

## Accessibility

The implementation includes:

- Semantic HTML
- Keyboard-visible focus states
- Accessible navigation controls
- `aria-expanded` state for the mobile menu
- Skip-to-main-content link
- Reduced-motion support
- Descriptive page metadata

## Getting Started

Install dependencies:

```bash
npm install