import React from 'react';
import html from '../assets/html.png';
import c from '../assets/c.png';
import expressjs from '../assets/expressjs.png';
import github from '../assets/github.png';
import javascript from '../assets/javascript.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import mongodb from "../assets/mongodb.png";

const Exp = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: c,
      title: 'C prog',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: expressjs,
      title: 'EXPRESS JS',
      style: 'shadow-white',
    },
    {
      id: 4,
      src: github,
      title: 'GIT HUB',
      style: 'shadow-gray-800',
    },
    {
      id: 5,
      src: javascript,
      title: 'JAVA SCRIPT',
      style: 'shadow-yellow-500',
    },
    {
      id: 6,
      src: nodejs,
      title: 'NODE JS',
      style: 'shadow-green-200',
    },
    {
      id: 7,
      src: react,
      title: 'REACT',
      style: 'shadow-blue-900',
    },
    {
      id: 8,
      src: tailwind,
      title: 'TAILWIND CSS',
      style: 'shadow-cyan-300',
    },
    {
      id: 9,
      src: mongodb,
      title: 'MONGO DB',
      style: 'shadow-green-400',
    },
  ];

  return (
    <div name='Skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen md:h-screen s'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-signature border-b-4 border-gray-500 p-2 inline-block mt-56 text-pink-400'>Skills</p>
          <p className='py-6 font-extrabold'>There are technologies I worked with</p>
        </div>
        <div className='grid w-full grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0'>
          {skills.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} className='w-20 mx-auto' alt={title} />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;

// export default Exp










