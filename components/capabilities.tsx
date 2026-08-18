import {
  Check,
  X,
} from "lucide-react";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-b border-[#26262B] bg-[#0F0F11] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-sm border border-[#26262B] bg-[#16161A] px-3 py-1 font-mono text-[11px] text-[#A1A1AA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            ENGINE ARCHITECTURE COMPARISON
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
            Why legacy keyword ATS fail senior engineers.
          </h2>

          <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
            Standard recruiters use naive string matching that rewards buzzword stuffing. Copilot Engine audits actual code AST graphs and system design boundaries.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-md border border-[#26262B] bg-[#16161A]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[#26262B] bg-[#0F0F11]/80 text-[11px] text-[#71717A]">
                  <th className="py-4 px-6 font-normal">Evaluation Vector</th>
                  <th className="py-4 px-6 font-normal text-red-400">Legacy ATS Keyword Parser</th>
                  <th className="py-4 px-6 font-normal text-[#F59E0B]">Copilot AST Deterministic Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#26262B]">
                <tr className="hover:bg-[#1C1C22]/50 transition-colors">
                  <td className="py-4 px-6 text-[#FAFAFA] font-medium">
                    Analysis Depth
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="h-4 w-4 shrink-0" />
                      <span>Flat text string search (32% signal accuracy)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#FAFAFA]">
                    <div className="flex items-center gap-2 text-[#10B981]">
                      <Check className="h-4 w-4 shrink-0" />
                      <span>Depth-first AST compiler node graph (98% signal accuracy)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#1C1C22]/50 transition-colors">
                  <td className="py-4 px-6 text-[#FAFAFA] font-medium">
                    Code Evidence Verification
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="h-4 w-4 shrink-0" />
                      <span>Zero code inspection; relies on self-reported resume text</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#FAFAFA]">
                    <div className="flex items-center gap-2 text-[#10B981]">
                      <Check className="h-4 w-4 shrink-0" />
                      <span>Inspects repository AST nodes, TypeScript types, and custom hooks</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#1C1C22]/50 transition-colors">
                  <td className="py-4 px-6 text-[#FAFAFA] font-medium">
                    Performance & Web Vitals Audit
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="h-4 w-4 shrink-0" />
                      <span>Ignored completely</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#FAFAFA]">
                    <div className="flex items-center gap-2 text-[#10B981]">
                      <Check className="h-4 w-4 shrink-0" />
                      <span>Audits LCP, INP frame budgets, and bundle isolation</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#1C1C22]/50 transition-colors">
                  <td className="py-4 px-6 text-[#FAFAFA] font-medium">
                    Interview Preparation Output
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="h-4 w-4 shrink-0" />
                      <span>Generic static advice</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#FAFAFA]">
                    <div className="flex items-center gap-2 text-[#10B981]">
                      <Check className="h-4 w-4 shrink-0" />
                      <span>Target-tailored Engineering Defense Brief & Remediation items</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
