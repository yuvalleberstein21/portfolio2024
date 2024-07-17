import React from 'react'

const SectionBanner = () => {
    return (
        <div className="mx-auto flex justify-center items-center">
            <div className="w-full text-center">
                <div className='mb-5'>
                    <span className='text-md border b-gray-200 rounded-full px-3 py-1 text-gray-200'>WEB DEVELOPER</span>
                </div>
                <h1 className="text-gray-200 md:text-[3rem] text-[2rem]">
                    Yuval Leberstein
                </h1>
                <p className="text-gray-300 mt-5">
                    I transform ideas into digital realities, focusing on creating<br />
                    unique and engaging expiriences for users.
                </p>
                <button className="button px-3 py-2 text-lg bg-amber-600 rounded-full text-gray-100 mt-10">
                    Get in touch
                </button>
            </div>
        </div>
    )
}

export default SectionBanner