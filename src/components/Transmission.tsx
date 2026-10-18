import ActHead from "./ActHead";
import { CONTACT_EMAIL, FORM_ENDPOINT, socials } from "../lib/data";
import { ArrowUpRight, socialIcons } from "./icons";

const direct: { label: string; value: string; href?: string }[] = [
  { label: "Channel", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "Ground station", value: "Vellore, Tamil Nadu · IST (UTC+5:30)" },
  { label: "Response window", value: "Usually within a day or two" },
  { label: "Manifest", value: "Internships · freelance · collabs" },
];

export default function Transmission() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="frame">
        <ActHead
          no="Act IV"
          label="Transmission"
          title="Open a channel"
          note="No newsletter, ever"
        />

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-20">
          <div data-reveal>
            <p className="serif" style={{ fontSize: "clamp(1.7rem, 1rem + 2.2vw, 2.8rem)", lineHeight: 1.12, color: "var(--ice)" }}>
              Have something worth making?
              <br />
              <em className="serif-i" style={{ color: "var(--solar)" }}>
                Tell me about it.
              </em>
            </p>

            <p className="mt-7 max-w-[48ch] leading-relaxed" style={{ color: "var(--ice-2)" }}>
              I like problems with a clear edge — developer tooling, compilers,
              interface performance, or a product that has to feel fast on a bad
              connection. Send the rough version; I don't need the polished pitch.
            </p>

            <dl className="mt-10 border-t" style={{ borderColor: "var(--rule)" }}>
              {direct.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-4"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <dt className="label">{item.label}</dt>
                  <dd className="text-[0.95rem]">
                    {item.href ? (
                      <a href={item.href} className="tlink" style={{ letterSpacing: "0.02em" }}>
                        {item.value}
                        <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <span style={{ color: "var(--ice-2)" }}>{item.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="tlink"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      {Icon ? <Icon size={14} /> : null}
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="panel" data-reveal style={{ ["--d" as string]: "90ms" }}>
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <span className="label label-solar">Form 04-A</span>
                <p className="label mt-2">Uplink</p>
              </div>
              <span className="rec" aria-hidden="true" />
            </div>

            <form action={FORM_ENDPOINT} method="POST" className="space-y-7">
              <input type="hidden" name="_subject" value="Portfolio — new transmission" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="label mb-3 block">
                  01 — Callsign
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Ada Lovelace"
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="email" className="label mb-3 block">
                  02 — Return address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@domain.com"
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="message" className="label mb-3 block">
                  03 — Transmission
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What are you building, and what's stuck?"
                  className="field"
                />
              </div>

              <button type="submit" className="btn btn--solar w-full justify-between">
                <span>Transmit</span>
                <ArrowUpRight size={14} />
              </button>

              <p className="label" style={{ letterSpacing: "0.16em" }}>
                Routed via FormSubmit · no account needed
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
