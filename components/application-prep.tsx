import {
  Check,
  FileText,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

const preparationItems = [
  {
    icon: FileText,
    title: "Position your experience",
    description:
      "Identify the projects and experience that best support the requirements of the role.",
  },
  {
    icon: MessageSquareText,
    title: "Strengthen your story",
    description:
      "Turn relevant experience into clearer talking points for your application and interviews.",
  },
  {
    icon: Sparkles,
    title: "Focus your preparation",
    description:
      "Use the role analysis to decide what deserves your attention before you apply.",
  },
];

export default function ApplicationPrep() {
  return (
    <section
      id="application-prep"
      className="border-t border-[var(--border)] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
              Application prep
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Turn insight into
              <br />
              your next move.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted)]">
              The analysis is only useful if it helps you act. Use the
              recommendations to focus your application and preparation.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)]">
                <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
              </span>

              Built around the role you are targeting
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="border-b border-[var(--border)] px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Application workspace
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Frontend Engineer
                  </p>
                </div>

                <div className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                  Demo
                </div>
              </div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {preparationItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 px-6 py-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white/[0.03]">
                      <Icon className="h-4 w-4 text-[var(--accent)]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-[var(--muted)]">
                          0{index + 1}
                        </span>

                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
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