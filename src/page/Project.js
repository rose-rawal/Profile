import React from 'react'
import monitor from '../image/monitor.webp'
import Myprojects from './additional/Myprojects'
import { motion, spring } from 'framer-motion'
const Project = () => {
  return (
    <div className='min-h-screen bg-slate-900 w-full text-white flex flex-col items-center'>
    <div className='h-screen w-3/4 py-24'>
    <div className='flex justify-center'><h1 className='text-6xl ext2-font text-center mb-20 text-animate' data-text='Projects'>Projects</h1></div>
    <div className='flex justify-between items-center'>
    <motion.p 
    initial={{x:-150, opacity:0,}}
    animate={{x:0, opacity:1}}
    transition={{duration:1,stiffness:200,type:'spring'}}
     className='text-4xl font-bold leading-relaxed'>Showcase different projects <br /> created either by me or with my team. <br />
    <motion.button
    className='ml-32 text-2xl font-normal border-solid border-2 border-white px-5 py-2 rounded-full'
    whileHover={{
      scale:1.1,
      backgroundColor:'#001a4d',
      textShadow:'0px 0px 10px rgb(255,255,255)',
      boxShadow:'0px 0px 10px rgb(255,255,255)'
    }}>GO</motion.button> 
    </motion.p>
    <motion.div initial={{opacity:0}} 
    animate={{opacity:1}}
    transition={{delay:1, duration:2}}
    className='w-96 shadow-effect'><img src={monitor} alt="" className='shadow-effect'/></motion.div>
    </div>
    </div>
    <div className='min-h-screen w-3/4 '>
    <div>
      <Myprojects/>
    </div>
    
    </div>
    </div>
  )
}

export default Project