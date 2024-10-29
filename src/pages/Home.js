import React from 'react'
import Slider from 'react-slick'
import { TypeAnimation } from 'react-type-animation'

import { skillList } from '../helpers/SkillList'
import SkillBar from '../helpers/SkillBar'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../styles/SkillCard.css"
import '../styles/Home.css'

function Home() {
const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
        },
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

        <div class="scontainer">
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">C++</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">C</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Python</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Java</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Javascript</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Bash</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">eBPF/XDP</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">WireGuard</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">OpenVSwitch</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">StrongSwan</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Gstreamer</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">ffmpeg</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">WebRTC</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Flask</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Django</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">NodeJS</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">ExpressJS</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">React</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Angular</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="skill-card">
                        <div class="card-header">
                            <div class="card-header-line">
                                <h2>Database Management</h2>
                            </div>
                            <img class="main-icon" src={skillList.dbmngt.image}/>
                        </div>
                        <div class="skills">
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Redis</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">MySQL</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">PostgreSQL</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">MongoDB</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Bucardo</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Puppeteer</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Selenium</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Scrapy</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text" id="long-text">BeautifulSoup4</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Git</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Docker</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Kubernetes</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Ansible</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Ubuntu</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Debian</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Manjaro</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Centos</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Fedora</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">PIC16 with MPLAB</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Cortex A7 with RaspberryPi</p>
                                    </div>
                                </div>
                            </div>
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
                            <div class="skills-row">
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Gimp</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">QT</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">OpenGL</p>
                                    </div>
                                </div>
                                <div class="skills-cell">
                                    <div class="skill-item">
                                        <p class="skill-text">Latex</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text">Tkinter</p>
                                    </div>
                                    <div class="skill-item">
                                        <p class="skill-text" id="long-text">Godot Engine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>

    </div>
  )
}

export default Home