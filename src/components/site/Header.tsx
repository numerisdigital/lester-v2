import { useEffect, useState } from "react";
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
        <a href="#" className="flex items-center group" aria-label="Lester Solutions home">
          <img
            src={logo}
            alt="Lester Solutions"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </a>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#"
            className="hidden sm:inline-flex text-sm text-white/75 hover:text-white transition-colors px-3 py-2"
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