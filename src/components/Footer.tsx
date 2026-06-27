export default function Footer() {
  const scrollToTop = () => {
    window.__lenis?.scrollTo(0);
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-12 px-5 md:px-16">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-6">
        <button
          onClick={scrollToTop}
          className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors duration-300 flex items-center gap-2 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-y-0.5 transition-transform"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
          Back to Top
        </button>
        <span className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant/60">
          &copy; {new Date().getFullYear()} Devansh Arora
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/devansharora18"
            className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devansh-arora-7b2395215/"
            className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/devansharora_18"
            className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors duration-300"
          >
            Twitter
          </a>
            <a
            href="/resume.pdf"
            className="font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
