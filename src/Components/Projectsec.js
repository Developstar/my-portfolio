import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Components/ProjectsecStyles.css"
import Project1 from "./ProjectImage/Project1.png"

export default function Projectsec(prop) {
  return (
    <div className='projectPage_container'>
        <h1 className='project_heading'>Projects</h1>
        <div className='project_container'>
            <div className='project-image'>
                <img src={Project1} alt='' />
                <h2 className='project-title'>{prop.projectTitle}</h2>
                <div className='project_details'>
                  <p>This is a text</p>
                  <div className='pro-btns'>
                    <NavLink to= "http://exam-gamma.vercel.app"
                    className="btn">View</NavLink>
                    <NavLink to= "http://exam-gamma.vercel.app"
                    className="btn">Source</NavLink>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
