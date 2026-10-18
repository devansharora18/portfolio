import { Asterisk, Bracket, Brush, Spark, Target } from "./Art";

interface Props {
  tone?: "ink" | "verm" | "chart";
  reverse?: boolean;
}

const SEQ: { w: string; icon: "bracket" | "brush" | "asterisk" | "spark" | "target" }[] = [
  { w: "I love to build", icon: "bracket" },
  { w: "I love art", icon: "brush" },
  { w: "Compilers", icon: "asterisk" },
  { w: "Collage", icon: "target" },
  { w: "Type & colour", icon: "spark" },
  { w: "Ship it", icon: "asterisk" },
];

function Glyph({ kind, size }: { kind: string; size: number }) {
  if (kind === "bracket") return <Bracket size={size} />;
  if (kind === "brush") return <Brush size={size} />;
  if (kind === "target") return <Target size={size} />;
  if (kind === "spark") return <Spark size={size} />;
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
  const toneClass = tone === "verm" ? " tape--verm" : tone === "chart" ? " tape--chart" : "";
  return (
    <div className={`tape${toneClass}`} aria-label="I love to build. I love art.">
      <div className={`tape__track${reverse ? " tape__track--rev" : ""}`} aria-hidden="true">
        <Run />
        <Run />
      </div>
    </div>
  );
}
