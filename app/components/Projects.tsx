import React from 'react';
import ProjectItem from './ProjectItem';

const projectData = [
  {
    title: 'Caress: Mental Health App',
    backgroundImg: '/caress.png',
    projectUrl: '/caress',
    tech: 'Next.js, Tailwind, Firebase, Pytorch',
  },
  {
    title: 'GSS.io: Garbage Management System',
    backgroundImg: '/gss.png',
    projectUrl: '/gss',
    tech: 'Flutter Firebase',
  },
  {
    title: 'Youth Bussiness League Website',
    backgroundImg: '/ybl.png',
    projectUrl: '/ybl',
    tech: 'Next.js, Tailwind',
  },
  {
    title: '3D Model of our Solar System',
    backgroundImg: '/solar-system.png',
    projectUrl: '/solar-system',
    tech: 'Three.js',
  },
];

const Projects = () => {
  return (
	<section className='flex min-h-[100vh] items-center'>
    <div id='projects' className='w-full relative z-5 '>
		<center>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4 text-gray-100'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
	  </center>
    </div>
	</section>
  );
};

export default Projects;
