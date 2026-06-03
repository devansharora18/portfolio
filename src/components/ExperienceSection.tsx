const experiences = [
  {
    title: "Frontend Developer",
    date: "Apr 2025 - Present",
    company: "Google Developer Group VIT · Full-time",
    location: "Vellore, Tamil Nadu, India",
    description:
      "Developing front-end features and interfaces for club projects and events using React.js and Tailwind.",
  },
  {
    title: "Frontend Developer",
    date: "Dec 2024 - Jan 2025",
    company: "KalkiNi · AI surveillance system · Internship",
    location: "Tamil Nadu, India · Hybrid",
    description:
      "Worked on front-end development using React.js, implementing interactive UI components.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-[calc(100vh-64px)] py-24 border-b border-white/5">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-16">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-16">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative p-6 md:p-8 rounded-xl bg-surface-container border border-white/5 shadow-lg shadow-black/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface">
                    {exp.title}
                  </h3>
                  <p className="text-on-surface-variant mt-1">{exp.company}</p>
                </div>
                <span className="font-mono text-xs tracking-[0.1em] uppercase text-tertiary whitespace-nowrap shrink-0">
                  {exp.date}
                </span>
              </div>
              <p className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant/60 mb-4">
                {exp.location}
              </p>
              <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
