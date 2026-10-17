import { useEffect, useRef, useState } from "react";
import { EDITION, CONTACT_EMAIL, sections } from "../lib/data";
import { useTheme } from "../hooks/useTheme";
import { ArrowUpRight, Moon, Sun } from "./icons";

export default function Masthead() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("cover");
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      io.observe(el);
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
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
    <header className="masthead">
      <div className="shell masthead__inner">
        <a href="#cover" className="masthead__brand" onClick={() => setMenuOpen(false)}>
          Devansh&nbsp;Arora
          <small aria-hidden="true">§</small>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="navlink"
                  data-active={active === s.id}
                >
                  <span className="dim" aria-hidden="true">
                    {s.no}
                  </span>{" "}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <span className="mono-sm dim hidden xl:inline" aria-hidden="true">
            {EDITION}
          </span>
          <button
            type="button"
            onClick={toggle}
            className="hairline flex h-9 w-9 items-center justify-center rounded-[2px] transition-colors hover:border-[var(--ink)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <span className="hidden lg:block">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn">
              <span>Hire me</span>
              <ArrowUpRight size={13} />
            </a>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-transform duration-300 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--rule)] bg-[var(--paper)]">
          <ul className="shell flex flex-col py-4">
            {sections.map((s) => (
              <li key={s.id} className="border-b border-[var(--rule)] last:border-0">
                <a
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline justify-between py-4 no-underline"
                  style={{ color: active === s.id ? "var(--accent)" : "var(--ink)" }}
                >
                  <span
                    className="text-2xl uppercase"
                    style={{ fontFamily: "var(--font-display)", lineHeight: 1 }}
                  >
                    {s.label}
                  </span>
                  <span className="mono-sm dim">{s.no}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="progress" ref={barRef} style={{ width: "100%", transform: "scaleX(0)" }} />
    </header>
  );
}
