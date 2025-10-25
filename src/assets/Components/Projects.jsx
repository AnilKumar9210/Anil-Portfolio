import React from 'react'
import Backgrounds from '../../Export'

const Projects = () => {
  return (
    <div className='projects'>
        <h1 className="tech-title">My Projects</h1>
        <div className="project-list">
            {Backgrounds.map ((data,index)=>(<a href={data.link} target='__blank' className="project" key={index}>
                <div className="photo"><img src={data.bg} alt="" /></div>
                <div className="project-info">
                    <h5>{data.title}</h5>
                    <p className="description">{data.desc}</p>
                    <ul className="tech-stack">
                        {data.tech.map ((stack,i)=> (<li key={i}>{stack}</li>))}
                    </ul>
                </div>
            </a>))}
        </div>
    </div>
  )
}

export default Projects
