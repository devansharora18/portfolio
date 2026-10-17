import SectionHead from "./SectionHead";
import { CONTACT_EMAIL, FORM_ENDPOINT, socials } from "../lib/data";
import { ArrowUpRight, socialIcons } from "./icons";

const direct: { label: string; value: string; href?: string }[] = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "Location", value: "Vellore, Tamil Nadu · IST (UTC+5:30)" },
  { label: "Response", value: "Usually within a day or two" },
  { label: "Open to", value: "Internships, freelance, collabs" },
];

export default function Correspondence() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="shell">
        <SectionHead
          no="04"
          label="Correspondence"
          title="Send a note"
          note="No newsletter, ever"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* left — the ask */}
          <div data-reveal>
            <p
              className="uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 1.1rem + 2.6vw, 3.2rem)",
                lineHeight: 0.94,
              }}
            >
              Have something
              <br />
              worth making?
              <br />
              <em className="serif-i normal-case" style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}>
                Tell me about it.
              </em>
            </p>

            <p className="mt-7 max-w-[46ch] leading-relaxed text-[var(--ink-2)]">
              I like problems with a clear edge — developer tooling, compilers,
              interface performance, or a product that needs to feel fast on a
              bad connection. Send the rough version; I don't need the polished
              pitch.
            </p>

            <dl className="mt-10 border-t border-[var(--rule)]">
              {direct.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--rule)] py-3.5"
                >
                  <dt className="mono-sm dim">{item.label}</dt>
                  <dd className="text-[0.95rem]">
                    {item.href ? (
                      <a href={item.href} className="tlink" style={{ letterSpacing: "0.02em" }}>
                        {item.value}
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="text-[var(--ink-2)]">{item.value}</span>
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
                    <a href={s.href} className="tlink" target="_blank" rel="noopener noreferrer">
                      {Icon ? <Icon size={14} /> : null}
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* right — the overprinted form block */}
          <div className="invert-block relative p-6 md:p-9" data-reveal style={{ ["--d" as string]: "80ms" }}>
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <span className="mono-sm" style={{ color: "var(--accent)" }}>
                  Form 04-A
                </span>
                <p className="mono-sm mt-1">Transmission</p>
              </div>
              <span className="regmark opacity-40" />
            </div>

            <form action={FORM_ENDPOINT} method="POST" className="space-y-7">
              <input type="hidden" name="_subject" value="Portfolio — new note" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="mono-sm mb-2 block">
                  01 — Your name
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
                <label htmlFor="email" className="mono-sm mb-2 block">
                  02 — Reply to
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
                <label htmlFor="message" className="mono-sm mb-2 block">
                  03 — The note
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

              <button type="submit" className="btn btn--accent w-full justify-between">
                <span>Send it over</span>
                <ArrowUpRight size={14} />
              </button>

              <p className="mono-sm" style={{ color: "var(--ink-3)", letterSpacing: "0.12em" }}>
                Delivered via FormSubmit · no account needed
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
