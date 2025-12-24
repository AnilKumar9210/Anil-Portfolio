import React from "react";
import { motion } from "framer-motion";

import react from "../icons/atom.png";
import c from "../icons/c-.png";
import html from "../icons/html.png";
import css from "../icons/css-3.png";
import js from "../icons/java-script.png";
import python from "../icons/py.png";
import git from "../icons/social.png";
import github from "../icons/github.png";
import java from "../icons/java.png";
import express from "../icons/Express.png";
import mongodb from "../icons/MongoDB.png";
import node from "../icons/Node.js.png";


const tools = [
  { img: html, name: "HTML5" },
  { img: css, name: "CSS3" },
  { img: js, name: "JavaScript" },
  { img: react, name: "ReactJs" },
  { img: github, name: "Github" },
  { img: git, name: "Git" },
  { img: python, name: "Python" },
  { img: c, name: "C++" },
  { img: java, name: "Java" },
  { img: node, name: "Node JS" },
  { img: express, name: "Express JS" },
  { img: mongodb, name: "MongoDB" },
];

// Container animation (stagger children)
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// Box animation: alternate left/right
// const boxVariants = {
//   hidden: (i) => ({
//     opacity: 0,
//     x: i % 2 === 0 ? -80 : 80, // left for even, right for odd
//   }),
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

const Tech = () => {
  return (
    <div className="tech">
      <h1 className="tech-title">Tools & Technologies</h1>

      <motion.div
        className="tools"
        // variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tools.map((tool, i) => (
          <motion.div
            className="box"
            key={i}
            // variants={boxVariants}
            custom={i}
            whileHover={{ scale: 1.08 }}
          >
            <img src={tool.img} alt={tool.name} />
            <p>{tool.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
