import {
  BrainCircuit,
  FileCheck2,
  Gauge,
  Lightbulb,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Role intelligence",
    description:
      "Break a job description into the skills, expectations, and signals that matter for the opportunity.",
  },
  {
    icon: Gauge,
    title: "Fit analysis",
    description:
      "See a focused view of where your current experience aligns with the requirements of the role.",
  },
  {
    icon: Lightbulb,
    title: "Gap discovery",
    description:
      "Surface areas that may need stronger evidence, clearer positioning, or additional preparation.",
  },
  {
    icon: FileCheck2,
    title: "Application guidance",
    description:
      "Turn the analysis into practical direction for presenting your experience more effectively.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-[var(--border)] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
              Capabilities
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Less guessing.
              <br />
              More signal.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
              A focused AI workspace for turning job requirements into
              decisions you can actually act on.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--border-strong)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/[0.03]">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                  </div>

                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-white">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}