"use client";

import { motion } from "framer-motion";
const projects = [
	{
		title: "TardisJS",
		link: "https://github.com/devansharora18/tardisjs",
		description:
			"A compiler-driven frontend framework built around a blueprint DSL that compiles .tardis files to plain JavaScript with a lightweight runtime.",
		tech: ["TypeScript", "JavaScript", "Compiler", "CLI"],
	},
	{
		title: "Devjams",
		link: "https://devjams.dscvit.com",
		description:
			"Official website for Devjams 25, a hackathon organized by GDG VITV.",
		tech: ["React", "Vite", "Tailwind", "GSAP", "Three.js"],
	},
	{
		title: "Layout",
		link: "https://layout.devansharora.in",
		description:
			"A web tool that lets developers quickly create and test page layouts. Split the screen into sections, adjust them, and instantly see generated code in JSX + Tailwind or HTML + CSS.",
		tech: ["Next.js", "Redux"],
	},
];

const Projects = () => {
	return (
		<section id="projects" className="cv-section">
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
					Selected Projects
				</motion.h2>

				<div className="mt-5 space-y-4 sm:mt-6">
					{projects.map((project, index) => (
						<motion.article
							key={project.title}
							className="cv-entry"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: index * 0.07 }}
							viewport={{ once: true }}
						>
							<div className="flex flex-wrap items-center justify-between gap-3">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[1.2rem] leading-tight text-[#31261a] transition-colors hover:text-[#7a6447]"
								>
									{project.title}
								</a>
								<span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7a6447]">
									{String(index + 1).padStart(2, "0")}
								</span>
							</div>

							<p className="cv-copy mt-2">
								{project.description}
							</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{project.tech.map((t) => (
									<span key={t} className="cv-chip">
										{t}
									</span>
								))}
							</div>
						</motion.article>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Projects;
