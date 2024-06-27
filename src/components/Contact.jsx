import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'  data-aos="fade-down" data-aos-duration="1000">
            <div className=' pb-8 mt-56'>
                <p className=' text-4xl font-signature inline border-b-4 border-gray-500 capitalize text-pink-400 '>contact</p>
                <p className=' py-6 font-extrabold'>
                    Submit the form below to get in touch with me
                </p>
            </div>
            <div className=' flex justify-center items-center'>
                <form action='https://getform.io/f/c1ce16b3-cbb6-493f-ae83-6894e6ca5085' method='POST' className=' flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your Name' className=' my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <input type='text' name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                   <textarea name="message" row="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                   <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact