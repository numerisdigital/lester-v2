import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cloud,
  ShieldCheck,
  Headphones,
  HardDrive,
  Wifi,
  Home as HomeIcon,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal } from "@/components/site/Reveal";
import bgServices from "@/assets/bg-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Lester Solutions" },
      {
        name: "description",
        content:
          "Managed IT, cyber security, cloud, connectivity, backup & disaster recovery and IT consultancy — delivered with rigour by Lester Solutions.",
      },
      { property: "og:title", content: "IT Services — Lester Solutions" },
      {
        property: "og:description",
        content:
          "Managed IT, cyber security, cloud, connectivity, backup & disaster recovery and IT consultancy.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Headphones,
    title: "Managed IT",
    body: "Enhance operational efficiency, reduce downtime and gain access to the latest technology with proactive 24/7 support.",
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    body: "Ensure data safety, minimise downtime and enable rapid recovery from unforeseen events with tested resilience plans.",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    body: "Seamless communication, remote working and business growth through reliable, resilient network connections.",
  },
  {
    icon: HomeIcon,
    title: "Home Services",
    body: "Convenient, personalised IT support with optimal technology performance — from the comfort of your home.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    body: "Protect against digital threats, secure your data and maintain trust with advanced, layered defence.",
  },
  {
    icon: Lightbulb,
    title: "IT Consultancy",
    body: "Expert advice, optimal technology strategies and enhanced business efficiency through tailored IT solutions.",
  },
];

const promises = [
  "Proven Track Record",
  "Innovative IT Solutions",
  "Unrivalled Customer Support",
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="// 01 — Services"
          title="Discover our IT services."
          subtitle="Strategic, security-first IT services that scale with your business — delivered by senior consultants who care about outcomes."
          crumb="Services"
          backgroundImage={bgServices}
        />

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <a
                    href="#"
                    className="group relative block h-full rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
                  >
                    <span className="absolute inset-x-0 top-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      {s.title}
                    </h2>
                    <p className="text-foreground/75 leading-relaxed mb-6">
                      {s.body}
                    </p>
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

        <section className="bg-secondary py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                // Why Lester
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                Innovative IT solutions, delivered with unrivalled customer support.
              </h2>
              <p className="mt-6 text-foreground/75 leading-relaxed text-lg">
                Lester Solutions has a proven track record of delivering
                innovative IT solutions, exceptional customer service and deep
                industry expertise. We understand the complexities of technology
                and consistently exceed expectations — ensuring reliable,
                effective solutions tailored to each client's specific needs.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-4">
                {promises.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <span className="text-foreground font-medium">{p}</span>
                  </li>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium px-6 py-3.5 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ul>
            </Reveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
