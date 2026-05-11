import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import bgContact from "@/assets/bg-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lester Solutions — IT Consultancy" },
      {
        name: "description",
        content:
          "Get in touch with Lester Solutions for strategic advice or technical support. Email servicedesk@lestersolutions.com or call 03330 523 910.",
      },
      {
        property: "og:title",
        content: "Contact Lester Solutions — IT Consultancy",
      },
      {
        property: "og:description",
        content:
          "Whether you need strategic advice or technical support, we're here to help you succeed.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email us",
    value: "servicedesk@lestersolutions.com",
    href: "mailto:servicedesk@lestersolutions.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "03330 523 910",
    href: "tel:+443330523910",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon–Sat · 9:00 – 19:00",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "London & Hertfordshire, UK",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="// 03 — Contact"
          title="Strategic advice or technical support — we're here to help."
          subtitle="Reach out using any of the methods below. A dedicated member of our team will respond promptly, ensuring your enquiry is addressed quickly and efficiently."
          crumb="Contact"
          backgroundImage={bgContact}
        />

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
            <Reveal className="lg:col-span-2 space-y-5">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">
                // Get in touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight leading-tight">
                Don't hesitate to contact us.
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                Whether it's a quick question, a project scoping call or an
                urgent support request — we'll get back to you the same working
                day.
              </p>

              <ul className="mt-8 space-y-4">
                {channels.map((c) => {
                  const Inner = (
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="mt-1 text-foreground font-medium">
                          {c.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a href={c.href} className="block">
                          {Inner}
                        </a>
                      ) : (
                        Inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm"
              >
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                  // Send a message
                </p>
                <h3 className="text-2xl font-semibold text-foreground tracking-tight mb-8">
                  Tell us about your project.
                </h3>

                {submitted ? (
                  <div className="rounded-xl border border-accent/30 bg-accent/10 p-6 text-foreground">
                    <p className="font-medium">Thanks — message received.</p>
                    <p className="mt-1 text-sm text-foreground/75">
                      A consultant will be in touch within one working day.
                    </p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Company" name="company" />
                    <Field label="Phone" name="phone" type="tel" />
                    <div className="sm:col-span-2">
                      <label className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium px-6 py-3.5 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                      >
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
      />
    </div>
  );
}
