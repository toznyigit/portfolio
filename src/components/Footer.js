import React from 'react'
import { Mail, LinkedIn, GitHub } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Mail/>
            <LinkedIn/>
            <GitHub/>
        </div>
        <p> &copy; {currentYear} Ozan Tamer Yiğit</p>
    </div>
  )
}

export default Footer