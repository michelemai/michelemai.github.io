import logo from "../assets/icon.png"
import bunnyGif from "../assets/gifs/bunnydiv2.gif"
import waveGif from "../assets/gifs/hks4.gif"
import cat from "../assets/gifs/cat9.gif"



const Navbar = () => {
  return (
   
        <nav className=" fixed top-0 left-0 right-0 bg-rose-50 z-50 mb-20 flex items-center justify-between py-0">
            <div className="flex flex-shrink-0 items-center">
                <img className="ml-4 w-10"src={cat} alt=""/>
            </div>
            <div className="flex items-center justify-center pb-2">
                <img src={bunnyGif} alt="bunny hopping gif"/>
            </div>
            <div className="text-brown font-singleday m-4 flex items-center justify-end gap-4 text-xl">
                <img src={waveGif} alt="waving"/>
                <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
                <a href="#experience" className="hover:text-gray-400 transition-colors">Experience</a>
                <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>

            </div>
        </nav>
      
   
  )
}

export default Navbar


