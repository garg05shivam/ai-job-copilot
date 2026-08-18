import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Capabilities from "@/components/capabilities";
import ApplicationPrep from "@/components/application-prep";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)]">
      <Navbar />

      <Hero />

      <HowItWorks />

      <Capabilities />

      <ApplicationPrep />

      <FinalCta />

      <Footer />
    </main>
  );
}