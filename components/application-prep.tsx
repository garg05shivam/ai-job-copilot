import {
  Check,
  Code2,
  FileSpreadsheet,
  Terminal,
  Zap,
} from "lucide-react";

const preparationItems = [
  {
    icon: Code2,
    title: "State & Hydration Boundary Brief",
    description:
      "Map client vs server components, suspense boundaries, and streaming SSR edge cases to defend in technical system design.",
  },
  {
    icon: FileSpreadsheet,
    title: "Optimistic UI & Local Storage Matrix",
    description:
      "Document IndexedDB persistence, CRDT conflict resolution models, and rollback triggers for real-time collaborative targets.",
  },
  {
    icon: Zap,
    title: "Web Vitals & Performance Budget Defense",
    description:
      "Prepare benchmark graphs showing zero layout shift (CLS: 0.00), fast interaction to next paint (INP: <50ms), and 0.8s LCP scores.",
  },
];

export default function ApplicationPrep() {
  return (
    <section
      id="application-prep"
      className="border-t border-[#26262B] bg-[#0F0F11] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#26262B] bg-[#16161A] px-3 py-1 text-[11px] font-mono tracking-widest text-[#A1A1AA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              ENGINEERING BRIEF WORKSPACE
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Turn fit analysis into
              <br />
              direct recruiter shortlisting.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
              The evaluation is only valuable if it proves senior engineering rigor. Transform raw signals into bulletproof technical interview briefs.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#FAFAFA]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30">
                <Check className="h-3 w-3" />
              </span>
              Strict adherence to senior candidate evaluation criteria
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-[#26262B] bg-[#16161A]">
            <div className="flex items-center justify-between border-b border-[#26262B] bg-[#0F0F11]/60 px-5 py-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-[#F59E0B]" />
                <span className="font-mono text-xs font-semibold text-[#FAFAFA]">
                  CANDIDATE_BRIEF_OUTPUT.MD
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#10B981] border border-[#10B981]/30 bg-[#10B981]/10 px-2 py-0.5 rounded-sm">
                READY FOR RECRUITER PASS
              </span>
            </div>

            <div className="divide-y divide-[#26262B]">
              {preparationItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 sm:p-6 hover:bg-[#1C1C22]/50 transition-colors"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[#26262B] bg-[#0F0F11]">
                      <Icon className="h-4 w-4 text-[#F59E0B]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-[#F59E0B] font-bold">
                          VECTOR_0{index + 1}
                        </span>
                        <h3 className="text-sm font-semibold text-[#FAFAFA]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}