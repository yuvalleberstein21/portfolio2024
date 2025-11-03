import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '../components/ui/Button';

import heroImage from '../assets/Hero.jpeg';
// import SectionBanner from '../components/SectionBanner'


const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="animate-slide-up">
                    <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                        <span className="text-sm font-mono text-primary">Available for work</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                        <span className="block mb-2">Yuval Leberstein</span>
                        <span className="block text-gradient">Fullstack Developer</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
                        Full Stack Developer specializing in crafting fast, modern, and scalable web applications using Mern Stack.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-glow-pulse"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/30 hover:bg-primary/10"
                            onClick={() => scrollToSection('contact')}
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Get in Touch
                        </Button>
                    </div>

                    <div className="flex gap-8 justify-center">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 smooth-transition"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 smooth-transition"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <button
                    onClick={() => scrollToSection('about')}
                    className="absolute -bottom-20 center -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="h-6 w-6 text-primary" />
                </button>
            </div>
        </section>
    )
}

export default Hero;