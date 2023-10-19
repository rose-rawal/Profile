import React, { useEffect, useState } from 'react'

const Home = () => {
  const [animation,setAnimation]=useState('false');
  useEffect(()=>{
    setAnimation(true);
  },[])
  return (
    <div className={`transform ${!animation?'-translate-x-full opacity-2':'translate-x-0 opacity-100'}  ease-in-out duration-700`}>
    <h1 className='text-4xl'>Heyo</h1>
    <h3 className='text-2xl'>I'm Rose Rawal</h3>
    </div>
  )
}

export default Home