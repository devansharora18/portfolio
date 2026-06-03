import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const palettes = [
  { moon: "#e9c349", stroke: "#e9c349" },
  { moon: "#c0d0e0", stroke: "#c0d0e0" },
  { moon: "#e8a0a0", stroke: "#e8a0a0" },
  { moon: "#6ee7b7", stroke: "#6ee7b7" },
];

export default function MoonPhase() {
  const shadowRef = useRef<SVGCircleElement>(null);
  const moonRef = useRef<SVGCircleElement>(null);
  const strokeRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paletteIdx, setPaletteIdx] = useState(0);
  const clicksRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = shadowRef.current;
    if (!el) return;
    const trigger = gsap.to(el, {
      attr: { cx: 72 },
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    return () => { trigger.kill(); };
  }, []);

  useEffect(() => {
    if (!moonRef.current || !strokeRef.current) return;
    const palette = palettes[paletteIdx];
    moonRef.current.setAttribute("fill", palette.moon);
    strokeRef.current.setAttribute("stroke", palette.stroke);
  }, [paletteIdx]);

  const handleClick = useCallback(() => {
    clicksRef.current++;
    if (timerRef.current) clearTimeout(timerRef.current);

    if (clicksRef.current >= 3) {
      clicksRef.current = 0;
      const container = containerRef.current;
      if (!container) return;

      gsap.to(container, {
        scale: 1.8,
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => {
          setPaletteIdx((i) => (i + 1) % palettes.length);
          gsap.fromTo(
            container,
            { scale: 0.3, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.4)" }
          );
        },
      });
    } else {
      timerRef.current = setTimeout(() => {
        clicksRef.current = 0;
      }, 500);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-30 cursor-pointer hidden md:block select-none"
    >
      <svg width="48" height="48" viewBox="0 0 84 84">
        <defs>
          <clipPath id="moonClipEgg">
            <circle cx="42" cy="42" r="36" />
          </clipPath>
        </defs>
        <circle ref={moonRef} cx="42" cy="42" r="36" fill="#e9c349" opacity="0.6" />
        <g clipPath="url(#moonClipEgg)">
          <circle
            ref={shadowRef}
            cx="12"
            cy="42"
            r="36"
            fill="#131313"
            opacity="0.85"
          />
        </g>
        <circle
          ref={strokeRef}
          cx="42"
          cy="42"
          r="36"
          fill="none"
          stroke="#e9c349"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
