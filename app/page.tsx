"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Capabilities from "@/components/capabilities";
import CodeDiffInspector from "@/components/code-diff-inspector";
import ApplicationPrep from "@/components/application-prep";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";
import CommandPalette from "@/components/command-palette";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandPaletteOpen((isOpen) => !isOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main
      id="main-content"
      className="min-h-screen overflow-x-hidden bg-[#0F0F11] text-[#FAFAFA]"
    >
      <Navbar />

      <Hero />

      <CodeDiffInspector />

      <HowItWorks />

      <Capabilities />

      <ApplicationPrep />

      <FinalCta />

      <Footer />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </main>
  );
}
