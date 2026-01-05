import About from "../Components/About"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"


const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects></Projects>
      <Contact />
    </div>
  )
}

export default Home
