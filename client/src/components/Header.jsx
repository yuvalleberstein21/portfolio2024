import React, { useState } from 'react'
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
    const [menuOpen, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!menuOpen);
    }

    return (
        <nav className="sticky w-full z-20 top-0 start-0 py-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:border-2 border-neutral-800  bg-[#18181bd1] rounded-full">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Portfolio <span className='text-3xl text-amber-600'>.</span></span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-amber-600 focus:ring-4 focus:outline-none font-medium rounded-full text-md px-4 py-2 text-center">Hire me!</button>
                    <button onClick={handleOpenMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden focus:outline-none" aria-controls="navbar-sticky" aria-expanded={menuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <i className={`fa-solid fa-${menuOpen ? 'times' : 'bars'} fa-xl`}></i>
                    </button>
                    {/* <ThemeToggleButton /> */}
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border font-normal text-lg rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header