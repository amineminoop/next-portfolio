import React from 'react'

const Skils = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-4 md:py-32'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skils</p>
                <h2 className='py-4 md:py-2'>What I Can Do</h2>
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8 '>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300  md:w-[75%] md:ml-[12.5%] sm:w-[75%] sm:ml-[12.5%] '>
                        <div className='justify-center items-center'>
                            <h3 className='py-4 text-center'>Web</h3>
                            {/* <div className='hidden md:flex m-auto'>
                                <img className='rounded-xl' src="https://technofaq.org/wp-content/uploads/2017/05/web-developer.jpg" alt="/" />
                            </div> */}
                            <p className='lg:py-2 text-gray-900'>I will build a nice and lengend web application with : </p>
                            <p className='lg:py-2 text-gray-600'>👉 Html + Css</p>
                            
                            <p className='py-2 text-gray-600'>👉 JavaScript</p>
                            <p className='py-2 text-gray-600'>👉 Php</p>
                            <p className='py-2 text-gray-600'>👉 Nodejs</p>

                           
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 md:w-[75%] md:ml-[12.5%] sm:w-[75%] sm:ml-[12.5%] '>
                        <div className='justify-center items-center'>
                            <h3 className='py-4 text-center'>Desktop</h3>
                            <p className='py-2 text-gray-900'>I will build a nice and lengend Desktop application with : </p>
                            <p className='py-2 text-gray-600'>👉 Java</p>
                            <p className='py-2 text-gray-600'>👉 C</p>
                            <p className='py-2 text-gray-600'>👉 Python</p>
                            <p className='py-2 text-gray-600'>👉 Delphi + Pascal</p>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 md:w-[75%] md:ml-[12.5%] sm:w-[75%] sm:ml-[12.5%]'>


                        <div className='justify-center items-center'>

                            <h3 className='py-4 text-center'>Mobile</h3>
                            <p className='py-2 text-gray-900'>I will build a nice and lengend Mobile application with : </p>
                            <p className='py-2 text-gray-600'>👉 Kotlin</p>
                            <p className='py-2 text-gray-600'>👉 React Native</p>
                            <p className='py-2 text-gray-600'>👉 Fluter</p>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skils