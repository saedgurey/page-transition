import React from 'react'
import { motion as m } from "framer-motion";
const Contact = () => {
  return (
    <m.div 
    initial={{ y:"100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut"}}
    exit={{opacity:1}}
    className='absolute overflow-hidden top-0 left-0 py-[270px] h-full w-full text-2xl bg-pink-100'>Contact</m.div>
  )
}

export default Contact