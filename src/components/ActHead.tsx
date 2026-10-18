interface Props {
  no: string;
  label: string;
  title: string;
  note?: string;
}

export default function ActHead({ no, label, title, note }: Props) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-center gap-5">
        <span className="label label-solar whitespace-nowrap">{no}</span>
        <span className="label whitespace-nowrap">{label}</span>
        <span className="rule flex-1" data-rule />
        {note ? <span className="label hidden whitespace-nowrap sm:block">{note}</span> : null}
      </div>
      <h2 className="act mt-6" data-reveal>
        {title}
      </h2>
    </header>
  );
}
