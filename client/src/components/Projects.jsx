import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import SimlessImage from '../assets/simless-5fde9192.webp';
import EasyMark from '../assets/Macbook-Air-localhost.webp';
import MyBooks from '../assets/myBooks.app.webp';
import Calculator from '../assets/calculator.webp';
import Vacations from '../assets/vacations1-214e0e07.webp';
import Portfolio from '../assets/portfolio.webp';
import myMeal from '../assets/mymeal.webp';
import PerehUnit from '../assets/pereh-unit.png';
import babyTracker from '../assets/babyTracker.webp'


const projectData = [
    {
        title: 'Pereh Unit',
        description: 'A fully responsive landing page for the Pereh unit organization, The website showcases the unit`s mission, values, and contact form to connect with visitors.',
        tags: ['ReactJS', 'Tailwind'],
        livePreview: 'https://www.pereh.org.il',
        image: PerehUnit
    },
    {
        title: 'EasyMark',
        description: 'EasyMark is a full-stack appointment management platform, It allows users to register/login, create a business profile, set working hours, manage appointments, and allow clients to book appointments seamlessly.',
        tags: ['ReactJS', 'Redux', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'],
        github: 'https://github.com/yuvalleberstein21/appointmentspro',
        image: EasyMark
    },
    {
        title: 'My Meal.App',
        description: 'A web app for a clinical dietitian with user authentication food and category browsing, product filtering ,a calorie calculator on the user page, a personal calorie calculator, weight tracking and an admin dashboard with full CRUD functionality',
        tags: ['ReactJS', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'],
        livePreview: 'https://www.mymeal.co.il',
        image: myMeal
    },
    {
        title: 'Baby Memory',
        description: 'A React-based application that helps parents document their baby`s growth with monthly photo uploads, multi-baby support, and automated reminders. Each user can manage multiple babies, view photos by month and manage photos by create ,edit ,delete',
        tags: ['ReactJS', 'TypeScript', 'Tailwind', 'Firebase (Authentication, Firestore)', 'Cloudinary'],
        livePreview: 'https://babymemories-5764d.web.app',
        image: babyTracker
    },
    {
        title: 'Simless.App',
        tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JS'],
        livePreview: 'https://il.simless.app/En.html',
        image: SimlessImage
    },
    {
        title: 'React Calculator',
        description: 'A simple and responsive calculator built with React. This app allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.',
        tags: ['ReactJS', 'CSS'],
        github: 'https://github.com/yuvalleberstein21/calculator-react/tree/main/Desktop/calculator-react',
        image: Calculator
    },
    {
        title: 'My Books',
        description: 'A fullstack web application that allows users to register, log in, and manage a personalized collection of saved books.',
        tags: ['ReactJS', 'Redux', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'],
        github: 'https://github.com/yuvalleberstein21/mybooks',
        image: MyBooks
    },
    {
        title: 'Vacation Management',
        tags: ['ReactJS', 'NodeJS', 'Express', 'BOOTSTRAP', 'MySQL'],
        github: 'https://github.com/yuvalleberstein21/My-Projects/tree/main/vacationsProject',
        image: Vacations
    },
    {
        title: 'Portfolio',
        tags: ['ReactJS', 'Tailwind'],
        github: 'https://github.com/yuvalleberstein21/portfolio2024',
        livePreview: '',
        image: Portfolio
    },
]
const Projects = () => {

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of projects showcasing my skills and expertise
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mx-auto">
                    {projectData.map((project, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden bg-card/30 backdrop-blur-sm border-border hover:border-primary/30 smooth-transition"
                        >
                            <div className="h-48 bg-gradient-to-br relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-center transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-3">
                                        {project.livePreview && (
                                            <a
                                                href={project.livePreview}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="bg-white/90 hover:bg-white text-black"
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    View
                                                </Button>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="bg-white/90 hover:bg-white text-black"
                                                >
                                                    <Github className="h-4 w-4 mr-2" />
                                                    Code
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;