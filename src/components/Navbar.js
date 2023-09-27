import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwivher from "./hooks/useThemeSwivher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative  group`}>
      {title}
      <span
        className={`h-[1px] dark:bg-light left-0 -bottom-0.5 absolute inline-block bg-dark group-hover:w-full transition-[width] ease duration-300
              ${router.asPath === href ? "w-full" : "w-0"}
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button onClick={handleClick} href={href} className={`${className}   group`}>
      {title}
      <span
        className={`h-[1px] dark:bg-dark left-0 -bottom-0.5 absolute inline-block bg-light group-hover:w-full transition-[width] ease duration-300
              ${router.asPath === href ? "w-full" : "w-0"}
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};


const Navbar = () => {

  const [mode, setMode] = useThemeSwivher();
  const [isOpen, setInOpen] = useState(false)

  const handleCLick = () => {
    setInOpen(!isOpen)
  }

  return (
    <>
      <header className=" z-10 w-full lg:px-16 md:px-12 md:sm:px-8  dark:text-light px-32 py-8 font-medium flex items-center justify-between ">
        <button onClick={handleCLick}
          className="flex-col justify-items-center items-center hidden lg:flex">
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1 " : "translate-y-0.5"}`}></span>
        </button>


        {
          isOpen ?
            <motion.div
            initial={{scale:0 ,opacity:0, x:"-50",y:"-50"}}
            animate={{scale:1, opacity:1}}
            className="min-w-[70vw] flex flex-col items-center justify-between z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32 text-light dark:text-dark">
              <nav className="flex flex-col items-center justify-center">
                <CustomMobileLink href="/" title="Home" className=" relative " toggle={handleCLick} />
                <CustomMobileLink href="/about" title="About" className=" " toggle={handleCLick} />
                <CustomMobileLink href="/project" title="Project" className=" " toggle={handleCLick} />
                <CustomMobileLink href="/artical" title="Artical" className=" " toggle={handleCLick} />
              </nav>

              <nav className=" flex flex-wrap items-center justify-center  ">
                <motion.a href="https://twitter.com" target="_blank"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-2 sm:mx-1"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a href="https://github.com" target="_blank"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}

                  className="w-6 mx-2 sm:mx-1">
                  <GithubIcon />
                </motion.a>
                <motion.a href="https://linkedin.com" target="_blank"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}

                  className="w-6 mx-2 sm:mx-1">
                  <LinkedInIcon />
                </motion.a>
                <motion.a href="https://pinterest.com" target="_blank"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}

                  className="w-6 mx-2 sm:mx-1">
                  <PinterestIcon />
                </motion.a>
                <motion.a href="https://Dribbble.com" target="_blank"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}

                  className="w-6 ml-2 sm:mx-1">
                  <DribbbleIcon />
                </motion.a>

                <button

                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                  {
                    mode === 'dark' ? <SunIcon className=' fill-dark sm:mx-1' /> : <MoonIcon className=' fill-dark' />
                  }
                </button>

              </nav>
            </motion.div>
            : null
        }

        <div className="w-full flex flcol items-center justify-between lg:hidden">
          <nav>
            <CustomLink href="/" title="Home" className=" relative mr-4" />
            <CustomLink href="/about" title="About" className=" mx-4" />
            <CustomLink href="/project" title="Project" className=" mx-4" />
            <CustomLink href="/artical" title="Artical" className=" ml-4" />
          </nav>

          <nav className=" flex items-center justify-center flex-wrap ">
            <motion.a href="https://twitter.com" target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-2"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a href="https://github.com" target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}

              className="w-6 mx-2">
              <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/umair-farooq-599303260/" target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}

              className="w-6 mx-2">
              <LinkedInIcon />
            </motion.a>
            <motion.a href="https://pinterest.com" target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}

              className="w-6 mx-2">
              <PinterestIcon />
            </motion.a>
            <motion.a href="https://Dribbble.com" target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}

              className="w-6 ml-2">
              <DribbbleIcon />
            </motion.a>

            <button

              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {
                mode === 'dark' ? <SunIcon className=' fill-dark' /> : <MoonIcon className=' fill-dark' />
              }
            </button>

          </nav>
        </div>


        <div className=" absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20">
          <Logo />
        </div>

      </header>

      {/* <div className="h-[1px] mx-32 w-80% -bottom-0.5 bg-dark">
      &nbsp;
    </div> */}
    </>

  );
};

export default Navbar;
