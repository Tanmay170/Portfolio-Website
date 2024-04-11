import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Tanmay Bansal, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className='text-xl'>
                        <p>Passionate about the latest technology, coding, and contributing to event management through volunteering,is a dynamic individual with a multifaceted skill set and a drive for innovation. With a deep-seated interest in emerging technologies, they constantly seek to explore new avenues for development and implementation. Their proficiency in coding languages allows them to translate ideas into functional solutions, whether it's creating applications, websites, or optimizing processes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;