import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-[1px] bg-white/5">
      <div
        ref={barRef}
        className="h-full bg-tertiary origin-left scale-x-0"
        style={{ boxShadow: "0 0 4px 1px rgba(233,195,73,0.3)" }}
      />
    </div>
  );
}
