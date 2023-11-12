import React ,{useRef,useEffect}from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'

  const ScrollingImages = ({dat,leng}) => {
     const targetRef=useRef(null)
     const {index,name,image,image2,context,link}=dat
  const {scrollYProgress}=useScroll({
    target:targetRef.current
  })
  console.log(link)
  const handleClick=(e)=>{
    e.preventDefault();
    window.open(link,'_blank');
  }
  
  const x=useTransform(scrollYProgress,[(index+0.2)/(leng+1),(index+0.4)/(leng+1)],['1%','-100%'])
  return (
    <div ref={targetRef}>
    <motion.div
        
        initial={{
      opacity:0,
      x:120
    }}
    whileInView={{
      opacity:1,
      x:0
    }}
    transition={{
      duration:3,
      type:'spring',
      // delay:10,
      // mass:3
    }}
         className='h-screen flex w-full justify-between items-center gap-2'>
            <div className='w-1/2'><motion.h3
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
            className='text-3xl mb-5 font-bold shadow-lg ext2-font'>{name}</motion.h3>
            <p>{context}</p>
            <button onClick={handleClick} className=' w-32 text-xl rounded-2xl py-2 anim hover:text-green-400 mt-4 hover:shadow-md hover:shadow-green-100'>VISIT SITE</button>
            </div>
            <div className='w-1/2 h-1/2 overflow-hidden flex'><motion.div  style={{x}} className='flex gap-3'><img src={image} alt="" /><img src={image2} alt="" /></motion.div></div>
        </motion.div></div>
  )
}

export default ScrollingImages