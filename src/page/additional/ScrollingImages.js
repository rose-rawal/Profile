import React ,{useRef,useEffect}from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'
import image from '../../image/chatapp.png'
import image2 from '../../image/chatapp2.png'
const ScrollingImages = () => {
     const targetRef=useRef(null)

  const {scrollYProgress}=useScroll({
    target:targetRef.current
  })
  
  const x=useTransform(scrollYProgress,[0.5,1],['1%','-100%'])
  return (
    <div ref={targetRef}>
    <motion.div
        
        initial={{
      opacity:0,
      x:60
    }}
    whileInView={{
      opacity:1,
      x:0
    }}
    transition={{
      duration:2,
      type:'spring',
      // delay:10,
      // mass:3
    }}
         className='h-screen flex w-full justify-between items-center'>
            <div className=''><motion.h3
            initial={{
              color:'#fff'
            }}
            whileInView={{
              color:'#00cc00'
            }}
            transition={{
              // delay:4,
              duration:0.5
            }}
            className='text-3xl mb-5 font-bold shadow-lg ext2-font'>MyChat</motion.h3>
            <p>A chatroom implemented with secure and well managed collection of accounts</p>
            <button className=' w-32 text-xl rounded-2xl py-2 anim hover:text-green-400 mt-4 hover:shadow-md hover:shadow-green-100'>GO</button>
            </div>
            <div className='w-1/2 h-1/2 overflow-hidden flex'><motion.div  style={{x}} className='flex gap-3'><img src={image} alt="" /><img src={image2} alt="" /></motion.div></div>
        </motion.div></div>
  )
}

export default ScrollingImages