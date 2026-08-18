import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#26262B] bg-[#0F0F11] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#16161A] border border-[#26262B]">
            <Terminal className="h-3 w-3 text-[#F59E0B]" />
          </div>
          <div>
            <Link
              href="/"
              className="font-mono text-xs font-semibold tracking-wider text-[#FAFAFA]"
            >
              COPILOT<span className="text-[#A1A1AA] font-normal">.ENGINE</span>
            </Link>
            <p className="text-[11px] font-mono text-[#71717A]">
              Deterministic AST & Fit Analysis Infrastructure for Senior Engineering.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[#71717A]">
          <Link
            href="#product"
            className="transition-colors hover:text-[#FAFAFA]"
          >
            FIT MATRIX
          </Link>

          <Link
            href="#how-it-works"
            className="transition-colors hover:text-[#FAFAFA]"
          >
            PIPELINE
          </Link>

          <Link
            href="#capabilities"
            className="transition-colors hover:text-[#FAFAFA]"
          >
            ENGINE SPECS
          </Link>

          <Link
            href="#application-prep"
            className="transition-colors hover:text-[#FAFAFA]"
          >
            BRIEF WORKSPACE
          </Link>
        </nav>
      </div>
    </footer>
  );
}