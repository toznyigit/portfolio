import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { School, Work } from '@mui/icons-material'
import "react-vertical-timeline-component/style.min.css"
// import "../styles"


function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date="Sep 2016 - Jun 2018"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<School/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Gazi University
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        Drop
                    </h5>
                    <p> Medicine </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date="Sep 2018 - Jul 2023"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<School/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Middle East Technical University
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>
                    <p> Computer Science </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date="Aug 2021 - Oct 2021"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<Work/>}>
                    <h3 className='vertical-timeline-element-title'>
                        SOMERA - Social Media Investigate, Survey and Analysis 
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Software Engineering Intern
                    </h4>
                    <p> Development of web-crawlers and data analysis for e-commerce sites.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date="Oct 2021 - Jul 2022"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<Work/>}>
                    <h3 className='vertical-timeline-element-title'>
                        SOMERA - Social Media Investigate, Survey and Analysis 
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Software Engineer
                    </h4>
                    <p> Development of web-crawlers and data analysis for popular social media sites. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date="Jul 2022 - Sep 2022"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<Work/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Labris Networks
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Software Engineering Intern
                    </h4>
                    <p> Development of networking and network-security tools. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date="Sep 2023 - Aug 2023"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<Work/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Labris Networks
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Software Engineer
                    </h4>
                    <p> Maintenance and development of next generation firewall UTMs and their control unit MNG. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date="Aug 2023 - present"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<Work/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Labris Networks
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        System and Software Engineer
                    </h4>
                    <p> Development of DDoS mitigation system HARRP4. </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience