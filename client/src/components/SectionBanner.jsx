import React from 'react'


const SectionBanner = () => {
    return (
        <div className="w-full text-center">
            <div className='mb-5'>
                <span className='text-md border b-gray-200 rounded-full px-3 py-1 text-gray-200'>WEB DEVELOPER</span>
            </div>
            <h1 className="text-gray-200 md:text-[3rem] text-[2rem]">
                Yuval Leberstein
            </h1>
            <p className="text-gray-300 mt-5 mx-3">
                Full Stack Developer with a passion for building dynamic and responsive <br /> web applications.
                I love creating user-friendly and efficient solutions. <br /> Let's collaborate and bring your ideas to life!
            </p>
            <a href="#contact" className="button px-3 py-2 text-lg bg-amber-600 rounded-full text-gray-100 mt-10">
                Get in touch
            </a>
        </div>
    )
}
export default SectionBanner