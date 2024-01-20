import React from 'react';
import disney from '../assets/disney.png';
import text from '../assets/text.png';
import todo from '../assets/todo.png';
import typewritter from '../assets/typewritter.png';
import weather from "../assets/weather.png"
import jobportal from "../assets/jobportal.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: text,
    },
    {
      id: 2,
      src: disney,
    },
    {
      id: 3,
      src: typewritter,
    },
    {
      id: 4,
      src: todo,
    },
    {
        id:5,
        src: weather
    },
    {
        id:6,
        src:jobportal
    }
  ];

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-signature inline border-b-4 border-gray-500'>Portfolio</p>
        <p className='py-6 font-bold'>Check out some of my work right here</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0'>
        {portfolios.map(({ id, src }) => (
          <div key={id} className='shadow-md shadow-gray-800 rounded-lg'>
            <img src={src} alt='' className='w-fit h-fit rounded-lg duration-200 hover:scale-105' />
            <div className='p-4 flex justify-center items-center'>
              <button className='w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
