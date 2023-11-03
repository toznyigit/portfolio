import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, LinkedIn, GitHub } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

  return (
    <div className='footer'>
        <div className='socialMedia'>
            
            <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:t.ozanyigit@gmail.com'}><Mail/></Link>
            <Link target="_blank" to="https://www.linkedin.com/in/ozan-tamer-yigit/"><LinkedIn/></Link>
            <Link target="_blank" to="https://github.com/toznyigit"><GitHub/></Link>
        </div>
        <p> &copy; {currentYear} Ozan Tamer Yiğit</p>
    </div>
  )
}

export default Footer