import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Mail, MapPin, Phone } from 'lucide-react';
import Input from './ui/Input';
import Textarea from './ui/TextArea';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            },
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again.');
        });

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's work together to bring your ideas to life
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/30 smooth-transition">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p className="text-muted-foreground">yuvalleberstein21@gmail.com</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/30 smooth-transition">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <p className="text-muted-foreground">+972 50-952-5201</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/30 smooth-transition">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-muted-foreground">Migdal HaEmek, Israel</p>
                                </div>
                            </div>
                        </Card>

                        <div className="pt-4">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Available for freelance projects, full-time positions, and exciting collaborations.
                                Always open to discussing new opportunities and innovative ideas.
                            </p>
                        </div>
                    </div>

                    <Card className="p-8 bg-card/30 backdrop-blur-sm border-border">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="
                                    bg-background/50 
                                    text-gray-900 
                                    font-semibold 
                                    text-lg 
                                    tracking-wide      
                                    px-4 py-3"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="
                                    bg-background/50 
                                    text-gray-900 
                                    font-semibold 
                                    text-lg 
                                    tracking-wide      
                                    px-4 py-3"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <Textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me what you’re hiring for — I might be your next dev 😉"
                                    rows={5}
                                    required
                                    className="
                                    bg-background/50 
                                    text-gray-900 
                                    font-semibold 
                                    text-lg 
                                    tracking-wide      
                                    px-4 py-3"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                size="lg"
                            >
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>

            {isButtonVisible && (
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-24 left-6 p-3 bg-gray-300 text-gray-800 rounded-full shadow-lg hover:bg-primary hover:text-gray-300'
                    aria-label="Scroll to Top"
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </section>
    )
}




export default Contact;