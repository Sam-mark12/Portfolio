import React from 'react';
import { FaAward, FaUserGraduate } from 'react-icons/fa';
import { MdWork, MdEmail } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full' data-aos="fade-left">
        <div className='pb-8' data-aos="fade-left" data-aos-duration="1000" >
          <p className='text-5xl font-bold text-pink-400 inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p className='text-lg'>
              Welcome! I am a dedicated final-year Computer Science Engineering student at RMK College of Engineering and Technology, boasting a CGPA of 8.4+. My zeal for technology propels me to craft engaging web experiences that captivate and inspire.
            </p>
            <p className='text-lg mt-4 text-green-700'>
              At present, I am honing my development skills at WEBZENITH SOLUTION, immersing myself in cutting-edge technologies and collaborative projects. This role is pivotal in my professional development, providing me with invaluable insights and practical experience.
            </p>
            <p className='text-lg mt-4'>
              I am fervently committed to lifelong learning and applying technology to address real-world challenges. I welcome the opportunity to connect and collaborate on innovative projects.
            </p>
          </div>
          <div className='flex flex-col justify-center' data-aos="fade-right" data-aos-duration="1000">
            <div className='flex items-center text-lg mb-4'>
              <FaUserGraduate className='mr-4' /> <span>Final-Year CS Engineering Student</span>
            </div>
            <div className='flex items-center text-lg mb-4'>
              <MdWork className='mr-4' /> <span>Developer at WEBZENITH SOLUTION</span>
            </div>
            <div className='flex items-center text-lg mb-4'>
              <VscFolderLibrary className='mr-4' /> <span>Projects in Web Development and more</span>
            </div>
            <div className='flex items-center text-lg mb-4'>
              <MdEmail className='mr-4' /> <span>Contact me for collaborations</span>
            </div>
          </div>
        </div>
        <div className='text-center mt-8'>
          <Link to='Contact' className='text-lg font-medium py-2 px-4 rounded-lg bg-pink-400 text-gray-800 hover:bg-pink-300 transition duration-300 ease-in-out'>
            Let's Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;