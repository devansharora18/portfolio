import Head from "./Head";
import { experience } from "../lib/data";
import { Paperclip, Spark } from "./Art";

const STAMPS = [
  { label: "Ongoing", tone: "stamp--ultra" },
  { label: "Shipped", tone: "" },
];

export default function Ledger() {
  return (
    <section
      id="ledger"
      className="relative border-t-2 pt-16 md:pt-24"
      style={{ borderColor: "var(--ink)" }}
    >
      <div className="wrap">
        <Head
          no="03 — ledger"
          kicker="Studio record"
          note={`${experience.length} entries`}
          tone="ultra"
          title={
            <>
              Where the hours
              <br />
              actually went.
            </>
          }
        />

        <div className="ledger hard" data-reveal>
          <div
            className="flex flex-wrap items-center justify-between gap-3 border-b-2 px-4 py-3"
            style={{ borderColor: "var(--ink)", background: "var(--chart)" }}
          >
            <span className="anno">Account of work</span>
            <span className="anno dim">Kept in the open · updated as it happens</span>
          </div>

          {experience.map((job, i) => (
            <article className="ledger__row" key={job.org}>
              <div className="ledger__cell flex items-baseline gap-3 lg:block">
                <span className="ledger__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="anno-sm dim mt-2 block lg:mt-3">{job.period}</span>
              </div>

              <div className="ledger__cell min-w-0">
                <h3
                  className="loud"
                  style={{ fontSize: "clamp(1.3rem, 0.9rem + 1.5vw, 2.3rem)", lineHeight: 0.95 }}
                >
                  {job.role}
                </h3>
                <p className="mt-2.5 flex items-center gap-2" style={{ color: "var(--ultra)" }}>
                  <Paperclip size={15} />
                  <span className="anno">{job.org}</span>
                </p>
                <p className="anno-sm mt-1.5 dim">{job.place}</p>
                <span className={`stamp mt-3 ${STAMPS[i % STAMPS.length].tone}`}>
                  <Spark size={11} />
                  {STAMPS[i % STAMPS.length].label}
                </span>
              </div>

              <div className="ledger__cell">
                <p className="prose">{job.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech, k) => (
                    <span
                      className={`tag${k % 3 === 0 ? " tag--ultra" : k % 3 === 1 ? " tag--verm" : ""}`}
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="anno mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 dim">
          <span>Also on the bench →</span>
          <span className="tag tag--chart">Side projects</span>
          <span className="tag">Open source</span>
          <span className="tag tag--ink">Whatever's interesting</span>
        </p>
      </div>
    </section>
  );
}
