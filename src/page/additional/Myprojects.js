import React from 'react'
import image from '../../image/chatapp.png'
const Myprojects = () => {
    
  return (
    <div className=''>
        <div className='h-screen flex w-full justify-between items-center'>
            <div className=''><h3 className='text-3xl mb-5 font-bold shadow-lg'>MyChat</h3>
            <p>A chatroom implemented with secure and well managed collection of accounts</p>
            <button className=' w-32 text-xl rounded-2xl py-2 anim hover:text-green-400 mt-4 hover:shadow-md hover:shadow-green-100'>GO</button>
            </div>
            <div className='w-1/2'><img src={image} alt="" /></div>
        </div>
        <div className='h-screen flex w-full justify-between items-center'>
            <div>Name</div>
            <div className='w-1/2'><img src={image} alt="" /></div>
        </div>
        <div className='h-screen flex w-full justify-between items-center'>
            <div>Name</div>
            <div className='w-1/2'><img src={image} alt="" /></div>
        </div>
    </div>
  )
}

export default Myprojects