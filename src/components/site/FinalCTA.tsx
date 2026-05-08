import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative bg-navy text-navy-foreground py-28 sm:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div
          className="drift-a absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.55 0.15 252 / 0.7), transparent 70%)",
          }}
        />
        <div
          className="drift-b absolute -bottom-40 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.74 0.13 180 / 0.6), transparent 70%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-6">
            // 06 — Let's Talk
          </p>
          <h2
            className="font-semibold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Ready to make IT a competitive advantage?
          </h2>
          <p className="mt-6 text-lg text-navy-foreground/75 max-w-2xl mx-auto">
            Book a 30-minute consultation with a senior consultant. No sales
            pitch — just a clear assessment of where to start.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium px-7 py-4 shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="font-mono text-sm text-navy-foreground/60">
              or call <span className="text-accent">+44 (0)20 4538 9912</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}