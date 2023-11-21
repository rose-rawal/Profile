import React from 'react'
import {useContext} from 'react';

import routes from '../routes';
import context from '../components/context/maincontext';
const Header = () => {
  
  const {handlenav}=useContext(context)

  return (
    <div className='bg-gray-900 flex justify-between h-20 items-center p-0 text-white absolute z-40 w-full border-solid border-b-2 border-white'>
        <div className='Logo text-5xl pb-3 ext-font ml-20'>Kuro</div>
        <div className=' h-full sm:w-3/4 md:w-1/2 '>
            <ul className='flex  justify-evenly h-full'>
            {
              routes.map((n)=>{
                return <li key={n.name} className='hover:bg-black h-full flex items-center text-center flex-grow  hover:text-white transition ease-in-out delay-150 cursor-pointer' onClick={(e)=>handlenav(n,e)}><div className='w-full'>{n.name}</div></li>
              })
            }
                
            </ul>
        </div>

    </div>
  )
}

export default Header