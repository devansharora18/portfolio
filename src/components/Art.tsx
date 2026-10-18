interface Props {
  size?: number;
  className?: string;
}

const svg = (size: number, className?: string) => ({
  width: size,
  height: size,
  className,
  "aria-hidden": true as const,
  focusable: "false" as const,
});

/* --- the two engines ------------------------------------------------------ */

export function Bracket({ size = 20, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4 4 12l4 8M16 4l4 8-4 8" />
    </svg>
  );
}

export function Wrench({ size = 20, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4.2a4.6 4.6 0 0 0 5.9 5.9L21 9.5l-.4 3.6-9 9-3.6.4.4-3.6 9-9z" />
      <path d="M6.5 13.5 3.4 10.4a2 2 0 0 1 0-2.8l2-2a2 2 0 0 1 2.8 0l3.1 3.1" />
    </svg>
  );
}

export function Brush({ size = 20, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 3.5 21 7l-8.4 8.4-3.5-3.5z" />
      <path d="M9.1 11.9c-1.6-.6-3.4.1-4.1 1.8-.5 1.2-1.6 2.2-3 2.6 1.4 1.6 4.4 2.2 6.4.8 1.5-1 2-2.9 1.4-4.4z" />
    </svg>
  );
}

export function Asterisk({ size = 18, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.6l1.9 7 5.3-4.8-2.6 6.8 7 .3-6.6 2.5 4.4 5.5-6.8-2 1 6.9-3.6-6-3.6 6 1-6.9-6.8 2 4.4-5.5L1.4 10.9l7-.3L5.8 3.8l5.3 4.8z" />
    </svg>
  );
}

export function Spark({ size = 16, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c.9 6.4 4.7 10.2 12 11-7.3.8-11.1 4.6-12 13-.9-8.4-4.7-12.2-12-13C7.3 10.2 11.1 6.4 12 0z" />
    </svg>
  );
}

/* --- hand-drawn marks ----------------------------------------------------- */

export function ArrowCurve({ size = 60, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 90 60" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: "auto" }}>
      <path d="M4 8c22-6 44 2 52 20 3 7 3 15 1 22" />
      <path d="M48 42l9 10 8-11" />
    </svg>
  );
}

export function Squiggle({ size = 120, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 160 20" fill="none" stroke="currentColor" strokeWidth={3.4} strokeLinecap="round" style={{ width: "auto" }}>
      <path d="M3 13c11-11 21 8 32 0s21 10 32 1 22 9 33 0 22 8 27 2" />
    </svg>
  );
}

export function Burst({ size = 90, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinejoin="round">
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={50 + Math.cos(a) * 12}
            y1={50 + Math.sin(a) * 12}
            x2={50 + Math.cos(a) * 46}
            y2={50 + Math.sin(a) * 46}
          />
        );
      })}
      <circle cx="50" cy="50" r="9" />
    </svg>
  );
}

export function Target({ size = 70, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.4}>
      <circle cx="50" cy="50" r="46" />
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="14" fill="currentColor" />
    </svg>
  );
}

export function Zigzag({ size = 220, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 300 14" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="square" preserveAspectRatio="none" style={{ width: "100%", height: "auto" }}>
      <path d="M0 7l14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6 14-6 14 6" />
    </svg>
  );
}

export function Scissors({ size = 26, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.2 7.6 20 18M8.2 16.4 20 6" />
    </svg>
  );
}

export function Postmark({ size = 92, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.2}>
      <circle cx="50" cy="50" r="45" />
      <circle cx="50" cy="50" r="36" strokeDasharray="3 4" />
      <text x="50" y="45" textAnchor="middle" fontFamily="var(--font-anno)" fontSize="10" fontWeight="700" letterSpacing="0.6" fill="currentColor" stroke="none">
        SYSTEMS
      </text>
      <text x="50" y="62" textAnchor="middle" fontFamily="var(--font-anno)" fontSize="10" fontWeight="700" letterSpacing="0.6" fill="currentColor" stroke="none">
        SPLENDOUR
      </text>
    </svg>
  );
}

export function Paperclip({ size = 22, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 7.5v9a4.5 4.5 0 0 1-9 0V6a3 3 0 0 1 6 0v10a1.5 1.5 0 0 1-3 0V7.5" />
    </svg>
  );
}

/* --- technical marks ------------------------------------------------------ */

export function Server({ size = 20, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="6.5" rx="1.5" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="1.5" />
      <path d="M7 7.2h.01M7 16.7h.01" />
    </svg>
  );
}

export function Device({ size = 20, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18.6h2" />
    </svg>
  );
}

export function Browser({ size = 20, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M6.6 6.5h.01M9.6 6.5h.01" />
    </svg>
  );
}

export function Aperture({ size = 30, className }: Props) {  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round">
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 2.8 15.4 9M21.2 12l-6.4 3.4M14.6 21.2 12 15M2.8 12l6.4-3.4M9.4 2.8 12 9M21.2 12 14.6 2.9M2.8 12l6.6 9.1" />
    </svg>
  );
}

export function Sun({ size = 18, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <circle cx="12" cy="12" r="4.4" fill="currentColor" stroke="none" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
    </svg>
  );
}

export function Moon({ size = 18, className }: Props) {
  return (
    <svg {...svg(size, className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 15.2A8.6 8.6 0 0 1 8.8 3.5a8.6 8.6 0 1 0 11.7 11.7z" />
    </svg>
  );
}

/* Hand-wobbled edges: one shared filter, applied by class. */
export function WobbleDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="wob" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.024" numOctaves="3" seed="9" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="wob-2" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="4" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
