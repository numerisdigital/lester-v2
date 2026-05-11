import { Sun, Moon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/lester-logo.png";
import numerisIcon from "@/assets/numeris-favicon.png";
import { useTheme } from "./ThemeProvider";

export function Footer() {
  const { theme, toggle } = useTheme();
  return (
    <footer className="bg-navy text-navy-foreground/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <a href="#" className="inline-flex items-center mb-4" aria-label="Lester Solutions home">
              <img
                src={logo}
                alt="Lester Solutions"
                width={180}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm max-w-sm">
              Security-first IT consultancy. London, UK.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-5">
            <nav className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/why-choose-us", label: "Why Choose Us" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-navy-foreground/80 transition-colors"
            >
              {theme === "dark" ? (
                <Moon className="h-3.5 w-3.5 text-accent" />
              ) : (
                <Sun className="h-3.5 w-3.5 text-accent" />
              )}
              <span>{theme === "dark" ? "Dark" : "Light"} mode</span>
            </button>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center font-mono text-xs text-navy-foreground/50">
          <p>© 2026 Lester Solutions LTD. All rights reserved.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <img
              src={numerisIcon}
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
            <span>Built By Numeris</span>
          </a>
        </div>
      </div>
    </footer>
  );
}