import Link from 'next/link';
import React from 'react';

interface ProjectItemProps {
  title: string;
  backgroundImg: string;
  tech: string;
  code: string;
  demo: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  tech,
  code,
  demo
}: ProjectItemProps) => {
  return (
    <div className='relative p-0 m-1
     flex items-center justify-center h-auto w-full shadow-xl bg-gray-100 rounded-xl group hover:bg-gradient-to-r from-indigo-600 to-indigo-400'>
      <div className="relative overflow-hidden rounded-xl group-hover:opacity-10 aspect-w-16 aspect-h-9">
        <img
          src={backgroundImg}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <div className="flex justify-center gap-2">
          <a href={code} className="flex-1 " target="_blank"
        rel="noopener noreferrer">
            <p className='text-center py-3 rounded-lg bg-white text-gray-800 font-bold text-lg cursor-pointer'>
              Code
            </p>
          </a>
          <a href={demo} className="flex-1" target="_blank"
        rel="noopener noreferrer">
            <p className='text-center py-3 rounded-lg bg-white text-gray-800 font-bold text-lg cursor-pointer'>
              Demo
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
