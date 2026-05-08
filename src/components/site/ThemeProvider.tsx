import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
type Mode = Theme | "auto";

interface ThemeCtx {
  theme: Theme;
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

function autoTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const h = new Date().getHours();
  return h >= 7 && h < 19 ? "light" : "dark";
}

function apply(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dark");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme-mode") as Mode | null) ?? "dark";
    setModeState(stored);
    const t = stored === "auto" ? autoTheme() : stored;
    setTheme(t);
    apply(t);
    if (stored === "auto") {
      const id = setInterval(() => {
        const next = autoTheme();
        setTheme((cur) => {
          if (cur !== next) apply(next);
          return next;
        });
      }, 5 * 60 * 1000);
      return () => clearInterval(id);
    }
  }, [mode]);

  const setMode = (m: Mode) => {
    localStorage.setItem("theme-mode", m);
    setModeState(m);
    const t = m === "auto" ? autoTheme() : m;
    setTheme(t);
    apply(t);
  };

  const toggle = () => setMode(theme === "dark" ? "light" : "dark");

  return <Ctx.Provider value={{ theme, mode, setMode, toggle }}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const c = useContext(Ctx);
  if (!c) return { theme: "light" as Theme, mode: "auto" as Mode, setMode: () => {}, toggle: () => {} };
  return c;
}