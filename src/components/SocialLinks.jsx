import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { VscCode } from "react-icons/vsc"

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohammed-sameer-s-7572ab253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/Sam-mark12",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:sameer6.mumtaj@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          SKILL RACK
          <VscCode size={20} />
        </>
      ),
      href: "https://www.skillrack.com/faces/resume.xhtml?id=352487&key=cefa809b771b45af9286ade86bd6f36d30f525d2",
      style: "rounded-tr-md",
      download: true,
    },
  ];

  return (
    <div className='lg:flex flex-col left-0 top-[35%] fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style} bg-transparent bg-black md:bg-black`} // Modified class names
          >
            <a
              href={href}
              className='flex justify-between items-center text-white w-full h-full px-4 bg-transparent bg-black hover:bg-gray-800 rounded-md md:bg-black' // Modified class names
              download={download}
              target='_blank'
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;


