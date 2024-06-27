import React, { useState, useEffect } from 'react';
import photo from '../assets/photo.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
  const [displayText, setDisplayText] = useState('MERN STACK');
  const [isErasing, setIsErasing] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isErasing) {
      intervalId = setInterval(() => {
        setDisplayText((currentText) => currentText.slice(0, -1));
      }, 100);
    } else {
      intervalId = setInterval(() => {
        const fullStackText = 'TECH STACK';
        setDisplayText((currentText) => fullStackText.slice(0, currentText.length + 1));
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isErasing]);

  useEffect(() => {
    if (displayText === '') {
      setIsErasing(false);
    } else if (displayText === 'TECH STACK') {
      setTimeout(() => setIsErasing(true), 2000); 
    }
  }, [displayText]);

  return (
    <div name="Home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white' data-aos="fade-up" data-aos-duration="1000">
      <div className='max-w-screen-lg mx-auto flex items-center justify-center h-full'>
        <div className='text-center mt-6'>
          <h2 className='text-4xl font-signature font-semibold mb-4 text-pink-400'>I'm a Full Stack Developer</h2>
          <p>
            Basically, I am Enthusiastic in exploring all <span className='text-red-500 font-bold inline underline'>{displayText}</span>
          </p>
          <div className='flex flex-row items-center gap-x-9 gap-y-8 justify-center'>
            <Link to="Portfolio" smooth duration={500} className="group text-white w-fit py-3 px-6 my-2 rounded-md flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className='ml-2 group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-2' />
              </span>
            </Link>
          </div>
        </div>
        <div className='w-1/2 flex justify-center'  data-aos="fade-left" data-aos-duration="1000">
          <img src={photo} alt='Developer' className='w-80 h-80 rounded-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Home;