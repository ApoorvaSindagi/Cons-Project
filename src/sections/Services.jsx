import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants , zoomInVariants} from './animation'
import { allservices } from '../export'
const Services = () => {
  return (
    <div id="services" className='w-full bg-white'>
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col
      justify-between items-center gap-[20px]'>
        <motion.h1 variants={slideUpVariants} className='text-yellow-400
        text-2xl'>SPECIALITIES</motion.h1>
        <motion.div
        variants={slideUpVariants}
        className="text-black uppercase text-[40px] font-bold text-center">OUR SERVICES</motion.div>
        <motion.div
        variants={slideUpVariants}
        className='w-[120px] h-[6px] bg-yellow-400'></motion.div>  
        
        {/* div for services from export js */}
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center
        items-start gap-[20px] mt-[30px]'>
          {
            allservices.map((item, index)=>(
              <motion.div 
              variants={zoomInVariants}
              className='flex justify-center items-start gap-5
              p-8' key={index}>
                <div>
                  {/* <img src={item.icon} alt="icon" className='w-[70px] border-2
                border-yellow-400 hover:bg-yellow-400 rounded-lg p-2'/> */}
                <div className='flex flex-col justify-center items-start gap-3'>
                  <h1 className='text-xl font-bold text-black'>{item.title}</h1>
                  <p className='text-[18px]'>{item.about}</p>
                </div>
                </div>
              </motion.div>
            ))
          }


          
        </motion.div>

      </motion.div>
      
    </div>
  )
}

export default Services
