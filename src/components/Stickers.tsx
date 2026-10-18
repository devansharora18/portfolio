import Head from "./Head";
import { skills } from "../lib/data";
import { Asterisk, Scissors, Spark, Target } from "./Art";

const SHAPES = [
  "12px",
  "999px",
  "26px 6px 26px 6px",
  "6px 26px 6px 26px",
  "999px",
  "3px",
];
const TONES = ["sticker--verm", "sticker--ultra", "sticker--pop", "sticker--ink", "sticker--gesso"];
const ROTS = [-7, 4, -3, 8, -5, 2, 6, -8, 3, -2, 5, -6, 7, -4];

export default function Stickers() {
  return (
    <section
      id="stickers"
      className="relative border-t-2 pt-16 md:pt-24"
      style={{ borderColor: "var(--ink)" }}
    >
      <div className="wrap">
        <Head
          no="04 — stickers"
          kicker="Tools & languages"
          note={`${skills.length} to peel`}
          tone="ink"
          title={
            <>
              The sticker
              <br />
              sheet.
            </>
          }
        >
          <p className="prose mt-5 max-w-[52ch]">
            Peel one off and slap it on a laptop. Everything on this sheet has
            shipped in a real project at least once.
          </p>
        </Head>

        <div className="sticker-sheet" data-reveal>
          <div className="cut-line" aria-hidden="true">
            <Scissors size={18} />
            <span className="anno-sm">cut here</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 md:gap-4">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className={`sticker ${TONES[i % TONES.length]}`}
                style={{
                  borderRadius: SHAPES[i % SHAPES.length],
                  transform: `rotate(${ROTS[i % ROTS.length]}deg)`,
                }}
              >
                {skill}
              </span>
            ))}
            <span
              className="sticker sticker--pop"
              style={{ borderRadius: "999px", transform: "rotate(-4deg)" }}
            >
              <Asterisk size={16} /> and more
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t-2 pt-5" style={{ borderColor: "var(--ink)" }}>
            <span className="anno flex items-center gap-2">
              <Target size={14} /> Favourite medium: TypeScript
            </span>
            <span className="anno flex items-center gap-2 dim">
              <Spark size={13} /> Favourite tool: a graph notebook
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
