import ActHead from "./ActHead";
import { projects, type Project } from "../lib/data";
import { ArrowUpRight } from "./icons";

const reel = ["TardisJS", "Ember", "Devjams 25"];

function Slate({ no, title, meta }: { no: string; title: string; meta: string }) {
  return (
    <div className="slate">
      <div className="edge flex w-full flex-wrap items-center gap-x-6 gap-y-2">
        <span className="slate__ticks" aria-hidden="true" />
        <span className="label">Reel 02 · Take {no}</span>
        <span className="label label-solar">{title}</span>
        <span className="label ml-auto hidden md:block">{meta}</span>
      </div>
    </div>
  );
}

function TitleMeta({ project }: { project: Project }) {
  return (
    <div className="frame mt-8 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-16">
      <p className="max-w-[64ch] leading-relaxed" style={{ color: "var(--ice-2)" }}>
        {project.description}
      </p>
      <div className="md:justify-self-end">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div
          className="mt-6 flex flex-wrap items-center gap-6 border-t pt-5"
          style={{ borderColor: "var(--rule)" }}
        >
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="tlink">
              {link.label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Full-bleed wide still, title burned into the frame. */
function WideStill({ project, delay }: { project: Project; delay?: string }) {
  return (
    <article className="still mt-20 md:mt-28">
      <Slate no={project.no} title={project.title} meta={project.tags.join(" · ")} />

      <div className="still__shot shot-wide" data-reveal="shot" style={{ ["--d" as string]: delay }}>
        <img src={project.image} alt={`${project.title} interface`} loading="lazy" />
        <span className="scrim" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="frame pb-6 md:pb-9">
            <span className="label label-solar">
              {project.no} — {project.shape === "slab" ? "Vertical" : "Wide"}
            </span>
            <h3
              className="serif mt-2"
              style={{
                fontSize: "clamp(1.9rem, 0.9rem + 4vw, 4.3rem)",
                lineHeight: 0.98,
                color: "var(--ice)",
                textShadow: "0 2px 30px rgba(4,6,11,0.9)",
              }}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <TitleMeta project={project} />
    </article>
  );
}

/** Vertical insert — the still sits beside its own caption. */
function VerticalStill({ project }: { project: Project }) {
  return (
    <article className="still mt-20 md:mt-28">
      <div className="frame">
        <div className="grid gap-10 md:grid-cols-[minmax(0,268px)_minmax(0,1fr)] md:gap-16 lg:gap-24">
          <div data-reveal="shot">
            <div className="slate" style={{ borderBottom: 0 }}>
              <div className="flex w-full items-center gap-3">
                <span className="slate__ticks" aria-hidden="true" />
                <span className="label">Take {project.no}</span>
                <span className="label label-solar ml-auto">Vertical</span>
              </div>
            </div>
            <div className="still__shot shot-tall" style={{ borderTop: 0 }}>
              <img src={project.image} alt={`${project.title} interface`} loading="lazy" />
            </div>
          </div>

          <div className="md:pt-6">
            <span className="label">{project.tags.join(" · ")}</span>
            <h3
              className="serif mt-4"
              style={{ fontSize: "clamp(2.1rem, 1rem + 3.6vw, 3.9rem)", lineHeight: 0.98, color: "var(--ice)" }}
            >
              {project.title}
            </h3>
            <p className="mt-6 max-w-[56ch] leading-relaxed" style={{ color: "var(--ice-2)" }}>
              {project.description}
            </p>
            <div
              className="mt-7 flex flex-wrap items-center gap-6 border-t pt-5"
              style={{ borderColor: "var(--rule)" }}
            >
              {project.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="tlink">
                  {link.label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Stills() {
  const featured = reel
    .map((title) => projects.find((p) => p.title === title))
    .filter((p): p is Project => Boolean(p));

  const [first, second, third] = featured;

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="frame">
        <ActHead no="Act II" label="The Work" title="Selected work" note={`${projects.length} entries`} />
      </div>

      {first && <WideStill project={first} />}
      {second && <VerticalStill project={second} />}
      {third && <WideStill project={third} delay="120ms" />}
    </section>
  );
}
