import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative bg-navy text-navy-foreground pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="drift-a absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.55 0.15 252 / 0.7), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="drift-b absolute -bottom-40 -left-32 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.74 0.13 180 / 0.55), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-5">
          {eyebrow}
        </p>
        <h1
          className="font-semibold text-white tracking-tight leading-[1.05] max-w-4xl"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {subtitle}
          </p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="mt-10 flex items-center gap-2 font-mono text-xs text-white/60 uppercase tracking-widest"
        >
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/85">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}