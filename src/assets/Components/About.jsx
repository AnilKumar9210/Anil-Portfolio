import { motion } from 'framer-motion';
import React from 'react'


const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      tansition: { staggeChildren: 0.15, delayChildred: 1 },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section className='about' >
      <motion.h1 variants={item} className='title'>About me</motion.h1>
      <motion.div variants={item} className="information">
        <p>I am an aspiring Web Developer currently pursuing Master of Computer Applications (MCA), with a strong foundation in front-end technologies and a keen interest in building responsive, user-friendly web applications. Passionate about learning modern web development tools and frameworks, and eager to contribute to real-world projects. A quick learner with strong problem-solving skills, aiming to grow as a full-stack developer in a collaborati  ve and innovative environment.</p>
      </motion.div>
        <motion.ul  variants={container}  initial="hidden"
        whileInView="visible">
            <motion.li variants={item}><p className='qes'>Name</p><p className='ans'> : Anil kumar Avula</p></motion.li>
            <motion.li variants={item}><p className='qes'>E-mail</p><p className='ans'> : anilkumarr9210@gmail.com</p></motion.li>
            <motion.li variants={item}><p className='qes'>phone</p><p className='ans'> : 9866470285</p></motion.li>
            <motion.li variants={item}><p className='qes'>Age</p><p className='ans'> : 22</p></motion.li>
            <motion.li variants={item}><p className='qes'>Currently pursuing</p><p className='ans'> : MCA</p></motion.li>
            <motion.li variants={item}><p className='qes'>Location</p><p className='ans'> : Karimnagar,Telangana</p></motion.li>
        </motion.ul>
      <motion.button
  variants={item}
  className="CV"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "Anil_Kumar_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download CV
</motion.button>

    </section>
  )
}

export default About
