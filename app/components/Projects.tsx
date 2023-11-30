import React from 'react';
import ProjectItem from './ProjectItem';

const projectData = [
  {
    title: 'Caress: Mental Health App',
    backgroundImg: '/caress.png',
    code: 'https://github.com/ART3MISTICAL/caress',
	demo: 'https://caress-app.vercel.app',
    tech: 'Next.js, Tailwind, Firebase, Pytorch',
  },
  {
    title: 'GSS.io: Garbage Management System',
    backgroundImg: '/gss.png',
    code: 'https://github.com/ART3MISTICAL/Gss.io',
	demo: 'https://github.com/ART3MISTICAL/Gss.io/releases/tag/v0.1.0',
    tech: 'Flutter Firebase',
  },
  {
    title: 'Color Palette',
    backgroundImg: '/color_palette.png',
    code: 'https://github.com/ART3MISTICAL/color_palette',
	demo: 'https://github.com/ART3MISTICAL/color-palette/releases/tag/v0.2.0',
    tech: 'Python',
  },
  {
    title: 'Youth Business League Website',
    backgroundImg: '/ybl.png',
    code: 'https://github.com/ART3MISTICAL/youth-business-league-website',
	demo: 'https://youth-business-league-website.vercel.app/',
    tech: 'Next.js, Tailwind',
  },
  {
    title: '3D Model of our Solar System',
    backgroundImg: '/solar-system.png',
    code: 'https://github.com/ART3MISTICAL/3d-solarsystem-model',
	demo: 'https://solarsystem-model.vercel.app/',
    tech: 'Three.js',
  },
  {
    title: 'Hover Carousel (npm package)',
    backgroundImg: '/hc.png',
    code: 'https://github.com/ART3MISTICAL/hover-carousel',
	demo: 'https://hover-carousel-demo.vercel.app/',
    tech: 'React.js',
  },
  
];

const Projects = () => {
  return (
	<section className='flex min-h-[100vh] items-center'>
    <div id='projects' className='w-full relative z-5 '>
		<center>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-indigo-600'>
          Projects
        </p>
        <h2 className='py-4 text-gray-100'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              code = {project.code}
			  demo = {project.demo}
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
