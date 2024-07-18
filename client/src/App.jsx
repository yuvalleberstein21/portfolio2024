import './App.css'
import Header from './components/Header'
import AboutMe from './pages/AboutMe'
import BannerPage from './pages/BannerPage'
import Projects from './pages/Projects'
import Stacks from './pages/Stacks'

function App() {
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
    </>

  )
}

export default App
