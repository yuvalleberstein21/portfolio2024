import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';


const ContactMe = () => {
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
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            },
            process.env.REACT_APP_EMAILJS_USER_ID
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
            // Adjust the threshold as needed
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
        <div className='p-10 md:mx-40 md:justify-between md:flex flex-row gap-3'>
            {/* LEFT SIDE */}
            <div className='md:w-1/2 p-3 md:mt-16 md:px-10 md:py-0 flex flex-col gap-5 md:border-r-2 border-b-2 md:border-b-0 md:border-slate-500 py-10  md:pb-0'>
                <h1 className='text-gray-200 text-3xl'>Let's talk <span className='text-orange-500'>?</span></h1>
                <p className='text-gray-300'>If you have any questions, proposals, or just want to have a chat, feel free to get in touch.</p>
                <a href='mailto:yuvalleberstein21@gmail.com' className='p-3 border border-gray-300 text-gray-200 rounded-lg hover:bg-gray-800 hover:border-gray-300'>
                    <i className="fa-regular fa-envelope fa-lg m-2 text-sky-500"></i>
                    E-mail
                </a>
                <a href="https://wa.me/0509525201" target="_blank" rel="noopener noreferrer" className='p-3 border border-gray-300 text-gray-200 rounded-lg hover:bg-gray-800 hover:border-gray-300'>
                    <i className="fa-brands fa-whatsapp fa-lg m-2 text-green-500"></i>
                    WhatsApp
                </a>
            </div>

            {/* RIGHT SIDE */}
            <div className='md:w-1/2 p-5'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <label className='text-gray-200 text-lg' htmlFor="name">Name</label>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Insert your name'
                        className='bg-slate-800 rounded-md p-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:text-gray-200 focus:placeholder-gray-200'
                        required
                    />
                    <label className='text-gray-200 text-lg' htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Insert your e-mail'
                        className='bg-slate-800 rounded-md p-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:text-gray-200 focus:placeholder-gray-200'
                        required
                    />
                    <label className='text-gray-200 text-lg' htmlFor="message">Message</label>
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Write your message'
                        className='bg-slate-800 rounded-md p-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:text-gray-200 focus:placeholder-gray-200'
                        required
                    />
                    <button type='submit' className='button md:w-1/2 text-md p-1 text-gray-200 border border-gray-200 rounded-full mt-2'>Send message</button>
                </form>
            </div>
            {isButtonVisible && (
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-5 left-5 p-3 bg-gray-800 text-gray-200 rounded-full shadow-lg hover:bg-gray-700'
                    aria-label="Scroll to Top"
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </div>
    )
}

export default ContactMe