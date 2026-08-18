import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            AI Job Copilot
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Know exactly how you fit the job.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Understand job requirements, identify skill gaps, and prepare
            stronger applications with an AI-powered career workspace.
          </p>
        </div>
      </section>
    </main>
  );
}