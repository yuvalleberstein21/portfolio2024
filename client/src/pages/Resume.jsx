import React from 'react'
import Header from '../components/Header'
import ResumeCV from '../assets/ResumeCV.jpeg'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <div className='w-full bg-gray-800 min-h-screen flex flex-col justify-center items-center'>
            <div className='w-full flex justify-start p-3'>
                <button className='p-2 text-md text-gray-800 font-bold bg-white border border-gray-200 rounded-lg'>
                    <i className="fa-solid fa-arrow-left fa-lg m-2"></i>
                    <Link to='/'>BACK</Link>
                </button>
            </div>
            <div className='border border-gray-200 p-5 rounded-md shadow-lg max-w-lg bg-white mx-3'>
                <h1 className='text-center text-2xl font-bold mb-4 text-gray-800'>RESUME</h1>
                <img src={ResumeCV} alt="Resume" className='object-cover max-h-[600px] w-full mx-auto' />
            </div>
        </div>


    )
}

export default Resume