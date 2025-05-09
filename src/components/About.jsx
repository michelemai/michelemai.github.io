import kitty from "../assets/kitty.png"
import girl from "../assets/gifs/girl6.gif"
import things from "../assets/things.png"
import heartBorder from "../assets/gifs/heartdiv1.gif"
import { ABOUT_TEXT_P1 } from "../constants"
import { ABOUT_TEXT_P2 } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="about" className="flex flex-col scroll-mt-32">
        <motion.div
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y:-100 }}
        transition={{duration: 1.5}}
        className="flex justify-center items-center gap-6">
        <h2 className="flex text-brown font-singleday my-20 text-center text-6xl">
        About Me
        </h2>
        <img className="flex w-auto h-20"src={girl} alt="girl"/>
        
        </motion.div>
        <div className="flex flex-wrap mb-30">
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x:-100 }}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={things} alt="about" className="w-full"/>
                </div>
                   
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x:100 }}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
                <div className="flex flex-col items-center justify-center lg:mt-20 lg:justify-start lg:p-8">
                    <p className="my-2 maxw-xl py-6">{ABOUT_TEXT_P1}</p>
                    <p className="my-2 maxw-xl py-6">{ABOUT_TEXT_P2}</p>
                </div>
            </motion.div>

        </div>
        <img src={heartBorder} alt="heart border gif" className="flex justify-center items-center w-2/3 mx-auto"/>
      
    </div>
  )
}

export default About
