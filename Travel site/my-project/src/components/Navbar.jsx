import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
  return (
    <div className='flex justify-between w-full items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'} >BEACHES</h1>
        </div>
        <ul className='hidden md:flex mr-10 '>
            <li className='menu'>Home</li>
            <li className='menu'>Destinations</li>
            <li className='menu'>Travel</li>
            <li className='menu'>Views</li>
            <li className='menu'>Book</li>
        </ul>
        <div className='hidden mr-6 cursor-pointer md:flex hover:underline'>
            <BiSearch className='mr-4' size={20} />
            <BsPerson size={20} />
        </div>
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>
        <div onClick={handleNav} className={ nav ? 'absolute left-0 top-0 text-black w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
            <h1>BEACHES</h1>
            <li className='border-b-2 border-slate-300/90 hover:underline'>Home</li>
            <li className='border-b-2 border-slate-300/90 hover:underline'>Destinations</li>
            <li className='border-b-2 border-slate-300/90 hover:underline'>Travel</li>
            <li className='border-b-2 border-slate-300/90 hover:underline'>Views</li>
            <li className='border-b-2 border-slate-300/90 hover:underline'>Book</li>
            <div className='flex flex-col'>
                <button className='mr-6 text-xl my-1 mt-3 hover:underline'>Search</button>
                <button className='mr-6 text-xl my-1 hover:underline'>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className ='icon' />
                <FaTwitter className ='icon' />
                <FaInstagram className ='icon' />
                <FaYoutube className ='icon' />
                <FaPinterest className ='icon' />
            </div>
        </ul>
        </div>
    </div>
  )
}

export default Navbar