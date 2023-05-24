import React from 'react'
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div 
    initial={{ y:"100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut"}}
    exit={{opacity:1}}
    className=" overflow-hidden absolute py-[270px] h-full w-full  text-2xl bg-blue-100 top-0 left-0"> this About page</m.div>
  )
}

export default About