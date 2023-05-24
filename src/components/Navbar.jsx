import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='relative z-50 flex justify-between'>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
        </div>
    )
}

export default Navbar