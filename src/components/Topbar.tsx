import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Topbar() {
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-2xl border-b border-white/5">
      <nav className="mx-auto flex items-center justify-between px-5 md:px-16 max-w-[1200px] h-16">
        <a href="#home" onClick={() => setActive("Home")} className="text-on-surface font-display text-xl font-medium tracking-tight">
          devansharora.in
        </a>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
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
        </ul>
      </nav>
    </header>
  );
}
