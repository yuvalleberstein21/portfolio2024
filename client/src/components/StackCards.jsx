import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";


const technologies = [
    { name: 'HTML', icon: <FaHtml5 size={30} /> },
    { name: 'CSS', icon: <FaCss3Alt size={30} /> },
    { name: 'React', icon: <FaReact size={30} /> },
    { name: 'Vite.js', icon: <TbBrandVite size={30} /> },
    { name: 'TypeScript', icon: <TbBrandTypescript size={30} /> },
    { name: 'Tailwind', icon: <TbBrandTailwind size={30} /> },
    { name: 'Bootstrap', icon: <TbBrandBootstrap size={30} /> },
    { name: 'Node.js', icon: <FaNodeJs size={30} /> },
    { name: 'JavaScript', icon: <SiJavascript size={30} /> },
    { name: 'MongoDB', icon: <SiMongodb size={30} /> },
    { name: 'MySQL', icon: <SiMysql size={30} /> },
    { name: 'GitHub', icon: <FaGithub size={30} /> },
    // Add more technologies here


];
const settings = {
    dots: false, // Disable dots
    arrows: true, // Enable arrows for navigation
    infinite: true, // Infinite loop
    speed: 400, // Transition speed
    slidesToShow: 5, // Default number of slides to show
    slidesToScroll: 1, // Number of slides to scroll per click
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval
    responsive: [
        {
            breakpoint: 1024, // Tablet screens
            settings: {
                slidesToShow: 4, // Show 4 cards
                slidesToScroll: 1,
                arrows: true, // Keep arrows enabled
            },
        },
        {
            breakpoint: 768, // Mobile devices
            settings: {
                slidesToShow: 2, // Show 3 cards on mobile
                slidesToScroll: 1,
                arrows: true, // Keep arrows enabled
            },
        },
    ],
};
const StackCards = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div className="p-10 mx-auto text-center" data-aos="fade-up">
            {/* Header */}
            <div className="mb-8 space-y-2">
                <h3 className="text-sm font-semibold tracking-wide text-blue-400 uppercase">
                    STACKS
                </h3>
                <h2 className="text-3xl font-bold text-gray-200">
                    Technologies I Work With
                </h2>
            </div>

            {/* Stack Cards Carousel */}
            <div className="py-10 mx-auto">
                <Slider {...settings}>
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className="p-4 transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-5">
                                <div className="text-blue-400 mb-4 flex justify-center">
                                    {tech.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-200">
                                    {tech.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default StackCards