import { useEffect, useState } from "react";
import pfp from "../assets/pfp.png";
import { useFitText } from "../hooks/useFitText";
import { CONTACT_EMAIL, EDITION, socials } from "../lib/data";
import { ArrowDown, ArrowUpRight, socialIcons } from "./icons";

const dateline: { label: string; value: string }[] = [
  { label: "Role", value: "Full-stack engineer" },
  { label: "Based", value: "Vellore, India" },
  { label: "Focus", value: "Compilers · Web · Mobile" },
  { label: "Status", value: "Open for work" },
];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const fitRef = useFitText<HTMLHeadingElement>();

  useEffect(() => {
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      requestAnimationFrame(() => setReady(true));
    };
    const timeout = window.setTimeout(go, 800);
    if (document.fonts) document.fonts.ready.then(go).catch(go);
    else go();
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section
      id="cover"
      className="hero relative pt-[calc(var(--masthead)+34px)] pb-20 md:pb-28"
      data-ready={ready ? "true" : undefined}
    >
      <div className="shell">
        {/* running head -------------------------------------------------- */}
        <div
          className="flex flex-wrap items-center gap-x-5 gap-y-1 border-b border-[var(--rule)] pb-3"
          data-anim="fade"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="mono dim">{EDITION}</span>
          <span className="mono dim hidden sm:inline" aria-hidden="true">
            12.97°N · 79.13°E
          </span>
          <span className="mono ml-auto inline-flex items-center gap-2">
            <i
              className="blink inline-block h-[7px] w-[7px] rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span style={{ color: "var(--accent)" }}>Available</span>
          </span>
        </div>

        {/* nameplate ----------------------------------------------------- */}
        <h1 className="nameplate mt-7 md:mt-10" ref={fitRef} aria-label="Devansh Arora">
          <span data-fit>Devansh Arora</span>
        </h1>

        <div className="hr-2 mt-4" data-anim="rule" />

        {/* lower deck ---------------------------------------------------- */}
        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,392px)] lg:gap-16">
          <div className="min-w-0">
            <p
              className="lede max-w-[46ch]"
              data-anim="fade"
              style={{ animationDelay: "0.5s" }}
            >
              I build compilers, command-line tools and interfaces — and I care
              about the parts most people scroll past: how a thing is made, and{" "}
              <em className="serif-i" style={{ color: "var(--accent)" }}>
                how fast it feels
              </em>
              . Currently shipping front ends with React and TypeScript by day,
              writing a frontend framework by night.
            </p>

            <dl
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--rule)] pt-6 md:grid-cols-4"
              data-anim="fade"
              style={{ animationDelay: "0.62s" }}
            >
              {dateline.map((item) => (
                <div key={item.label} className="border-l border-[var(--rule)] pl-3">
                  <dt className="mono-sm dim">{item.label}</dt>
                  <dd
                    className="mt-2 text-[0.98rem] leading-snug"
                    style={{ color: "var(--ink)" }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div
              className="mt-10 flex flex-wrap items-center gap-3"
              data-anim="fade"
              style={{ animationDelay: "0.74s" }}
            >
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--accent">
                <span>Start a conversation</span>
                <ArrowUpRight size={13} />
              </a>
              <a href="#work" className="btn">
                <span>See the work</span>
                <ArrowDown size={13} />
              </a>
            </div>

            <ul
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--rule)] pt-5"
              data-anim="fade"
              style={{ animationDelay: "0.84s" }}
            >
              {socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a href={s.href} className="tlink" target="_blank" rel="noopener noreferrer">
                      {Icon ? <Icon size={14} /> : null}
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* portrait plate — bleeds to the page edge on desktop */}
          <figure
            className="hero__plate relative m-0 lg:-mr-[52px]"
            data-anim="wipe"
            style={{ animationDelay: "0.28s" }}
          >
            <div className="flex items-start gap-3">
              <span
                className="vertical mono-sm dim hidden shrink-0 pt-1 lg:block"
                style={{ letterSpacing: "0.3em", transform: "rotate(180deg)" }}
              >
                Fig. 01 — Portrait
              </span>
              <div className="min-w-0 flex-1">
                <div className="riso" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    src={pfp}
                    alt="Devansh Arora, photographed in Vellore"
                    loading="eager"
                    style={{ objectPosition: "50% 32%" }}
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-[var(--ink)] pt-2">
                  <span className="mono-sm dim">The author, Vellore</span>
                  <span className="mono-sm" style={{ color: "var(--accent)" }}>
                    Riso 2C
                  </span>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
