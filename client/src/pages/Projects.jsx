import ProjectsCards from '../components/ProjectsCards'

const Projects = () => {
    return (
        <div className='p-5 mx-auto'>
            <div className='text-center'>
                <div className="mb-8 space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
                        My Projects
                    </h3>
                </div>
            </div>
            <div className='mt-5 w-full'>
                <ProjectsCards />
            </div>
        </div>
    )
}

export default Projects