import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import { GitHub, Web, YouTube } from '@mui/icons-material'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams()
    const project = projectList[id]
  return (
    <div className='project'>
        <h1> {project.title} </h1>
        <img src={project.image} alt={project.title}/>
        <div className='futureInfo'>
            <h3 className='description'> { project.description } </h3>
            <h4 className='explanation'> { project.explanation } </h4>
        </div>
        <p> <b>Skills:</b> {project.skills.join(' - ')} </p>
        <div className='prompt'>
            { project.github && <Link target="_blank" to={project.github}><GitHub/></Link>}
            { project.website && <Link target="_blank" to={project.website}><Web/></Link>}
            { project.youtube && <Link target="_blank" to={project.youtube}><YouTube/></Link>}
        </div>
    </div>
  )
}

export default ProjectDisplay