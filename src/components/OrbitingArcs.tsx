import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OrbitingArcs() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const arcs = svgRef.current?.querySelectorAll("circle");
    if (!arcs) return;

    const speeds = [280, -200, 150];
    const triggers = Array.from(arcs).map((arc, i) =>
      gsap.to(arc, {
        rotation: speeds[i],
        svgOrigin: "220 220",
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    );

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <svg
      ref={svgRef}
      width="440"
      height="440"
      viewBox="0 0 440 440"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <circle
        cx="220"
        cy="220"
        r="180"
        fill="none"
        stroke="#e9c349"
        strokeWidth="3"
        strokeDasharray="905 226"
        strokeDashoffset="60"
        className="opacity-40"
      />
      <circle
        cx="220"
        cy="220"
        r="195"
        fill="none"
        stroke="#967bb6"
        strokeWidth="3"
        strokeDasharray="980 245"
        strokeDashoffset="300"
        className="opacity-40"
      />
      <circle
        cx="220"
        cy="220"
        r="210"
        fill="none"
        stroke="#a8cfb9"
        strokeWidth="3"
        strokeDasharray="1055 264"
        strokeDashoffset="540"
        className="opacity-30"
      />
    </svg>
  );
}
