import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="bg-secondary py-24 sm:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 left-10 text-[20rem] font-serif text-navy/5 leading-none select-none"
      >
        “
      </div>
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-8">
            // 05 — Client Voice
          </p>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl italic text-navy leading-snug font-medium tracking-tight">
            “Lester Solutions didn't just modernise our infrastructure — they
            gave our board the confidence that security and growth can move at
            the same pace.”
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-11 w-11 rounded-full bg-navy text-navy-foreground flex items-center justify-center font-semibold">
              SH
            </div>
            <div className="text-left">
              <p className="font-semibold text-navy">Sarah Hartley</p>
              <p className="text-sm text-muted-foreground">
                Chief Operating Officer, Meridian Capital
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}