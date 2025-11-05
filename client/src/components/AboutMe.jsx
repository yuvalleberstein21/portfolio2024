import { Code2, Database, Layers, Zap } from "lucide-react";
import workspaceImage from "../assets/workSpace.jpeg";
import { Card } from "../components/ui/Card";

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: "Frontend Master",
            description: "React, TypeScript, Tailwind, Bootstrap"
        },
        {
            icon: Database,
            title: "Backend Expert",
            description: "Node.js & Express, MongoDB, MySQL"
        },
        {
            icon: Layers,
            title: "Full Stack",
            description: "End-to-end application development"
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimized, scalable solutions"
        }
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Passionate about creating seamless digital experiences that make a difference
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl smooth-transition" />
                        <img
                            src={workspaceImage}
                            alt="Developer workspace"
                            className="relative rounded-2xl w-full h-[500px] object-cover card-shadow"
                        />
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-foreground/90">
                            Hi! I'm Yuval Leberstein, a passionate fullstack developer with expertise in building modern web applications.
                            I specialize in creating scalable, performant solutions using cutting-edge technologies.
                        </p>

                        <p className="text-lg leading-relaxed text-foreground/90">
                            With 2 years of experience in both frontend and backend development, I bring ideas to life
                            through clean code, beautiful interfaces, and robust architectures.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {highlights.map((item, index) => (
                                <Card
                                    key={index}
                                    className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 smooth-transition cursor-pointer hover:scale-105"
                                >
                                    <item.icon className="h-8 w-8 text-primary mb-3" />
                                    <h3 className="font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;