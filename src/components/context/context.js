import context from "./maincontext";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Context=({children})=>{
    const navigate=useNavigate();
    const [page,setPage]=useState("Home")
    const [bgAnimate,setBgAnimate]=useState(4);
    const handlenav=(abc,e)=>{
        e.preventDefault();
        setPage(abc.name);
    if(abc.name==="Home")
    {
    navigate('/')
    }else{
    navigate(`/${abc.name.toLowerCase()}`)
    }
    console.log(page)
    }


    const entryAnimation={
    initial:{
      x:"150vw"
    },
    final:{
      x:0,
      transition:{
        duration:0.5,
        type:'spring'
      }
    },
    exit:{
      x:"-150vw"
    }
  }

//     const observer=new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//       if (entry.isIntersecting)
//       {
//         entry.target.classList.add('show')
//       }
//       // else{
//       //   entry.target.classList.remove('show')
//       // }
//     })
//   })
//   const heedn=document.querySelectorAll('.heedn')
//   heedn.forEach((el)=>{
//     observer.observe(el);
//   })

    return (
        <context.Provider value={{page,setPage,handlenav,bgAnimate,setBgAnimate,entryAnimation}}>
            {children}
        </context.Provider>
    )
}
export default Context