import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title='twitch' BackgroudImg='../assets/projects/twitch.jpg' url='/twitch'/>
                    <ProjectItem title='netflix' BackgroudImg='../assets/projects/netflix.jpg' url='/netflix'/>
                    <ProjectItem title='crypto' BackgroudImg='../assets/projects/crypto.jpg' url='/crypto'/>
                    <ProjectItem title='property' BackgroudImg='../assets/projects/property.jpg' url='/property'/>

                </div>

            </div>

        </div>
    )
}

export default Projects