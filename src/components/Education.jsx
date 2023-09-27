import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ time, type, place, work }) => {
  const first = useRef(null);
  return (
    <li
      ref={first}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={first} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className=" capitalize font-bold text-2xl"
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className=" capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full  lg:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  return (
    <div className=" py-64 sm:py-16 xs:py-8 md:py-32">
      <h2 className="font-bold text-8xl mb-32 sm:mb-8 xs:mb-4 md:mb-16 w-full text-center md:text-6xl xs:text-4xl">
        Education
      </h2>
      <div ref={ref} className=" w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:bg-light absolute left-9 top-8 w-[4px] h-full bg-dark origin-top md:w[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex items-center justify-between flex-col ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2020-2024"
            place="2023-Present"
            address="University Of Gujrat (UOG)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
      Intelligence."
          />
          <Details
            type="Intermediate In Science (Fsc pre-Engineering)"
            time="2018-2020"
            place="2023" 
            address="Govt. Zamindar Post Graduate College Gujrat"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence. 
      "
          />
          <Details
            type="Matirculation"
            time="2016-2018"
            place="2023"
            address="Govt. Municipal School Gujrat"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
      Intelligence."
          />
          
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
