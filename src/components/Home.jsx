import wavingKitty from "../assets/gifs/hks25.gif"
import heartBorder from "../assets/gifs/heartdiv1.gif"
import profile from "../assets/profile.png"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi";

const container = (delay) => ({
    hidden: {x:-50, opacity: 0},
    visible: {
        x:0, 
        opacity: 1, 
        transition: {
            delay: delay,
            duration: 0.6,
            ease: "easeOut",
        }
    }
})

const Home = () => {
  return (
    <div id="home" className="pb-30 mt-30 lg:mb-35 scroll-mt-32">
        <div className="flex flex-col">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        
                            <motion.div
                            className="flex items-center"
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            >
                            <h1 className="text-brown font-singleday pt-14 pb-16 pr-0 text-6xl lg:mt-16 lg:text-8xl">Hi, I'm Michele!

                            <img src={wavingKitty} alt="waving hello kitty gif" className="w-15 h-15 inline-block relative -top-1"/>
                            </h1>
                            
                            
                        
                            </motion.div>

                        <motion.span variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="font-cascadia text-4xl font-medium italic">
                            Software Engineer
                        </motion.span>
                        <motion.p variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 flex items-center justify-end gap-4 text-2xl">
                                <a href="https://www.linkedin.com/in/michelemai/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="hover:text-blue-300 transition-colors"/>
                                </a>
                                <a href="https://github.com/michele8231" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="hover:text-blue-300 transition-colors"/>
                                </a>
                                <a href="mailto:michele8231@gmail.com">
                                    <BiLogoGmail className="hover:text-blue-300 transition-colors"/>
                                </a>
                            
                            </motion.p>

                    </div>
                    
                </div>
                <div className="lg:w-1/2">
                    <div className="flex justify-center">
                        <motion.img 
                        className="w-full h-full"
                        initial={{x:100, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        src={profile} alt="profile" />
                    </div>

                </div>


                

            </div>
        <img src={heartBorder} alt="heart border gif" className="flex justify-center items-center w-2/3 mx-auto"/>

        </div>
        
    </div>
  )
}

export default Home
