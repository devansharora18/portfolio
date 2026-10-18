import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pfp from "../assets/pfp.png";
import Tape from "./Tape";
import { useFitText } from "../hooks/useFitText";
import { CONTACT_EMAIL, socials } from "../lib/data";
import { Asterisk, Bracket, Burst, Spark, Squiggle, Target } from "./Art";
import { ArrowDown, ArrowUpRight, socialIcons } from "./icons";

gsap.registerPlugin(ScrollTrigger);

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
  const bandRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLElement>(null);

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

  /* The blue field ends just past the first name, whatever the viewport and
     whatever size the nameplate gets fitted to. */
  useEffect(() => {
    const band = bandRef.current;
    const first = firstRef.current;
    if (!band || !first) return;

    const apply = () => {
      const b = band.getBoundingClientRect();
      const f = first.getBoundingClientRect();
      if (!b.width || !f.width) return;
      const pct = ((f.right - b.left + 16) / b.width) * 100;
      band.style.setProperty("--split", `${Math.min(94, Math.max(6, pct)).toFixed(3)}%`);
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(band);
    ro.observe(first);
    const t = window.setTimeout(apply, 700);
    if (document.fonts) document.fonts.ready.then(apply).catch(() => {});
    return () => {
      window.clearTimeout(t);
      ro.disconnect();
    };
  }, []);

  /* The cover acts as a lid: it pins to the top of the viewport and slides up
     off the screen as you scroll, uncovering the wall underneath it. */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            /* tie the pin to the panel's own height, so the lid travels at
               roughly the speed you scroll it on every screen size */
            end: () => `+=${Math.round(hero.offsetHeight * 0.95)}`,
            scrub: 0.35,
            pin: true,
            /* no spacer: the wall has to travel up *under* the lid, not sit
               after a reserved gap */
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(hero, { yPercent: -100, ease: "none" });
    }, hero);

    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts) document.fonts.ready.then(refresh).catch(() => {});
    const t = window.setTimeout(refresh, 900);
    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="cover"
      className="hero relative"
      ref={heroRef}
      data-ready={ready ? "true" : undefined}
      aria-label="Introduction"
    >
      <div className="pt-[var(--nav)]">
        <Tape tone="ink" />
      </div>

      <div className="nameband" ref={bandRef}>
        <div className="wrap py-6 md:py-8">
          <h1 className="name loud" ref={fitRef}>
            <span data-fit>
              <span ref={firstRef}>Devansh</span> Arora
            </span>
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
          </figure>

          <div data-reveal style={{ ["--rot-in" as string]: "1.4deg", ["--d" as string]: "200ms" }}>
            {/* the "I love art" label was here — a same-height spacer keeps the
                two headings on one line now that it is gone */}
            <div className="mb-4 h-5" aria-hidden="true" />
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
