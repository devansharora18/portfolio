import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SectionHead from "./SectionHead";
import { projects, type Project } from "../lib/data";
import { ArrowRight, ArrowUpRight, Plus } from "./icons";

const INITIAL_ROWS = 6;

function useHoverCapable() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setOk(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return ok;
}

export default function Work() {
  const [expanded, setExpanded] = useState(false);

  const featured = projects[0];
  const rest = useMemo(() => projects.slice(1), []);
  const visible = expanded ? rest : rest.slice(0, INITIAL_ROWS);

  const hoverCapable = useHoverCapable();
  const listRef = useRef<HTMLUListElement>(null);
  const peekRef = useRef<HTMLDivElement>(null);
  const [peek, setPeek] = useState<Project | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Smoothly trail the cursor with the riso preview plate.
  useEffect(() => {
    if (!hoverCapable) return;
    let raf = 0;
    const loop = () => {
      const el = peekRef.current;
      if (el) {
        const p = pos.current;
        p.x += (target.current.x - p.x) * 0.16;
        p.y += (target.current.y - p.y) * 0.16;
        el.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [hoverCapable]);

  const onMove = useCallback((e: React.PointerEvent<HTMLUListElement>) => {
    target.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onEnterRow = useCallback((project: Project) => {
    const el = peekRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      // start the plate at the cursor instead of flying in from the corner
      if (rect.width && (pos.current.x === 0 || Math.abs(pos.current.x - target.current.x) > rect.width)) {
        pos.current = { ...target.current };
      }
    }
    setPeek(project);
  }, []);

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="shell">
        <SectionHead
          no="02"
          label="Work"
          title="Selected work"
          note={`${projects.length} entries`}
        />

        {/* ---------------------------------------------------- featured */}
        <article
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0"
          data-reveal
        >
          <div className="lg:col-span-7">
            <div className="plate" style={{ boxShadow: "var(--shadow-plate-lift)" }}>
              <div className="flex items-center justify-between border-b border-[var(--rule)] px-3 py-2">
                <span className="mono-sm dim">Entry {featured.no} / Featured</span>
                <span className="mono-sm" style={{ color: "var(--accent)" }}>
                  {featured.tags[0]}
                </span>
              </div>
              <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <img
                  src={featured.image}
                  alt={`${featured.title} interface`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "top center" }}
                />
              </div>
            </div>
          </div>

          {/* paper column overlapping the plate on desktop */}
          <div className="relative z-10 lg:col-span-5 lg:-ml-10 lg:pt-10">
            <div
              className="hidden lg:block"
              style={{ position: "absolute", left: "-10px", top: 0, bottom: 0, width: 10 }}
            >
              <div className="halftone h-full w-full" style={{ color: "var(--accent)", opacity: 0.28 }} />
            </div>
            <div className="lg:bg-[var(--paper)] lg:pl-10 lg:pr-2 lg:pt-2">
              <div className="flex items-center gap-3">
                <span className="crosshair" />
                <span className="mono dim">Case study</span>
              </div>
              <h3
                className="mt-4 uppercase"
                style={{ fontSize: "clamp(2.4rem, 1.2rem + 5vw, 4.6rem)", lineHeight: 0.86 }}
              >
                {featured.title}
              </h3>
              <p className="mt-5 max-w-[52ch] text-[1.02rem] leading-relaxed text-[var(--ink-2)]">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-[var(--rule)] pt-5">
                {featured.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tlink"
                  >
                    {link.label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* ------------------------------------------------------- index */}
        <div className="mt-16 md:mt-24">
          <div className="mb-3 flex items-end justify-between gap-4">
            <span className="mono dim">The index</span>
            <span className="mono-sm dim hidden sm:block">
              {hoverCapable ? "Hover to preview" : `${rest.length} more`}
            </span>
          </div>

          <ul className="idx" ref={listRef} onPointerMove={onMove}>
            {visible.map((project) => (
              <li
                key={project.no}
                className="idx__row"
                onPointerEnter={hoverCapable ? () => onEnterRow(project) : undefined}
              >
                <div className="idx__grid">
                  <span className="idx__no">{project.no}</span>

                  <div className="idx__t flex min-w-0 items-center gap-4">
                    <span className="idx__thumb">
                      <img src={project.image} alt="" loading="lazy" />
                    </span>
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="idx__title min-w-0"
                    >
                      {project.title}
                    </a>
                  </div>

                  <p className="idx__d text-[0.9rem] leading-snug text-[var(--ink-2)]">
                    {project.description}
                  </p>

                  <div className="idx__m flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="idx__tags flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </span>
                    <span className="hidden items-center gap-4 lg:flex">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tlink"
                        >
                          {link.label}
                          <ArrowUpRight size={13} />
                        </a>
                      ))}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {!expanded && rest.length > INITIAL_ROWS && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="btn"
                onClick={() => setExpanded(true)}
              >
                <Plus size={13} />
                <span>Reveal the full index ({projects.length})</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* cursor-following preview */}
      {hoverCapable && (
        <div
          className={`peek${peek?.shape === "slab" ? " peek--tall" : ""}`}
          ref={peekRef}
          data-on={peek !== null}
          aria-hidden="true"
        >
          {peek && <img src={peek.image} alt="" />}
        </div>
      )}
    </section>
  );
}
