import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-white"
          >
            AI Job Copilot
          </Link>

          <p className="mt-2 text-xs text-[var(--muted)]">
            AI-powered job intelligence concept.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-[var(--muted)]">
          <Link
            href="#product"
            className="transition-colors hover:text-white"
          >
            Product
          </Link>

          <Link
            href="#how-it-works"
            className="transition-colors hover:text-white"
          >
            How it works
          </Link>

          <Link
            href="#capabilities"
            className="transition-colors hover:text-white"
          >
            Capabilities
          </Link>

          <Link
            href="#application-prep"
            className="transition-colors hover:text-white"
          >
            Application prep
          </Link>
        </nav>
      </div>
    </footer>
  );
}