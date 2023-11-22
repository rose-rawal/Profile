import React, { useEffect, useState } from 'react'
import {useContext} from 'react';
import { motion } from 'framer-motion';
import routes from '../routes';
import context from '../components/context/maincontext';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate()
  const {handlenav}=useContext(context)
  const [isSmallScreen,setIsSmallScreen]=useState(true)
  const [isPressed,setIsPressed]=useState(false)
  useEffect(()=>{
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  },[])
  const handleClick = () => {
    setIsPressed(!isPressed);
  };
  const handleLogo=(e)=>{
    e.preventDefault()
    navigate('/')
  }
  return (
    <div className='bg-gray-900 flex justify-between h-20 items-center p-0 text-white absolute z-40 w-full border-solid border-b-2 border-white '>
        <div className='Logo text-5xl pb-3 ext-font ml-20 cursor-pointer' onClick={handleLogo}>Kuro</div>
        <div className=' h-full sm:w-3/4 md:w-1/2 '>
            {(isPressed || !isSmallScreen) && (
              <ul className={`flex  justify-evenly h-full ${isPressed?' flex-col fixed right-0 bg-gray-900 w-1/4 text-right pt-10':''}`}>
            {
              routes.map((n)=>{
                return <li key={n.name} className='hover:bg-black h-full flex items-center text-center flex-grow  hover:text-white transition ease-in-out delay-150 cursor-pointer' onClick={(e)=>handlenav(n,e)}><div className='w-full text-right pr-3'>{n.name}</div></li>
              })
            }
                
            </ul>
            )}
            {isSmallScreen && (
              <motion.button 
            initial={{x:50}}
            animate={{x:0}}
            transition={{delay:1, type:'spring'}}
            onClick={handleClick}
            class="bg-gray-800 p-2 text-white rounded-md mr-3 my-3 absolute right-0">
            <span class="block h-1 w-8 bg-white mb-2"></span>
            <span class="block h-1 w-8 bg-white mb-2"></span>
            <span class="block h-1 w-8 bg-white"></span>
            </motion.button>
            )}
        </div>

    </div>
  )
}

export default Header