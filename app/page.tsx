"use client"

import Image from 'next/image'

import { Navbar } from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import About from './components/About'
import Skills from './components/Skills'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Projects from './components/Projects'


export default function Home() {
	

  return (
    <div className="bg-white">
		<ParticlesBackground />
		<Navbar />
      <section className='h-[100vh]'>
		
		

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center pt-10">
			<h2 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">
				Hello I am
			</h2>
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Devansh Arora
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              An App Developer, programmer, chess player and a tech enthusiast.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Me
              </a>
              <a href="#about" className="text-sm font-semibold leading-6 text-gray-100">
                Get to Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
			<div className="mt-4 flex justify-center items-center">
      <a
        href="https://github.com/ART3MISTICAL"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-indigo-600 mr-4"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/devansh-arora-7b2395215/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-indigo-600 mr-4"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="mailto:hsnaved.reverse@gmail.com"
		target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-indigo-600"
      >
        <FaEnvelope size={32} />
      </a>
    </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
	  </section>
	  <About />
	  <Skills />
	  <Projects	/>

    </div>
  )
}