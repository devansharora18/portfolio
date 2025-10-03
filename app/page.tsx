"use client"

import Image from 'next/image'
// import { Navbar } from './components/Navbar'
// import ParticlesBackground from './components/ParticlesBackground'
// import About from './components/About'
import Skills from './components/Skills'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Projects from './components/Projects'
// import Contact from './components/Contact'
import "./globals.css";
import { motion } from 'framer-motion';
import Experience from './components/Experience'

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="bg-black text-white pb-20">
      {/* <ParticlesBackground /> */}
      {/* <Navbar /> */}
      <section className="relative mt-10 flex items-center justify-center px-6 pt-12">
  <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left flex-1"
    >
      {/* Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-white">Devansh Arora</h1>

      {/* Role / About */}
      <p className="mt-2 text-lg text-gray-300 max-w-lg">
        A Software Developer with a passion for building impactful digital experiences.
      </p>


      {/* Social Icons */}
      <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-4">
        <a href="https://github.com/devansharora18" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-800 transition">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/devansh-arora-7b2395215/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-800 transition">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:mail@devansharora.in" className="p-2 rounded-lg hover:bg-gray-800 transition">
          <FaEnvelope size={22} />
        </a>
      </div>
    </motion.div>

    {/* Image Section */}
    <div className="flex justify-end flex-1">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-40 h-40 md:w-50 md:h-50 overflow-hidden rounded-xl shadow-lg"
      >
        <Image
          src="/pfp.jpg"
          alt="Devansh Arora"
          width={400}
          height={400}
          className="object-cover w-full h-full scale-[1.2]"
        />
      </motion.div>
    </div>

  </div>
</section>
      <Skills />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  )
}
