import {
  FileCode2,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-[#26262B] bg-[#0F0F11] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Asymmetric Header */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#26262B] bg-[#16161A] px-3 py-1 font-mono text-[11px] text-[#A1A1AA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              ANALYSIS PIPELINE ENGINE
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              From raw role spec to verified code proof.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:self-end">
            <p className="font-sans text-sm leading-relaxed text-[#A1A1AA]">
              Standard ATS parsers rely on simple string keyword counts. Copilot Engine performs depth-first AST node graph verification against actual repository codebases.
            </p>
          </div>
        </div>

        {/* Asymmetric Timeline Pipeline Grid */}
        <div className="space-y-6">
          
          {/* Stage 01: Ingestion & AST Parsing */}
          <div className="rounded-md border border-[#26262B] bg-[#16161A] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-bold text-[#F59E0B]">
                  STAGE 01 / PARSE
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#FAFAFA]">
                  Deterministic Requirement Extraction
                </h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-[#A1A1AA]">
                  In-memory breakdown of job descriptions into concrete technical dependencies, SSR patterns, and runtime constraints.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-sm border border-[#26262B] bg-[#0F0F11] p-4 font-mono text-xs text-[#A1A1AA]">
                  <div className="flex items-center justify-between text-[10px] text-[#71717A] pb-2 border-b border-[#26262B]">
                    <span>PARSED_REQUIREMENTS_SCHEMA.JSON</span>
                    <span className="text-emerald-400">STATUS: PARSED</span>
                  </div>
                  <pre className="mt-3 text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto">
{`{
  "targetRole": "Lead Frontend Architect",
  "hardConstraints": ["React 19 Server Components", "Zero-CLS CSS Tokens", "INP < 50ms"],
  "astSignalsRequired": ["ReactHydrationBoundary", "CustomTokenStore", "EdgeMiddleware"]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 02: AST Graph Cross-Audit */}
          <div className="rounded-md border border-[#26262B] bg-[#16161A] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-bold text-[#F59E0B]">
                  STAGE 02 / VERIFY
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#FAFAFA]">
                  AST Evidence Graph Verification
                </h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-[#A1A1AA]">
                  Walks candidate repository source files to confirm exact implementation patterns, TypeScript types, and custom hook boundaries.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-sm border border-[#26262B] bg-[#0F0F11] p-3.5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#FAFAFA]">
                      <span>TOKEN ENGINE PATTERN</span>
                      <span className="text-[#10B981] font-bold">98% MATCH</span>
                    </div>
                    <p className="mt-1 text-[11px] font-sans text-[#71717A]">
                      Found in packages/tokens/src/theme.ts (L42-L89)
                    </p>
                  </div>

                  <div className="rounded-sm border border-[#26262B] bg-[#0F0F11] p-3.5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#FAFAFA]">
                      <span>EDGE MIDDLEWARE ROUTER</span>
                      <span className="text-[#10B981] font-bold">96% MATCH</span>
                    </div>
                    <p className="mt-1 text-[11px] font-sans text-[#71717A]">
                      Found in middleware.ts (L8-L32)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 03: Candidate Brief Generation */}
          <div className="rounded-md border border-[#26262B] bg-[#16161A] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-bold text-[#F59E0B]">
                  STAGE 03 / ACTUATE
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#FAFAFA]">
                  Engineering Brief Generation
                </h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-[#A1A1AA]">
                  Outputs a bulletproof interview defense package detailing system design talking points, performance graphs, and resume bullet diffs.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-sm border border-[#26262B] bg-[#0F0F11] p-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#F59E0B]">
                    <FileCode2 className="h-4 w-4" />
                    <span>OUTPUT: INTERVIEW_DEFENSE_BRIEF.MD</span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-[#A1A1AA] text-[11px] list-disc list-inside">
                    <li>Architecture defense strategy for SSR hydration stream boundaries</li>
                    <li>Quantified Web Vitals metrics (LCP: 0.8s, INP: 32ms, CLS: 0.00)</li>
                    <li>Tailored ATS resume bullet points matching exact target keywords</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
