import React from 'react'
import {  AiOutlineMail } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center  '>
            <div className='max-w-[1000px] w-full h-full mx-auto p-2 flex justify-center items-center '>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-700'>let's build something together</p>
                    <h1 className='py-2 text-gray-700'>
                        Hi,I'm <span className='text-[#5651e5] font-["Courgette"]'>Amine Menhane</span>

                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Full Stack Developer
                    </h1>
                    <p className='text-lg tracking-widest py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a full stack developer from Algeria, I'm specializing in building (Web, desktop and mobile ) exceptional digital experiences.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Main
