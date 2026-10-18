import { useEffect, useState } from "react";
import pfp from "../assets/pfp.png";
import Tape from "./Tape";
import { useFitText } from "../hooks/useFitText";
import { CONTACT_EMAIL, COORDS, LOCATION, socials } from "../lib/data";
import { ArrowCurve, Aperture, Asterisk, Bracket, Brush, Burst, Spark, Squiggle, Target } from "./Art";
import { ArrowDown, ArrowUpRight, socialIcons } from "./icons";

const buildList = ["Compilers", "Command-line tools", "Interfaces", "Fast, boring performance work"];
const artList = ["Collage & print", "Colour systems", "Type as architecture", "Things made purely to delight"];

function Schematic() {
  return (
    <svg viewBox="0 0 320 190" className="w-full" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="8" y="12" width="132" height="78" />
      <rect x="22" y="26" width="104" height="50" strokeDasharray="5 4" />
      <path d="M8 122h300" strokeDasharray="4 5" />
      <path d="M8 112v20M308 112v20" />
      <path d="M156 12v78" />
      <circle cx="156" cy="12" r="4" fill="currentColor" stroke="none" />
      <circle cx="156" cy="90" r="4" fill="currentColor" stroke="none" />
      <circle cx="240" cy="50" r="36" />
      <circle cx="240" cy="50" r="16" />
      <circle cx="240" cy="50" r="5" fill="currentColor" stroke="none" />
      <path d="M176 146l26 26h54" />
      <rect x="46" y="146" width="80" height="34" />
      <path d="M126 163h40" strokeDasharray="3 4" />
    </svg>
  );
}

export default function Diptych() {
  const [ready, setReady] = useState(false);
  const fitRef = useFitText<HTMLHeadingElement>();

  useEffect(() => {
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      requestAnimationFrame(() => setReady(true));
    };
    const t = window.setTimeout(go, 800);
    if (document.fonts) document.fonts.ready.then(go).catch(go);
    else go();
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      id="cover"
      className="hero relative"
      data-ready={ready ? "true" : undefined}
      aria-label="Introduction"
    >
      <div className="pt-[var(--nav)]">
        <Tape tone="ink" />
      </div>

      {/* ------------------------------------------------------- the diptych */}
      <div className="diptych">
        {/* SYSTEM */}
        <div className="diptych__half diptych__system">
          <div className="p-grid absolute inset-0 opacity-40" aria-hidden="true" style={{ filter: "url(#wob)" }} />
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="p-rays absolute -left-24 -top-24 h-72 w-72" />
          </div>
          <div className="relative flex h-full flex-col justify-between gap-6 p-5 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="anno" style={{ color: "var(--chart)" }}>
                01 / System
              </span>
              <Aperture size={30} />
            </div>

            <div className="max-w-[30ch]">
              <p
                className="loud"
                style={{ fontSize: "clamp(1.35rem, 0.9rem + 1.5vw, 2.3rem)", color: "var(--gesso)" }}
              >
                A blueprint is
                <br />
                just affection
                <br />
                with a ruler.
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6">
              <ul className="anno space-y-1" style={{ color: "color-mix(in oklab, var(--gesso) 78%, transparent)" }}>
                <li>compiles .tardis → js</li>
                <li>proxy reactivity</li>
                <li>no virtual dom</li>
                <li>5kb runtime</li>
              </ul>
              <div className="hidden w-[46%] max-w-[280px] opacity-70 sm:block">
                <Schematic />
              </div>
            </div>
          </div>
        </div>

        {/* SPLENDOUR */}
        <div className="diptych__half diptych__splendour">
          <div className="p-blobs absolute inset-0 opacity-25" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.14]" aria-hidden="true">
            <div className="p-dots absolute inset-0" style={{ color: "var(--ink)" }} />
          </div>
          <div className="relative flex h-full flex-col justify-between gap-6 p-5 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <Aperture size={30} />
              <span className="anno" style={{ color: "var(--verm)" }}>
                02 / Splendour
              </span>
            </div>

            <p className="wonk" style={{ fontSize: "clamp(1.9rem, 1rem + 3.4vw, 4.1rem)" }}>
              and then
              <br />
              you paint on it.
            </p>

            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="swatch-row" aria-hidden="true">
                <span className="swatch" style={{ background: "var(--ultra)" }} />
                <span className="swatch" style={{ background: "var(--verm)" }} />
                <span className="swatch" style={{ background: "var(--chart)" }} />
                <span className="swatch" style={{ background: "var(--ink)" }} />
                <span className="swatch" style={{ background: "var(--gesso-3)" }} />
              </div>
              <div className="hidden opacity-70 sm:block" style={{ color: "var(--verm)" }}>
                <ArrowCurve size={70} />
              </div>
            </div>
          </div>
        </div>

        <span className="diptych__seam" aria-hidden="true" />

        {/* the name, slashed across the seam */}
        <div className="diptych__name">
          <div className="wrap py-4 md:py-5">
            <h1 className="name loud" ref={fitRef} aria-label="Devansh Arora — Systems and Splendour">
              <span data-fit>Devansh Arora</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ two engines */}
      <div className="wrap relative pb-16 pt-14 md:pt-20">
        <Burst
          size={86}
          className="pointer-events-none absolute -top-6 right-4 hidden opacity-25 md:block"
        />
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start md:gap-14">
          <div data-reveal style={{ ["--rot-in" as string]: "-1.6deg" }}>
            <div className="mb-4 flex items-center gap-2.5">
              <Bracket size={20} />
              <span className="anno">I love to build</span>
            </div>
            <h2 className="loud" style={{ fontSize: "clamp(1.5rem, 0.9rem + 2vw, 2.6rem)" }}>
              I make things
              <br />
              that work.
            </h2>
            <ul className="mt-5 space-y-1.5">
              {buildList.map((item) => (
                <li key={item} className="anno dim-2 flex items-center gap-2">
                  <Asterisk size={13} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* the author, pinned to the wall */}
          <figure
            className="relative mx-auto m-0 w-[min(288px,84%)] md:w-[236px]"
            data-reveal
            style={{ ["--rot-in" as string]: "2.6deg", ["--d" as string]: "120ms" }}
          >
            <div className="hang" style={{ ["--rot" as string]: "2.6deg" }}>
              <span className="pin" />
              <div className="washi" style={{ top: -10, left: -26, transform: "rotate(-28deg)" }} aria-hidden="true" />
              <span
                className="washi washi--verm"
                style={{ bottom: 18, right: -30, transform: "rotate(-22deg)", width: 78 }}
                aria-hidden="true"
              />
              <div className="fig f-thin" style={{ aspectRatio: "1 / 1" }}>
                <img src={pfp} alt="Devansh Arora in the studio" style={{ objectPosition: "50% 26%" }} />
              </div>
            </div>
            <figcaption className="anno-sm mt-3 text-center dim">
              Fig. A — the author, mid-build
            </figcaption>
          </figure>

          <div data-reveal style={{ ["--rot-in" as string]: "1.4deg", ["--d" as string]: "200ms" }}>
            <div className="mb-4 flex items-center gap-2.5">
              <Brush size={20} />
              <span className="anno">I love art</span>
            </div>
            <h2 className="wonk" style={{ fontSize: "clamp(1.7rem, 1rem + 2.3vw, 2.9rem)" }}>
              and things that
              <br />
              do nothing useful.
            </h2>
            <ul className="mt-5 space-y-1.5">
              {artList.map((item) => (
                <li key={item} className="anno dim-2 flex items-center gap-2">
                  <Spark size={13} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5" style={{ color: "var(--verm)" }}>
              <Squiggle size={150} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t-2 pt-7" style={{ borderColor: "var(--ink)" }}>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-verm">
              Let's make something
              <ArrowUpRight size={15} />
            </a>
            <a href="#work" className="btn">
              Walk the wall
              <ArrowDown size={15} />
            </a>
          </div>
          <div className="anno flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="counter">
              <Target size={13} /> {LOCATION}
            </span>
            <span className="counter">
              <Asterisk size={12} /> {COORDS}
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 md:ml-auto">
            {socials.map((s) => {
              const Icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <li key={s.label}>
                  <a href={s.href} className="tlink" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {Icon ? <Icon size={14} /> : null}
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
