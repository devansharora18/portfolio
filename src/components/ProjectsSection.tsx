import { useState } from "react";
import tardisjsImg from "../assets/projects/tardisjs/image.png";
import layoutImg from "../assets/projects/layout/image.png";
import devjams25Img from "../assets/projects/devjams25/image.png";
import hoverCarouselImg from "../assets/projects/hover-carousel/image.png";
import colorPaletteImg from "../assets/projects/color-palette/image.png";
import cpuControllerImg from "../assets/projects/cpu-controller/image.png";
import rogiSahyogiImg from "../assets/projects/rogi-sahyogi/image.png";
import agrostatImg from "../assets/projects/agrostat/image.png";
import wt26Img from "../assets/projects/wt26/image.png";
import argosImg from "../assets/projects/argos/image.png";
import aetherImg from "../assets/projects/aether/image.png";

interface Link {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  type: "phone" | "desktop";
  tags: string[];
  links?: Link[];
}

const allProjects: Project[] = [
  {
    title: "TardisJS",
    description:
      "A compiler-driven frontend framework built around a blueprint DSL. TardisJS compiles .tardis files to plain JavaScript modules plus a small runtime (~5KB). It uses Proxy-based reactivity with direct DOM bindings (no virtual DOM reconciliation).",
    image: tardisjsImg,
    type: "desktop",
    tags: ["TypeScript"],
    links: [
      { label: "Website", href: "https://tardisjs.devansharora.in" },
      { label: "GitHub", href: "https://github.com/devansharora18/tardisjs" },
    ],
  },
  {
    title: "Layout",
    description: "A layout design project.",
    image: layoutImg,
    type: "desktop",
    tags: ["Next.js", "Redux"],
    links: [
      { label: "Website", href: "https://layout.devansharora.in" },
      { label: "GitHub", href: "https://github.com/devansharora18/layout" },
    ],
  },
  {
    title: "Devjams 25",
    description: "Official website for Devjams 25, a hackathon organized by GDG VITV.",
    image: devjams25Img,
    type: "desktop",
    tags: ["React", "Vite", "Tailwind", "Three.js"],
    links: [{ label: "Website", href: "https://devjams.dscvit.com/" }],
  },
  {
    title: "Aether",
    description:
      "Aether is a modern, interactive TUI and command-line wrapper for Linux package managers, with support for both apt and dnf, written in Go.",
    image: aetherImg,
    type: "desktop",
    tags: ["Go"],
    links: [{ label: "GitHub", href: "https://github.com/devansharora18/aether" }],
  },
  {
    title: "ARGOS",
    description:
      "ARGOS is an AI-powered Incident Commander designed specifically for hospitality venues. Builds a shared, intelligent understanding of reality during a crisis.",
    image: argosImg,
    type: "desktop",
    tags: ["Flutter", "React", "Electron", "Express", "TypeScript", "ML"],
    links: [
      { label: "Website", href: "https://argos-omega.vercel.app/" },
      { label: "GitHub", href: "https://github.com/devansharora18/argos" },
    ],
  },
  {
    title: "WT26",
    description: "Official website for Women Techies 26, a hackathon organized by GDG VITV.",
    image: wt26Img,
    type: "desktop",
    tags: ["React", "TypeScript", "Anime.js"],
    links: [{ label: "Website", href: "https://womentechies26-frontend-three.vercel.app/" }],
  },
  {
    title: "AgroStat",
    description:
      "AgroStat predicts the best crop to grow based on an Indian state/union territory, temperature, and humidity. Uses an XGBoost classifier.",
    image: agrostatImg,
    type: "desktop",
    tags: ["React", "ML"],
    links: [
      { label: "Website", href: "https://agrostat.vercel.app" },
      { label: "GitHub", href: "https://github.com/devansharora18/agrostat" },
    ],
  },
  {
    title: "CPU Controller",
    description:
      "This is a PyQt6 application to control the state of CPU cores on a Linux system. The application allows you to enable or disable individual CPU cores or a range of CPU cores.",
    image: cpuControllerImg,
    type: "desktop",
    tags: ["Python", "Linux"],
    links: [{ label: "GitHub", href: "https://github.com/devansharora18/cpu-controller" }],
  },
  {
    title: "Color Palette",
    description:
      "The Color Palette is a Python-based application that simplifies color management. It offers a user-friendly interface for adding, organizing, importing and copying colors.",
    image: colorPaletteImg,
    type: "desktop",
    tags: ["Python", "Desktop"],
    links: [{ label: "GitHub", href: "https://github.com/devansharora18/color-palette" }],
  },
  {
    title: "Hover Carousel",
    description:
      "npm package: The carousel allows users to view a collection of images by hovering over the container and moving their mouse horizontally.",
    image: hoverCarouselImg,
    type: "desktop",
    tags: ["JavaScript", "React", "jQuery"],
    links: [
      { label: "Website", href: "https://hover-carousel-demo.vercel.app/" },
      { label: "GitHub", href: "https://github.com/devansharora18/hover-carousel" },
    ],
  },
  {
    title: "Rogi Sahyogi",
    description:
      "An AI-driven healthcare assistant designed to make medical support more accessible. Built with Next.js, Firebase, and a fine-tuned LLaMA 3.2 model.",
    image: rogiSahyogiImg,
    type: "phone",
    tags: ["Next.js", "TypeScript", "Ollama"],
    links: [{ label: "GitHub", href: "https://github.com/devansharora18/rogi-sahyogi" }],
  },
];

const initialProjectTitles = ["TardisJS", "Layout", "Devjams 25", "Aether", "ARGOS", "WT26"];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll
    ? allProjects
    : allProjects.filter((p) => initialProjectTitles.includes(p.title));

  return (
    <section id="projects" className="min-h-[calc(100vh-64px)] py-24 border-b border-white/5">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-16">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((project) => (
            <div key={project.title} className="relative group">
              {/* Ambient shadow */}
              <div className="absolute -inset-3 bg-primary-container/40 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-surface-container/60 backdrop-blur-md rounded-2xl border-t border-l border-white/10 border-r-transparent border-b-transparent overflow-hidden shadow-2xl shadow-[#02140d]/50 p-5 md:p-6 transform transition-transform duration-500 group-hover:scale-[1.02] flex flex-col h-full">
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-variant/50 rounded-full font-mono text-[10px] tracking-[0.1em] uppercase text-on-surface backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.links && project.links.length > 0 && (
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-tertiary transition-colors shrink-0 ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Screenshot Area */}
                <div className="relative bg-surface-container-lowest/80 rounded-xl border border-white/5 mb-5 overflow-hidden">
                  {/* Internal glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/10 rounded-full blur-3xl" />
                  <div
                    className={`relative ${
                      project.type === "phone"
                        ? "aspect-[9/19] max-h-[300px] mx-auto my-3 w-[40%] rounded-xl overflow-hidden ring-1 ring-white/5"
                        : "aspect-[16/10] rounded-lg overflow-hidden"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Title + Description */}
                <h3 className="font-display text-2xl font-medium text-on-surface mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant opacity-80 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/5">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors duration-300 group/link"
                      >
                        {link.label}
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
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase px-8 py-3.5 rounded-full border border-white/10 text-on-surface-variant hover:text-tertiary hover:border-tertiary/30 transition-colors duration-300 group"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
