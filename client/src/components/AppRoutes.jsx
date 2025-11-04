import Hero from './BannerPage'
import About from './AboutMe';
import Technologies from './Technologies'
import Projects from './Projects'
import Contact from './Contact';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import AccessibilityButton from './AccessibilityButton';


const AppRoutes = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Contact />
            <FloatingWhatsApp />
            <AccessibilityButton />

            <footer className="py-8 border-t border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-muted-foreground text-sm">
                        © 2025 Yuval Leberstein. Built with React, TypeScript & Tailwind CSS
                        <br /> And a lot of coffe ☕️
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default AppRoutes