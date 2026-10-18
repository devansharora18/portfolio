import ActHead from "./ActHead";
import { experience, skills } from "../lib/data";

function Run() {
  return (
    <>
      {skills.map((skill, i) => (
        <span className="marquee__item" key={`${skill}-${i}`}>
          {skill}
          <i aria-hidden="true">✦</i>
        </span>
      ))}
    </>
  );
}

export default function Credits() {
  return (
    <section id="ledger" className="relative pt-24 md:pt-32">
      <div className="frame">
        <ActHead
          no="Act III"
          label="Credits"
          title="Where I've worked"
          note={`${experience.length} entries`}
        />

        <div className="border-b" style={{ borderColor: "var(--rule)" }}>
          {experience.map((job, i) => (
            <article
              className="credit"
              key={job.org}
              data-reveal
              style={{ ["--d" as string]: `${i * 110}ms` }}
            >
              <div className="flex items-baseline gap-3 lg:block">
                <span className="data" style={{ color: "var(--solar)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label lg:hidden">{job.period}</span>
              </div>

              <div className="min-w-0">
                <span className="label hidden lg:block">{job.period}</span>
                <h3 className="credit__role mt-3 lg:mt-4">{job.role}</h3>
                <p className="mt-3.5 text-[0.95rem]" style={{ color: "var(--ice)" }}>
                  {job.org}
                </p>
                <p className="label mt-2">{job.place}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="max-w-[62ch] leading-relaxed" style={{ color: "var(--ice-2)" }}>
                {job.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 md:mt-24">
        <div className="frame mb-6 flex items-center gap-5">
          <span className="label label-solar">Technical credits</span>
          <span className="rule flex-1" data-rule />
        </div>
        <div className="marquee" aria-label="Languages and tools">
          <div className="marquee__track" aria-hidden="true">
            <Run />
            <Run />
          </div>
        </div>
      </div>
    </section>
  );
}
