"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
	return (
		<main className="pb-14 pt-8 sm:pb-20 sm:pt-10">
			<div className="cv-shell">
				<section className="cv-document">
					<div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65 }}
						>
							<p className="cv-kicker">Curriculum Vitae</p>
							<h1 className="mt-3 text-[2.8rem] leading-[0.9] sm:text-[3.4rem]">
								Devansh Arora
							</h1>
							<p className="mt-3 text-lg font-medium text-[#4d4132] sm:text-xl">
								Software Developer
							</p>
							<p className="cv-copy mt-4 max-w-2xl">
								I build thoughtful digital products with clean front-end
								execution and strong attention to detail. My focus is turning
								complex ideas into clear, fast, and usable experiences.
							</p>

							<div className="mt-6 flex flex-wrap gap-3">
								<a
									href="https://github.com/devansharora18"
									target="_blank"
									rel="noopener noreferrer"
									className="cv-link"
								>
									<FaGithub className="text-sm" />
									GitHub
								</a>
								<a
									href="https://www.linkedin.com/in/devansh-arora-7b2395215/"
									target="_blank"
									rel="noopener noreferrer"
									className="cv-link"
								>
									<FaLinkedin className="text-sm" />
									LinkedIn
								</a>
								<a href="mailto:mail@devansharora.in" className="cv-link">
									<FaEnvelope className="text-sm" />
									Email
								</a>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.94 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.08 }}
							className="mx-auto md:mx-0"
						>
							<div className="h-48 w-40 overflow-hidden rounded-[22px] border border-[#d6c8b3] bg-[#efe4d3] p-1.5 shadow-[0_20px_40px_-30px_rgba(30,23,16,0.8)] sm:h-52 sm:w-44">
								<Image
									src="/pfp.jpg"
									alt="Devansh Arora"
									width={400}
									height={480}
									className="h-full w-full rounded-[16px] object-cover object-center scale-[1.08]"
								/>
							</div>
						</motion.div>
					</div>
					<Experience />
					<Projects />
					<Skills />
				</section>
			</div>
		</main>
	);
}
