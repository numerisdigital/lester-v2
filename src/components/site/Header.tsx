import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/lester-logo.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/85 backdrop-blur border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Lester Solutions home">
          <img
            src={logo}
            alt="Lester Solutions"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {[
            { to: "/services", label: "Services" },
            { to: "/why-choose-us", label: "Why Choose Us" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hidden md:inline-flex text-sm text-white/75 hover:text-white transition-colors px-3 py-2"
              activeProps={{ className: "text-white" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ml-2"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}