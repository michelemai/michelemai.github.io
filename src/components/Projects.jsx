import { PROJECTS } from "../constants"
import {motion} from "framer-motion"
import heartBorder from "../assets/gifs/heartdiv1.gif"
import girl from "../assets/gifs/girl6.gif"
import { FaLink } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col scroll-mt-32">
        <motion.div
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y:-100 }}
        transition={{duration: 1.5}}
        className="flex justify-center items-center gap-6">
            <h2 className="flex text-brown font-singleday my-20 text-center text-6xl">
            Projects
            </h2>
            <img className="flex w-auto h-20"src={girl} alt="girl"/>
        </motion.div>
        <div className="mb-30"> {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center rounded-4xl bg-pink-50 p-10 shadow-sm border border-pink-200 lg:max-w-3xl lg:mx-auto">
                {/* <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x:-100 }}
                transition={{duration: 1}}
                className="w-full lg:w-1/4 lg:justify-start"> 
                    <img src={project.image} width={150} height={150} alt={project.title} className="mb-6"/>
                </motion.div> */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x:100 }}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4"> 
                    <div className="flex items-center gap-2">
                    <h6 className="mb-2 font-singleday text-3xl">{project.title} </h6>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><FaLink className="text-xl hover:text-blue-300 transition-colors relative -top-1"></FaLink></a>
                    </div>
                    <p className="mb-4 text-neutral-400">{project.description}</p> 
                    <div className="flex flex-wrap">
                    {project.technologies.map((tech, index)=> (
                        <span key={index} className="mr-2 mt-2 rounded-full font-mono bg-blue-100 px-2 py-2 text-sm font-medium text-blue-400">{tech}</span>
                    ))}
                    </div>

                </motion.div>
            </div>

        ))}

        </div>
        <img src={heartBorder} alt="heart border gif" className="flex justify-center items-center w-2/3 mx-auto"/>
      
    </div>
  )
}

export default Projects
