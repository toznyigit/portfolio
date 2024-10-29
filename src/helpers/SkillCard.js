import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectList } from '../helpers/ProjectList'
import "../styles/Projects.css"

function SkillCard() {
  return (
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
						<CplusplusOriginal class="skill-icon"/>
						<div class="progress-container">
							<div class="progress" style={{"--p": "10%"}}/>
						</div>
					</div>
					<div class="skill-item">
						<COriginal class="skill-icon"/>
						<div class="progress-container">
							<div class="progress" style={{"--p": "15%"}}/>
						</div>
					</div>
					<div class="skill-item">
						<PythonOriginal class="skill-icon"/>
						<div class="progress-container">
							<div class="progress" style={{"--p": "5%"}}/>
						</div>
					</div>
					
					
					
				</div>
				<div class="skills-cell">
					<div class="skill-item">
						<JavascriptOriginal class="skill-icon"/>
						<div class="progress-container">
							<div class="progress" style={{"--p": "20%"}}/>
						</div>
					</div>
					<div class="skill-item">
						<JavaOriginal class="skill-icon"/>
						<div class="progress-container">
							<div class="progress" style={{"--p": "25%"}}/>
						</div>
					</div>
					<div class="skill-item">
						<BashOriginal class="skill-icon"/>
						<div class="progress-container">
							<div class="progress" style={{"--p": "30%"}}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Projects