import React, { useContext, useState } from 'react'
import lang from '../../components/paths/languages'

import context from '../../components/context/maincontext';

const Scrollto = () => {
    const [animate,setAnimate]=useState(false);
    const {bgAnimate,setBgAnimate}=useContext(context)
    const handleEnter=(a)=>{
        setBgAnimate(a);
        setAnimate(true);
    }
    const handleLeave=(a)=>{
        setAnimate(false);
        setBgAnimate(4);
    }
  return (
    <div className=''>
    <ul className='flex justify-center flex-col items-center'>
    {
        lang.slice(0,4).map((n)=>{
            return(
            <li onMouseEnter={()=>{handleEnter(n.cont)}} onMouseLeave={()=>{handleLeave(n.cont)}} className='hover:bg-gray-700 px-5 py-2 anim rounded-xl'>
            <a href={n.link} className='flex text-white ' >
            <div className='w-20 h-20 rounded-full  flex justify-center items-center ' ><img src={n.icon} alt="icon" className='w-3/4 h-3/4 ' /></div>
            <span className={`mt-2 ${bgAnimate===n.cont? animate?'visible':'invisible':'invisible'}`}><span className='font-bold'>{n.name}</span>
            <br /> Experienced</span>
            </a>
        </li>)
        })
    }
       
    </ul>
    </div>
  )
}

export default Scrollto