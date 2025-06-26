import { motion } from 'framer-motion';
import { Code, Zap, Palette } from 'lucide-react';

const SectionBanner = () => {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a192f] via-[#020c1b] to-[#0a192f]">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating geometric shapes with CSS animations */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-full blur-sm"
                />

                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -360],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-teal-500/40 to-emerald-500/40 rounded-lg blur-sm transform rotate-45"
                />

                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/3 left-1/6 w-20 h-20 bg-gradient-to-r from-green-500/25 to-blue-500/25 rounded-full blur-md"
                />

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-2/3 right-1/6 w-8 h-8 bg-gradient-to-r from-cyan-500/35 to-green-500/35 rounded-sm blur-sm"
                />

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, -10, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-sm"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
                        Yuval Leberstein
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mb-8"
                    >
                        <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
                            Fullstack Developer
                        </p>
                        <div className="flex justify-center items-center gap-6 text-lg text-gray-400">
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.1, color: '#60A5FA' }} // blue
                            >
                                <Code className="w-5 h-5" />
                                Clean Code
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.1, color: '#2DD4BF' }} // teal
                            >
                                <Zap className="w-5 h-5" />
                                Fast Solutions
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.1, color: '#FBBF24' }} // yellow
                            >
                                <Palette className="w-5 h-5" />
                                Responsive Design
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Full Stack Developer specializing in crafting fast, modern, and scalable
                    web applications using Mern Stack.

                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                        My Projects
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                        Let's Talk
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default SectionBanner