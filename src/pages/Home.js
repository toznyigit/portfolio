import React from 'react'
import Slider from 'react-slick'
import { TypeAnimation } from 'react-type-animation'

import { skillList } from '../helpers/SkillList'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../styles/SkillCard.css"
import '../styles/Home.css'

import { PythonOriginal, COriginal, CplusplusOriginal, JavaOriginal, JavascriptOriginal, BashOriginal } from 'devicons-react'

function Home() {
const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className='home'>
        <div className='about'>
            <div class="card-header-line">
<h2> Hi there, I am Tamer.</h2>
</div>
            <h3>
                <TypeAnimation
                    sequence={[
                    "Computer Engineer",
                    1000,
                    "Software Developer",
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

        <Slider {...settings}>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Programming Languages</h2>
                        </div>
                        <img class="main-icon" src={skillList.programming_languages.image}/>
                        
                    </div>
                    <div class="skills">
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Network Security</h2>
                        </div>
                        <img class="main-icon" src={skillList.net_sec.image}/>
                    </div>
                    <div class="skills">
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Multimedia Stream and Control</h2>
                        </div>
                        <img class="main-icon" src={skillList.streaming.image}/>
                    </div>
                    <div class="skills">
                        
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Full-Stack Development</h2>
                        </div>
                        <img class="main-icon" src={skillList.fullstack.image}/>
                    </div>
                    <div class="skills">
                        <p>Flask</p>
                        <p>Django</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                        <p>Angular</p>
                        <p>React</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Data Management</h2>
                        </div>
                        <img class="main-icon" src={skillList.dbmngt.image}/>
                    </div>
                    <div class="skills">
                        
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Web Crawling</h2>
                        </div>
                        <img class="main-icon" src={skillList.crawler.image}/>
                    </div>
                    <div class="skills">
                        
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>DevOps and Configuration Management</h2>
                        </div>
                        <img class="main-icon" src={skillList.devops.image}/>
                    </div>
                    <div class="skills">
                        
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Familiar Linux Distros</h2>
                        </div>
                        <img class="main-icon" src={skillList.linux.image}/>
                    </div>
                    <div class="skills">
                        
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Embedded Programming</h2>
                        </div>
                        <img class="main-icon" src={skillList.embedded.image}/>
                    </div>
                    <div class="skills">
                        
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-card">
                    <div class="card-header">
                        <div class="card-header-line">
                            <h2>Other Skills</h2>
                        </div>
                        <img class="main-icon" src={skillList.other.image}/>
                    </div>
                    <div class="skills">
                        <table>
                        <tr>
                            <td>Gimp</td>
                            <td>Godot Engine</td>
                        </tr>
                        <tr>
                            <td>OpenGL</td>
                            <td>PyQt</td>
                        </tr>
                        <tr>
                            <td>Tkinter</td>
                            <td>Latex</td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Slider>

        <div>
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
                    <div class="skill-title">Multimedia Stream and Control</div>
                    <div class="hidden-content">
                        <p>Gstreamer</p>
                        <p>ffmpeg</p>
                        <p>WebRTC</p>
                        <p>Qt</p>
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
                        <p>C/C++</p>
                        <p>Python</p>
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
        

    </div>
  )
}

export default Home