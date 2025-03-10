import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center relative z-0 py-16"
      id="about"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg sm:text-xl tracking-widest uppercase text-indigo-500 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.p>
          <motion.h2
            className="mt-3 text-4xl sm:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }}
          >
            Who I Am
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative bg-opacity-80 bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl p-8 sm:p-12 border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-lg sm:text-xl leading-relaxed">
            Hey there! I'm not just another developer—I'm a tech explorer always pushing the boundaries of innovation. I enjoy experimenting with different operating systems on my devices and have a deep love for the Linux ecosystem. Currently, I use Bluefin Linux as my daily driver.
          </p>
          <p className="text-white text-lg sm:text-xl leading-relaxed mt-6">
            I'm a first-year student at VIT Vellore and started my coding journey in 2022 with Harvard's CS50p course. Since then, I've dived into multiple hackathons and even started my own YouTube channel to share my knowledge.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#skills"
            className="text-lg sm:text-xl text-indigo-400 hover:text-indigo-300 transition-all duration-300 underline"
          >
            Discover My Skills
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
