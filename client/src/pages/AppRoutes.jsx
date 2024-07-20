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
            <section className='section_banner'>
                <header>
                    <Header />
                </header>
                <BannerPage />
            </section>
            <section className='stacks_page'>
                <Stacks />
            </section>
            <section className='projects_page'>
                <Projects />
            </section>
            <section className='about_me_page'>
                <AboutMe />
            </section>
            <section className='contact_me_page'>
                <ContactMe />
            </section>
            <footer className='footer'>
                <Footer />
            </footer>
        </>
    )
}

export default AppRoutes