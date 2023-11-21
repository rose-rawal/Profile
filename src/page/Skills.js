import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import context from '../components/context/maincontext'
const Skills = () => {
  const scrolling=document.getElementsByClassName('scrollAnim')
  document.addEventListener('scroll',()=>{
    const scroll=window.scrollY
    scrolling[0].classList.add(``)         //add scrolling dynamic class
  })
  const {entryAnimation}=useContext(context)
  return (
    <motion.div
    variants={entryAnimation}
    initial='initial'
    animate="final"
    exit='exit'
    className='bg-white w-full py-24'>
    <div className='h-screen flex justify-center flex-col w-3/4 m-auto'>
      <motion.h1 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.5,duration:2}}
      className='text-4xl font-bold'>Experience that Changes all Perspectives
      
      </motion.h1>
      <motion.h2 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.5,duration:2}}
      className='text-lg'>
        Growing and learning all available ideas to create the projects <br /> better and better!
      </motion.h2>
      
    </div>
    <div className='w-4 h-4 fixed bg-red-400 right-36 top-44 scrollAnim'></div>
     </motion.div>
     
  )
}

export default Skills