import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Javascript', imageSrc: '/js.png' },
  { name: 'Typescript', imageSrc: '/ts.png' },
  { name: 'C++', imageSrc: '/cpp.png' },
  { name: 'Python', imageSrc: '/python.png' },
  { name: 'Dart', imageSrc: '/dart.png' },
  { name: 'React', imageSrc: '/react.png' },
  { name: 'Next.js', imageSrc: '/next.png' },
  { name: 'Flutter', imageSrc: '/flutter.png' },
  { name: 'Tailwind', imageSrc: '/tailwind.png' },
  { name: 'Bootstrap', imageSrc: '/bootstrap.png' },
  { name: 'Django', imageSrc: '/django.png' },
  { name: 'Firebase', imageSrc: '/firebase.png' },
];

const Skills = () => {
  return (
    <motion.div 
      id='skills' 
      className='w-full min-h-screen flex items-center justify-center p-4 sm:p-8 relative z-5'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className='w-[80vw] max-w-[1240px] mx-auto flex flex-col justify-center'>
        <motion.p 
          className='text-xl tracking-widest uppercase text-indigo-600 text-center font-semibold'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <motion.h2 
          className='py-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 text-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          What I Can Do
        </motion.h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-black'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300 hover:bg-gray-100 flex items-center justify-center'
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
                <div className='mb-2 sm:mb-0 sm:mr-4'>
                  <Image src={skill.imageSrc} width={48} height={48} alt={skill.name} />
                </div>
                <div className='text-center sm:text-left'>
                  <h3 className='text-sm sm:text-base font-semibold'>{skill.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className='pt-8 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#projects" className='text-xl text-indigo-400 hover:text-indigo-300 transition-colors duration-300 underline'>
            Here are some of my recent projects
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
