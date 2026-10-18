import { CONTACT_EMAIL, COORDS, sections, socials } from "../lib/data";
import { useFitText } from "../hooks/useFitText";
import { ArrowUp } from "./icons";

function backToTitle() {
  const lenis = (window as Window & { __lenis?: { scrollTo: (n: number) => void } }).__lenis;
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function EndCard() {
  const year = new Date().getFullYear();
  const fitRef = useFitText<HTMLDivElement>();

  return (
    <footer className="endfoot relative pt-24 md:pt-32">
      <div className="frame">
        <div className="flex items-center gap-5">
          <span className="label label-solar whitespace-nowrap">End of reel</span>
          <span className="rule flex-1" data-rule />
          <span className="label hidden whitespace-nowrap sm:block">{COORDS}</span>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.7fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p className="max-w-[46ch] leading-relaxed" style={{ color: "var(--ice-2)" }}>
              A portfolio in four acts. Every frame is a real project — no
              mockups, no filler. The starfield is drawn by hand on a canvas and
              does not use a single image.
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="chip">React</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Canvas 2D</span>
              <span className="chip">GSAP</span>
            </p>
          </div>

          <nav aria-label="Footer — acts">
            <p className="label">Acts</p>
            <ul className="mt-5 space-y-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="navlink">
                    <span style={{ color: "var(--steel-2)" }} aria-hidden="true">
                      {s.no}.
                    </span>{" "}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — elsewhere">
            <p className="label">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="navlink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="navlink">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="endname fitwrap mt-16 select-none md:mt-24" ref={fitRef} aria-hidden="true">
          <span data-fit>Devansh Arora</span>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t pt-6"
          style={{ borderColor: "var(--rule)" }}
        >
          <span className="label">© {year} Devansh Arora</span>
          <span className="label hidden sm:block">Cut in React, Vite &amp; GSAP</span>
          <button type="button" onClick={backToTitle} className="tlink">
            <ArrowUp size={12} />
            Back to title
          </button>
        </div>
      </div>
    </footer>
  );
}
