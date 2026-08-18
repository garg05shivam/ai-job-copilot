import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="border-t border-[var(--border)] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-20">
          
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
              Start with clarity
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
              Stop guessing.
              <br />
              Start knowing your fit.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              Explore how an AI-powered job workspace can turn a role into a
              clearer plan for your next application.
            </p>

            <a
              href="#product"
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              Analyze a job
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              Interactive product concept · Demo experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}