import SectionHead from "./SectionHead";
import { experience } from "../lib/data";

export default function Ledger() {
  return (
    <section id="ledger" className="relative py-20 md:py-28">
      <div className="shell">
        <SectionHead
          no="03"
          label="Ledger"
          title="Where I've worked"
          note={`${experience.length} entries`}
        />

        <div className="border-b border-[var(--rule)]">
          {experience.map((job, i) => (
            <article className="ledger__row" key={job.org} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <div className="flex items-baseline gap-3 lg:block">
                <span className="ledger__no lg:text-[0.72rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mono-sm dim lg:hidden">{job.period}</span>
              </div>

              <div className="min-w-0">
                <span className="mono dim hidden lg:block">{job.period}</span>
                <h3 className="ledger__role mt-3 lg:mt-4">{job.role}</h3>
                <p className="mt-3 text-[0.98rem] text-[var(--ink-2)]">
                  <span style={{ color: "var(--ink)" }}>{job.org}</span>
                  <br />
                  <span className="mono-sm dim">{job.place}</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="max-w-[60ch] leading-relaxed text-[var(--ink-2)]">{job.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
