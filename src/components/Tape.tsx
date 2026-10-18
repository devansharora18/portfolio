import { useEffect, useRef } from "react";
import { Asterisk, Bracket, Browser, Device, Server, Spark, Target } from "./Art";

interface Props {
  tone?: "ink" | "verm" | "pop";
  reverse?: boolean;
}

type Kind = "browser" | "server" | "device" | "bracket" | "spark" | "target" | "asterisk";

/* A capability ticker, not a slogan: what actually gets built. */
const SEQ: { w: string; icon: Kind }[] = [
  { w: "Frontend", icon: "browser" },
  { w: "Backend", icon: "server" },
  { w: "Mobile", icon: "device" },
  { w: "TypeScript", icon: "bracket" },
  { w: "React", icon: "asterisk" },
  { w: "Next.js", icon: "browser" },
  { w: "Go", icon: "bracket" },
  { w: "Python", icon: "bracket" },
  { w: "Flutter", icon: "device" },
  { w: "Django", icon: "server" },
  { w: "Firebase", icon: "target" },
  { w: "React Native", icon: "device" },
  { w: "REST & APIs", icon: "server" },
  { w: "Design systems", icon: "spark" },
  { w: "Tailwind", icon: "browser" },
  { w: "Accessibility", icon: "target" },
];

function Glyph({ kind, size }: { kind: Kind; size: number }) {
  if (kind === "browser") return <Browser size={size} />;
  if (kind === "server") return <Server size={size} />;
  if (kind === "device") return <Device size={size} />;
  if (kind === "bracket") return <Bracket size={size} />;
  if (kind === "spark") return <Spark size={size} />;
  if (kind === "target") return <Target size={size} />;
  return <Asterisk size={size} />;
}

function Run() {
  return (
    <>
      {SEQ.map((item, i) => (
        <span className="tape__item" key={`${item.w}-${i}`}>
          <Glyph kind={item.icon} size={18} />
          {item.w}
        </span>
      ))}
    </>
  );
}

export default function Tape({ tone = "ink", reverse = false }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const toneClass = tone === "verm" ? " tape--verm" : tone === "pop" ? " tape--pop" : "";

  /* The loop wraps every 30s. Translating by exactly one copy of the run is only
     seamless if that distance is a whole number of pixels — otherwise the wrap
     lands on a different sub-pixel phase and the text shimmers once per cycle.
     So: measure the run, pad the last item of each copy by the fraction needed
     to make it whole, and drive the wrap distance from that. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const fit = () => {
      const kids = Array.from(track.children) as HTMLElement[];
      const half = Math.floor(kids.length / 2);
      if (half < 1) return;
      const tile = kids[half].getBoundingClientRect().left - kids[0].getBoundingClientRect().left;
      if (!tile) return;

      const whole = Math.ceil(tile);
      const pad = whole - tile;
      [kids[half - 1], kids[kids.length - 1]].forEach((el) => {
        el.style.paddingRight = `calc(1.1rem + ${pad.toFixed(3)}px)`;
      });
      track.style.setProperty("--shift", `${-whole}px`);
    };

    fit();
    const t = window.setTimeout(fit, 900);
    if (document.fonts) document.fonts.ready.then(fit).catch(() => {});
    const ro = new ResizeObserver(fit);
    ro.observe(track);
    return () => {
      window.clearTimeout(t);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={`tape${toneClass}`} aria-label="What I build: frontend, backend, mobile and everything around it">
      <div
        className={`tape__track${reverse ? " tape__track--rev" : ""}`}
        ref={trackRef}
        aria-hidden="true"
      >
        <Run />
        <Run />
      </div>
    </div>
  );
}
