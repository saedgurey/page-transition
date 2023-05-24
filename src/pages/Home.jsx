import React from 'react'
import About from './About'
import Contact from './Contact'
import { motion as m } from "framer-motion";
const Home = () => {
  return (

    <m.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    exit={{opacity:1}}
    
    className='overflow-hidden absolute top-0 left-0 w-full h-full bg-gray-300 py-[280px] '>
    <About/>
    <Contact/>

    </m.div>
  )
}

export default Home