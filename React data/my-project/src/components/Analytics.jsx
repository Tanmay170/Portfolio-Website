import React from 'react'
import laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full h-[620px] bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src= {laptop} alt="Error" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ad natus. Quasi aut voluptatibus similique nemo fuga cumque perferendis deleniti laboriosam saepe? Minus veritatis maxime alias, officia deleniti architecto animi!</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics