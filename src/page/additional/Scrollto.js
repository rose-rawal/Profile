import React, { useContext, useEffect, useState } from 'react'
import lang from '../../components/paths/languages'
import arrow from '../../image/arrow.png'
import context from '../../components/context/maincontext';
import coding from '../../image/coding.png'
import css from '../../image/css.png'
import js from '../../image/js.png'
import re from '../../image/re.jpg'
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
    const [move,setMove]=useState(true);
    // setInterval(()=>{
    //     console.log(move)
    //     setMove(!move)
    // },2000)
    useEffect(()=>{
        setTimeout(()=>{
            setMove(!move)
        },1000)
    },[move])
  return (
    <div className='relative'>
    <ul className='flex justify-center flex-col items-center'>
    {
        lang.slice(0,4).map((n)=>{
            return(
            <li onMouseEnter={()=>{handleEnter(n.cont)}} onMouseLeave={()=>{handleLeave(n.cont)}} key={n.name} className='hover:bg-gray-700 px-5 py-2 anim rounded-xl'>
            <a href={n.link} className='flex text-white ' >
            <div className='w-20 h-20 rounded-full  flex justify-center items-center ' ><img src={n.icon} alt="icon" className='w-3/4 h-3/4 ' /></div>
            <span className={`mt-2 ${bgAnimate===n.cont? animate?'visible':'invisible':'invisible'}`}><span className='font-bold'>{n.name}</span>
            <br /> Experienced</span>
            </a>
        </li>)
        })
    }
       
    </ul>
    <div className={`absolute top-0 right-1/4 w-32 `}><img src={arrow} alt="" className={`${move?'pl-10':'pl-0'} anim`}/><p className='ml-10 text-lg ext-font'>Hover Here</p></div>
    <div className={`absolute top-10 left-32 w-72 z-0 ${bgAnimate===0? animate?'visible':'invisible':'invisible'} appear`}><img src={coding} alt="" />
    <p>Precise Layout</p></div>
    <div className={`absolute top-10 left-32 w-72 z-0 ${bgAnimate===1? animate?'visible':'invisible':'invisible'} appear`}><img src={css} alt="" />
    <p>Beautiful Designing</p></div>
    <div className={`absolute top-10 left-32 w-72 z-0 ${bgAnimate===2? animate?'visible':'invisible':'invisible'} appear`}><img src={js} alt="" />
    <p>Crazy Implementation</p></div>
    <div className={`absolute top-10 left-32 w-72 z-0 ${bgAnimate===3? animate?'visible':'invisible':'invisible'} appear`}><img src={re} alt="" />
    <p>Clear and Precise to goal</p></div>
    </div>
  )
}

export default Scrollto