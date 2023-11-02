import React, { useContext } from 'react'
import routes from '../routes'
import context from '../components/context/maincontext'
const Footer = () => {
  const {handlenav}=useContext(context)
  return (
    <div className='flex justify-evenly items-center bg-gray-800 text-white py-4 text-sm relative h-50 pt-10'>
    <div>
    <span className='text-lg pb-2 text-gray-300 absolute top-2'>Info</span>
      <ul className='pt-1'>
        <li className='hover:text-gray-400 cursor-pointer pb-1'>Kuro </li>
        <li className='hover:text-gray-400 cursor-pointer pb-1'>Nepal,Kathmandu</li>
        <li className='hover:text-gray-400 cursor-pointer pb-1'>Bachelor (ongoing)</li>
        
      </ul>
    </div>
    <div>
    <span className='text-lg pb-2 text-gray-300 absolute top-2'>Contact</span>
      <ul className='pt-4'>
        <li className='hover:text-gray-400 cursor-pointer pb-1'>rooserwl@gmail.com</li>
        <li className='hover:text-gray-400 cursor-pointer pb-1'>Phone No</li>
        <li className='hover:text-gray-400 cursor-pointer pb-1'>Linkedin</li>
        <li className='hover:text-gray-400 cursor-pointer pb-1'>GitHub</li>
      </ul>
    </div>
    <div >
    <span className='text-lg pb-2 text-gray-300 absolute top-2'>Pages</span>
      <ul className='pt-3'>
        {
          routes.map((n)=>{
            return <li key={n.name} onClick={(e)=>handlenav(n,e)} className='hover:text-gray-400 cursor-pointer pb-1'>{n.name}</li>
          })
        }
      </ul>
    </div>
   
    </div>
  )
}

export default Footer