import React from 'react'
import ProjectsCards from '../components/ProjectsCards'

const Projects = () => {
    return (
        <div className='p-5 mx-auto'>
            <div className='text-center'>
                <div className="mb-8 space-y-2">
                    <h3 className="text-sm font-semibold tracking-wide text-blue-400 uppercase">
                        PROJECTS
                    </h3>
                    <h2 className="text-3xl font-bold text-gray-200">
                        My Recent Work
                    </h2>
                </div>
            </div>
            <div className='mt-5 w-full'>
                <ProjectsCards />
            </div>
        </div>
    )
}

export default Projects