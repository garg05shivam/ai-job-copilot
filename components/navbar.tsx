"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "WORKSPACE", href: "#product" },
  { label: "PIPELINE", href: "#how-it-works" },
  { label: "ENGINE SPECS", href: "#capabilities" },
  { label: "REMEDIATION", href: "#application-prep" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#26262B] bg-[#0F0F11]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand identity */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 group"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#16161A] border border-[#26262B] group-hover:border-[#F59E0B]/50 transition-colors">
            <Terminal className="h-3.5 w-3.5 text-[#F59E0B]" />
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider text-[#FAFAFA]">
            COPILOT<span className="text-[#A1A1AA] font-normal">.ENGINE</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#26262B] bg-[#16161A] px-2 py-0.5 text-[10px] font-mono tracking-wide text-[#A1A1AA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
            v2.4-PROD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-widest text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
              window.dispatchEvent(event);
            }}
            className="inline-flex items-center gap-1.5 rounded-sm border border-[#26262B] bg-[#16161A] px-2.5 py-1.5 font-mono text-[11px] text-[#A1A1AA] hover:border-[#3F3F46] hover:text-[#FAFAFA] transition-colors"
          >
            <span className="text-[#F59E0B]">⌘K</span>
            <span>COMMANDS</span>
          </button>

          <Link
            href="#product"
            className="inline-flex items-center gap-1.5 rounded-sm bg-[#F59E0B] px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wider text-[#0F0F11] transition-all duration-300 hover:bg-[#d98b06] active:scale-[0.98]"
          >
            RUN FIT MATRIX
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#26262B] bg-[#16161A] text-[#FAFAFA] md:hidden focus:outline-none focus:border-[#F59E0B]"
        >
          {isOpen ? (
            <X className="h-4 w-4 text-[#A1A1AA]" />
          ) : (
            <Menu className="h-4 w-4 text-[#A1A1AA]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="border-t border-[#26262B] bg-[#16161A] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-sm px-3 py-2.5 font-mono text-xs tracking-wider text-[#A1A1AA] transition-colors hover:bg-[#26262B]/50 hover:text-[#FAFAFA]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#product"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-sm bg-[#F59E0B] px-4 py-2.5 font-mono text-xs font-semibold tracking-wider text-[#0F0F11]"
            >
              RUN FIT MATRIX
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}