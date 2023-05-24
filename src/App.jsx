import React from 'react'
import { Route, Link, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from "./components/Navbar";
import { AnimatePresence } from 'framer-motion';
const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence initial={false} >
      <Navbar />
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App