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
        "inline-flex items-center rounded-md border border-gray-700 px-2.5 py-0.5 text-xs sm:text-sm font-mono text-gray-300",
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

// ------------------ Skills ------------------
const skills = [
  "Javascript",
  "Typescript",
  "C++",
  "Python",
  "Dart",
  "React",
  "Next.js",
  "Flutter",
  "Tailwind",
  "Redux",
  "Django",
  "Firebase",
];

const Skills = () => {
  return (
    <Section id="skills">
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
          Skills & Technologies
        </motion.h2>

        {/* Skills Badges */}
        <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Badge>{skill}</Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
