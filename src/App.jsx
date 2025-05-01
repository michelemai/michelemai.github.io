import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="overflow-x-hidden bg-rose-50/50">
      
      <div  className="container mx-auto px-8">
      <Navbar />
      <Home />
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App

