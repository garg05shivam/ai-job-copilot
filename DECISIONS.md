# DECISIONS.md

## 1. Why this strategy over the obvious alternative?

I chose the premium home-page track and built AI Job Copilot as an interactive product surface instead of a generic AI SaaS landing page. The obvious alternative was a centered hero, feature cards, fake logos, and vague "AI-powered" claims. I rejected that because the assessment asks for a Product Hunt-level first impression and specifically grades honest, product-visible work.

The page leads with the product itself: a senior engineering fit matrix, target-role selector, expandable AST evidence rows, terminal log simulation, code diff inspector, and Web Vitals benchmark cards. The goal is for the visitor to understand the product by using it, not by reading marketing copy.

## 2. One trade-off made under the time limit

I used believable deterministic sample data instead of wiring a real repository parser and job-spec ingestion backend. That keeps the frontend focused, responsive, and demoable within the challenge window, but it means the AST evidence is prototype content rather than live analysis.

With a real week, I would connect the UI to a parser service that accepts a GitHub repo URL plus job description, runs TypeScript AST analysis, stores evidence snapshots, and exports a real candidate brief as Markdown.

## 3. Where AI tools were used and what I verified

AI helped accelerate layout exploration, component copy, and interaction ideas. I personally verified the product direction against the assessment constraints: no fake testimonials, no fake customer logos, no inflated user counts, visible product UI in the first screen, one restrained motion system, responsive dark-mode implementation, and real working controls.

I also ran local quality checks after implementation:

- `npm.cmd run lint`
- `npm.cmd run build`
- Local render at `http://127.0.0.1:3000`

The browser DOM output confirmed the page renders with correct Unicode, semantic content, and the required product sections.
