"use client";

import React from "react";
import { motion } from "framer-motion";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ------------------ cn helper ------------------
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ------------------ Section ------------------
interface SectionProps extends React.HTMLAttributes<HTMLElement> {}
function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center px-6 pt-5",
        className
      )}
      {...props}
    />
  );
}

// ------------------ Experience ------------------
interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
}

let experiences: Experience[] = [
  {
    company: "KalkiNi ▪︎ AI surveillance system · Internship",
    role: "Frontend Developer",
    duration: "Dec 2024 - Jan 2025 · 2 mos",
    location: "Tamil Nadu, India · Hybrid",
    description: "Worked on front-end development using React.js, implementing interactive UI components.",
  },
  {
    company: "Google Developer Group VIT · Full-time",
    role: "Frontend Developer",
    duration: "Apr 2025 - Present · 7 mos",
    location: "Vellore, Tamil Nadu, India",
    description: "Developing front-end features and interfaces for club projects  and events using React.js and Tailwind.",
  },
];

experiences = experiences.reverse();

const WorkExperience = () => {
  return (
    <Section id="experience">
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
          Experience
        </motion.h2>

        {/* Experience List */}
        <div className="mt-6 flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors bg-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-lg font-semibold text-gray-200">{exp.company}</h3>
                <span className="text-sm text-gray-400 mt-1 md:mt-0">{exp.duration}</span>
              </div>
              <p className="text-sm text-gray-300 font-mono mt-1">{exp.role}</p>
              <p className="mt-2 text-sm text-gray-400">{exp.description}</p>
              <p className="mt-1 text-xs text-gray-500">{exp.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default WorkExperience;
