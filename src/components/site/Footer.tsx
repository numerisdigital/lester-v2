export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block h-7 w-7 rounded-md bg-primary relative overflow-hidden">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.74_0.13_180/0.9),transparent_60%)]" />
              </span>
              <span className="font-semibold text-navy-foreground">
                Lester Solutions LTD
              </span>
            </div>
            <p className="text-sm max-w-sm">
              Security-first IT consultancy. London, UK.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end text-sm">
            {["Services", "Process", "About", "Contact", "Client Portal"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="hover:text-accent transition-colors"
                >
                  {l}
                </a>
              ),
            )}
          </nav>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:justify-between font-mono text-xs text-navy-foreground/50">
          <p>© 2026 Lester Solutions LTD. All rights reserved.</p>
          <p>Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
}