import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    {/* <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </head> */}
    <main className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`}>
      <Navbar />
      <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />

      </AnimatePresence>
      <Footer />
    </main>
    </>
  )
}
