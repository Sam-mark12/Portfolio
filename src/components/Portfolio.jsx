import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import disney from '../assets/disney.png';
import text from '../assets/text.png';
import todo from '../assets/todo.png';
import typewriter from '../assets/typewritter.png';
import weather from "../assets/weather.png";
import jobportal from "../assets/jobportal.png";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const portfolios = [
    { id: 1, src: text, add: "Developed using React and TailwindCSS with dynamic child component functionality." },
    { id: 2, src: disney, add: "A Disney+ clone leveraging React and TailwindCSS for a seamless user experience." },
    { id: 3, src: typewriter, add: "Typing speed calculator implemented with HTML, TailwindCSS, and JavaScript." },
    { id: 4, src: todo, add: "OAuth integration with Google, built with Node.js and Express.js for authentication." },
    { id: 5, src: weather, add: "Weather application utilizing HTML, CSS, and JavaScript with API integration." },
    { id: 6, src: jobportal, add: "Job portal developed with React and TailwindCSS, featuring Firebase integration." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <div id="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-16'>
      <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p className='text-4xl font-signature border-b-4 border-gray-500 p-2 inline-block text-pink-400'>Portfolio</p>
          <p className='py-6 font-signature text-3xl'>Explore some of my professional projects below</p>
        </div>
        <div className="px-2">
          <Slider {...settings}>
            {portfolios.map(({ id, src, add }) => (
              <div key={id} className='relative group'>
                <div className='text-center p-4 font-signature text-4xl text-pink-600'>
                  <p>{add}</p>
                </div>
                <img
                  src={src}
                  alt=''
                  className='md:w-4/5 lg:w-1/2 rounded-lg duration-200 hover:scale-105 mx-auto'
                  onMouseEnter={() => setHoveredProject(id)}
                  onMouseLeave={() => setHoveredProject(null)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
