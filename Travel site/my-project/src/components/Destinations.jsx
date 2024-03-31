import React from 'react'
import main from '../assets/main.jpg';
import keywest from '../assets/keywest.jpg';
import one from '../assets/ph1.jpg';
import two from '../assets/ph2.jpg';
import three from '../assets/ph3.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-2 text-2xl' >On the India's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={main} alt="/" />
            <img className='w-full h-full object-cover' src={one} alt="/" />
            <img className='w-full h-full object-cover' src={keywest} alt="/" />
            <img className='w-full h-full object-cover' src={two} alt="/" />
            <img className='w-full h-full object-cover' src={three} alt="/" />
        </div>
    </div>
  )
}

export default Destinations