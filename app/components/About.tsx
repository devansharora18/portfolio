import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center relative z-0 py-16"
      id="about"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-xl tracking-widest uppercase text-indigo-600 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            About
          </motion.p>
          <motion.h2 
            className="mt-2 text-3xl font-extrabold text-white sm:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }}
          >
            Who I Am
          </motion.h2>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-indigo-800 to-indigo-600 rounded-lg shadow-xl p-6 mt-10 relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-xl leading-relaxed">
            Hello there! I'm not your average developer, I'm a true tech enthusiast with a passion for exploring the world of technology. Beyond writing code, I like experimenting with different operating systems on both my phone and laptop. I'm also a huge fan of the Linux family, and I'm currently using Bluefin Linux as my daily driver.
          </p>
          <p className="text-white text-xl leading-relaxed mt-4">
            I'm a first-year student at VIT Vellore who started learning computer science in 2022 through Harvard's CS50p course. After that, I participated in multiple hackathons and also started a YouTube channel.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <a href="#skills" className="text-xl text-indigo-400 hover:text-indigo-300 transition-colors duration-300 underline">
            Discover My Skills
          </a>
        </motion.div>
      </div>

      <motion.img
        src="/code.svg"
        alt="Code Icon"
        className="h-64 w-64 absolute top-4 left-4 opacity-30 lg:opacity-100 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="/chess.svg"
        alt="Chess Icon"
        className="h-64 w-64 absolute bottom-4 right-4 opacity-30 lg:opacity-100 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default About;
