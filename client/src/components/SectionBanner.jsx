

const SectionBanner = () => {
    return (
        <div className="w-full flex items-center justify-center">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90 pointer-events-none"></div>

            {/* Animated background shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-10 text-center">
                {/* Animated Subtitle */}
                <div className="mb-6 relative">
                    <span className="relative z-10 inline-block text-sm font-medium tracking-widest 
        bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text 
        px-4 py-1.5 rounded-full uppercase">
                        Full Stack Developer
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 
        animate-[shimmer_3s_infinite] origin-left"></div>
                </div>

                {/* Name with Glitch Effect */}
                <h1 className="relative text-5xl md:text-7xl font-bold mb-6 text-gray-100 
      before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:text-gray-100 before:opacity-30 before:content-[attr(data-text)] 
      before:-z-10 before:translate-x-1 before:translate-y-1 
      after:absolute after:top-0 after:left-0 after:w-full after:h-full 
      after:text-gray-100 after:opacity-30 after:content-[attr(data-text)] 
      after:-z-10 after:-translate-x-1 after:-translate-y-1"
                    data-text="Yuval Leberstein"
                >
                    Yuval Leberstein
                </h1>

                {/* Description with Typing Effect */}
                <p className="text-gray-300 text-md md:text-xl mb-10 mx-auto 
                  relative">
                    {/* <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
                    text-transparent bg-clip-text">
                        Full Stack Developer proficient in modern web technologies
                    </span> */}
                    <span className="block mt-4 mx-auto text-gray-400">
                        Expert in end-to-end web development, leveraging a comprehensive skill set
                        across multiple technologies and frameworks.
                        Dedicated to delivering high-quality, scalable web solutions that exceed expectations.
                    </span>
                </p>

                {/* Action Buttons with Advanced Hover */}
                <div className="flex justify-center space-x-4">
                    <a
                        href="#contact"
                        className="relative px-8 py-3 rounded-lg overflow-hidden group
          bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-2xl
          before:absolute before:inset-0 before:bg-gradient-to-r 
          before:from-amber-600 before:to-orange-700 
          before:opacity-0 hover:before:opacity-20 
          before:transition-opacity before:duration-300"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#projects"
                        className="relative px-8 py-3 rounded-lg border-2 border-gray-700 
          text-gray-300 font-semibold backdrop-blur-sm
          bg-gray-800/50 hover:bg-gray-800/70
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-2xl
          hover:border-amber-500 hover:text-amber-400"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SectionBanner