import React from 'react'
import image from '../../image/chatapp.png'
const Myprojects = () => {
  return (
    <div className='scroll-animation'>
        <div className='h-screen flex w-full justify-between items-center snap-start'>
            <div>Name</div>
            <div className='w-1/2'><img src={image} alt="" /></div>
        </div>
        <div className='h-screen flex w-full justify-between items-center snap-start'>
            <div>Name</div>
            <div className='w-1/2'><img src={image} alt="" /></div>
        </div>
        <div className='h-screen flex w-full justify-between items-center snap-start'>
            <div>Name</div>
            <div className='w-1/2'><img src={image} alt="" /></div>
        </div>
    </div>
  )
}

export default Myprojects