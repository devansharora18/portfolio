import Link from 'next/link';
import React from 'react';

interface ProjectItemProps {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
}: ProjectItemProps) => {
  return (
    <div className='relative p-0 m-5
     flex items-center justify-center h-auto w-full shadow-xl bg-gray-600 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
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
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
