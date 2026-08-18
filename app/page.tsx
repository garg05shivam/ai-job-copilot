import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)]">
      <Navbar />

      <Hero />

      <HowItWorks />
    </main>
  );
}