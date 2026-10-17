interface Props {
  no: string;
  label: string;
  title: string;
  note?: string;
}

export default function SectionHead({ no, label, title, note }: Props) {
  return (
    <header className="mb-10 md:mb-14">
      <div className="flex items-center gap-4">
        <span className="mono" style={{ color: "var(--accent)" }}>
          {no}
        </span>
        <span className="mono dim">{label}</span>
        <span className="hr flex-1" data-rule />
        {note ? <span className="mono-sm dim hidden sm:block">{note}</span> : null}
      </div>
      <h2
        className="mt-5 uppercase"
        style={{ fontSize: "var(--step-3)", lineHeight: 0.86 }}
        data-reveal
      >
        {title}
      </h2>
    </header>
  );
}
