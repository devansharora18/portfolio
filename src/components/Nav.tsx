import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, sections } from "../lib/data";
import { ArrowUpRight } from "./icons";

export default function Nav() {
  const [active, setActive] = useState("cover");
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
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
      setStuck(window.scrollY > 24);
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
    <header className="nav" data-stuck={stuck}>
      <div className="frame nav__inner">
        <a
          href="#cover"
          className="nav__brand"
          onClick={() => setOpen(false)}
          aria-label="Devansh Arora — back to the title card"
        >
          Devansh&nbsp;Arora
        </a>

        <nav aria-label="Acts" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {sections.slice(1).map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="navlink" data-active={active === s.id}>
                  <span style={{ color: "var(--steel-2)" }} aria-hidden="true">
                    {s.no}.
                  </span>{" "}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="tlink hidden lg:inline-flex"
            aria-label={`Email ${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
            <ArrowUpRight size={12} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className="block h-[1px] w-5 transition-transform duration-300"
              style={{
                background: "var(--ice)",
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[1px] w-5 transition-opacity duration-300"
              style={{ background: "var(--ice)", opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[1px] w-5 transition-transform duration-300"
              style={{
                background: "var(--ice)",
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--rule)",
            background: "color-mix(in oklab, var(--void) 92%, transparent)",
            backdropFilter: "blur(18px)",
          }}
        >
          <ul className="frame flex flex-col py-2">
            {sections.slice(1).map((s) => (
              <li key={s.id} className="border-b last:border-0" style={{ borderColor: "var(--rule)" }}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 no-underline"
                >
                  <span
                    className="display"
                    style={{
                      fontSize: "1.75rem",
                      color: active === s.id ? "var(--solar)" : "var(--ice)",
                    }}
                  >
                    {s.label}
                  </span>
                  <span className="label">{s.no}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="progress" ref={barRef} style={{ transform: "scaleX(0)" }} />
    </header>
  );
}
