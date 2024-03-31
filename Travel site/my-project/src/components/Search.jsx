import React from 'react'
import{RiCustomerService2Fill} from 'react-icons/ri'
import{MdOutlineTravelExplore} from 'react-icons/md'


const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16' >
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4' >Discover the allure of Indian Islands with our bespoke travel experiences. From the serene Andaman and Nicobar Islands to the tropical paradise of Lakshadweep, each destination offers a unique blend of natural beauty and cultural richness. Dive into crystal-clear waters teeming with vibrant marine life, explore lush rainforests, or simply unwind on pristine beaches. Indulge in luxurious stays at top-notch resorts, offering unmatched comfort and hospitality. Whether it's the eco-friendly havens of Andaman or the secluded retreats of Lakshadweep, our curated selection ensures an unforgettable escape. Immerse yourself in the magic of Indian Islands with our expertly crafted itineraries.</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4' >
                <div className='flex flex-col lg:flex-row items-center text-center' >
                    <button>
                        <RiCustomerService2Fill  size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2' >LEADING SERVICE</h3>
                        <p className='py-1'>All-INCLUSIVE COMPANY FOR 10 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center' >
                    <button>
                        <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className='py-2' >AUTOMATED BOOKINGS</h3>
                        <p className='py-1'>All-INCLUSIVE COMPANY FOR 10 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        <div>right</div>
    </div>
  )
}

export default Search