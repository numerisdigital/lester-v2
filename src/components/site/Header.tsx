import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
          ? "bg-background/80 backdrop-blur border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-block h-7 w-7 rounded-md bg-navy relative overflow-hidden">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.74_0.13_180/0.9),transparent_60%)]" />
          </span>
          <span className="font-semibold text-navy tracking-tight">
            Lester Solutions
          </span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#"
            className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-navy transition-colors px-3 py-2"
          >
            Client Portal
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}