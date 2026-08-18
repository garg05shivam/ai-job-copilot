import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          AI Job Copilot
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#product"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Product
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            How it works
          </Link>

          <Link
            href="#capabilities"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Capabilities
          </Link>
        </nav>

        <Link
          href="#product"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 md:flex"
        >
          Try the copilot
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}