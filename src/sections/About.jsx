import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const About = () => {
  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
    justify-between items-start gap-[50px]"
      id="about"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg;w-[60%] w-full flex flex-col justify-center 
      items-start gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-400 text-2xl "
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[48px] font-bold"
        >
          Furde Constructions
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-400"></div>
        <p className="text-3xl italic text-gray-600 mt-[60px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          nulla repudiandae eos nihil quibusdam laborum a quisquam dolores
          dicta, necessitatibus fuga molestias magnam modi qui, distinctio
          tempora ratione optio laudantium.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ea
          voluptate minima tempore impedit libero fugiat dolo.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-400 hover:text-black px-10 py-3 rounded-lg 
      font-bold text-black">
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
