import React, {useRef } from 'react'
import image from '../../image/chatapp.png'
import image2 from '../../image/chatapp2.png'
import { motion,useScroll,useTransform} from 'framer-motion'
import listproject from '../../components/paths/listprojects'
import ScrollingImages from './ScrollingImages'
const Myprojects = () => {
  
  return (
    <div className=''>
    {listproject.map((n)=>{
     return <ScrollingImages dat={n} leng={listproject.length}/>
    })}
      
        
    </div>
  )
}

export default Myprojects