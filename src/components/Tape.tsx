import { Asterisk, Bracket, Browser, Device, Server, Spark, Target } from "./Art";

interface Props {
  tone?: "ink" | "verm" | "pop";
  reverse?: boolean;
}

type Kind = "browser" | "server" | "device" | "bracket" | "spark" | "target" | "asterisk";

/* A capability ticker, not a slogan: what actually gets built. */
const SEQ: { w: string; icon: Kind }[] = [
  { w: "Frontend", icon: "browser" },
  { w: "Backend", icon: "server" },
  { w: "Mobile", icon: "device" },
  { w: "TypeScript", icon: "bracket" },
  { w: "React", icon: "asterisk" },
  { w: "Next.js", icon: "browser" },
  { w: "Go", icon: "bracket" },
  { w: "Python", icon: "bracket" },
  { w: "Flutter", icon: "device" },
  { w: "Django", icon: "server" },
  { w: "Firebase", icon: "target" },
  { w: "React Native", icon: "device" },
  { w: "REST & APIs", icon: "server" },
  { w: "Design systems", icon: "spark" },
  { w: "Tailwind", icon: "browser" },
  { w: "Accessibility", icon: "target" },
];

function Glyph({ kind, size }: { kind: Kind; size: number }) {
  if (kind === "browser") return <Browser size={size} />;
  if (kind === "server") return <Server size={size} />;
  if (kind === "device") return <Device size={size} />;
  if (kind === "bracket") return <Bracket size={size} />;
  if (kind === "spark") return <Spark size={size} />;
  if (kind === "target") return <Target size={size} />;
  return <Asterisk size={size} />;
}

function Run() {
  return (
    <>
      {SEQ.map((item, i) => (
        <span className="tape__item" key={`${item.w}-${i}`}>
          <Glyph kind={item.icon} size={18} />
          {item.w}
        </span>
      ))}
    </>
  );
}

export default function Tape({ tone = "ink", reverse = false }: Props) {
  const toneClass = tone === "verm" ? " tape--verm" : tone === "pop" ? " tape--pop" : "";
  return (
    <div className={`tape${toneClass}`} aria-label="What I build: frontend, backend, mobile and everything around it">
      <div className={`tape__track${reverse ? " tape__track--rev" : ""}`} aria-hidden="true">
        <Run />
        <Run />
      </div>
    </div>
  );
}
