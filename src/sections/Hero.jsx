import React from "react";

import heroimg from "../assets/heroimg.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px]
     lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row
     flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start
      lg:gap-8 gap-4"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-400 text-[50px] font-extrabold"
        >
          FURDE CONSTRUCTIONS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[50px] font-bold"
        >
          We build dreams
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-400"></div>
        <p className="text-white text-[20px]"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          reprehenderit officiis eius dicta ipsa nam, sequi quod quas mollitia
          enim repellat quidem iure pariatur deserunt repellendus laboriosam
          placeat ratione obcaecati.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex justify-center items-center gap-5"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-yellow-400 hover:bg-white hover:text-black px-10 py-3
              rounded-lg text-black font-bold"
          >
            READ MORE
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="border-white hover:border-yellow-400 hover:text-yellow-400 
          border-2 px-10 py-3 rounded-lg text-white font-bold "
          >
            REACH US
          </motion.button>
        </motion.div>
      </motion.div>
      {/* <div className='w-[40%] flex flex-col justify-end items-end'>
      <motion.img 
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      src={heroimg} alt='heroimge' className='lg;h-[600px] h-[300ox] lg:mb-[-100px]'
     />
      
    </div> */}
    </div>
  );
};

export default Hero;
