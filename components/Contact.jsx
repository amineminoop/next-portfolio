import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    async function handleOnSubmit(e){
        e.preventDefault();
        const formData={};
        Array.from(e.currentTarget.elements).forEach(field =>{
            if(!field.name) return;
            formData[field.name] = field.value;
        })
        fetch('/api/mail',{
            method : 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData)
    }
    return (
        <div id='contact' className='w-full lg:h-screen p-2'>
            <div className='maw-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Contact</p>
                <h2 className='py-4'> Let's Talk</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="../assets/contact.jpg" alt="" />
                            </div>
                            <div>
                                <h2 className='py-2 text-[#5651e5] font-["Courgette"]'>
                                    Amine Menhane
                                </h2>
                                <p>Full-stack developer </p>
                                <p className='py-4'>I am available for freelance or full-time position. contact me and let's talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
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
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form method='post' onSubmit={handleOnSubmit} data-netlify="true">
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input type="text" name="name"  className='border-2 rounded-lg p-3 flex border-gray-300 ' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input type="text" name="phone" id="" className='border-2 rounded-lg p-3 flex border-gray-300 ' />
                                    </div>

                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input type="email" name="email" id="" className='border-2 rounded-lg p-3 flex border-gray-300 ' />

                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input type="text" name="subject" id="" className='border-2 rounded-lg p-3 flex border-gray-300 ' />

                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' name='message' rows={10}></textarea>
                                </div>

                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>

                            </form>

                        </div>
                    </div>
                </div>

                <div className='flex justify-center py-12 '>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5] '/>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Contact