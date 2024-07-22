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
        name: 'Simless.App', stacks: ['HTML', 'CSS', 'BOOTSTRAP', 'JS'], livePreview: 'https://il.simless.app/En.html', image: SimlessImage, icon: <FiGithub />
    },
    {
        name: 'EasyMark', stacks: ['ReactJS', 'Redux', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'], github: 'https://github.com/yuvalleberstein21/appointmentspro', image: EasyMark
    },
    {
        name: 'Vacation Management', stacks: ['ReactJS', 'NodeJS', 'Express', 'BOOTSTRAP', 'MySQL'], github: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/vacationsProject', image: Vacations
    },
    {
        name: 'Portfolio', stacks: ['ReactJS', 'Tailwind'], github: 'https://github.com/yuvalleberstein21/portfolio2024', livePreview: 'daf', image: Portfolio
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
    }, []);

    return (
        <>
            {projectData.map((project, index) => (
                <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="flex flex-col mt-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-[#1e293b] p-5 md:p-10"
                >
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="object-cover w-full rounded-t-lg h-48 md:h-auto md:min-w-52 rounded-lg md:rounded-none md:rounded-s-lg"
                            src={project.image}
                            alt={project.name}
                        />
                    </div>
                    <div className="flex flex-col text-center justify-between p-1 md:p-2 mx-auto w-full leading-normal h-full">
                        <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {project.name}
                        </h5>
                        <div className="flex flex-wrap gap-1 text-center mt-3 justify-center">
                            {project.stacks.map((stack, stackIndex) => (
                                <button
                                    key={stackIndex}
                                    className="p-1 text-xs md:text-sm min-w-[5rem] md:min-w-20 text-white bg-slate-600 rounded-full"
                                >
                                    {stack}
                                </button>
                            ))}
                        </div>
                        <div className="text-center flex flex-wrap justify-center gap-1 mt-5">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 md:w-1/2 w-full border py-2 border-gray-200 text-sm md:text-md rounded-full text-gray-200 hover:bg-gray-700"
                                >
                                    <i className="fa-brands fa-github m-1"></i>
                                    GitHub Repository
                                </a>
                            )}
                            {project.livePreview && (
                                <a
                                    href={project.livePreview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 md:w-1/2 w-full text-center items-center py-2 border border-gray-200 text-sm md:text-md rounded-full text-gray-200 hover:bg-gray-700"
                                >
                                    Live preview
                                    <i className="fa-solid fa-arrow-right m-1"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectsCards