import React from 'react'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, my name is Tamer.</h2>

        </div>
        <div className='skills'>
            <h1 className='skills'></h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Network Security</h2>
                    <span>
                        eBPF/XDP, OpenVSwitch, WireGuard, StrongSwan
                    </span>
                    <h2>Full-Stack Development</h2>
                    <span>
                        ExpressJS, NodeJS, Django, Flask, Angular, React
                    </span>
                    <h2>Data Management</h2>
                    <span>
                        Redis, MySQL, MongoDB, PostgreSQL, Bucardo
                    </span>
                    <h2>Data Scraping</h2>
                    <span>
                        Puppeteer, Selenium, Scrapy, BeautifulSoup4
                    </span>
                    <h2>DevOps and Configuration Management</h2>
                    <span>
                        Git, Docker/Docker Compose, Kubernetes, Ansible
                    </span>
                    <h2>Familiar Linux Distributions</h2>
                    <span>
                        Manjaro, Ubuntu, Debian, Centos, Fedora
                    </span>
                    <h2>Embedded Programming</h2>
                    <span>
                        PIC16 with MPLAB, Cortex A7 with RaspberryPi
                    </span>
                    <h2>Programming Languages</h2>
                    <span>
                        Python, C/C++, Javascript, Java, Bash, Assembly
                    </span>
                    <h2>Other Skills</h2>
                    <span>
                        Gimp, OpenGL, Godot Engine, PyQt, Tkinter, Latex
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home