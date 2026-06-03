import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMouse = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouse);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-tertiary pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ boxShadow: "0 0 8px 2px rgba(233, 195, 73, 0.4)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-tertiary/30 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-[width,height] duration-300"
      />
    </>
  );
}
