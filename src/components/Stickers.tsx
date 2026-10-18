import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "./Head";
import { skills } from "../lib/data";
import { Asterisk, Scissors, Spark, Target } from "./Art";

gsap.registerPlugin(ScrollTrigger);

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

/* how far above the sheet's top edge the stickers are released from */
const ORIGIN_LIFT = 120;
/* how far they are tilted back from their resting angle as they let go */
const RELEASE_TILT = 18;

export default function Stickers() {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const stickers = gsap.utils.toArray<HTMLElement>(".sticker", sheet);
      if (!stickers.length) return;

      const rot = (i: number) => parseFloat(stickers[i].dataset.rot ?? "0");
      const drift = (i: number) => parseFloat(stickers[i].dataset.drift ?? "0");

      const place = () => {
        // Measure untransformed rest boxes, then work out analytically where each
        // sticker sits once its release rotation is applied. Pure geometry, so
        // it is safe to re-run on every ScrollTrigger refresh.
        stickers.forEach((el) => {
          el.style.transform = "none";
        });
        const origin = sheet.getBoundingClientRect().top - ORIGIN_LIFT;

        const releaseY = stickers.map((el, i) => {
          const r = el.getBoundingClientRect();
          const th = ((rot(i) - RELEASE_TILT) * Math.PI) / 180;
          // half the height of the rotated bounding box
          const halfBox =
            (r.height * Math.abs(Math.cos(th)) + r.width * Math.abs(Math.sin(th))) / 2;
          const centreY = r.top + r.height / 2;
          // y that lands the rotated box's top edge exactly on the release line
          return origin + halfBox - centreY;
        });

        gsap.set(stickers, {
          y: (i: number) => releaseY[i],
          x: (i: number) => drift(i),
          rotation: (i: number) => rot(i) - RELEASE_TILT,
          opacity: 0,
          transformOrigin: "50% 50%",
        });
      };

      place();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sheet,
          start: "top 90%",
          end: "top 28%",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onRefreshInit: () => place(),
        },
      });

      const stagger = { each: 0.05, from: "start" as const };

      // gravity: accelerate away from the release line
      tl.to(
        stickers,
        { y: 0, x: 0, rotation: (i: number) => rot(i), duration: 1, ease: "power2.in", stagger },
        0
      );
      // a short hop back up, then down onto the sheet
      tl.to(stickers, { y: -9, duration: 0.16, ease: "power2.out", stagger }, 1);
      tl.to(stickers, { y: 0, duration: 0.2, ease: "power2.in", stagger }, 1.16);
      // ink arrives early in the fall so the drop is the thing you watch
      tl.to(
        stickers,
        { opacity: 1, duration: 0.34, ease: "power1.out", stagger },
        0.04
      );
    }, sheet);

    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts) document.fonts.ready.then(refresh).catch(() => {});
    const t = window.setTimeout(refresh, 900);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(refresh, 220);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(t);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

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

        <div className="sticker-sheet" ref={sheetRef}>
          <div className="cut-line" aria-hidden="true">
            <Scissors size={18} />
            <span className="anno-sm">cut here</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 md:gap-4">
            {skills.map((skill, i) => {
              const rotation = ROTS[i % ROTS.length];
              return (
                <span
                  key={skill}
                  className={`sticker ${TONES[i % TONES.length]}`}
                  style={{
                    borderRadius: SHAPES[i % SHAPES.length],
                    transform: `rotate(${rotation}deg)`,
                  }}
                  data-rot={rotation}
                  data-drift={(i % 2 === 0 ? 1 : -1) * (9 + (i % 3) * 6)}
                >
                  {skill}
                </span>
              );
            })}
            <span
              className="sticker sticker--pop"
              style={{ borderRadius: "999px", transform: "rotate(-4deg)" }}
              data-rot={-4}
              data-drift={-11}
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
