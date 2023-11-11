import React, { useContext, useEffect,  useState } from 'react'
import Carousel from './additional/Carousel';
import Scrollto from './additional/Scrollto';
import context from '../components/context/maincontext';
import { motion } from 'framer-motion';
// import image from '../../public/image/stone-wall.jpg'
const Home = () => {
  const [animation,setAnimation]=useState(true);
  const {bgAnimate,entryAnimation}=useContext(context)
  const [repeat,setRepeat]=useState(true)

  useEffect(()=>{
    setAnimation(true);
  },[])
  setInterval(()=>{
    setRepeat(!repeat)
  },4000)
  // const observer=new IntersectionObserver((entries)=>{
  //   entries.forEach((entry)=>{
  //     if (entry.isIntersecting)
  //     {
  //       entry.target.classList.add('show')
  //     }
  //     // else{
  //     //   entry.target.classList.remove('show')
  //     // }
  //   })
  // })
  // const heedn=document.querySelectorAll('.heedn')
  // heedn.forEach((el)=>{
  //   observer.observe(el);
  // })

  return (
    <motion.div 
    variants={entryAnimation}
    initial='initial'
    animate='final'
    exit='exit'
    className={`  w-full text-white bg-transparent`} >
    <div className={`backgroun transform ${!animation?'-translate-x-full opacity-2':'translate-x-0 opacity-100'}  ease-in-out duration-700 pb-10 h-screen pt-36 flex flex-col mb-5`}>
    <h1 className='text-4xl ml-10 pl-20 pb-5'>Hey,</h1>
    <h3 className='text-6xl font-bold transform ease-in-out duration-500 hover:translate-x-10 hover:text-red-400 pl-20 relative self-start'>I'm Rose Rawal <span className='absolute top-14 left-5 text-lg pl-20 hover:text-red-800'>Web Developer</span></h3>
        <p className='py-20 w-1/2 ml-20 animate-fade-in animate-delay-1 duration-1000 transform translate-y-0 pb-10'>Enthusiastic web developer with lots of experience on web development
through self-ventures. Learned web development with of multiple languages. Each day endears to gain more skilled and acute in web development.</p>
</div>
<div className='bg-black pt-12 h-screen mb-5 one'>

<h1 className='text-4xl ml-10 pl-20 pb-5'>I have</h1>
{/* ${repeat?'opacity-100':'opacity-0'} */}
<h3 className={`pl-20 text-6xl font-bold change`}>Multiple Different Projects</h3>
<p className='py-10 ml-20'>Multiple different projects have showcased my abilities and talents in different areas of web development.</p>
<Carousel/>

</div>
<div className={`bg-gray-200 pt-12 h-screen mb-14 text-black ${bgAnimate===0?'bg-gray-300':bgAnimate===1?'bg-gray-400':bgAnimate===2?'bg-gray-500':bgAnimate===3?'bg-gray-600':'bg-gray-200'}`}>

<h1 className='text-4xl ml-10 pl-20 pb-5'>I learned</h1>
{/* ${repeat?'opacity-100':'opacity-0'} */}
<h3 className={`pl-20 text-6xl font-bold `}>Multiple Different Languages</h3>
<p className='py-10 ml-20'>Have honed skills in multiple different languages to complement in my web development journey.</p>
<Scrollto/>

</div>

    </motion.div>
  )
}

export default Home