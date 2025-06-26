import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Empty spacer instead of logo */}
                    <div></div>

                    {/* Mobile menu button only */}
                    <button
                        onClick={handleOpenMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Slide-in mobile menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 z-40 bg-gradient-to-b from-[#0a192f] via-[#020c1b] to-[#0a192f] text-white transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close button inside sidebar */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Menu items */}
                <div className="flex flex-col px-6 pt-4 space-y-6">
                    {['About', 'Projects', 'Skills'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white hover:text-teal-500 text-lg font-medium transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <Link
                        to="/resume"
                        className="text-white hover:text-teal-500 text-lg font-medium transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Resume
                    </Link>
                    <a
                        href="#contact"
                        className="bg-teal-500 text-white text-center py-2 rounded-md text-base font-medium transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Hire me!
                    </a>
                </div>
            </div>

            {/* Background overlay when menu is open */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </nav>
    )
}

export default Header