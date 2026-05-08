import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import collaboration from "@/assets/collaboration.jpg";

const points = [
  "Zero-trust architecture by default",
  "ISO 27001 aligned processes",
  "Continuous threat monitoring",
  "Compliance-ready reporting",
];

export function Differentiator() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl shadow-navy/10">
            <img
              src={collaboration}
              alt="Lester Solutions team reviewing a security dashboard with a client"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent pointer-events-none" />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -left-6 rounded-xl bg-card border border-border shadow-lg p-4 w-56">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              Threats blocked / mo
            </p>
            <p className="text-2xl font-semibold text-navy">12,480</p>
            <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-3/4 bg-accent rounded-full" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            // 04 — Why Lester
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight leading-tight">
            Security-First by Design.
          </h2>
          <p className="mt-5 text-foreground/75 text-lg leading-relaxed max-w-lg">
            Security isn't a service line — it's the foundation of every system
            we touch.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-navy font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Explore our security approach <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}