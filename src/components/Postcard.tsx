import Head from "./Head";
import { CONTACT_EMAIL, COORDS, FORM_ENDPOINT, socials } from "../lib/data";
import { ArrowUpRight, socialIcons } from "./icons";
import { Asterisk, Postmark, Spark } from "./Art";

const direct: { label: string; value: string; href?: string }[] = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "Where", value: "Vellore, Tamil Nadu · IST" },
  { label: "Replies", value: "Within a day or two" },
  { label: "Open to", value: "Internships · freelance · collabs" },
];

export default function Postcard() {
  return (
    <section
      id="contact"
      className="relative border-t-2 pt-16 md:pt-24"
      style={{ borderColor: "var(--ink)" }}
    >
      <div className="wrap">
        <Head
          no="05 — postcard"
          kicker="Correspondence"
          note="No newsletter, ever"
          title={
            <>
              Send me a
              <br />
              postcard.
            </>
          }
        />

        <div className="airmail hard p-2.5 md:p-3.5" data-reveal>
          <div
            className="grid gap-9 border-2 p-5 md:grid-cols-[1.3fr_1fr] md:p-8"
            style={{ borderColor: "var(--ink)", background: "var(--gesso)" }}
          >
            {/* message side */}
            <form action={FORM_ENDPOINT} method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="Portfolio — a postcard" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="flex items-center gap-2.5">
                <Asterisk size={16} />
                <span className="anno">Message</span>
                <span className="rule-hair flex-1" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="anno-sm mb-2 block dim-2">Your name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    className="field"
                  />
                </label>
                <label className="block">
                  <span className="anno-sm mb-2 block dim-2">Reply to</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@domain.com"
                    className="field"
                  />
                </label>
              </div>

              <label className="block">
                <span className="anno-sm mb-2 block dim-2">
                  What are you building, and what&rsquo;s stuck?
                </span>
                <textarea name="message" required rows={6} placeholder="Write it here…" className="field" />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn btn-verm">
                  Post it
                  <ArrowUpRight size={15} />
                </button>
                <span className="anno-sm dim flex items-center gap-2">
                  <Spark size={12} /> Routed via FormSubmit
                </span>
              </div>
            </form>

            {/* address side */}
            <aside className="flex flex-col gap-6 border-t-2 pt-7 md:border-l-2 md:border-t-0 md:pl-8 md:pt-0" style={{ borderColor: "var(--ink)" }}>
              <div className="flex items-start justify-between gap-4">
                {/* stamp */}
                <div
                  className="relative grid h-[86px] w-[70px] shrink-0 place-items-center border-2"
                  style={{ borderColor: "var(--ink)", background: "var(--chart)", transform: "rotate(-3deg)" }}
                >
                  <div
                    className="absolute inset-1.5 border-2 border-dashed"
                    style={{ borderColor: "var(--ink)" }}
                    aria-hidden="true"
                  />
                  <span className="relative flex flex-col items-center gap-0.5">
                    <Asterisk size={22} />
                    <span className="anno-sm" style={{ letterSpacing: "0.06em" }}>
                      IN
                    </span>
                  </span>
                </div>
                <div className="shrink-0 opacity-80" style={{ color: "var(--verm)" }}>
                  <Postmark size={92} />
                </div>
              </div>

              <dl className="border-t-2" style={{ borderColor: "var(--ink)" }}>
                {direct.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 border-b-2 py-3"
                    style={{ borderColor: "var(--hair)" }}
                  >
                    <dt className="anno-sm dim">{item.label}</dt>
                    <dd className="anno-sm">
                      {item.href ? (
                        <a href={item.href} className="tlink">
                          {item.value}
                        </a>
                      ) : (
                        <span className="dim-2">{item.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
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

              <p className="anno-sm mt-auto dim">{COORDS} — Vellore, India</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
