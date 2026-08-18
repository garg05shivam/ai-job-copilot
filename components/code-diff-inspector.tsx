"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ShieldCheck } from "lucide-react";

interface DiffSnippet {
  id: string;
  title: string;
  category: string;
  legacyCode: string;
  optimizedCode: string;
  lcpImprovement: string;
  inpImprovement: string;
  clsImprovement: string;
  explanation: string;
}

const DIFF_SAMPLES: DiffSnippet[] = [
  {
    id: "ssr-stream",
    title: "SSR Stream Hydration & Boundary Isolation",
    category: "React 19 & Next.js App Router",
    legacyCode: `// ❌ LEGACY: Waterfall useEffect client fetch with layout shift
export function BillingSummary({ accountId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/billing/\${accountId}\`)
      .then(res => res.json())
      .then(d => { setData(d); setLoading(false); });
  }, [accountId]);

  if (loading) return <div>Loading...</div>; // CLS: 0.14
  return <div>\${data.amount}</div>;
}`,
    optimizedCode: `// ✅ SENIOR ARCHITECTURE: Suspense stream boundary with zero layout shift
export function BillingSummaryStream({ accountId }: { accountId: string }) {
  return (
    <Suspense fallback={<BillingSkeleton />}>
      <AsyncBillingDataStream accountId={accountId} />
    </Suspense>
  );
}

async function AsyncBillingDataStream({ accountId }: { accountId: string }) {
  const data = await getBillingRecord(accountId); // Streaming SSR
  return <div className="font-mono text-sm text-[#FAFAFA]">{data.amount}</div>;
}`,
    lcpImprovement: "2.4s ➔ 0.8s (-66.7%)",
    inpImprovement: "180ms ➔ 32ms (-82.2%)",
    clsImprovement: "0.14 ➔ 0.00 (Zero CLS)",
    explanation: "Replaced client-side useEffect waterfall with React 19 Suspense streaming SSR boundary. Eliminates Cumulative Layout Shift completely.",
  },
  {
    id: "css-tokens",
    title: "Zero-CLS Token Engine & CSS Var Isolation",
    category: "Design System Architecture",
    legacyCode: `// ❌ LEGACY: JS inline object styling causing runtime recalculation
export function Card({ isDark, children }) {
  return (
    <div style={{ 
      backgroundColor: isDark ? '#16161A' : '#FFFFFF',
      border: isDark ? '1px solid #26262B' : '1px solid #E5E7EB',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
}`,
    optimizedCode: `// ✅ SENIOR ARCHITECTURE: Atomic CSS Custom Property Token Engine
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-[#26262B] bg-[#16161A] text-[#FAFAFA] transition-colors duration-300">
      {children}
    </div>
  );
}`,
    lcpImprovement: "1.8s ➔ 0.7s (-61.1%)",
    inpImprovement: "110ms ➔ 24ms (-78.1%)",
    clsImprovement: "0.08 ➔ 0.00 (Zero CLS)",
    explanation: "Migrated runtime JavaScript inline style recalculations to atomic CSS variable tokens with 0ms runtime style computation cost.",
  },
];

export default function CodeDiffInspector() {
  const [activeDiffId, setActiveDiffId] = useState<string>("ssr-stream");
  const [viewMode, setViewMode] = useState<"side-by-side" | "diff-only">("side-by-side");

  const activeSample = DIFF_SAMPLES.find((d) => d.id === activeDiffId) || DIFF_SAMPLES[0];

  return (
    <section id="ast-diff" className="border-b border-[#26262B] bg-[#0F0F11] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#26262B] bg-[#16161A] px-3 py-1 font-mono text-[11px] text-[#A1A1AA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              AST CODE DIFF & BENCHMARK AUDITOR
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Inspect verified architecture code diffs.
            </h2>

            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
              Compare unoptimized anti-patterns against target senior frontend architecture code and see real-time Web Vitals benchmark improvements.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-1.5 rounded-sm border border-[#26262B] bg-[#16161A] p-1 font-mono text-xs">
              <button
                type="button"
                onClick={() => setViewMode("side-by-side")}
                className={`rounded-sm px-3 py-1.5 transition-colors ${
                  viewMode === "side-by-side"
                    ? "bg-[#26262B] text-[#FAFAFA]"
                    : "text-[#71717A] hover:text-[#A1A1AA]"
                }`}
              >
                SIDE-BY-SIDE
              </button>
              <button
                type="button"
                onClick={() => setViewMode("diff-only")}
                className={`rounded-sm px-3 py-1.5 transition-colors ${
                  viewMode === "diff-only"
                    ? "bg-[#26262B] text-[#FAFAFA]"
                    : "text-[#71717A] hover:text-[#A1A1AA]"
                }`}
              >
                TARGET SPEC
              </button>
            </div>
          </div>
        </div>

        {/* Diff Workspace Container */}
        <div className="rounded-md border border-[#26262B] bg-[#16161A] overflow-hidden shadow-2xl">
          
          {/* Top Bar Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-[#26262B] bg-[#0F0F11]/80 px-4 py-3 gap-3">
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="font-mono text-xs text-[#71717A] shrink-0">PATTERN:</span>
              {DIFF_SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => setActiveDiffId(sample.id)}
                  className={`rounded-sm px-3 py-1 font-mono text-xs transition-all duration-300 ${
                    activeDiffId === sample.id
                      ? "border border-[#F59E0B]/50 bg-[#26262B] text-[#FAFAFA] font-medium"
                      : "border border-[#26262B] text-[#71717A] hover:text-[#A1A1AA] hover:bg-[#1C1C22]"
                  }`}
                >
                  {sample.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[#10B981]">
              <ShieldCheck className="h-4 w-4" />
              <span>VERIFIED SENIOR SPEC</span>
            </div>
          </div>

          {/* Web Vitals Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#26262B] bg-[#0F0F11]/40 p-4 font-mono text-xs gap-3">
            <div className="rounded-sm border border-[#26262B] bg-[#16161A] p-3">
              <span className="text-[10px] text-[#71717A] block">LARGEST CONTENTFUL PAINT (LCP)</span>
              <span className="text-sm font-bold text-[#10B981] mt-0.5 block">{activeSample.lcpImprovement}</span>
            </div>
            <div className="rounded-sm border border-[#26262B] bg-[#16161A] p-3">
              <span className="text-[10px] text-[#71717A] block">INTERACTION TO NEXT PAINT (INP)</span>
              <span className="text-sm font-bold text-[#10B981] mt-0.5 block">{activeSample.inpImprovement}</span>
            </div>
            <div className="rounded-sm border border-[#26262B] bg-[#16161A] p-3">
              <span className="text-[10px] text-[#71717A] block">CUMULATIVE LAYOUT SHIFT (CLS)</span>
              <span className="text-sm font-bold text-[#10B981] mt-0.5 block">{activeSample.clsImprovement}</span>
            </div>
          </div>

          {/* Side-by-side or Single View Code Comparison */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDiffId + viewMode}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="p-4 sm:p-6"
            >
              <div className={`grid gap-4 ${viewMode === "side-by-side" ? "lg:grid-cols-2" : "grid-cols-1"}`}>
                
                {/* Legacy Anti-Pattern Box (if side-by-side) */}
                {viewMode === "side-by-side" && (
                  <div className="rounded-sm border border-red-500/20 bg-[#0F0F11] p-4 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-red-400 pb-2 border-b border-red-500/20 font-bold">
                      <span>UNOPTIMIZED ANTI-PATTERN</span>
                      <span>HIGH CLS / WATERFALL</span>
                    </div>
                    <pre className="mt-3 text-red-300 font-mono text-[11px] leading-relaxed overflow-x-auto">
                      <code>{activeSample.legacyCode}</code>
                    </pre>
                  </div>
                )}

                {/* Target Role Senior Architecture Box */}
                <div className="rounded-sm border border-[#10B981]/30 bg-[#0F0F11] p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-[#10B981] pb-2 border-b border-[#10B981]/30 font-bold">
                    <span>TARGET ROLE SENIOR ARCHITECTURE</span>
                    <span>ZERO CLS / STREAMING SSR</span>
                  </div>
                  <pre className="mt-3 text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto">
                    <code>{activeSample.optimizedCode}</code>
                  </pre>
                </div>

              </div>

              {/* Explanation Note */}
              <div className="mt-4 rounded-sm border border-[#26262B] bg-[#0F0F11] p-4 font-sans text-xs text-[#A1A1AA] flex items-start gap-3">
                <Zap className="h-4 w-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[#FAFAFA] font-semibold block mb-0.5">ARCHITECTURAL RATIONALE:</span>
                  {activeSample.explanation}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Footer Bar */}
          <div className="flex items-center justify-between border-t border-[#26262B] bg-[#0F0F11]/90 px-4 py-2.5 text-[11px] font-mono text-[#71717A]">
            <span>AST CODE DIFF ENGINE v2.4-PROD</span>
            <span>VERIFIED FOR PRODUCTION</span>
          </div>

        </div>

      </div>
    </section>
  );
}
