import { CONTACT_EMAIL, EDITION, sections, socials } from "../lib/data";
import { ArrowUp } from "./icons";

function backToTop() {
  const lenis = (window as Window & { __lenis?: { scrollTo: (n: number) => void } }).__lenis;
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Colophon() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-[var(--rule-2)] pb-10 pt-14">
      <div className="shell">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.8fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="crosshair" />
              <span className="mono dim">Colophon</span>
            </div>
            <p className="mt-5 max-w-[42ch] leading-relaxed text-[var(--ink-2)]">
              Hand-set in <span style={{ color: "var(--ink)" }}>Anton</span>,{" "}
              <span style={{ color: "var(--ink)" }}>Newsreader</span> and{" "}
              <span style={{ color: "var(--ink)" }}>IBM Plex Mono</span>. Printed on
              recycled pixels with one accent ink. No trackers, no cookies, no
              gradients.
            </p>
            <p className="mono-sm dim mt-5">{EDITION}</p>
          </div>

          <nav aria-label="Footer — sections">
            <p className="mono-sm dim">Contents</p>
            <ul className="mt-4 space-y-2.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="navlink">
                    <span className="dim" aria-hidden="true">
                      {s.no}
                    </span>{" "}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — elsewhere">
            <p className="mono-sm dim">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
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

        <div className="watermark mt-14 select-none" aria-hidden="true">
          Devansh Arora
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-[var(--rule)] pt-6">
          <span className="mono-sm dim">
            © {year} Devansh Arora — all rights reserved
          </span>
          <span className="mono-sm dim">
            Built with React, Vite &amp; GSAP
          </span>
          <button type="button" onClick={backToTop} className="tlink">
            <ArrowUp size={13} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
