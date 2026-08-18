import {
  FileText,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Add the role",
    description:
      "Bring in a job description and give the copilot the context it needs to understand the opportunity.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Understand your fit",
    description:
      "See where your experience aligns with the role and surface the areas that may need more attention.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Prepare with confidence",
    description:
      "Turn the analysis into practical application guidance tailored to the role you're targeting.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[var(--border)] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
            How it works
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            From job description to
            <br />
            clear next steps.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            The copilot turns a job opportunity into a focused view of your
            strengths, gaps, and what to do next.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform duration-300 hover:-translate-y-1 lg:p-7"
              >
               
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.16em] text-[var(--muted)]">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/[0.03] transition-colors group-hover:border-[var(--border-strong)]">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}