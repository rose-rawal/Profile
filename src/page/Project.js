import React from 'react'
import monitor from '../image/monitor.webp'
import Myprojects from './additional/Myprojects'

const Project = () => {
  return (
    <div className='bg-black min-h-screen w-full text-white flex flex-col items-center scroll-animation'>
    <div className='h-screen w-3/4 snap-start py-24'>
    <div className='flex justify-center'><h1 className='text-6xl ext-font text-center mb-20 text-animate' data-text='Projects'>Projects</h1></div>
    <div className='flex justify-between items-center'>
    <p className='text-4xl font-bold leading-relaxed'>Showcase different projects <br /> created either by me or with my team.</p>
    <div className='w-96 shadow-effect'><img src={monitor} alt="" className='shadow-effect'/></div>
    </div>
    </div>
    <div className='min-h-screen w-3/4 snap-start'>
    <div>
      <Myprojects/>
    </div>
    
    </div>
    </div>
  )
}

export default Project