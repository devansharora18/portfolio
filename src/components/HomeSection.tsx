import pfp from "../assets/pfp.png";

const skills = [
  "JavaScript",
  "TypeScript",
  "C++",
  "Python",
  "Dart",
  "React",
  "Next.js",
  "Flutter",
  "Tailwind",
  "Redux",
  "Django",
  "Firebase",
  "Go",
  "React Native",
];

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "mailto:hello@devansharora.in" },
  { label: "CV", href: "https://cv.devansharora.in/" },
];

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center border-b border-white/5 pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl md:rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/50">
                <img src={pfp} alt="Devansh Arora" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-1 rounded-2xl md:rounded-[2rem] bg-gradient-to-b from-tertiary/20 to-lavender/20 blur-xl -z-10" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs tracking-[0.1em] uppercase text-tertiary mb-3">
              Software Engineer
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-4">
              Devansh Arora
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-lg mb-6">
              Full-stack developer passionate about building stuff.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-lavender/10 text-lavender border border-lavender/20"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
