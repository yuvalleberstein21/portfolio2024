import { useEffect } from 'react'
import MyImage from '../assets/myImage-609876fe.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <div className='p-10 md:mx-40 md:justify-between md:flex flex-row gap-3'>
                <div data-aos="fade-right" data-aos-once="true" className="md:w-2/3 p-5 border border-gray-700 rounded-lg shadow-lg bg-gray-800">
                    <span className='text-gray-300'>👋🏼 Hey, I'm</span>
                    <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-200">Yuval Leberstein</h1>
                    <p className="mb-3 font-normal text-gray-300 w-full">
                        With a background in both frontend and backend development, I've honed my skills across the entire web development stack. I'm passionate about creating applications that are not only visually appealing but also performant and accessible.
                        <br />
                        <p className='py-3'>
                            I enjoy solving complex problems with clean, maintainable code and continuously learning new technologies to stay at the forefront of web development.
                        </p>

                    </p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-once="true" className='md:w-1/3 md:mt-0 aboutMe-bg flex justify-center items-center rounded-lg'>
                    <img className="md:h-[350px] md:w-[350px] h-full w-full object-cover bg-no-repeat md:bg-no-repeat" src={MyImage} alt="My image" />
                </div>
            </div>
            <div className='p-10 md:mx-40 flex justify-between text-center gap-2'>
                <a href='https://www.linkedin.com/in/yuval-leberstein/' target="_blank"
                    rel="noopener noreferrer" className='p-2 text-gray-200 text-md border border-gray-200 rounded-lg w-full text-center hover:bg-gray-700'>
                    <i className="fa-brands fa-linkedin fa-lg m-2"></i>
                    Linkedin
                </a>
                <a href='https://github.com/yuvalleberstein21' target="_blank"
                    rel="noopener noreferrer" className='p-2 text-gray-200 text-md border border-gray-200 rounded-lg w-full text-center hover:bg-gray-700'>
                    <i className="fa-brands fa-github fa-lg m-2"></i>
                    GitHub
                </a>
                <a href='https://www.instagram.com/yuval.leberstein/' target="_blank"
                    rel="noopener noreferrer" className='p-2 text-gray-200 text-md border border-gray-200 rounded-lg w-full text-center hover:bg-gray-700'>
                    <i className="fa-brands fa-instagram fa-lg m-2"></i>
                    Instagram
                </a>
            </div>
        </>
    )
}

export default AboutMe