import React from 'react';

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-signature text-pink-400 inline border-b-4 border-gray-500 capitalize'>About Me</p>
        </div>
        <p className='text-xl leading-relaxed'>
          Hey there! 👋 I'm currently pursuing  final-year Computer Science Engineering student at RMK College of Engineering and Technology, maintaining a stellar CGPA of 8.4+. My journey in the world of technology has been nothing short of thrilling.

          I'm not just a coder; I'm a storyteller in the digital realm. My passion lies in crafting immersive web experiences that captivate users. Whether it's elegant designs or solving intricate problems, I approach every challenge with creativity and innovation.
          <p className=' text-green-100'>
          I'am currently working in a company called WEBZENITH SOLUTION based upon my skills the... hired me as a developer and am having great exprience with them as a developer in group of working am learning great skills with them and i have learned lot of things and gained knowladge
          and they introduce new tech stack and am currently exploring and gainging exprienece with pleasent knowladge with them, and am happy to work with them

          </p>
          
        
          Beyond the screen, I'm an advocate for continuous learning and personal growth. I believe in the power of collaboration, curiosity, and resilience.

          Let's build something incredible together! 💻✨
        </p>
        <div className='flex font-signature text-2xl mt-44'>
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

