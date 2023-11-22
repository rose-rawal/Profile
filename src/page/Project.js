import React, { useContext } from 'react'
import monitor from '../image/monitor.webp'
import Myprojects from './additional/Myprojects'
import { motion } from 'framer-motion'
import context from '../components/context/maincontext'

const Project = () => {
  const {entryAnimation}=useContext(context)
  const topAnimation={
    initial:{
      x:-150, opacity:0
    },
    after:{
      x:0, opacity:1,
      transition:{
        duration:1,stiffness:200,type:'spring'
      }
    }
  }
  const rightAnimation={
    initial:{
      x:'150vw', opacity:0
    },
    after:{
      x:0, opacity:1,
      transition:{
        duration:1,type:'spring'
      }
    }
  }
  const buttonAnimation={
    initial:{
      opacity:0
    },
    after:{
      opacity:1,
      transition:{
        delay:2,
      }
    },
    hover:{
      scale:1.1,
      backgroundColor:'#001a4d',
      textShadow:'0px 0px 10px rgb(255,255,255)',
      boxShadow:'0px 0px 10px rgb(255,255,255)'
    }
  }
  const handleClick=(e)=>{
    e.preventDefault();
    const scrollPortion=document.getElementById('scrollPortion')
    scrollPortion.scrollIntoView({behavior:'smooth'})
  }
  return (
    <motion.div
    variants={entryAnimation}
    initial='initial'
    animate='final'
    exit='exit'
     className='min-h-screen bg-slate-900 w-screen overflow-hidden text-white flex flex-col items-center'>
    <div className='min-h-screen w-3/4 py-24'>
    <div className='flex justify-center'><h1 className='text-6xl ext2-font text-center mb-20 text-animate' data-text='Projects'>Projects</h1></div>
    <div className='flex justify-between items-center'>
    <motion.p 
    variants={topAnimation}
    initial='initial'
    animate='after'
     className='text-4xl font-bold leading-relaxed'>Showcase different projects <br /> created either by me or with my team. <br />
    <motion.button
    className='ml-32 text-2xl mt-4 font-normal border-solid border-2 border-white px-5 py-2 rounded-full'
    variants={buttonAnimation}
    initial='initial'
    animate='after'
    whileHover='hover'
    onClick={handleClick}
    >GO</motion.button> 
    </motion.p>
    <motion.div 
    variants={rightAnimation}
    initial='initial'
    animate='after'
    className='w-96 shadow-effect hideItem'><img src={monitor} alt="" className='shadow-effect'/></motion.div>
    </div>
    </div>
    <div 
    
    className='min-h-screen w-3/4 ' id='scrollPortion'>
    <div>
      <Myprojects/>
    </div>
    
    </div>
    </motion.div>
  )
}

export default Project