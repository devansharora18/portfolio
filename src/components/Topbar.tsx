import { useEffect, useRef, useState } from "react";
import { sections } from "../lib/data";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "./Art";

export default function Topbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  /* One observer for all sections, and the LAST one in view wins: sections stack
     over one another on this page, and a pinned section can still intersect the
     band while being hidden behind the next one. */
  useEffect(() => {
    const inView = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) inView.add(id);
          else inView.delete(id);
        }
        const next = [...sections].reverse().find((s) => inView.has(s.id));
        if (next) setActive(next.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = barRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${ratio.toFixed(4)})`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b-2" style={{ background: "var(--gesso)", borderColor: "var(--ink)" }}>
      <div className="wrap flex h-[var(--nav)] items-center justify-between gap-4">
        <a href="#cover" className="flex items-center gap-2.5 no-underline" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="grid h-[26px] w-[26px] shrink-0 place-items-center border-2"
            style={{
              background: "var(--verm)",
              borderColor: "var(--ink)",
              boxShadow: "2px 2px 0 var(--ink)",
            }}
          >
            <span
              className="loud"
              style={{
                fontSize: "0.62rem",
                lineHeight: 1,
                color: "var(--on-verm)",
                letterSpacing: "-0.03em",
              }}
            >
              DA
            </span>
          </span>
          <span className="loud text-[0.95rem] md:text-[1.05rem]" style={{ letterSpacing: "-0.01em" }}>
            Devansh Arora
          </span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="anno block border-2 px-2.5 py-1.5 no-underline transition-colors"
                  style={{
                    borderColor: active === s.id ? "var(--ink)" : "transparent",
                    background: active === s.id ? "var(--pop)" : "transparent",
                    color: active === s.id ? "var(--on-pop)" : "var(--ink-2)",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== s.id) e.currentTarget.style.background = "var(--gesso-2)";
                  }}
                  onMouseLeave={(e) => {
                    if (active !== s.id) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span style={{ color: active === s.id ? "var(--on-pop)" : "var(--verm-text)" }}>
                    {s.no}
                  </span>{" "}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center border-2"
            style={{ borderColor: "var(--ink)", background: "var(--gesso)", boxShadow: "3px 3px 0 var(--ink)" }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border-2 lg:hidden"
            style={{ borderColor: "var(--ink)", background: "var(--pop)", boxShadow: "3px 3px 0 var(--ink)" }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block h-[2.5px] w-4" style={{ background: "var(--on-pop)" }} />
            <span className="block h-[2.5px] w-4" style={{ background: "var(--on-pop)", opacity: open ? 0 : 1 }} />
            <span className="block h-[2.5px] w-4" style={{ background: "var(--on-pop)" }} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-2 lg:hidden" style={{ borderColor: "var(--ink)", background: "var(--gesso)" }}>
          <ul className="wrap flex flex-col py-2">
            {sections.map((s) => (
              <li key={s.id} className="border-b-2 last:border-b-0" style={{ borderColor: "var(--hair)" }}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-3.5 no-underline"
                >
                  <span className="loud text-2xl" style={{ color: active === s.id ? "var(--verm-text)" : "var(--ink)" }}>
                    {s.label}
                  </span>
                  <span className="anno dim">{s.no}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        ref={barRef}
        className="absolute -bottom-[2px] left-0 h-[5px] w-full origin-left"
        style={{ background: "var(--verm)", transform: "scaleX(0)" }}
      />
    </header>
  );
}
