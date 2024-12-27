import React from 'react'
import media1 from '../assets/media1.jpg'
import media2 from '../assets/media2.jpg'
import media3 from '../assets/media3.jpg'
import media4 from '../assets/media4.jpg'
import media5 from '../assets/media5.jpeg'
import media6 from '../assets/media6.jpeg'
import media7 from '../assets/media7.jpeg'
import media8 from '../assets/media8.jpeg'


import { motion } from 'framer-motion'
import { slideUpVariants , zoomInVariants} from './animation'

const Media = () => {
  return (
  <div id="media" className='w-full bg-white'>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col
      justify-between items-center gap-[20px]'>
      <motion.h1 variants={slideUpVariants} className='text-yellow-400
        text-2xl'>MEDIA</motion.h1>
      <motion.div
        variants={slideUpVariants}
        className="text-black uppercase text-[40px] font-bold text-center">GALLERY</motion.div>
      <motion.div
        variants={slideUpVariants}
        className='w-[120px] h-[6px] bg-yellow-400'></motion.div>  

        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'>
              <img src={media1} alt="project image" className='h-[250px] w-full' />
              <img src={media2} alt="project image" className='h-[250px] w-full' />
              <img src={media3} alt="project image" className='h-[250px] w-full' />
              <img src={media4} alt="project image" className='h-[250px] w-full' />
              <img src={media5} alt="project image" className='h-[250px] w-full' />
              <img src={media6} alt="project image" className='h-[250px] w-full' />
              <img src={media7} alt="project image" className='h-[250px] w-full' />
              <img src={media8} alt="project image" className='h-[250px] w-full' />

        </motion.div>
      </motion.div>

  </div>
  )
}

export default Media