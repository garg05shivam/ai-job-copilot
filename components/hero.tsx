"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  CircleAlert,
  LoaderCircle,
} from "lucide-react";

export default function Hero() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (isAnalyzing) return;

    setIsAnalyzing(true);
    setHasAnalyzed(false);

    window.setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1400);
  };

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]"
          >
            AI job intelligence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
          >
            Know exactly how
            <br />
            you fit the job.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg"
          >
            Understand the role, uncover your skill gaps, and prepare a
            stronger application with an AI-powered career workspace.
          </motion.p>

          <motion.button
            type="button"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze a job"}

            {isAnalyzing ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </motion.button>
        </div>

        <motion.div
          id="product"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/40">
            
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
              <div>
                <p className="text-sm font-medium text-white">
                  AI Job Analysis
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Frontend Engineer · Product Team
                </p>
              </div>

              <div className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                Demo analysis
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Job information */}
              <div className="border-b border-[var(--border)] p-6 lg:border-b-0 lg:border-r lg:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                      Role
                    </p>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      Frontend Engineer
                    </h2>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Product-focused engineering role
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <motion.p
                      key={hasAnalyzed ? "result" : isAnalyzing ? "loading" : "ready"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-semibold tracking-tight text-white"
                    >
                      {isAnalyzing ? "—" : hasAnalyzed ? "92%" : "—"}
                    </motion.p>

                    <p className="text-xs text-[var(--success)]">
                      {isAnalyzing
                        ? "analyzing..."
                        : hasAnalyzed
                          ? "strong match"
                          : "ready to analyze"}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Strong matches
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {["React", "TypeScript", "Next.js", "Product thinking"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white/[0.02] px-4 py-3"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)]">
                            <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                          </span>

                          <span className="text-sm text-white/80">
                            {skill}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                  AI recommendation
                </p>

                <motion.div
                  key={hasAnalyzed ? "recommendation" : isAnalyzing ? "analyzing" : "initial"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-xl border border-[var(--border)] bg-white/[0.02] p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]">
                      {isAnalyzing ? (
                        <LoaderCircle className="h-4 w-4 animate-spin text-[var(--accent)]" />
                      ) : (
                        <CircleAlert className="h-4 w-4 text-[var(--accent)]" />
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        {isAnalyzing
                          ? "Analyzing role requirements"
                          : hasAnalyzed
                            ? "One skill gap to address"
                            : "Ready for analysis"}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {isAnalyzing
                          ? "Comparing the role requirements with your demonstrated skills..."
                          : hasAnalyzed
                            ? "The role mentions GraphQL experience. Consider highlighting any API integration work you have done."
                            : "Start the analysis to see your strongest matches and potential gaps."}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isAnalyzing
                    ? "Analyzing role..."
                    : hasAnalyzed
                      ? "Prepare application"
                      : "Analyze role"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}