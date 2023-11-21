import React, { useContext } from 'react'
import Rose from '../image/Rose.jpg'
import context from '../components/context/maincontext'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'
// import ParticleBackground from '../components/particle/ParticleBackground'
const About = () => {
  const colorChange=document.getElementsByClassName('chang')
  const textChange=document.getElementsByClassName('whit')
  
  window.addEventListener('scroll',()=>{
    const scroll=window.scrollY
    for(let i=0;i<colorChange.length;i++)
    {
      for(let j=0;j<textChange.length+1;j++)
      {
        const element=colorChange[i]
        const text=textChange[i]
       
      if(scroll>50){
      element.classList.remove('backg')
      element.classList.add('bg-black')
      text.classList.remove('text-black')
      text.classList.add('text-white')
      
    }
    else{
      element.classList.add('backg')
      element.classList.remove('bg-black')
      text.classList.remove('text-white')
      text.classList.add('text-black')
    }
      }
      
    }
    
  })
  const {entryAnimation}=useContext(context)
  

  return (
   
    <motion.div
    variants={entryAnimation}
    initial='initial'
    animate='final'
    exit='exit'
    className='py-24 flex flex-col items-center w-full backg chang anim whit'>
    {/* <ParticleBackground/> */}
      <h1 className='font-extrabold text-4xl font-serif underline-on-hover mb-10 whit chang'>Rose Rawal</h1>

      <div className='w-52 h-52 rounded-full overflow-hidden'>
        <img src={Rose} alt="Rose"  className='hover:scale-110 anim'/>
      </div>
      <div className='ext-font text-xl pt-3 mb-10'>
        <table>
        <tbody>
          <tr>
            <td className='pr-12 '>Name:</td>
            <td>Rose Rawal</td>
          </tr>
          <tr>
            <td>Studies:</td>
            <td>Bachelor (Running)</td>
          </tr>
          <tr>
            <td>Semester:</td>
            <td>7 <sup>th</sup></td>
          </tr>
        </tbody>
        </table>
      </div>
      <div className='w-4/5 m-auto mb-5'>
        <p className='ext-font text-3xl'>About Me:</p>
        <p className=' hover:text-green-300  anim whit'>I am an enthusiastic web developer with months of experience on web development
through self-ventures. Learned web development for skill gaining but started truly liking the grind. <br />
Now I am continuously exploring the field in search of new skills and honing my current skills to be better tomorrow than today. Aiming to be better today than yesterday.
</p>
      </div>
      <div className='w-4/5 mx-auto mt-20 mb-10 '>
        <p className='ext-font text-3xl'>Contact Me:</p>
        <p className=' hover:text-green-300 anim whit'>
        I am searching for fellow coders and seniors to guide me through my journey of coding. If anyone is interested to contact me through any platoform or watch my journey please refer to my contact information provided below. I will be constantly 
        creating new projects and projecting it in this page to show the effort and skill i am gaining endlessly. <br />
        Lets join together and work to create a better version of ourself!
</p>
      </div>
      <div className='ext-font text-4xl pt-3 mb-5 flex w-1/2 justify-around'>
        <a href="https://github.com/rose-rawal" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} className='hover:text-green-300'/></a>
        <a href="https://www.facebook.com/rose.rawal.94" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebook} className='hover:text-green-300'/></a>
        <a href="https://www.linkedin.com/in/rose-rawal-351543206/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className='hover:text-green-300'/></a>
        <a href="https://www.instagram.com/kurobara111/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} className='hover:text-green-300'/></a>
      </div>
      <div className='ext-font text-xl pt-3 mb-5'>
        <table>
        <tbody>
          <tr>
            <td className='pr-12 '>Phone no:</td>
            <td>+977 9821688075</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>rooserwl@gmail.com</td>
          </tr>
        </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default About