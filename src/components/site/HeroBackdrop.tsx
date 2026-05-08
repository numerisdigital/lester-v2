export function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* faint grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-navy/30" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>
          <mask id="m">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#m)" />
      </svg>

      {/* organic blobs */}
      <div
        className="drift-a absolute -top-32 -left-24 h-[44rem] w-[44rem] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.55 0.15 252 / 0.55), transparent 70%)",
        }}
      />
      <div
        className="drift-b absolute -bottom-40 -right-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.74 0.13 180 / 0.5), transparent 70%)",
        }}
      />
      <div
        className="drift-a absolute top-1/3 right-1/4 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.22 0.06 258 / 0.4), transparent 70%)",
        }}
      />
    </div>
  );
}