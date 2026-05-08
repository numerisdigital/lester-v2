import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discover & Strategise",
    body: "We listen, audit and define a roadmap tied to measurable outcomes.",
  },
  {
    n: "02",
    title: "Implement & Integrate",
    body: "Senior engineers deliver to plan — securely, on time, with zero surprises.",
  },
  {
    n: "03",
    title: "Optimise & Support",
    body: "Continuous improvement, monitoring and 24/7 expert care.",
  },
];

export function Process() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            // 03 — Our Proven Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            A clear path from challenge to outcome.
          </h2>
        </Reveal>

        <div className="relative">
          {/* horizontal connector (desktop) */}
          <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-foreground/15" />
          <div className="hidden md:block absolute top-8 left-[8%] w-1/3 h-px bg-accent" />

          <ol className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} as="li" className="relative">
                <div className="flex md:block items-start gap-5">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground font-mono text-sm shadow-lg shadow-navy/20">
                    {s.n}
                  </div>
                  <div className="md:mt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="text-foreground/75 leading-relaxed max-w-xs">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}