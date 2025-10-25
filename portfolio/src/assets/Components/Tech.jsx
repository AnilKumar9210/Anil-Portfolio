import React from 'react'
import react from '../icons/atom.png'
import c from '../icons/c-.png'
import html from '../icons/html.png'
import css from '../icons/css-3.png'
import js from '../icons/java-script.png'
import python from '../icons/py.png'
import git from '../icons/social.png'
import github from '../icons/github.png'
import java from '../icons/java.png'

const Tech = () => {
  return (
    <div className='tech'>
      <h1 className="tech-title">Tools & Technologies</h1>

      <div className="tools">
        
        <div className="box">
            <img src={html} alt="" />
            <p>HTML5</p>
        </div>
        <div className="box">
            <img src={css} alt="" />
            <p>CSS3</p>
        </div>
        <div className="box">
            <img src={js} alt="" />
            <p>Java Script</p>
        </div>
        <div className="box">
            <img src={react} alt="" />
            <p>ReactJs</p>
        </div>
        <div className="box">
            <img src={github} alt="" />
            <p>Github</p>
        </div>
        <div className="box">
            <img src={git} alt="" />
            <p>Git</p>
        </div>
        <div className="box">
            <img src={python} alt="" />
            <p>Python</p>
        </div>
        <div className="box">
            <img src={c} alt="" />
            <p>C++</p>
        </div>
        <div className="box">
            <img src={java} alt="" />
            <p>Java</p>
        </div>
      </div>
    </div>
  )
}

export default Tech
