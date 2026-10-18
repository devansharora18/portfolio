import { useEffect, useState } from "react";
import pfp from "../assets/pfp.png";
import Tape from "./Tape";
import { useFitText } from "../hooks/useFitText";
import { CONTACT_EMAIL, socials } from "../lib/data";
import { Asterisk, Bracket, Brush, Burst, Spark, Squiggle, Target } from "./Art";
import { ArrowDown, ArrowUpRight, socialIcons } from "./icons";

const buildList = [
  "Frontend & design systems",
  "Backend services & REST APIs",
  "Cross-platform mobile apps",
  "Profiling, caching, load times",
];
const artList = [
  "Interaction & motion",
  "Type, colour and rhythm",
  "Accessibility as the default",
  "Details nobody asked for",
];

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

      <div className="nameband">
        <div className="wrap py-6 md:py-8">
          <h1 className="name loud" ref={fitRef}>
            <span data-fit>Devansh Arora</span>
          </h1>
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
            <div className="mt-5" style={{ color: "var(--verm-text)" }}>
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
              <Target size={13} /> Open to new work
            </span>
            <span className="counter">
              <Asterisk size={12} /> Frontend · Backend · Mobile
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
