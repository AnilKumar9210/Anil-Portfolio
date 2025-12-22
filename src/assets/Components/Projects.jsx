import React from "react";
import { motion } from "framer-motion";
import Backgrounds from "../../Export";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // faster stagger
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 60, // come from bottom
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // faster animation
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="tech-title">My Projects</h1>

      <motion.div
        className="project-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Backgrounds.map((data, index) => (
          <motion.a
            href={data.link}
            target="__blank"
            className="project"
            key={index}
            variants={projectVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="photo">
              <img src={data.bg} alt={data.title} />
            </div>

            <div className="project-info">
              <h5>{data.title}</h5>
              <p className="description">{data.desc}</p>
              <ul className="tech-stack">
                {data.tech.map((stack, i) => (
                  <li key={i}>{stack}</li>
                ))}
              </ul>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
