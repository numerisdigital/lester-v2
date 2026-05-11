import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Users,
  Clock,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Lester Solutions — Trusted IT Partner" },
      {
        name: "description",
        content:
          "20+ years of innovative IT expertise, bespoke solutions and a dedicated team that puts your business outcomes first.",
      },
      {
        property: "og:title",
        content: "Why Choose Lester Solutions — Trusted IT Partner",
      },
      {
        property: "og:description",
        content:
          "20+ years of innovative IT expertise, bespoke solutions and unrivalled customer support.",
      },
    ],
  }),
  component: WhyChooseUsPage,
});

const stats = [
  { k: "20+", v: "Years of expertise" },
  { k: "99.99%", v: "Uptime delivered" },
  { k: "24/7", v: "UK-based support" },
  { k: "ISO 27001", v: "Aligned processes" },
];

const reasons = [
  {
    icon: Award,
    title: "Proven expertise",
    body: "Two decades of consulting experience across cloud, security and managed services for ambitious UK businesses.",
  },
  {
    icon: Sparkles,
    title: "Bespoke solutions",
    body: "We craft IT strategies that align precisely with your business — never one-size-fits-all templates.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first",
    body: "Zero-trust principles, continuous monitoring and compliance-ready reporting baked into every engagement.",
  },
  {
    icon: Users,
    title: "Dedicated team",
    body: "Senior consultants and engineers — not call-centre tickets — who learn your business and stay close.",
  },
  {
    icon: Clock,
    title: "Proactive support",
    body: "We resolve issues before they impact you, with strict SLAs and continuous improvement built-in.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    body: "Plain-English updates, honest advice and reliable service — so you always know where you stand.",
  },
];

function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="// 02 — Why Choose Us"
          title="20+ years of innovative IT expertise."
          subtitle="There's good reason we continue to be the chosen and trusted partner of many — bespoke solutions, senior expertise and a relentless focus on your outcomes."
          crumb="Why Choose Us"
        />

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
            <Reveal className="lg:col-span-2">
              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                // The Lester difference
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                The trusted partner of many.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-3 space-y-5 text-foreground/75 text-lg leading-relaxed">
              <p>
                Clients choose us because we deliver unmatched expertise in
                crafting bespoke IT solutions that align perfectly with their
                unique business needs. Our commitment to excellence is evident
                in every project — utilising the latest technology to ensure
                efficiencies, with a dedicated team providing continuous
                support and proactive strategies.
              </p>
              <p>
                With a focus on customer satisfaction, we prioritise transparent
                communication and reliable service. Clients trust us to not
                only meet but exceed their expectations, making us a trusted
                partner in their business success.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.v} className="border-l-2 border-accent pl-5">
                  <dt className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
                    {s.k}
                  </dt>
                  <dd className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="max-w-2xl mb-14">
              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                // What sets us apart
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                Six reasons clients stay with us.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 70}>
                  <div className="group relative h-full rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                    <span className="absolute inset-x-0 top-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                      <r.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {r.title}
                    </h3>
                    <p className="text-foreground/75 leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
