import React, {useRef } from 'react'
import image from '../../image/chatapp.png'
import image2 from '../../image/chatapp2.png'
import { motion,useScroll,useTransform} from 'framer-motion'
import listproject from '../../components/paths/listprojects'
import ScrollingImages from './ScrollingImages'
const Myprojects = () => {
  
  return (
    <div className=''>

    
      <ScrollingImages/>
      <ScrollingImages/>
        
    </div>
  )
}

export default Myprojects