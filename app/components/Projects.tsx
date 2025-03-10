import React from 'react';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';

const projectData = [
	
	{
		title: 'RogiSahyogi (hackathon)',
		backgroundImg: '/rs.png',
		code: 'https://github.com/devansharora18/rogisahyogi',
		demo: 'https://drive.google.com/file/d/12R356Ymx9gYcGHw48kl0EAc2gVkHvPxa/view?usp=sharing',
		tech: 'Next.js, Tailwind, Firebase, Ollama',
	},

	{
		title: 'Klear Speech & Hearing Clinic (for a client)',
		backgroundImg: '/ksh.png',
		code: 'https://github.com/devansharora18/klearspeechandhearing',
		demo: 'https://klearspeechandhearing.com/',
		tech: 'Next.js, Tailwind',
	},
	
  {
    title: 'Caress: Mental Health App (hackathon)',
    backgroundImg: '/caress_new.png',
    code: 'https://github.com/devansharora18/caress',
	demo: 'https://caress-app.vercel.app',
    tech: 'Next.js, Tailwind, Firebase, Pytorch',
  },
  {
    title: 'Better ICC Rankings',
    backgroundImg: '/bir.png',
    code: 'https://github.com/devansharora18/better-icc-rankings',
	demo: 'https://better-icc-rankings.live/',
    tech: 'Next.js, Tailwind',
  },
  {
    title: 'GSS.io: Garbage Management System (hackathon)',
    backgroundImg: '/gss_new.png',
    code: 'https://github.com/devansharora18/Gss.io',
	demo: 'https://github.com/devansharora18/Gss.io/releases/tag/v0.1.0',
    tech: 'Flutter, Firebase',
  },
  {
    title: 'Color Palette',
    backgroundImg: '/color_palette.png',
    code: 'https://github.com/devansharora18/color-palette',
	demo: 'https://github.com/devansharora18/color-palette/releases/tag/v0.2.0',
    tech: 'Python',
  },
  {
    title: '3D Model of our Solar System',
    backgroundImg: '/solar-system.png',
    code: 'https://github.com/devansharora18/3d-solarsystem-model',
	demo: 'https://solarsystem-model.vercel.app/',
    tech: 'Three.js',
  },
  {
    title: 'Hover Carousel (npm package)',
    backgroundImg: '/hc.png',
    code: 'https://github.com/devansharora18/hover-carousel',
	demo: 'https://hover-carousel-demo.vercel.app/',
    tech: 'React.js',
  },
  
];

const Projects = () => {
  return (
    <motion.section 
      className='flex min-h-[100vh] items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div id='projects' className='w-full relative z-5'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <motion.p 
            className='text-xl tracking-widest uppercase text-indigo-600 text-center font-semibold'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.p>
          <motion.h2 
            className='py-4 text-gray-100 text-center'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What I have Built
          </motion.h2>
          <motion.div 
            className='grid md:grid-cols-2 gap-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectItem
                  title={project.title}
                  backgroundImg={project.backgroundImg}
                  code={project.code}
                  demo={project.demo}
                  tech={project.tech}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
