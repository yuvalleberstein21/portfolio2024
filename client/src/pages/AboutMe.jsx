import React, { useEffect } from 'react'
import MyImage from '../assets/myImage-609876fe.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';



const AboutMe = () => {

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
            <div className='p-10 md:mx-40 md:justify-between md:flex flex-row gap-3'>
                <div data-aos="fade-right" data-aos-once="true" className="md:w-2/3 p-10 border border-gray-700 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <span className='text-gray-300'>👋🏼 Hey, I'm</span>
                    <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-200">Yuval Leberstein</h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Has the ability to work under pressure while meeting deadlines, the ability to work in a team alongside independent work, the ability
                        to process a lot of information, arranged, quick learning abilities, mental flexibility, creative and responsible thinking.
                        has the ability to face challenges, determined, diligent, consistent and self disciplined.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-once="true" className='md:w-1/3 p-10 mt-4 md:mt-0 aboutMe-bg relative flex justify-center items-center rounded-lg'>
                    <img className="w-full h-full absolute md:left-[3rem] mb-3 object-cover bg-no-repeat md:bg-no-repeat" src={MyImage} alt="My image" />
                </div>
            </div>
            <div className='p-10 md:mx-40 flex justify-between text-center gap-2'>
                <a href='https://www.linkedin.com/in/yuval-leberstein/' target="_blank"
                    rel="noopener noreferrer" className='p-2 text-gray-200 text-md border border-gray-200 rounded-lg w-full text-center hover:bg-gray-700'>
                    <i className="fa-brands fa-linkedin m-2"></i>
                    Linkedin
                </a>
                <a href='https://github.com/yuvalleberstein21' target="_blank"
                    rel="noopener noreferrer" className='p-2 text-gray-200 text-md border border-gray-200 rounded-lg w-full text-center hover:bg-gray-700'>
                    <i className="fa-brands fa-github m-2"></i>
                    GitHub
                </a>
                <a href='https://www.instagram.com/yuval.leberstein/' target="_blank"
                    rel="noopener noreferrer" className='p-2 text-gray-200 text-md border border-gray-200 rounded-lg w-full text-center hover:bg-gray-700'>
                    <i className="fa-brands fa-instagram m-2"></i>
                    Instegram
                </a>
            </div>
        </>

    )
}

export default AboutMe