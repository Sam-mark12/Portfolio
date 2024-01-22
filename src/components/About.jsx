import React from 'react';

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-signature text-pink-400 inline border-b-4 border-gray-500 capitalize'>About Me</p>
        </div>
        <p className='text-xl leading-relaxed'>
          Hey there! 👋 I'm a third-year Computer Science Engineering student at RMK College of Engineering and Technology, maintaining a stellar CGPA of 8.4+. My journey in the world of technology has been nothing short of thrilling.

          I'm not just a coder; I'm a storyteller in the digital realm. My passion lies in crafting immersive web experiences that captivate users. Whether it's elegant designs or solving intricate problems, I approach every challenge with creativity and innovation.

          Beyond the screen, I'm an advocate for continuous learning and personal growth. I believe in the power of collaboration, curiosity, and resilience.

          Let's build something incredible together! 💻✨
        </p>
        <div className='flex font-signature text-2xl'>
          Education Journey:
        </div>
        <ul className='list-disc ml-8 mt-4'>
          <li>
            <strong>Higher Education:</strong> Adhiyaman Matriculation of Higher Secondary School (90%)
          </li>
          <li>
            <strong>Secondary Education:</strong> TAW Matriculation Higher Secondary School (80%)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

