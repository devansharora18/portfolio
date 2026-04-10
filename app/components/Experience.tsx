"use client";

import { motion } from "framer-motion";

interface Experience {
	company: string;
	role: string;
	duration: string;
	location: string;
	description: string;
}

const experiences: Experience[] = [
	{
		company: "Google Developer Group VIT · Full-time",
		role: "Frontend Developer",
		duration: "Apr 2025 - Present · 7 mos",
		location: "Vellore, Tamil Nadu, India",
		description:
			"Developing front-end features and interfaces for club projects and events using React.js and Tailwind.",
	},
	{
		company: "KalkiNi ▪︎ AI surveillance system · Internship",
		role: "Frontend Developer",
		duration: "Dec 2024 - Jan 2025 · 2 mos",
		location: "Tamil Nadu, India · Hybrid",
		description:
			"Worked on front-end development using React.js, implementing interactive UI components.",
	},
];

const WorkExperience = () => {
	return (
		<section id="experience" className="cv-section">
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
					Experience
				</motion.h2>

				<div className="mt-5 flex flex-col gap-4 sm:mt-6">
					{experiences.map((exp, index) => (
						<motion.article
							key={exp.company}
							className="cv-entry"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: index * 0.07 }}
							viewport={{ once: true }}
						>
							<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
								<h3 className="text-xl font-semibold text-[#34291e]">
									{exp.role}
								</h3>
								<span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7a6447]">
									{exp.duration}
								</span>
							</div>
							<p className="mt-1 text-sm text-[#6b5b48]">{exp.company}</p>
							<p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#86745e]">
								{exp.location}
							</p>
							<p className="cv-copy mt-3">{exp.description}</p>
						</motion.article>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default WorkExperience;
