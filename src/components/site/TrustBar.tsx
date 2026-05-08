import { Reveal } from "./Reveal";

const marks = [
  { name: "Microsoft", src: "/logos/microsoft.svg" },
  { name: "Amazon Web Services", src: "/logos/aws.svg" },
  { name: "Google Cloud", src: "/logos/googlecloud.svg" },
  { name: "Cisco", src: "/logos/cisco.svg" },
  { name: "ISO 27001 Certified", src: "/logos/iso27001.svg" },
  { name: "Cyber Essentials Plus", src: "/logos/cyberessentials.svg" },
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
                key={m.name}
                className="flex items-center justify-center h-10"
              >
                <img
                  src={m.src}
                  alt={m.name}
                  loading="lazy"
                  className="max-h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity [filter:brightness(0)] dark:[filter:brightness(0)_invert(1)]"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}