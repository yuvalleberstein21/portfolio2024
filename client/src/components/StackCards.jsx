import React from 'react'
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


const technologies = [
    { name: 'HTML & CSS', icon: <FaHtml5 size={30} /> },
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
const StackCards = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='py-10 mx-auto'>
            <Slider {...settings}>
                {technologies.map((tech, index) => (
                    <div key={index} className='p-4'>
                        <div className='bg-gray-800 border border-gray-400 rounded-lg text-center p-5'>
                            <div className='mb-4 text-orange-400 flex min-h-7 justify-center text-center'>
                                {typeof tech.icon === 'string' ? (
                                    <i className={tech.icon}></i> // Font Awesome icon
                                ) : (

                                    tech.icon // React component icon
                                )}
                            </div>
                            <h3 className='text-gray-200 text-lg'>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default StackCards