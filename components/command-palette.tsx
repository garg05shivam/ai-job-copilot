"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Terminal, X, Command, Code2, Cpu, Shield } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction?: (action: string) => void;
}

const COMMAND_ITEMS = [
  { id: "stripe", title: "Audit Target: Stripe Lead Frontend Architect", category: "Target Spec", icon: Terminal },
  { id: "vercel", title: "Audit Target: Vercel Staff Edge Runtime Architect", category: "Target Spec", icon: Terminal },
  { id: "linear", title: "Audit Target: Linear Senior Product Engineer", category: "Target Spec", icon: Terminal },
  { id: "diff", title: "Inspect AST Code Diff & Hydration Boundary", category: "AST Engine", icon: Code2 },
  { id: "metrics", title: "View Web Vitals & INP Performance Budgets", category: "Benchmarks", icon: Cpu },
  { id: "brief", title: "Export Candidate Interview Defense Brief (.md)", category: "Brief Exporter", icon: Shield },
];

export default function CommandPalette({ isOpen, onClose, onSelectAction }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQuery("");
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = COMMAND_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleRunCommand = (id: string) => {
    if (onSelectAction) onSelectAction(id);
    onClose();
    // Scroll smoothly to section if appropriate
    const targetElement = document.getElementById("product") || document.getElementById("ast-diff");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F0F11]/80 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-md border border-[#26262B] bg-[#16161A] shadow-2xl"
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-[#26262B] px-4 py-3.5">
              <Search className="h-4 w-4 text-[#F59E0B] shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or target role (e.g. Stripe, AST Diff, Brief)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="ml-3 w-full bg-transparent font-mono text-xs text-[#FAFAFA] placeholder-[#71717A] focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="ml-2 rounded-sm p-1 text-[#71717A] hover:bg-[#26262B] hover:text-[#FAFAFA]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Command Item List */}
            <div className="max-h-72 overflow-y-auto p-2 font-mono text-xs">
              {filteredItems.length === 0 ? (
                <div className="px-4 py-8 text-center text-[#71717A]">
                  No commands matching &quot;{query}&quot;
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleRunCommand(item.id)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-left transition-colors ${
                        selectedIndex === idx
                          ? "bg-[#26262B] text-[#FAFAFA]"
                          : "text-[#A1A1AA] hover:bg-[#1C1C22]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
                        <span className="truncate">{item.title}</span>
                      </div>
                      <span className="ml-2 text-[10px] text-[#71717A] border border-[#26262B] px-1.5 py-0.5 rounded-sm shrink-0">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer shortcuts */}
            <div className="flex items-center justify-between border-t border-[#26262B] bg-[#0F0F11] px-4 py-2 text-[10px] font-mono text-[#71717A]">
              <div className="flex items-center gap-3">
                <span>[ESC] CLOSE</span>
                <span>[↑↓] NAVIGATE</span>
                <span>[↵] SELECT</span>
              </div>
              <div className="flex items-center gap-1">
                <Command className="h-3 w-3" />
                <span>COMMAND PALETTE v2.4</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
