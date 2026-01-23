import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <About/>
      <Skills/>
      <Projects />
      <Services />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
