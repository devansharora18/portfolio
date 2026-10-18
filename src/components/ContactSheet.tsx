import { useCallback, useEffect, useRef, useState } from "react";
import { projects, type Project } from "../lib/data";

const IN_REEL = ["TardisJS", "Ember", "Devjams 25"];

export default function ContactSheet() {
  const remaining = projects.filter((p) => !IN_REEL.includes(p.title));
  const stripRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const onScroll = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = stripRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
    el.dataset.dragging = "true";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = stripRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = stripRef.current;
    drag.current.active = false;
    if (!el) return;
    delete el.dataset.dragging;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      /* pointer already released */
    }
  };

  const guardClick = (e: React.MouseEvent) => {
    if (drag.current.moved) e.preventDefault();
  };

  return (
    <section className="relative pb-24 md:pb-32" aria-label="Contact sheet — the remaining work">
      <div className="frame mb-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="label label-solar">Contact sheet</span>
            <h3 className="act mt-3" style={{ fontSize: "clamp(1.5rem, 1rem + 1.7vw, 2.6rem)" }}>
              The rest of the reel
            </h3>
          </div>
          <span className="label hidden sm:block">
            {remaining.length} frames · drag or swipe
          </span>
        </div>
      </div>

      <div className="perf" aria-hidden="true" />

      <div
        className="strip"
        ref={stripRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        tabIndex={0}
        role="region"
        aria-label={`${remaining.length} more projects, scrollable horizontally`}
      >
        <div className="strip__rail">
          {remaining.map((project: Project) => {
            const ratio = project.shape === "slab" ? 9 / 13 : 16 / 10;
            return (
              <a
                key={project.no}
                className="strip__cell group block no-underline"
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={guardClick}
                draggable={false}
                style={{ width: `calc(var(--strip-h) * ${ratio.toFixed(4)})` }}
              >
                <div className="still__shot strip__shot">
                  <img src={project.image} alt="" loading="lazy" draggable={false} />
                </div>
                <div className="mt-3.5 flex items-baseline gap-3">
                  <span className="data" style={{ color: "var(--steel-2)" }}>
                    {project.no}
                  </span>
                  <span className="display" style={{ fontSize: "1.05rem", color: "var(--ice)" }}>
                    {project.title}
                  </span>
                </div>
                <span className="label mt-1.5 block">{project.tags.join(" · ")}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="perf" aria-hidden="true" />

      <div className="frame">
        <div className="reel-bar">
          <span
            className="reel-bar__thumb"
            style={{ transform: `translateX(${(progress * 354.5).toFixed(2)}%)` }}
          />
        </div>
      </div>
    </section>
  );
}
