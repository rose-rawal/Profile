import React from 'react'
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
import context from '../components/context/maincontext';
const Header = () => {
  const navigate=useNavigate();
  const {page,setPage}=useContext(context)
  const handleChange=(abc,e)=>{
    e.preventDefault();
    setPage(abc.name);
    navigate(`/${abc.name.toLowerCase()}`)
    console.log(page)
  }
  return (
    <div className='bg-gray-500 flex justify-between h-20 items-center p-0'>
        <div className='Logo text-5xl ml-5 pb-3'>Kuro</div>
        <div className=' h-full sm:w-3/4 text-center md:w-1/2 '>
            <ul className='flex  justify-evenly items-center h-full'>
            {
              routes.map((n)=>{
                return <li className='hover:bg-black h-full flex items-center px-5 hover:text-white transition ease-in-out delay-150 cursor-pointer' onClick={(e)=>handleChange({n},e)}>{n.name}</li>
              })
            }
                
            </ul>
        </div>

    </div>
  )
}

export default Header