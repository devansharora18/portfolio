"use client";

import { motion } from "framer-motion";
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
		<section id="skills" className="cv-section">
			<motion.div
				className="flex flex-col"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.45 }}
				viewport={{ once: true }}
			>
				<motion.h2
					className="cv-section-title"
					initial={{ opacity: 0, y: -16 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					viewport={{ once: true }}
				>
					Skills
				</motion.h2>

				<p className="cv-copy mt-3 max-w-2xl">
					Tools and technologies I use to design, build, and ship reliable
					interfaces.
				</p>

				<div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
					{skills.map((skill, index) => (
						<motion.span
							key={skill}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.25, delay: index * 0.03 }}
							viewport={{ once: true }}
						>
							<span className="cv-chip">{skill}</span>
						</motion.span>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Skills;
