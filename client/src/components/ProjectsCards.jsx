import { useEffect, useState } from 'react';
import SimlessImage from '../assets/simless-5fde9192.webp';
import EasyMark from '../assets/Macbook-Air-localhost.webp';
import MyBooks from '../assets/myBooks.app.webp';
import Calculator from '../assets/calculator.webp';
import Vacations from '../assets/vacations1-214e0e07.webp';
import Portfolio from '../assets/portfolio.webp';
import myMeal from '../assets/mymeal.webp';
import PerehUnit from '../assets/pereh-unit.png';
import { FiGithub } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = [
    {
        name: 'Pereh Unit', description: 'A fully responsive landing page for the Pereh unit organization, The website showcases the unit`s mission, values, and contact form to connect with visitors.', stacks: ['ReactJS', 'Tailwind'], livePreview: 'https://www.pereh.org.il', image: PerehUnit
    },
    {
        name: 'EasyMark', description: 'EasyMark is a full-stack appointment management platform, It allows users to register/login, create a business profile, set working hours, manage appointments, and allow clients to book appointments seamlessly.', stacks: ['ReactJS', 'Redux', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'], github: 'https://github.com/yuvalleberstein21/appointmentspro', image: EasyMark
    },
    {
        name: 'My Meal.App', description: 'A web app for a clinical dietitian with user authentication food and category browsing, product filtering ,a calorie calculator on the user page, a personal calorie calculator, weight tracking and an admin dashboard with full CRUD functionality', stacks: ['ReactJS', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'], livePreview: 'https://www.mymeal.co.il', image: myMeal
    },
    {
        name: 'Simless.App', stacks: ['HTML', 'CSS', 'BOOTSTRAP', 'JS'], livePreview: 'https://il.simless.app/En.html', image: SimlessImage
    },
    {
        name: 'React Calculator', description: 'A simple and responsive calculator built with React. This app allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.', stacks: ['ReactJS', 'CSS'], github: 'https://github.com/yuvalleberstein21/calculator-react/tree/main/Desktop/calculator-react', image: Calculator
    },
    {
        name: 'My Books', description: 'A fullstack web application that allows users to register, log in, and manage a personalized collection of saved books.', stacks: ['ReactJS', 'Redux', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'], github: 'https://github.com/yuvalleberstein21/mybooks', image: MyBooks
    },
    {
        name: 'Vacation Management', stacks: ['ReactJS', 'NodeJS', 'Express', 'BOOTSTRAP', 'MySQL'], github: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/vacationsProject', image: Vacations
    },
    {
        name: 'Portfolio', stacks: ['ReactJS', 'Tailwind'], github: 'https://github.com/yuvalleberstein21/portfolio2024', livePreview: '', image: Portfolio
    },

]


const ProjectsCards = () => {
    const [selectedProject, setSelectedProject] = useState(null);


    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });
        AOS.refresh();
    }, []);

    const handleCloseModal = () => setSelectedProject(null);

    return (
        <>
            {/* GRID של הכרטיסים */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className="flex flex-col bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <img src={project.image} alt={project.name} className="object-cover h-60 w-full" />
                        <div className="p-5 flex flex-col justify-between h-full">
                            <h3 className="text-xl font-bold text-white">{project.name}</h3>
                            <p className="text-sm text-gray-400 mt-2 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.stacks.map((stack, i) => (
                                    <span key={i} className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full">{stack}</span>
                                ))}
                            </div>

                            <div className="mt-5 flex gap-2 flex-wrap">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="flex-1 text-center bg-teal-500 hover:bg-teal-400text-sm text-white px-4 py-2 rounded-full transition">
                                        <FiGithub className="inline mr-1" /> GitHub
                                    </a>
                                )}
                                {project.livePreview && (
                                    <a href={project.livePreview} target="_blank" rel="noopener noreferrer"
                                        className="flex-1 text-center bg-teal-500 hover:bg-teal-400 text-sm text-white px-4 py-2 rounded-full transition">
                                        🌐 Live
                                    </a>
                                )}
                                <button onClick={() => setSelectedProject(project)}
                                    className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-sm text-white px-4 py-2 rounded-full transition">
                                    ℹ️ More Info
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="bg-gray-900 p-6 rounded-2xl max-w-lg w-full relative text-white shadow-xl">
                        <button onClick={handleCloseModal}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl">
                            ✖
                        </button>
                        <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
                        <img src={selectedProject.image} alt={selectedProject.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <p className="text-gray-300">{selectedProject.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {selectedProject.stacks.map((stack, i) => (
                                <span key={i} className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full">{stack}</span>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-3 flex-wrap justify-end">
                            {selectedProject.github && (
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded-full">
                                    <FiGithub className="inline mr-1" /> GitHub
                                </a>
                            )}
                            {selectedProject.livePreview && (
                                <a href={selectedProject.livePreview} target="_blank" rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-500 text-sm px-4 py-2 rounded-full">
                                    🌐 Live
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsCards