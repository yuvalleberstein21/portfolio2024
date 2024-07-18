import React from 'react'
import ProjectsCards from '../components/ProjectsCards'

const Projects = () => {
    return (
        <div className='p-5 mx-auto'>
            <div className='text-center'>
                <h3 className='text-md text-gray-400'>PROJECTS</h3>
                <h2 className='text-xl text-gray-200'>Check Out Some of<br />
                </h2>
                <div className='ml-4 text-xl text-gray-200'>My Recent Work</div>
            </div>
            <div className='mt-5 w-full'>
                <ProjectsCards />
            </div>
        </div>
    )
}

export default Projects