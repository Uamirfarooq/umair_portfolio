import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import profileImage from "../../public/images/profile/developer-pic-12.png"
import Image from "next/image";
import { motionValue, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {

  const AnimatedNumber = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        motionValue.set(value)
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0)
        }
      })

    }, [springValue, value]);

    return <span
      ref={ref}>
    </span>
  }


  return (
    <>
      <Head>
        <title>Umair | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex mt-2 w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-6 ">
          <AnimatedText text="Passion Fuels Purpose!" className=" mb-16  " />
          <div className="grid w-full grid-cols-8 gap-16 mt-10 sm:gap-8">
            <div className=" xl:col-span-4 col-span-3 felx flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className=" flex justify-center items-center m-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                BioGraphy
              </h2>
              <p className=" font-bold">Introduction</p>
              <p className=" font-medium">
                Hello,I'm Umair Farooq, a React.js and Next.js developer. I'm a passionate coder with a focus on creating engaging web applications.
              </p>
              <br />

              <p className=" font-bold">Professional Experience </p>
              <p className=" font-medium ">
               In my career, I've worked on diverse web projects, collaborating with teams to build dynamic and responsive user interfaces. I'm committed to staying current with industry best practices and delivering top-notch solutions.
              </p>
               <br />
              <p className=" font-bold">Personal Interests </p>
              <p className=" font-medium">
              Outside of work, I enjoy reading, staying active through exercise, and exploring new places to gain fresh perspectives. Thanks for getting to know me!
              </p>
            </div>
            <div className=" col-span-3 xl:col-span-4  relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8 w-full md:w-[60%]  m-auto">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image priority
                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw' src={profileImage} alt="umair"
                className=" w-full h-auto rounded-2xl" />
            </div>
            <div className="col-span-2  flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl  md:text-6xl sm:text-5xl xs:text-4xl font-bold"><AnimatedNumber value={50} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied clients</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumber value={40} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Project compelete</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumber value={2} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Year Experience</h2>
              </div>
            </div>

          </div>
          <Skills />
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
