import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <h1 className='title'>About me</h1>
      <div className="information">
        <p>I am an aspiring Web Developer currently pursuing Master of Computer Applications (MCA), with a strong foundation in front-end technologies and a keen interest in building responsive, user-friendly web applications. Passionate about learning modern web development tools and frameworks, and eager to contribute to real-world projects. A quick learner with strong problem-solving skills, aiming to grow as a full-stack developer in a collaborative and innovative environment.</p>
      </div>
        <ul>
            <li><p className='qes'>Name</p><p className='ans'> : Anil kumar Avula</p></li>
            <li><p className='qes'>E-mail</p><p className='ans'> : anilkumarr9210@gmail.Components</p></li>
            <li><p className='qes'>phone</p><p className='ans'> : 9898218789</p></li>
            <li><p className='qes'>Age</p><p className='ans'> : 22</p></li>
            <li><p className='qes'>Currently pursuing</p><p className='ans'> : MCA</p></li>
            <li><p className='qes'>Location</p><p className='ans'> : Karimnagar,Telangana</p></li>
        </ul>
      <button className='CV'
      onClick={()=> {
        const link = document.createElement ('a');
        link.href = "/resume.pdf";
        link.download = "Anil_kumar_resume.pdf"
        link.click ();
      }}>Download CV</button>
    </section>
  )
}

export default About
