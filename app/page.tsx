import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)]">
      <Navbar />
      <Hero />
    </main>
  );
}