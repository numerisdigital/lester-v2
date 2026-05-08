import { Reveal } from "./Reveal";

const marks = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Cisco",
  "ISO 27001",
  "Cyber Essentials+",
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground text-center mb-6">
            Trusted partners & certifications
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
            {marks.map((m) => (
              <div
                key={m}
                className="text-center text-navy/60 font-semibold tracking-tight text-sm sm:text-base hover:text-navy transition-colors"
              >
                {m}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}