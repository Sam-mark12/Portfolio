import React from 'react';

const Footer = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-800 to-black  text-white text-center py-4">
      <p>&copy; COPYRIGHT {new Date().getFullYear()} <span className=' text-pink-300 font-signature'> MOHAMMED SAMEER S</span>. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
