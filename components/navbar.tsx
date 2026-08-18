"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Capabilities", href: "#capabilities" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <Link
          href="/"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-tight text-white"
        >
          AI Job Copilot
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#product"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 md:flex"
        >
          Try the copilot
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        >
          {isOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/[0.06] bg-[var(--background)] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#product"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
            >
              Try the copilot
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}