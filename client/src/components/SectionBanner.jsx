import myImage from '../assets/myImage.webp'

const SectionBanner = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 mt-5 py-16 overflow-hidden">
            {/* תמונה בצד שמאל במסכים גדולים */}
            <div
                className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0"
                data-aos="zoom-in"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
                    <img
                        src={myImage}
                        alt="Yuval Leberstein"
                        className="w-full h-full object-cover"
                    />
                    {/* עיגול רקע מאחורי התמונה לאפקט מרשים */}
                    <div className="absolute -inset-2 rounded-full bg-blue-500 blur-2xl opacity-20 animate-pulse z-[-1]"></div>
                </div>
            </div>

            {/* טקסט בצד ימין */}
            <div
                className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
                data-aos="fade-left"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Yuval Leberstein
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                    Full Stack Developer specializing in crafting fast, modern, and scalable
                    web applications using <span className="text-blue-400">MERN stack</span>,
                    with a passion for UI/UX and performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-lg border border-gray-500 text-gray-200 hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SectionBanner