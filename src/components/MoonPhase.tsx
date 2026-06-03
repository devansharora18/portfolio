import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MoonPhase() {
  const shadowRef = useRef<SVGCircleElement>(null);

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

  return (
    <div className="fixed bottom-8 right-8 z-30 pointer-events-none hidden md:block">
      <svg width="48" height="48" viewBox="0 0 84 84">
        <defs>
          <clipPath id="moonClip">
            <circle cx="42" cy="42" r="36" />
          </clipPath>
        </defs>
        <circle cx="42" cy="42" r="36" fill="#e9c349" opacity="0.6" />
        <g clipPath="url(#moonClip)">
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
