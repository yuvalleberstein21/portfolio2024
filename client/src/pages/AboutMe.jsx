
import { motion } from 'framer-motion';
import { User, Heart, Target, Lightbulb } from 'lucide-react';

export default function AboutMe() {
    const features = [
        {
            icon: Heart,
            title: "Passion for Code",
            description: "I love creating beautiful and functional solutions that solve real problems."
        },
        {
            icon: Target,
            title: "Precision & Professionalism",
            description: "Specialized in writing clean code, thorough testing, and delivering flawless user experiences."
        },
        {
            icon: Lightbulb,
            title: "Creative Thinking",
            description: "Always looking for new and innovative ways to solve technological challenges."
        }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-[#0a192f] to-[#020c1b]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Full-stack developer with extensive experience in building advanced web applications.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">My Story</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                After completing my military service as a combat soldier, I decided to pursue a career in full-stack development.
                                I've always had a deep passion for coding and technology, and I knew this was the path where I could grow, create, and make an impact through software.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}