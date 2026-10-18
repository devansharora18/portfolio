import Head from "./Head";
import { mediums, projects, type Project } from "../lib/data";
import { ArrowUpRight } from "./icons";
import { Spark } from "./Art";

/* The hang. Rows of spans that each total 12, in the order the work is
   presented. Frame height is uniform per row, so a portrait phone shot and a
   wide site shot still hang on the same line. */
const HANG: { title: string; span: number }[] = [
  { title: "Ember", span: 3 },
  { title: "TardisJS", span: 5 },
  { title: "Layout", span: 4 },
  { title: "Ash", span: 6 },
  { title: "Aether", span: 4 },
  { title: "Nocap", span: 2 },
  { title: "ARGOS", span: 4 },
  { title: "Devjams 25", span: 4 },
  { title: "WT26", span: 4 },
  { title: "CPU Controller", span: 4 },
  { title: "AgroStat", span: 4 },
  { title: "Color Palette", span: 4 },
  { title: "Hover Carousel", span: 9 },
  { title: "Rogi Sahyogi", span: 3 },
];
const ROTS = [-2.1, 1.5, -1.2, 2.3, -1.7, 0.9, -2.5, 1.8, -0.7, 2.0, -1.4, 1.1, -1.6, 1.3];
const INSETS = [0, -5, 5, 0, -7, 7, 0, -4, 4, 0, -6, 6, 0, -3];
const FRAMES = ["f-thin", "f-fat", "f-double", "f-blue", "f-pop", "f-raw"];
/* The pin ink is picked against the frame ink, so a pin never disappears into
   the frame it holds. f-fat is vermillion, f-blue ultramarine, f-pop pink. */
const PINS = ["", "pin--pop", "pin--ultra", "", "pin--ultra", "pin--pop"];
const YEARS = [
  "2025", "2025", "2024", "2026", "2025", "2025", "2025", "2025",
  "2025", "2024", "2024", "2023", "2023", "2024",
];

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
            Fourteen pieces, each in its own frame. An encrypted chat app, a
            frontend framework, a layout tool, an EPUB reader, a colour tool, an
            npm package and a couple of hackathon sites. Hover a piece to
            straighten it.
          </p>
        </Head>
      </div>

      <div className="wrap pb-4">
        <div className="wall">
          {pieces.map((project, i) => (
            <figure
              className="wall__item"
              key={project.no}
              style={{
                ["--span" as string]: String(HANG[i].span),
                ["--span-md" as string]: HANG[i].span >= 7 ? "6" : "3",
                ["--rot" as string]: `${ROTS[i % ROTS.length]}deg`,
                ["--inset" as string]: `${INSETS[i % INSETS.length]}px`,
              }}
            >
              <div className="hang">
                <span className={`pin ${PINS[i % FRAMES.length]}`} aria-hidden="true">
                  <i />
                </span>
                <div
                  className={`fig ${FRAMES[i % FRAMES.length]}${
                    project.shape === "slab" ? " fig--slab" : ""
                  }${HANG[i].span >= 8 ? " fig--pan" : ""}`}
                >
                  <img src={project.image} alt={`${project.title} — interface`} loading="lazy" />
                </div>
              </div>

              <figcaption
                className="placard mt-4"
                style={{ transform: `rotate(${(-ROTS[i % ROTS.length] * 0.45).toFixed(2)}deg)` }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="anno" style={{ color: "var(--verm-text)" }}>
                    {project.no}
                  </span>
                  <span className="anno-sm dim">{YEARS[i % YEARS.length]}</span>
                </div>
                <h3
                  className="loud mt-1.5"
                  style={{ fontSize: "clamp(1.1rem, 0.88rem + 0.85vw, 1.65rem)" }}
                >
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
          ))}
        </div>
      </div>
    </section>
  );
}
