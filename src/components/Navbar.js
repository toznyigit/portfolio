import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { Reorder } from '@mui/icons-material'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    useEffect(()  => {
        setExpandNavbar(false)
    }, [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <Reorder />
            </button>
        </div>
        <div className='links'>
            <NavLink to="/" class={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/projects" class={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink>
            <NavLink to="/experience" class={({ isActive }) => (isActive ? 'active' : 'inactive')}>Experience</NavLink>
        </div>
    </div>
  )
}

export default Navbar