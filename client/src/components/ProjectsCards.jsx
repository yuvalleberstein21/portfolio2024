import React, { useEffect } from 'react';
import SimlessImage from '../assets/simless-5fde9192.webp';
import EasyMark from '../assets/Macbook-Air-localhost.webp';
import Vacations from '../assets/vacations1-214e0e07.webp';
import Portfolio from '../assets/portfolio.webp';
import { FiGithub } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = [
    {
        name: 'Simless.App', stacks: ['HTML', 'CSS', 'BOOTSTRAP', 'JS'], description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos consequatur', image: SimlessImage, icon: <FiGithub />
    },
    {
        name: 'EasyMark', stacks: ['ReactJS', 'Redux', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'], description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos consequatur', image: EasyMark
    },
    {
        name: 'Vacation Management', stacks: ['ReactJS', 'NodeJS', 'Express', 'BOOTSTRAP', 'MySQL'], description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos consequatur', image: Vacations
    },
    {
        name: 'Portfolio', stacks: ['ReactJS', 'Tailwind'], description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos consequatur', image: Portfolio
    }
]



const ProjectsCards = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <>
            {projectData.map((project, index) => (
                <div data-aos="zoom-in" key={index} className="flex flex-col mt-2 items-center min-w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-[#1e293b] p-10">
                    <div className='w-1/2 flex justify-center'>
                        <img className="object-cover w-full rounded-t-lg h-64 min-w-56 md:h-auto md:min-w-52 rounded-lg md:rounded-none md:rounded-s-lg" src={project.image} alt="SimlessWEB" />
                    </div>
                    <div className="flex flex-col text-center justify-between p-1 md:p-4 mx-auto w-full leading-normal min-h-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                        <div className='flex flex-wrap gap-1 text-center mt-3 justify-center'>
                            {project.stacks.map((stack, stackIndex) => (
                                <button key={stackIndex} className='p-1 text-sm min-w-20 text-white bg-slate-600 rounded-full'>
                                    {stack}
                                </button>
                            ))}
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">{project.description}</p>
                        <div className='text-center flex justify-between gap-1 mt-5'>
                            <button className='p-2 border border-gray-200 text-md rounded-full text-gray-200 w-full hover:bg-gray-700'>
                                <i className="fa-brands fa-github m-1"></i>
                                GitHub Repository
                            </button>
                            <button className='p-2 border border-gray-200 text-md rounded-full text-gray-200 w-full hover:bg-gray-700'>
                                Live preview
                                <i className="fa-solid fa-arrow-right m-1"></i>
                            </button>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectsCards