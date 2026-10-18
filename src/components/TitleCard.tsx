import { useEffect, useState } from "react";
import pfp from "../assets/pfp.png";
import { CONTACT_EMAIL, COORDS, LOCATION, socials } from "../lib/data";
import { ArrowDown, ArrowUpRight, socialIcons } from "./icons";

const shotData: { label: string; value: string }[] = [
  { label: "Role", value: "Full-stack engineer" },
  { label: "Based", value: LOCATION },
  { label: "Focus", value: "Compilers · Web · Mobile" },
  { label: "Status", value: "Open for work" },
];

export default function TitleCard() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      requestAnimationFrame(() => setReady(true));
    };
    const timeout = window.setTimeout(go, 900);
    if (document.fonts) document.fonts.ready.then(go).catch(go);
    else go();
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section
      id="cover"
      className="card"
      data-ready={ready ? "true" : undefined}
      aria-label="Title card"
    >
      <div className="flare" aria-hidden="true" />

      <div className="frame relative">
        {/* running head -------------------------------------------------- */}
        <div
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
          data-anim="true"
          style={{ animationDelay: "0.72s" }}
        >
          <span className="label label-solar">Act I — Title</span>
          <span className="rule hidden flex-1 sm:block" />
          <span className="label">{COORDS}</span>
        </div>

        {/* the name ------------------------------------------------------ */}
        <div className="relative mt-8 md:mt-10">
          <h1 className="name">
            <em>Devansh</em>
            <em>Arora</em>
          </h1>
        </div>

        {/* deck ---------------------------------------------------------- */}
        <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
          <div data-anim="true" style={{ animationDelay: "0.95s" }}>
            <span className="label label-solar">Software engineer</span>
            <p className="lede mt-4 max-w-[36ch]">
              I build compilers, command-line tools and interfaces — and I care
              about how a thing is made, and{" "}
              <em className="serif-i" style={{ color: "var(--solar)" }}>
                how fast it feels
              </em>
              .
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--solar">
                <span>Open a channel</span>
                <ArrowUpRight size={13} />
              </a>
              <a href="#work" className="btn">
                <span>See the work</span>
                <ArrowDown size={13} />
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="tlink"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      {Icon ? <Icon size={14} /> : null}
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div data-anim="true" style={{ animationDelay: "1.12s" }}>
            <figure className="m-0">
              <div className="duo hairline" style={{ aspectRatio: "2.35 / 1" }}>
                <img
                  src={pfp}
                  alt="Devansh Arora, photographed in Vellore"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 28%",
                  }}
                />
              </div>
              <figcaption className="mt-2.5 flex items-baseline justify-between gap-3">
                <span className="label">Still 001 — The author</span>
                <span className="label label-solar">24mm · f/1.2</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* spec strip ---------------------------------------------------- */}
        <dl
          className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-6 sm:grid-cols-4 md:mt-10"
          data-anim="true"
          style={{ animationDelay: "1.26s", borderColor: "var(--rule)" }}
        >
          {shotData.map((item) => (
            <div key={item.label} className="border-l pl-4" style={{ borderColor: "var(--rule)" }}>
              <dt className="label">{item.label}</dt>
              <dd className="mt-2.5 text-[0.95rem]" style={{ color: "var(--ice)" }}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
