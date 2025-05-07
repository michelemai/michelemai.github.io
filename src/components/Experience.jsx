import { EXPERIENCES } from "../constants"
import {motion } from "framer-motion"
import heartBorder from "../assets/gifs/heartdiv1.gif"
import girl from "../assets/gifs/girl8.gif"

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col scroll-mt-32">
        <motion.div
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y:-100 }}
        transition={{duration: 1.5}}
        className="flex justify-center items-center gap-6">
            <h2 className="flex text-brown font-singleday my-20 text-center text-6xl">
            Experience
            </h2>
            <img className="flex w-auto h-20"src={girl} alt="girl"/>
        
        </motion.div>


        <div className="mb-30">
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center rounded-4xl bg-pink-50 p-10 shadow-sm border border-pink-200 lg:max-w-3xl lg:mx-auto"> 
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x:-100 }}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400 p-2">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x:100 }}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4"> 
                        <h6 className="mb-2 font-semibold font-singleday text-3xl">
                            {experience.company} - <span className="text-xl text-brown">{experience.role} 💖</span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        <div className="flex flex-wrap">
                        {experience.technologies.map((tech, index)=> (
                           <span key={index} className="mr-2 mt-2 rounded-full font-mono bg-blue-100 px-2 py-2 text-sm font-medium text-blue-400"> {tech}</span>
                        )
                        )}
                        </div>

                    </motion.div>

                </div>
            ))}
        </div>
        <img src={heartBorder} alt="heart border gif" className="flex justify-center items-center w-2/3 mx-auto"/>
      
    </div>
  )
}

export default Experience
