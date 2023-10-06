import Image from 'next/image';
import React from 'react';

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
    <div id='skills' className='w-full lg:h-screen p-2 relative z-5'>
		<center>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-indigo-600'>
          Skills
        </p>
        <h2 className='py-4 text-gray-100'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-300 hover:bg-gray-100'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={skill.imageSrc} width={64} height={64} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
		  
        </div>
		<center className='pt-2'>
		<a href="#projects" className='text-sm lg:text-xl leading-8 text-gray-100 underline hover:text-indigo-600'>
		  Here are some of my recent projects
		  </a>
		</center>
      </div>
	  </center>
    </div>
  );
};

export default Skills;
