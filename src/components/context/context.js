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

    return (
        <context.Provider value={{page,setPage,handlenav,bgAnimate,setBgAnimate}}>
            {children}
        </context.Provider>
    )
}
export default Context