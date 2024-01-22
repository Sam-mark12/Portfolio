import React, { useState } from 'react';
import disney from '../assets/disney.png';
import text from '../assets/text.png';
import todo from '../assets/todo.png';
import typewritter from '../assets/typewritter.png';
import weather from "../assets/weather.png";
import jobportal from "../assets/jobportal.png";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: text,
      add:"Its basically using React and tailwindcss with appending functionality in child"
    },
    {
      id: 2,
      src: disney,
      add:"Its a movie clone of Disneyplus and using react and tailwind"
    },
    {
      id: 3,
      src: typewritter,
      add:"Its for calculating typing speed using Html Tailwindcss and js"
    },
    {
      id: 4,
      src: todo,
      add:"Its basically usinng Oauth configraation google and also its usinf Node and Expressjs"
    },
    {
        id:5,
        src: weather,
        add:"Its just basic using html css and javaScript using API key"
    },
    {
        id:6,
        src:jobportal,
        add:"Its just using React and tailwind css with using FIREBASE"
    }
  ];

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-signature inline border-b-4 border-gray-500 text-pink-400'>Portfolio</p>
          <p className='py-6 font-bold'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 rounded-lg'>
          {portfolios.map(({ id, src,add }) => (
            <div key={id} className='relative group'>
              <div
                className={`overlay absolute inset-0 bg-black text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ${
                  hoveredProject === id ? 'opacity-100' : ''
                }`}
              >
                <div className='text-center text-4xl p-4 font-signature'>
                  <p>{add}</p>
                </div>
              </div>
              <img
                src={src}
                alt=''
                className='w-fit h-fit rounded-lg duration-200 hover:scale-105'
                onMouseEnter={() => setHoveredProject(id)}
                onMouseLeave={() => setHoveredProject(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

