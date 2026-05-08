import { ArrowRight } from "lucide-react";
import { HeroBackdrop } from "./HeroBackdrop";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-20 overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="max-w-4xl animate-fade-up">
          <p className="font-mono text-xs sm:text-sm text-primary mb-6 tracking-wider">
            // 01 — IT Consultancy
          </p>
          <h1 className="font-semibold text-navy leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Expert IT Strategy.<br />
            <span className="text-navy/90">Secure Business </span>
            <span className="relative inline-block">
              Outcomes.
              <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-accent rounded-full" />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            We help security-conscious leaders modernise infrastructure, defend
            against threats, and turn IT into measurable business advantage.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium px-6 py-3.5 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/80 hover:text-primary transition-colors px-2 py-2 border-b border-transparent hover:border-primary"
            >
              Client Portal Login
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {[
              { k: "15+", v: "Years' experience" },
              { k: "99.99%", v: "Uptime delivered" },
              { k: "ISO 27001", v: "Aligned processes" },
              { k: "24/7", v: "UK-based support" },
            ].map((s) => (
              <div key={s.v} className="border-l border-border pl-4">
                <dt className="text-2xl font-semibold text-navy">{s.k}</dt>
                <dd className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
        Scroll
      </div>
    </section>
  );
}