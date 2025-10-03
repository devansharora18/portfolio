"use client";

import React from "react";
import { motion } from "framer-motion";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ------------------ cn helper ------------------
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ------------------ Badge ------------------
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-mono text-gray-300 border-gray-700",
        className
      )}
      {...props}
    />
  );
}

// ------------------ Section ------------------
interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center px-6 pt-5",
        className
      )}
      {...props}
    />
  );
}

// ------------------ Projects ------------------
const projects = [
  {
    title: "Devjams",
    link: "https://devjams.dscvit.com",
    description: "Official website for Devjams 25, a hackathon organized by GDG VITV.",
    tech: ["React", "Vite", "Tailwind", "GSAP", "Three.js"],
  },
  {
    title: "Layout",
    link: "https://layout.devansharora.in",
    description:
      "A web tool that lets developers quickly create and test page layouts. Split the screen into sections, adjust them, and instantly see generated code in JSX + Tailwind or HTML + CSS.",
    tech: ["Next.js", "Redux"],
  },
  {
    title: "CPU Controller",
    link: "https://github.com/devansharora18/cpu-controller",
    description:
      "CPU Controller for Linux is a GUI application using PyQt6 that allows toggling individual CPU cores on/off to save battery life.",
    tech: ["PyQt6"],
  },
];


const Projects = () => {
  return (
    <Section id="projects">
      <motion.div
        className="max-w-5xl w-full flex flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="pt-4 text-3xl md:text-4xl font-bold text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors bg-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
             <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-lg font-semibold text-gray-200 hover:underline"
>
  {project.title}
</a>

              <p className="mt-2 text-sm text-gray-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;
