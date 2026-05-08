import { Cloud, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Architect, migrate and run resilient cloud platforms on Azure and AWS — built for scale, cost-control and uptime.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    body: "Zero-trust controls, continuous monitoring and compliance-ready reporting that protect revenue and reputation.",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    body: "Proactive 24/7 UK-based support with strict SLAs, so your teams stay productive and your IT just works.",
  },
];

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            // 02 — Our Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight leading-tight">
            Strategic IT, delivered with rigour.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <a
                href="#"
                className="group relative block h-full rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5 overflow-hidden"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{s.title}</h3>
                <p className="text-foreground/75 leading-relaxed mb-6">{s.body}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}