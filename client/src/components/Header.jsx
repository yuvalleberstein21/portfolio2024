import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                    >
                        <span className="text-2xl font-bold tracking-tight">
                            PORTFOLIO
                            <span className="text-blue-500 animate-pulse">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <div className="flex space-x-6">
                            {['About', 'Projects', 'Skills'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group"
                                >
                                    {item}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </a>
                            ))}
                            <Link
                                to="/resume"
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group"
                            >
                                Resume
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </Link>
                        </div>

                        <a
                            href="#contact"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 transform hover:scale-105"
                        >
                            Hire me!
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={handleOpenMenu}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {['About', 'Projects', 'Skills'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-white hover:bg-gray-700/50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <Link
                            to="/resume"
                            className="text-gray-300 hover:text-white hover:bg-gray-700/50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Resume
                        </Link>
                        <a
                            href="#contact"
                            className="bg-blue-500 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors text-center mt-4"
                            onClick={() => setMenuOpen(false)}
                        >
                            Hire me!
                        </a>
                    </div>
                </div>
            )}
        </nav>

    )
}

export default Header