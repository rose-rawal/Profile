import context from "./maincontext";
import React from "react";
import { useState } from "react";

const Context=({children})=>{
    const [page,setPage]=useState("Home")
    return (
        <context.Provider value={{page,setPage}}>
            {children}
        </context.Provider>
    )
}
export default Context