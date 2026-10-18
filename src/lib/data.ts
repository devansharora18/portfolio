import tardisjs from "../assets/projects/tardisjs/image.png";
import layout from "../assets/projects/layout/image.png";
import devjams25 from "../assets/projects/devjams25/image.png";
import hoverCarousel from "../assets/projects/hover-carousel/image.png";
import colorPalette from "../assets/projects/color-palette/image.png";
import cpuController from "../assets/projects/cpu-controller/image.png";
import rogiSahyogi from "../assets/projects/rogi-sahyogi/image.png";
import ember from "../assets/projects/ember/image.png";
import agrostat from "../assets/projects/agrostat/image.png";
import wt26 from "../assets/projects/wt26/image.png";
import argos from "../assets/projects/argos/image.png";
import aether from "../assets/projects/aether/image.png";
import nocap from "../assets/projects/nocapnews/image.png";

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  no: string;
  title: string;
  description: string;
  image: string;
  shape: "plate" | "slab";
  tags: string[];
  links: Link[];
}

/* Ordered by weight, strongest first. `no` is the catalogue number. */
export const projects: Project[] = [
  {
    no: "001",
    title: "TardisJS",
    description:
      "A compiler-driven frontend framework built around a blueprint DSL. TardisJS compiles .tardis files to plain JavaScript modules plus a small runtime (~5KB), using Proxy-based reactivity with direct DOM bindings instead of virtual-DOM reconciliation.",
    image: tardisjs,
    shape: "plate",
    tags: ["TypeScript", "Compiler", "Framework"],
    links: [
      { label: "Website", href: "https://tardisjs.devansharora.in" },
      { label: "Source", href: "https://github.com/devansharora18/tardisjs" },
    ],
  },
  {
    no: "002",
    title: "Nocap",
    description:
      "A Gen-Z news aggregator with multi-source RSS feeds: pull-to-refresh, article reading, bookmarking, tab navigation and scroll-to-top across World, Tech, Entertainment and Sports.",
    image: nocap,
    shape: "slab",
    tags: ["Flutter", "Riverpod", "RSS"],
    links: [{ label: "Source", href: "https://github.com/devansharora18/nocap" }],
  },
  {
    no: "003",
    title: "Ember",
    description:
      "An EPUB reader with RSVP speed reading, bookmarks, highlights and progress tracking. Custom pagination engine, dark/light modes and full library export. Android-first, with a React landing page.",
    image: ember,
    shape: "slab",
    tags: ["Flutter", "Riverpod"],
    links: [
      { label: "Landing", href: "https://devansharora18.github.io/ember/" },
      { label: "Source", href: "https://github.com/devansharora18/ember" },
    ],
  },
  {
    no: "004",
    title: "Devjams 25",
    description:
      "Official site for Devjams 25, the flagship hackathon run by GDG VIT Vellore. Built around a WebGL hero and a lot of scroll choreography.",
    image: devjams25,
    shape: "plate",
    tags: ["React", "Vite", "Three.js"],
    links: [{ label: "Website", href: "https://devjams.dscvit.com/" }],
  },
  {
    no: "005",
    title: "Aether",
    description:
      "A modern, interactive TUI and command-line wrapper for Linux package managers, with first-class support for both apt and dnf. Written in Go.",
    image: aether,
    shape: "plate",
    tags: ["Go", "TUI", "CLI"],
    links: [{ label: "Source", href: "https://github.com/devansharora18/aether" }],
  },
  {
    no: "006",
    title: "ARGOS",
    description:
      "An AI incident commander for hospitality venues. Argos builds a shared, intelligent understanding of reality during a crisis and keeps every responder on the same page.",
    image: argos,
    shape: "plate",
    tags: ["Flutter", "Electron", "Express", "ML"],
    links: [
      { label: "Website", href: "https://argos-omega.vercel.app/" },
      { label: "Source", href: "https://github.com/devansharora18/argos" },
    ],
  },
  {
    no: "007",
    title: "Layout",
    description:
      "A web tool to sketch and test page layouts fast, emitting ready-to-paste JSX + Tailwind or plain HTML + CSS from the same canvas.",
    image: layout,
    shape: "plate",
    tags: ["Next.js", "Redux"],
    links: [
      { label: "Website", href: "https://layout.devansharora.in" },
      { label: "Source", href: "https://github.com/devansharora18/layout" },
    ],
  },
  {
    no: "008",
    title: "WT26",
    description:
      "Official site for Women Techies 26, a hackathon organised by GDG VITV. Type-led layout with staggered Anime.js sequencing.",
    image: wt26,
    shape: "plate",
    tags: ["React", "TypeScript", "Anime.js"],
    links: [{ label: "Website", href: "https://womentechies26-frontend-three.vercel.app/" }],
  },
  {
    no: "009",
    title: "AgroStat",
    description:
      "Predicts the best crop to grow for a given Indian state or union territory from temperature and humidity, using an XGBoost classifier behind a small React front end.",
    image: agrostat,
    shape: "plate",
    tags: ["React", "XGBoost", "ML"],
    links: [
      { label: "Website", href: "https://agrostat.vercel.app" },
      { label: "Source", href: "https://github.com/devansharora18/agrostat" },
    ],
  },
  {
    no: "010",
    title: "CPU Controller",
    description:
      "A PyQt6 desktop app to toggle individual CPU cores — or whole ranges — on a Linux system, with live core state read back from the kernel.",
    image: cpuController,
    shape: "plate",
    tags: ["Python", "PyQt6", "Linux"],
    links: [{ label: "Source", href: "https://github.com/devansharora18/cpu-controller" }],
  },
  {
    no: "011",
    title: "Color Palette",
    description:
      "A desktop colour manager: add, organise, import and copy swatches without leaving the keyboard. Built in Python with a Qt interface.",
    image: colorPalette,
    shape: "plate",
    tags: ["Python", "Desktop"],
    links: [{ label: "Source", href: "https://github.com/devansharora18/color-palette" }],
  },
  {
    no: "012",
    title: "Hover Carousel",
    description:
      "An npm package that scrubs through a row of images as you move the mouse horizontally across the container. No clicks, no dots.",
    image: hoverCarousel,
    shape: "plate",
    tags: ["JavaScript", "React", "npm"],
    links: [
      { label: "Demo", href: "https://hover-carousel-demo.vercel.app/" },
      { label: "Source", href: "https://github.com/devansharora18/hover-carousel" },
    ],
  },
  {
    no: "013",
    title: "Rogi Sahyogi",
    description:
      "An AI healthcare assistant built to make medical support easier to reach. Next.js and Firebase in front, a fine-tuned LLaMA 3.2 behind.",
    image: rogiSahyogi,
    shape: "slab",
    tags: ["Next.js", "TypeScript", "Ollama"],
    links: [{ label: "Source", href: "https://github.com/devansharora18/rogi-sahyogi" }],
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Flutter",
  "Go",
  "Python",
  "C++",
  "Dart",
  "Tailwind",
  "Redux",
  "Django",
  "Firebase",
  "React Native",
  "Compilers",
];

export interface Job {
  period: string;
  role: string;
  org: string;
  place: string;
  body: string;
  stack: string[];
}

export const experience: Job[] = [
  {
    period: "Apr 2025 — Now",
    role: "Frontend Developer",
    org: "Google Developer Group, VIT",
    place: "Vellore, Tamil Nadu",
    body: "Front end for club projects and event sites — component systems, scroll choreography and the unglamorous performance work that makes a heavy landing page feel instant.",
    stack: ["React", "Tailwind", "Vite"],
  },
  {
    period: "Dec 2024 — Jan 2025",
    role: "Frontend Developer",
    org: "KalkiNi · AI surveillance · Internship",
    place: "Tamil Nadu · Hybrid",
    body: "Shipped interactive interface components for an AI surveillance console, wiring live detection state into a React UI the operators could actually read at a glance.",
    stack: ["React", "TypeScript"],
  },
];

export const socials: Link[] = [
  { label: "GitHub", href: "https://github.com/devansharora18" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devansh-arora-7b2395215/" },
  { label: "Twitter", href: "https://twitter.com/devansharora_18" },
  { label: "Email", href: "mailto:hello@devansharora.in" },
  { label: "Résumé", href: "/resume.pdf" },
];

export const sections = [
  { id: "cover", label: "Start", no: "01" },
  { id: "work", label: "Wall", no: "02" },
  { id: "ledger", label: "Ledger", no: "03" },
  { id: "stickers", label: "Stickers", no: "04" },
  { id: "contact", label: "Postcard", no: "05" },
];

export const CONTACT_EMAIL = "hello@devansharora.in";
/* FormSubmit endpoint — must stay in sync with the activated inbox. */
export const FORM_ENDPOINT = "https://formsubmit.co/mail@devansharora.in";
export const TAGLINE = "Systems & Splendour";
export const LOCATION = "Vellore, Tamil Nadu";
export const COORDS = "12.97°N · 79.13°E";

/* Short alt-copy for each project, used on the wall placards. */
export const mediums: Record<string, string> = {
  TardisJS: "Compiler · 5KB runtime",
  Nocap: "RSS aggregator · Flutter",
  Ember: "EPUB reader · pagination engine",
  "Devjams 25": "Hackathon site · WebGL",
  Aether: "TUI package manager · Go",
  ARGOS: "Incident commander · ML",
  Layout: "Layout tool · JSX emitter",
  WT26: "Hackathon site · motion",
  AgroStat: "XGBoost classifier",
  "CPU Controller": "PyQt6 · kernel toggles",
  "Color Palette": "Qt swatch manager",
  "Hover Carousel": "npm package · scrub",
  "Rogi Sahyogi": "Healthcare assistant · LLaMA",
};
