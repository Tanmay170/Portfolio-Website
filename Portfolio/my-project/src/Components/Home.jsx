import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ReactTyped } from "react-typed";
import { Link } from 'react-scroll';

const Home = () => { 
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name='home' className='w-full h-screen '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Tanmay Bansal
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a
          <ReactTyped className='sm:text-7xl text-4xl font-bold md:pl-4 pl-2'
                strings={['Web-Developer.', 'Coder.']} 
                typeSpeed= {120} 
                backSpeed={140} 
                loop  
                />
        </h2>
        <p className='text-[#8892b0] text-xl py-4 max-w-[700px]'>
          I’m a Web-developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive frontend web applications and looking forward to make
          myself as a Full Stack Developer.
        </p>
        <div>
          <button className='text-white text-xl group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'><Link onClick={handleClick} to='work' smooth={true} duration={500}>
          View Work  
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
