import React from 'react'
import MyImage from '../assets/myImage-609876fe.webp'
import Background from '../assets/20251948_6227820.webp'

const AboutMe = () => {
    return (
        <div className='p-10 md:mx-40 md:justify-between md:flex flex-row gap-3'>
            <div className="md:w-2/3 p-10 border border-gray-700 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <span className='text-gray-300'>👋🏼 Hey, I'm</span>
                <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-200">Yuval Leberstein</h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempore?
                    Dolores laudantium odio officia deserunt harum earum deleniti. Eum illo natus
                    enim neque culpa temporibus sequi vel recusandae at repudiandae. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Maiores dolores culpa impedit vitae
                    alias magni deserunt quis est tenetur doloremque? Vitae numquam facilis alias,
                    quibusdam sapiente reprehenderit nemo recusandae harum.
                </p>
            </div>
            <div className='md:w-1/3 p-10 aboutMe-bg relative flex justify-center items-center rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
                <img className="w-60 h-60 absolute md:left-[3rem] mb-3rounded-full object-cover" src={MyImage} alt="My image" />
            </div>
        </div>
    )
}

export default AboutMe