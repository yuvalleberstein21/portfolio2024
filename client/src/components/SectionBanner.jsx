import React from 'react'

const SectionBanner = () => {
    return (
        <div className="relative mx-auto mt-20">
            <span className="w-20 p-1 bg-amber-600 absolute left-0 top-[-60px] rounded-lg mb-30"></span>
            <div className="mt-0 w-full md:mt-10 text-center md:text-left relative">

                <h1 className="text-gray-100 md:text-[3rem] text-[2rem]">
                    I'm Yuval Leberstein, a
                    <br />
                    Full-Stack Developer
                </h1>
                <p className="text-gray-300 mt-5">
                    I design web apps to turn your ideas into reality.
                </p>
                <button className="button p-2 text-lg bg-amber-600 rounded-lg text-gray-100 mt-10">
                    Get in touch
                </button>
            </div>
        </div>
    )
}

export default SectionBanner