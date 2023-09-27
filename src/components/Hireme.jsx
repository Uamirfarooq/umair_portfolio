import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className=' md:right-8 md:left-auto md:top-0 
    xs:right-0 xs:top-0 xs:absolute md:bottom-auto fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:absolute'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
      <Link href="mailto:mrumair775@gmail.com" className="flex items-center justify-center
       hover:dark:bg-dark  dark:bg-light dark:text-dark hover:dark:text-light hover:dark:border-light border border-solid border-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark shadow-md  border-dark w-20 h-20 rounded-full text-light font-bold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px] ">
      Hire me
      </Link>
      </div>
    </div>
  )
}

export default Hireme
