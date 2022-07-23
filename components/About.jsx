import React from 'react'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>👉I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>👉I am a Full-stack developer - web, mobile, and desktop - 💪. I don't have phrases like "I can't!" 😑. <br />
                        Whenever you have an outlandish idea, not traditional and never applied before, or even a basic one, what you are only missing is me! I have no limitations nor borders, but what beyond all the usual! 🔥 <br />
                        👉 Solid experience in HTML5 and CSS3 with all their incredible capabilities. <br />
                        👉 Solid experience in Node, JavaScript, and TypeScript, libraries like JQuery, javascript like-languages like CoffeScript, and other considerable tools and frameworks. <br />
                        👉 Solid experience in the old development manners using PHP - 5, 7, or even 8 it doesn't matter -, with a moderate knowledge in Laravel 9. <br />
                        📜 And more: <br />
                        👉 Moderate experience in Android development - I'm familiar with Kotlin -. <br />
                        👉 Moderate experience in Python, Java, and C. <br />
                        And I'm all ears 👂, so don't hesitate to contact me!</p>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src="../assets/about.jpg" alt="/" />

                </div>
            </div>
        </div>
    )
}

export default About