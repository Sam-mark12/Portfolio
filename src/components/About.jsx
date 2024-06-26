import React from 'react';

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white sm:text-sm md:text-lg lg:text-lg py-16'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-signature text-pink-400 inline border-b-4 border-gray-500 capitalize'>About Me</p>
        </div>
        <p className='text-xl leading-relaxed'>
          Hey there! 👋 I'm currently pursuing final-year Computer Science Engineering student at RMK College of Engineering and Technology, maintaining a stellar CGPA of 8.4+. My journey in the world of technology has been nothing short of thrilling.
        </p>
        <p className='text-xl leading-relaxed mt-4'>
          I'm not just a coder; I'm a storyteller in the digital realm. My passion lies in crafting immersive web experiences that captivate users. Whether it's elegant designs or solving intricate problems, I approach every challenge with creativity and innovation.
        </p>
        <p className='text-xl leading-relaxed mt-4 text-green-100'>
          I am currently working in a company called WEBZENITH SOLUTION. Based on my skills, they hired me as a developer, and I am having a great experience with them. Working in a group, I am learning great skills and have gained a lot of knowledge. They introduced new tech stacks, and I am currently exploring and gaining experience with them, and I am happy to work with them.
        </p>
        <p className='text-xl leading-relaxed mt-4'>
          Beyond the screen, I'm an advocate for continuous learning and personal growth. I believe in the power of collaboration, curiosity, and resilience.
        </p>
        <p className='text-xl leading-relaxed mt-4'>
          Let's build something incredible together! 💻✨
        </p>
      </div>
    </div>
  );
};

export default About;

