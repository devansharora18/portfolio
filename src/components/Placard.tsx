import { CONTACT_EMAIL, sections, socials } from "../lib/data";
import { Spark, Target } from "./Art";
import { ArrowUp } from "./icons";

function backToTop() {
  const lenis = (window as Window & { __lenis?: { scrollTo: (n: number) => void } }).__lenis;
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Placard() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t-2 md:mt-28" style={{ borderColor: "var(--ink)" }}>
      <div className="wrap py-14 md:py-20">
        {/* museum placard */}
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Target size={16} />
              <span className="anno">Wall text</span>
            </div>
            <h3 className="loud mt-4" style={{ fontSize: "clamp(1.4rem, 0.9rem + 1.7vw, 2.4rem)" }}>
              Devansh Arora
            </h3>
            <dl className="mt-5 max-w-[42ch] space-y-2.5">
              <div className="flex gap-3">
                <dt className="anno-sm dim w-20 shrink-0">Medium</dt>
                <dd className="anno-sm">TypeScript, Go, Dart, colour, paper</dd>
              </div>
              <div className="flex gap-3">
                <dt className="anno-sm dim w-20 shrink-0">Credit</dt>
                <dd className="anno-sm">Built, written and painted by the artist</dd>
              </div>
              <div className="flex gap-3">
                <dt className="anno-sm dim w-20 shrink-0">Edition</dt>
                <dd className="anno-sm">{year} · open to commissions</dd>
              </div>
            </dl>
            <p className="prose mt-6 max-w-[46ch]">
              If a project of yours needs equal parts engineering and stubborn
              attention to how it feels, that&rsquo;s the work I want.
            </p>
          </div>

          <nav aria-label="Footer — sections">
            <p className="anno">Rooms</p>
            <ul className="mt-5 space-y-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="tlink">
                    <span style={{ color: "var(--verm-text)" }}>{s.no}</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — elsewhere">
            <p className="anno">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="tlink" target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="tlink">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t-2 pt-6 md:mt-24"
          style={{ borderColor: "var(--ink)" }}
        >
          <span className="anno-sm dim">© {year} Devansh Arora — all rights reserved</span>
          <span className="anno-sm dim flex items-center gap-2">
            <Spark size={12} /> React · Vite · GSAP · one very long notebook
          </span>
          <button type="button" onClick={backToTop} className="tlink">
            <ArrowUp size={13} />
            Back to the top
          </button>
        </div>
      </div>
    </footer>
  );
}
