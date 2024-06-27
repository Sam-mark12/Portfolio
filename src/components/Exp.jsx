import React from 'react';
import html from '../assets/html.png';
import c from '../assets/c.png';
import expressjs from '../assets/expressjs.png';
import github from '../assets/github.png';
import javascript from '../assets/javascript.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import mongodb from '../assets/mongodb.png';
import drizzle from "../assets/drizzle.png"
import ts from "../assets/ts.png"
import docker from "../assets/docker.png"
import next from "../assets/NEXT.png"
import na from "../assets/na.png"
import sb from "../assets/su.png"
import M from "../assets/MERN.jpeg" 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


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
      title: 'C Programming',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: expressjs,
      title: 'Express.js',
      style: 'shadow-white',
    },
    {
      id: 4,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-800',
    },
    {
      id: 5,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 6,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-green-200',
    },
    {
      id: 7,
      src: react,
      title: 'React',
      style: 'shadow-blue-300',
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-cyan-300',
    },
    {
      id: 9,
      src: docker,
      title: 'DOCKER',
      style: 'shadow-blue-400',
    },
    {
      id: 10,
      src: drizzle,
      title: 'DRIZZLE',
      style: 'shadow-cyan-800',
    },
    {
      id: 11,
      src: ts ,
      title: 'TYPE SCRIPT',
      style: 'shadow-blue-900',
    },
    {
      id: 12,
      src: next,
      title: 'NEXT JS',
      style: 'shadow-white',
    },
    {
      id: 13,
      src: na ,
      title: 'AUTH.TS',
      style: 'shadow-pink-500',
    },
    {
      id: 13,
      src: sb ,
      title: 'SUPABASE',
      style: 'shadow-green-500',
    },
  

  ];
  const stack = [
    {
      id:1,
      src:M,
      title: 'MERN STACK',
      style:'shadow-red-100'
      
    }

  ]

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-24'  >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='text-center mb-12'  data-aos="fade-up" data-aos-duration="1000">
          <p className='text-4xl font-signature border-b-4 border-gray-500 p-2 inline-block text-pink-400'>Skills</p>
          <p className='py-6 font-'>TECH STACK I have worked with</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0'  data-aos="fade-down" data-aos-duration="1000">
          {skills.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} className='w-20 mx-auto' alt={title} />
              <p className='mt-4 text-lg font-bold'>{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center mt-12'data-aos="fade-down" data-aos-duration="1000">
  <p className='text-2xl font-bold text-pink-400'>Tech Stack I Was Working With</p>
  <div className='flex justify-center items-center gap-4 mt-4'>
    {stack.map(({ id, src, title, style }) => (
      <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} className='w-20 mx-auto' alt={title} />
        <p className='mt-4 text-lg font-bold'>{title}</p>
      </div>
    ))}
  </div>
    </div>
    </div>
  );
};

export default Exp;
