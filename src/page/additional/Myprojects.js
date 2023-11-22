import React from 'react'

import listproject from '../../components/paths/listprojects'
import ScrollingImages from './ScrollingImages'
const Myprojects = () => {
  
  return (
    <div className=' '>
    {listproject.map((n)=>{
     return <ScrollingImages dat={n} leng={listproject.length}/>
    })}
      
        
    </div>
  )
}

export default Myprojects