import React from "react";

import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
  return(
    <motion.div
    className="flex justify-center font-bold text-2xl shadow-dark cursor-pointer bg-dark rounded-full text-light py-5 px-7 absolute dark:bg-light dark:text-dark  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y }}
    transition={{ duration: 1 }}
    viewport={{once: true}}
  >
    {name}
  </motion.div>
  )
}

const Skills = () => {

  return (
    <>
      <h2 className=" font-bold text-8xl mt-32 sm:mt-8 xs:mt-4 md:mt-16 w-full text-center md:text-6xl xs:text-4xl">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full  bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
      md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
      ">
       
       <motion.div className=" flex items-center justify-center rounded-full font-semibold p-8 shadow-dark cursor-pointer text-light bg-dark dark:bg-light dark:text-dark  lg:p-6 md:p-4 xs:text-xs xs:p-2"
       whileHover={{scale:1.05}}>
        Web
       </motion.div>
        {/* <Skill name="Web" x="0vw" y="0vw"/> */}
        <Skill name="HTML" x="-22vw" y="-4vw"/>
        <Skill name="CSS" x="-5vw" y="-11vw"/>
        <Skill name="JavaScript" x="20vw" y="6vw"/>
        <Skill name="ReactJs" x="0vw" y="12vw"/>
        <Skill name="NextJs" x="-32vw" y="-19vw"/>
        <Skill name="WebDesign" x="15vw" y="-20vw"/>
        <Skill name="Figma" x="32vw" y="-5vw"/>
        <Skill name="Firebase" x="10vw" y="21vw"/>
        <Skill name="Tailwind css" x="-25vw" y="14vw"/>
        <Skill name="MongoDB" x="32vw" y="18vw"/>
      </div>
    </>
  );
};

export default Skills;
