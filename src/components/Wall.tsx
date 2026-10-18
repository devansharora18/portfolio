import Head from "./Head";
import { mediums, projects, type Project } from "../lib/data";
import { ArrowUpRight } from "./icons";
import { Spark } from "./Art";

/* The hang: rows of spans that each total 12, grouped so every piece in a row
   shares one landscape / portrait ratio → uniform height, no dead gaps. */
const HANG: { title: string; span: number }[] = [
  { title: "TardisJS", span: 7 },
  { title: "Devjams 25", span: 5 },
  { title: "Nocap", span: 4 },
  { title: "Ember", span: 4 },
  { title: "Rogi Sahyogi", span: 4 },
  { title: "Aether", span: 6 },
  { title: "ARGOS", span: 6 },
  { title: "Layout", span: 4 },
  { title: "WT26", span: 4 },
  { title: "AgroStat", span: 4 },
  { title: "CPU Controller", span: 6 },
  { title: "Color Palette", span: 6 },
  { title: "Hover Carousel", span: 12 },
];

const ROTS = [-2.1, 1.5, -1.2, 2.3, -1.7, 0.9, -2.5, 1.8, -0.7, 2.0, -1.4, 1.1, -1.6];
const INSETS = [0, -5, 5, 0, -7, 7, 0, -4, 4, 0, -6, 6, 0];
const FRAMES = ["f-thin", "f-fat", "f-double", "f-blue", "f-pop", "f-raw"];
const YEARS = ["2025", "2025", "2025", "2025", "2024", "2025", "2025", "2024", "2025", "2024", "2023", "2023", "2023"];

/* Row height as a fraction of the content width, per orientation. */
const H_LANDSCAPE = 0.35;
const H_PORTRAIT = 0.47;

export default function Wall() {
  const byTitle = new Map(projects.map((p) => [p.title, p]));
  const pieces = HANG.map((entry) => byTitle.get(entry.title)).filter(
    (p): p is Project => Boolean(p)
  );

  return (
    <section id="work" className="relative border-t-2 pt-16 md:pt-24" style={{ borderColor: "var(--ink)" }}>
      <div className="wrap">
        <Head
          no="02 — the wall"
          kicker="Selected work"
          note={`${projects.length} pieces, hung`}
          title={
            <>
              Everything I&rsquo;ve
              <br />
              framed so far.
            </>
          }
        >
          <p className="prose mt-5 max-w-[54ch]">
            Thirteen pieces, each in its own frame. Frontend frameworks, a TUI, an
            EPUB reader, a colour tool, an npm package and a couple of hackathon
            sites. Hover a piece to straighten it.
          </p>
        </Head>
      </div>

      <div className="wrap pb-4">
        <div className="wall">
          {pieces.map((project, i) => {
            const span = HANG[i].span;
            const portrait = project.shape === "slab";
            const h = portrait ? H_PORTRAIT : H_LANDSCAPE;
            const spanMd = span >= 7 ? 6 : 3;
            return (
              <figure
                className="wall__item"
                key={project.no}
                style={{
                  ["--span" as string]: String(span),
                  ["--span-md" as string]: String(spanMd),
                  ["--ar" as string]: (span / (12 * h)).toFixed(4),
                  ["--ar-md" as string]: (spanMd / (6 * h)).toFixed(4),
                  ["--rot" as string]: `${ROTS[i % ROTS.length]}deg`,
                  ["--inset" as string]: `${INSETS[i % INSETS.length]}px`,
                }}
              >
                <div className="hang">
                  <span className="wire" aria-hidden="true" />
                  <span
                    className={`pin${i % 3 === 0 ? " pin--ultra" : i % 3 === 2 ? " pin--pop" : ""}`}
                    aria-hidden="true"
                  />
                  <div className={`fig ${FRAMES[i % FRAMES.length]}${portrait ? " fig--slab" : ""}`}>
                    <img src={project.image} alt={`${project.title} — interface`} loading="lazy" />
                  </div>
                </div>

                <figcaption className="placard mt-4" style={{ transform: `rotate(${(-ROTS[i % ROTS.length] * 0.45).toFixed(2)}deg)` }}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="anno" style={{ color: "var(--verm-text)" }}>
                      {project.no}
                    </span>
                    <span className="anno-sm dim">{YEARS[i % YEARS.length]}</span>
                  </div>
                  <h3 className="loud mt-1.5" style={{ fontSize: "clamp(1.1rem, 0.88rem + 0.85vw, 1.65rem)" }}>
                    {project.title}
                  </h3>
                  <p className="anno-sm mt-1.5 dim-2 flex items-center gap-1.5">
                    <Spark size={11} />
                    {mediums[project.title] ?? project.tags.join(" · ")}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tlink"
                      >
                        {link.label}
                        <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
