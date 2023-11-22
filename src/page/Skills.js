import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import context from '../components/context/maincontext'
import Language from './Language'
const Skills = () => {
  
  document.addEventListener('scroll',()=>{
    const scrolling=document.querySelector('#scrollAnim')
    const scrollingBlack=document.querySelector('#scrollAnimate')
    const scroll=window.scrollY
    // console.log(scroll)
    
    if(scrolling){
      scrolling.style.transform = `scale(${scroll})`;
    }
    if(scrollingBlack&& scroll>1000){
      scrollingBlack.style.transform=`scale(${scroll-1000})`;
    }
    else if(scrollingBlack){
      scrollingBlack.style.transform=`scale(${0})`;
    }
  })
  const {entryAnimation}=useContext(context)
  return (
    <motion.div
    variants={entryAnimation}
    initial='initial'
    animate="final"
    exit='exit'
    className='bg-white w-full py-24 overflow-hidden'>
    <div className='h-60vh flex justify-center flex-col w-3/4 m-auto'>
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
    <div className='w-3/4 m-auto pt-32 text-white'>
      <h1 className='text-4xl font-mono font-bold'>Learning Never Stops!!</h1>
      <h3 className='text-lg mb-16'>Showcasing my Arsenal equipped with all different ammunitions.</h3>
      <Language/>
    </div>
    <div className='w-4 h-4 fixed bg-black  top-44 -z-30' id='scrollAnimate'></div>
    <div className='w-3/4 m-auto pt-32 text-white'>
      <h1 className='text-4xl font-mono font-bold'>GO BEYOND</h1>
      <h3 className='text-lg mb-16'>Web Development as it is a ever growing field these are some of my goals to add in the future arsenal</h3>
      <ul className='text-lg pb-20 flex flex-col items-center'>
        <li className='mb-3 px-5 py-3 border-solid border-transparent hover:border-white border-1 anim hover:text-red-300 rounded-full hover:shadow-md hover:shadow-white'>Java</li>
        <li className='mb-3 px-5 py-3 border-solid border-transparent hover:border-white border-1 anim hover:text-red-300 rounded-full hover:shadow-md hover:shadow-white'>Python</li>
        <li className='mb-3 px-5 py-3 border-solid border-transparent hover:border-white border-1 anim hover:text-red-300 rounded-full hover:shadow-md hover:shadow-white'>Django</li>
      </ul>
    </div>
    
    <div className='w-4 h-4 fixed bg-red-300 right-36 top-44 -z-40' id='scrollAnim'></div>
     </motion.div>
     
  )
}

export default Skills