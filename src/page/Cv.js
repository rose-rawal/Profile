import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import context from '../components/context/maincontext'
import cv1 from '../image/cv/1.png'
import cv2 from '../image/cv/2.png'


const Cv = () => {
    const {entryAnimation}=useContext(context)
    
  return (
    <motion.div
    variants={entryAnimation}
    initial='initial'
    animate='final'
    exit='exit'
    className='py-24  w-full min-h-screen bg-white '
    >
    <h3 className='text-center pb-4 text-2xl font-bold'>ONLY FOR REFERENCE</h3>
      <div className='flex justify-center gap-10'><img src={cv1} alt="" /><img src={cv2} alt="" /></div>
    </motion.div>
  )
}

export default Cv