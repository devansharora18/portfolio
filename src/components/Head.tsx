import type { ReactNode } from "react";

interface Props {
  no: string;
  kicker: string;
  title: ReactNode;
  note?: string;
  tone?: "verm" | "ultra" | "ink";
  children?: ReactNode;
}

export default function Head({ no, kicker, title, note, tone = "verm", children }: Props) {
  return (
    <header className="mb-10 md:mb-14">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span
          className={`stamp${tone === "ultra" ? " stamp--ultra" : tone === "ink" ? " stamp--ink" : ""}`}
        >
          {no}
        </span>
        <span className="anno">{kicker}</span>
        <span className="rule hidden flex-1 sm:block" data-rule />
        {note ? <span className="anno dim hidden whitespace-nowrap sm:block">{note}</span> : null}
      </div>
      <h2 className="loud mt-6" style={{ fontSize: "var(--t-loud)" }} data-reveal>
        {title}
      </h2>
      {children}
    </header>
  );
}
