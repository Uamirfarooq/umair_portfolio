import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {

  const MotionLink = motion(Link)

  return (
    <div className='flex items-center justify-center mt-2'>

      <MotionLink href="/" className='w-20 h-20 dark:border-light border border-solid border-transparent bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold' whileHover={{
        backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)"],

        color: ["rgb(245 245 245)", "rgba(131,58,180,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgb(245 245 245)"],
        transition: { duration: 1.5, repeat: Infinity },
      }}>UF</MotionLink>
    </div>
  )
}
export default Logo
