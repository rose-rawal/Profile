import React, { useContext } from 'react'
import Rose from '../image/Rose.jpg'
import context from '../components/context/maincontext'
import { motion } from 'framer-motion'
const About = () => {
  const {entryAnimation}=useContext(context)
  return (

    <motion.div
    variants={entryAnimation}
    initial='initial'
    animate='final'
    exit='exit'
    className='py-24 flex flex-col items-center w-full backg '>
      <h1 className='font-extrabold text-4xl font-serif underline-on-hover mb-10'>Rose Rawal</h1>

      <div className='w-52 h-52 rounded-full overflow-hidden'>
        <img src={Rose} alt="Rose"  className='hover:scale-110 anim'/>
      </div>
      <div className='ext-font text-xl pt-3'>
        <table>
          <tr>
            <td className='pr-12 '>Name:</td>
            <td>Rose Rawal</td>
          </tr>
          <tr>
            <td>Studies:</td>
            <td>Bachelor (Running)</td>
          </tr>
        </table>
      </div>
      <div className='w-4/5 m-auto '>
        <p className='ext-font text-3xl'>About Me:</p>
        <p className='text-black'>I am an enthusiastic web developer with months of experience on web development
through self-ventures. Learned web development for skill gaining but started truly liking the grind. <br />
Now I am continuously exploring the field in search of new skills and honing my current skills to be better tomorrow than today.
</p>
      </div>
    </motion.div>
  )
}

export default About