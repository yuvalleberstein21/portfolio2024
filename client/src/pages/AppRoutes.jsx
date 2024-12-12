import React from 'react'
import Header from '../components/Header'
import BannerPage from './BannerPage'
import Stacks from './Stacks'
import Projects from './Projects'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Footer from '../components/Footer'

const AppRoutes = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <section className="section_banner bg-fade-in relative h-screen flex items-center justify-center"
                style={{
                    backgroundImage: "url('/path-to-your-image.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <BannerPage />
            </section>
            <section className='stacks_page' id='stacks'>
                <Stacks />
            </section>
            <section className='projects_page' id='projects'>
                <Projects />
            </section>
            <section className='about_me_page' id='about'>
                <AboutMe />
            </section>
            <section className='contact_me_page' id='contact'>
                <ContactMe />
            </section>
            <footer className='footer'>
                <Footer />
            </footer>
        </>
    )
}

export default AppRoutes