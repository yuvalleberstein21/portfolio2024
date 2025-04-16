import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const SectionBanner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);
    return (
        <div className="min-h-screen relative w-full flex items-center justify-center overflow-hidden mt-8">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-8"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
                    data-aos="fade-in"
                ></div>
                <div
                    className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"
                    data-aos="zoom-in"
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"
                    data-aos="zoom-in"
                ></div>
            </div>

            <div
                className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center"
                data-aos="fade-up"
            >
                {/* Professional Title */}
                <div
                    className="mb-8 transform hover:scale-105 transition-transform duration-300"
                    data-aos="flip-down"
                >
                    <span className="inline-block text-sm font-semibold tracking-wider bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text px-4 py-1.5 rounded-full uppercase border border-blue-500/20">
                        Full Stack Developer
                    </span>
                </div>

                {/* Name with Professional Animation */}
                <h1
                    className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight"
                    data-aos="zoom-in"
                >
                    <span className="inline-block transform hover:scale-105 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-blue-600">
                        Yuval Leberstein
                    </span>
                </h1>

                {/* Description */}
                <p
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    data-aos="fade-right"
                >
                    Crafting exceptional digital experiences through innovative
                    <span className="text-blue-400"> full-stack solutions</span>.
                    Transforming ideas into scalable, efficient, and elegant applications.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                    data-aos="fade-up"
                >
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg
                          hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
                         shadow-[0_0_0_3px_rgba(59,130,246,0.1)] hover:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]"
                    >
                        View My Work
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></span>
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-lg border-2 border-gray-700 text-gray-300
                         hover:border-blue-500 hover:text-blue-400 font-semibold text-lg
                         backdrop-blur-sm bg-gray-900/50 hover:bg-gray-900/70
                         transform hover:scale-105 transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                    data-aos="fade-in"
                >
                    <a href="#skills">
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SectionBanner