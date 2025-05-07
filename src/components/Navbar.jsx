import bunnyGif from "../assets/gifs/bunnydiv2.gif"
import waveGif from "../assets/gifs/hks4.gif"
import cat from "../assets/gifs/cat9.gif"
import {useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);  
  return (
    <>
   
        <nav className=" fixed top-0 left-0 right-0 bg-rose-50 z-50 mb-20 flex items-center justify-between py-0">
            <div className="flex flex-shrink-0 items-center">
                <img className="ml-4 w-10"src={cat} alt=""/>
            </div>
            <div className="flex items-center justify-center pb-2">
                <img src={bunnyGif} alt="bunny hopping gif"/>
            </div>

            <div className="md:hidden flex items-center justify-end m-4 gap-4 text-xl">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen? <RxCross2 />: <RxHamburgerMenu/>}
                </button>

            </div>
            <div className="hidden md:flex text-brown font-singleday m-4 items-center justify-end gap-4 text-xl">
                <img src={waveGif} alt="waving"/>
                <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
                <a href="#technologies" className="hover:text-gray-400 transition-colors">Technologies</a>
                <a href="#experience" className="hover:text-gray-400 transition-colors">Experience</a>
                <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>

            </div>

        </nav>

        {isOpen && (
            <div className="md:hidden fixed inset-0 bg-rose-50 flex flex-col items-center justify-center space-y-8 text-brown font-singleday text-2xl z-40">
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#technologies" onClick={() => setIsOpen(false)}>Technologies</a>
                <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>


            </div>
        )}
    
    </>  
   
  )
}

export default Navbar


