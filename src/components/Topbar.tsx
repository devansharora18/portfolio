import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface Props {
  warpEnabled: boolean;
  onToggleWarp: () => void;
}

export default function Topbar({ warpEnabled, onToggleWarp }: Props) {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const { label, href } of links) {
      const el = document.querySelector(href);
      if (!el) continue;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(label);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-2xl border-b border-white/5">
      <nav className="mx-auto flex items-center justify-between px-5 md:px-16 max-w-[1200px] h-16">
        <a href="#home" className="text-on-surface font-display text-xl font-medium tracking-tight">
          devansharora.in
        </a>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-300 ${
                  active === link.label
                    ? "text-tertiary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
                {active === link.label && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-tertiary" />
                )}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onToggleWarp}
              className={`font-mono text-xs tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                warpEnabled
                  ? "border-tertiary/50 text-tertiary bg-tertiary/10"
                  : "border-white/10 text-on-surface-variant hover:border-white/20"
              }`}
              title="Toggle gravity warp"
            >
              {warpEnabled ? "Warp On" : "Warp Off"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
