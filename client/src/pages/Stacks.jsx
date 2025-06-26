
import StackCards from '../components/StackCards'
import { motion } from 'framer-motion';

const Stacks = () => {
    return (
        <div className='mx-auto bg-gradient-to-b from-[#020c1b] to-[#0a192f]'>
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
            <StackCards />
        </div>
    )
}

export default Stacks