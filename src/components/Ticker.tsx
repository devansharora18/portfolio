import { skills } from "../lib/data";

function Run() {
  return (
    <>
      {skills.map((skill, i) => (
        <span className="marquee__item" key={`${skill}-${i}`}>
          {skill}
          <i aria-hidden="true">✳</i>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="marquee" aria-label="Tools and languages I work with">
      <div className="marquee__track" aria-hidden="true">
        <Run />
        <Run />
      </div>
    </div>
  );
}
