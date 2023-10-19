import React, { useEffect, useState } from 'react'

// import image from '../../public/image/stone-wall.jpg'
const Home = () => {
  const [animation,setAnimation]=useState('false');
  useEffect(()=>{
    setAnimation(true);
  },[])
  return (
    <div className={`transform ${!animation?'-translate-x-full opacity-2':'translate-x-0 opacity-100'}  ease-in-out duration-700 py-10`}>
    <h1 className='text-4xl ml-10 pl-20'>Hey,</h1>
    <h3 className='text-6xl font-bold transform ease-in-out duration-500 hover:translate-x-10 hover:text-red-400 pl-20 relative'>I'm Rose Rawal <span className='absolute top-14 left-5 text-lg pl-20 duration-150 hover:text-red-800'>Web Developer</span></h3>
    
    </div>
  )
}

export default Home