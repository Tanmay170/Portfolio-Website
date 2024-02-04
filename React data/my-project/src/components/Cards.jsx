import React from 'react'
import single from '../assets/single.jpg'
import double from '../assets/double.jpg'
import triple from '../assets/triple.jpg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="Error" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-18 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="Error" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$289</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Upto 5 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-18 text-[#00df9a]'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="Error" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold'>$449</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Upto 10 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-18 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards