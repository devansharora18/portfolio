"use client"

import Image from 'next/image'
import { Navbar } from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import About from './components/About'
import Skills from './components/Skills'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Projects from './components/Projects'
import Contact from './components/Contact'
import "./globals.css";
import { motion } from 'framer-motion';

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
    <div className="bg-black text-white">
      <ParticlesBackground />
      <Navbar />
      <section className='relative min-h-screen flex items-center justify-center px-6 py-12'>
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex-1"
          >
            <h2 className="text-2xl mt-12 md:mt-0 font-semibold">Hello, I am</h2>
            <h1 className="text-5xl font-bold text-indigo-400 md:text-6xl">Devansh Arora</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              A Software Developer, Programmer, and Tech Enthusiast.
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
              >
                Contact Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about" 
                className="text-indigo-400 font-semibold hover:underline"
              >
                Get to Know More →
              </motion.a>
            </div>
            {/* Social Icons */}
            <motion.div 
              className="mt-6 flex justify-center md:justify-start space-x-6 text-gray-300"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a variants={iconVariants} href="https://github.com/devansharora18" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaGithub size={32} />
              </motion.a>
              <motion.a variants={iconVariants} href="https://www.linkedin.com/in/devansh-arora-7b2395215/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a variants={iconVariants} href="mailto:hsnaved.reverse@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaEnvelope size={32} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <div className="flex justify-end flex-1">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-64 h-64 md:w-96 md:h-96 overflow-hidden border-[6px] border-indigo-600 shadow-lg morph-animation rounded-full relative"
            >
              <Image 
                src="/pfp_enhanced (1).jpg" 
                alt="Devansh Arora" 
                width={224} 
                height={224} 
                className="object-cover w-full h-full"
                unoptimized={true}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
