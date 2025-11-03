import { Card } from "../components/ui/Card";


export const Technologies = () => {
    const technologies = [
        { name: "HTML5", category: "Language", color: "from-red-500 to-rose-600" },
        { name: "React", category: "Frontend", color: "from-cyan-500 to-blue-500" },
        { name: "TypeScript", category: "Language", color: "from-blue-500 to-indigo-500" },
        { name: "Node.js", category: "Backend", color: "from-green-500 to-emerald-600" },
        { name: "Express.js", category: "Framework", color: "from-green-500 to-emerald-600" },
        { name: "MySQL", category: "Database", color: "from-blue-600 to-cyan-600" },
        { name: "Tailwind CSS", category: "Styling", color: "from-cyan-400 to-sky-500" },
        { name: "MongoDB", category: "Database", color: "from-green-600 to-lime-600" },
        { name: "Git", category: "Version Control", color: "from-orange-600 to-red-600" }
    ];

    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Technologies</span> & Tools
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Modern tech stack for building scalable applications
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {technologies.map((tech, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 smooth-transition group cursor-pointer"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="text-center">
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 smooth-transition glow`}>
                                    <span className="text-2xl font-bold text-white font-mono">
                                        {tech.name.substring(0, 2)}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                                <p className="text-xs text-muted-foreground">{tech.category}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};