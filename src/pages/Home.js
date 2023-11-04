import React from 'react'
import { TypeAnimation } from 'react-type-animation'


import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi there, I am Tamer.</h2>
            <h3>
                <TypeAnimation
                    sequence={[
                    "Computer Engineer",
                    1000,
                    "System & Software Developer",
                    1000,
                    "Embedded & Kernel Enthusiastic",
                    1000,
                    "Electronic Hobbyist",
                    1000,
                    ]}
                    speed={25}
                    repeat={Infinity}
                />
            </h3>
        </div>
        <h1 class='title'> Interests & Skills </h1>
        <div class="skills-container">
            <div class="skill-box">
                <div class="skill-title">Network Security</div>
                <div class="hidden-content">
                    <p>eBPF/XDP</p>
                    <p>OpenVSwitch</p>
                    <p>WireGuard</p>
                    <p>StrongSwan</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">Full-Stack Development</div>
                <div class="hidden-content">
                    <p>Flask</p>
                    <p>Django</p>
                    <p>NodeJS</p>
                    <p>ExpressJS</p>
                    <p>Angular</p>
                    <p>React</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">Data Management</div>
                <div class="hidden-content">
                    <p>Redis</p>
                    <p>MySQL</p>
                    <p>MongoDB</p>
                    <p>PostgreSQL</p>
                    <p>Bucardo</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">Data Scraping</div>
                <div class="hidden-content">
                    <p>Puppeteer</p>
                    <p>Selenium</p>
                    <p>Scrapy</p>
                    <p>BeautifulSoup4</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">DevOps and Configuration Management</div>
                <div class="hidden-content">
                    <p>Git</p>
                    <p>Docker/Docker Compose</p>
                    <p>Kubernetes</p>
                    <p>Ansible</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">Familiar Linux Distributions</div>
                <div class="hidden-content">
                    <p>Ubuntu</p>
                    <p>Debian</p>
                    <p>Manjaro</p>
                    <p>Centos</p>
                    <p>Fedora</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">Embedded Programming</div>
                <div class="hidden-content">
                    <p>PIC16 with MPLAB</p>
                    <p>Cortex A7 with RaspberryPi</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">Programming Languages</div>
                <div class="hidden-content">
                    <p>Python</p>
                    <p>C/C++</p>
                    <p>Javascript</p>
                    <p>Java</p>
                    <p>Bash Script</p>
                </div>
            </div>

            <div class="skill-box">
                <div class="skill-title">Other Skills</div>
                <div class="hidden-content">
                    <p>Gimp</p>
                    <p>OpenGL</p>
                    <p>Godot Engine</p>
                    <p>PyQt</p>
                    <p>Tkinter</p>
                    <p>Latex</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home