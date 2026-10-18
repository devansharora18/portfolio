import { useEffect, useRef } from "react";

/**
 * A cursor follower for fine pointers: a small ink dot that tracks closely and a
 * lagging ring that inverts whatever it passes over, growing on anything
 * clickable. Only mounted when a real pointer exists and motion is welcome, and
 * it hides the native cursor only once it is actually running — so no JS, no
 * pointer, or reduced motion all leave a normal cursor in place.
 */
export default function CursorFollower() {
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const near = { ...target };
    const far = { ...target };
    let shown = false;
    let hot = false;
    let raf = 0;

    const point = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      if (!shown) {
        shown = true;
        near.x = far.x = e.clientX;
        near.y = far.y = e.clientY;
        root.classList.add("cursor-none", "cursor-on");
      }

      const el = e.target as HTMLElement | null;
      const next = Boolean(el?.closest?.("a, button, input, textarea, [data-cursor]"));
      if (next !== hot) {
        hot = next;
        root.classList.toggle("cursor-hot", hot);
      }
    };

    const hide = () => {
      shown = false;
      hot = false;
      root.classList.remove("cursor-on", "cursor-hot");
    };

    const loop = () => {
      near.x += (target.x - near.x) * 0.38;
      near.y += (target.y - near.y) * 0.38;
      far.x += (target.x - far.x) * 0.13;
      far.y += (target.y - far.y) * 0.13;
      dot.style.transform = `translate3d(${near.x}px, ${near.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${far.x}px, ${far.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", point, { passive: true });
    window.addEventListener("pointerdown", point, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", point);
      window.removeEventListener("pointerdown", point);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      root.classList.remove("cursor-none", "cursor-on", "cursor-hot");
    };
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <span className="cursor__ring" ref={ringRef} />
      <span className="cursor__dot" ref={dotRef} />
    </div>
  );
}
