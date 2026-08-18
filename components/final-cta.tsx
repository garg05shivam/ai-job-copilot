import { ArrowRight, Terminal } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="border-t border-[#26262B] bg-[#0F0F11] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-md border border-[#26262B] bg-[#16161A] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-16">
          
          <div className="relative z-10">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#26262B] bg-[#0F0F11] px-3.5 py-1 text-[11px] font-mono tracking-widest text-[#A1A1AA]">
              <Terminal className="h-3.5 w-3.5 text-[#F59E0B]" />
              DETERMINISTIC EVALUATION
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Eliminate rejection vectors.
              <br />
              Validate your fit now.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">
              Run your AST signals against real target engineering specifications and get an immediate shortlisting edge.
            </p>

            <a
              href="#product"
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-sm bg-[#F59E0B] px-6 py-3 font-mono text-xs font-semibold tracking-wider text-[#0F0F11] transition-all duration-500 ease-[0.25,1,0.5,1] hover:bg-[#d98b06] hover:shadow-xl hover:shadow-[#F59E0B]/10 active:scale-[0.99]"
            >
              RUN FIT MATRIX ENGINE
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 font-mono text-[10px] text-[#71717A]">
              DETERMINISTIC ATS & AST SIGNAL AUDITOR — v2.4-PROD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}