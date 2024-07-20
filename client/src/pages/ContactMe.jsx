import React from 'react'

const ContactMe = () => {
    return (
        <div className='p-10 md:mx-40 md:justify-between md:flex flex-row gap-3'>
            {/* LEFT SIDE */}
            <div className='md:w-1/2 p-3 md:mt-16 md:px-10 md:py-0 flex flex-col gap-5 md:border-r-2 border-b-2 md:border-b-0 md:border-slate-500 py-10  md:pb-0'>
                <h1 className='text-gray-200 text-3xl'>Let's talk <span className='text-orange-500'>?</span></h1>
                <p className='text-gray-300'>If you have any questions, proposals, or just want to have a chat, feel free to get in touch.</p>
                <button className='p-3 border border-gray-300 text-gray-200 rounded-lg hover:bg-gray-800 hover:border-gray-300'>
                    <i className="fa-regular fa-envelope fa-lg m-2 text-sky-500"></i>
                    E-mail
                </button>
                <button className='p-3 border border-gray-300 text-gray-200 rounded-lg hover:bg-gray-800 hover:border-gray-300'>
                    <i className="fa-brands fa-whatsapp fa-lg m-2 text-green-500"></i>
                    WhatsApp
                </button>
            </div>

            {/* RIGHT SIDE */}
            <div className='md:w-1/2 p-5'>
                <form className='flex flex-col gap-3'>
                    <label className='text-gray-200 text-lg' htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Insert your name' className='bg-slate-800 rounded-md p-3 focus:outline-none focus:text-gray-200 placeholder:text-gray-400' />
                    <label className='text-gray-200 text-lg' htmlFor="email">E-mail</label>
                    <input type="text" name='name' placeholder='Insert your e-mail' className='bg-slate-800 rounded-md p-3 focus:outline-none focus:text-gray-200 placeholder:text-gray-400' />
                    <label className='text-gray-200 text-lg' htmlFor="message">Message</label>
                    <textarea type="text" name='name' placeholder='Write your message' className='bg-slate-800 rounded-md p-4 focus:outline-none focus:text-gray-200 placeholder:text-gray-400' />
                    <button className='button md:w-1/2 text-md p-1 text-gray-200 border border-gray-200 rounded-full mt-2'>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe