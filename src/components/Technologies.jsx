import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import {motion} from "framer-motion";
import heartBorder from "../assets/gifs/heartdiv1.gif";
import girl from "../assets/gifs/girl7.gif";



const Technologies = () => {
  return (
    <div className="flex flex-col pb-24">
        <motion.div
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y:-100 }}
        transition={{duration: 1.5}}
        className="flex justify-center items-center gap-6">
            <h2 className="flex text-brown font-singleday my-20 text-center text-6xl">
            Technologies
            </h2>
            <img className="flex w-auto h-20"src={girl} alt="girl"/>

        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x:-100 }}
        transition={{duration: 0.5}}
        className="flex flex-wrap items-center justify-center gap-20 mb-30">
            <motion.div 
            
            className="opacity-75">
                <FaPython className="text-7xl text-blue-500" />
                
            </motion.div>
            <motion.div 
            
            className="opacity-75">
                <FaNodeJs className="text-7xl text-green-500" />
                
            </motion.div>
            <motion.div 
            
            className="opacity-75">
                <FaJava className="text-7xl text-red-500" />
            </motion.div>
            <motion.div 
            
            className="opacity-75">
                <SiMysql className="text-7xl text-yellow-500" />
                
            </motion.div>
            <motion.div 
            
            className="opacity-75">
            <SiMongodb className="text-7xl text-green-700" />
            </motion.div>
        </motion.div>

        <img src={heartBorder} alt="heart border gif" className="flex justify-center items-center w-2/3 mx-auto"/>
      
    </div>
  )
}

export default Technologies
