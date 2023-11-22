import React from 'react'
import lang from '../components/paths/languages'
import { motion } from 'framer-motion'
const Language = () => {
  return (
    <ul className='w-1/2 mx-auto'>
    {lang.map((l)=>{
        return (
            <li className={` text-xl mb-10 ${l.cont % 2===0?' text-right':' text-left'}`} key={l.cont}>
            <motion.div
           
            initial={{x:-100}}
             whileHover={{
                // border:' 2px solid white',
                scale:1.2,
                textShadow:'0px 0px 8px rgb(255,255,255)',

            }}
            whileInView={{
                x:0
            }}
            transition={{
                repeatType:'loop',
                duration:0.3,
                x:{
                    duration:0.5,
                }
            }}>
            <motion.a 
            href={l.link} target='_blank' className=' px-5 py-4 rounded-3xl hover:text-white'>{l.name}</motion.a>

            </motion.div>
           
           
            </li>
        )
    })}
    </ul>
  )
}

export default Language