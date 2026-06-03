export default function ContactSection() {
  return (
    <section id="contact" className="min-h-[calc(100vh-64px)] py-24 border-b border-white/5">
      <div className="mx-auto w-full max-w-[600px] px-5 md:px-16">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-on-surface-variant text-center mb-12 leading-relaxed">
          Have a project in mind or just want to say hello? Drop me a message.
        </p>
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_subject" value="Portfolio Contact" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="hidden" />

          <div>
            <label htmlFor="name" className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-transparent border-b border-outline-variant py-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none focus:border-tertiary focus:shadow-[0_1px_0_0_#e9c349] transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full bg-transparent border-b border-outline-variant py-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none focus:border-tertiary focus:shadow-[0_1px_0_0_#e9c349] transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-transparent border-b border-outline-variant py-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none focus:border-tertiary focus:shadow-[0_1px_0_0_#e9c349] transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full font-mono text-xs tracking-[0.1em] uppercase py-4 rounded-xl bg-tertiary text-[#131313] font-bold hover:brightness-110 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
