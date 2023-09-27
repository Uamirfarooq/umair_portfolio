import Head from 'next/head'
import React from 'react'
import Layout from "../components/Layout";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project2 from "../../public/images/projects/React + Node js.png"
import project3 from "../../public/images/projects/External.jpg"
import project4 from "../../public/images/projects/Internal APIs.jpg"

import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect';


const FramerImage = motion(Image)



const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=' w-full flex items-center justify-between rounded-br-2xl relative dark:bg-dark rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link className=' w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg ' href={link} target='_blank'>
      <FramerImage priority
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw' whileHover={{scale:1.05}} transition={{duration:0.2}} src={img} alt={title} className='w-full h-auto' />

      </Link>

      <div className=' w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg
      lg:pl-0 lg:pt-0'><span className=' text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
          <h2 className=' my-2 w-full text-left text-4xl dark:text-light  font-bold xs:text-sm'>{title}</h2>
        </Link>
        <p className=' dark:text-light my-2 font-medium text-dark sm:text-sm'>{summary}</p>
        <div className=' mt-2 flex  items-center'>
          <Link href={github} target='_blank' className='w-10 dark:text-light'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg text-light bg-dark p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base '>Visit Project</Link>

        </div>

      </div>
    </article>
  )
}
const Projext = ({ type, title, img, link, github }) => {
  return (
    <article className=' w-full flex flex-col items-center justify-between rounded-2xl border dark:bg-dark border-solid border-dark bg-light p-6 relative dark:border-light xs:p-4'>
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link className=' w-full cursor-pointer overflow-hidden rounded-lg ' href={link} target='_blank'>
      <FramerImage whileHover={{scale:1.05}} transition={{duration:0.2}} src={img} alt={title} className='w-full h-auto' />

      </Link>

      <div className=' w-full flex flex-col items-start justify-between mt-4'><span className=' text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
          <h2 className=' my-2 w-full text-left text-3xl dark:text-light  font-bold lg:text-2xl md:text-xl'>{title}</h2>
        </Link>
        
        <div className=' w-full mt-2 flex  items-center justify-between'>
        <Link href={link}
           target='_blank' 
           className='ml-4 text-lg font-semibold  underline dark:text-light md:text-base'> Visit </Link>

          <Link href={github}
           target='_blank'
            className='w-8 dark:text-light md:w-6'> <GithubIcon />{" "}
          </Link>
          

        </div>

      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Umair's | Projects page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className=' w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" className=' mb-16 lg:!text-7xl sm:mb-8 sm:!tex6xl xs:!text-4xl' />

          <div className=' grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className=' col-span-12'>
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="https://github.com/Uamirfarooq/coin-bounce-main.git"
                type="Featured Project"
                img={project2}
                github="https://github.com/Uamirfarooq/coin-bounce-main.git"
              />
            </div><div className=' col-span-6 sm:col-span-12 '>
            <Projext
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="https://github.com/Uamirfarooq/coin-bounce-main.git"
                type="Featured Project"
                img={project3}
                github="https://github.com/Uamirfarooq/coin-bounce-main.git"
              />
            </div><div className=' col-span-6 sm:col-span-12'>
              <Projext
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="https://github.com/Uamirfarooq/coin-bounce-main.git"
                type="Featured Project"
                img={project4}
                github="https://github.com/Uamirfarooq/coin-bounce-main.git"
              />
            </div>
            <div className=' col-span-12'>
            <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Featured Project"
                img={project1}
                github="/"
              />
            </div><div className=' col-span-6 sm:col-span-12'>
              <Projext
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Featured Project"
                img={project1}
                github="/"
              />
            </div><div className=' col-span-6 sm:col-span-12' >
              <Projext
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Featured Project"
                img={project1}
                github="/"
              />
            </div>

          </div>

        </ Layout>
      </main>
    </>
  )
}

export default projects
