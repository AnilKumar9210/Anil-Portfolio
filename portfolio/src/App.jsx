import { useRef, useContext } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Intro from "./assets/Components/Intro";
import About from "./assets/Components/About";
import Tech from "./assets/Components/Tech";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";
import { MyContext } from "./assets/Context/Context";

function App() {
  
  // const hireRef = useRef(null);
  // const workRef = useRef(null);

  // const { hireRef, workRef } = useContext(MyContext);

  return (
    <>
      <nav>
        <div className="port-folio">
          <p>Portfolio</p>
        </div>
        <div>
          <Link to="home" smooth={true} duration={600}>
            <div className="link">
              <p>Home</p>
              <div className="active"></div>
            </div>
          </Link>
          <Link to="about" smooth={true} duration={600}>
            <div className="link">
              <p>About</p>
              <div className="active"></div>
            </div>
          </Link>
          <Link to="skills" smooth={true} duration={600}>
            <div className="link">
              <p>Skills</p>
              <div className="active"></div>
            </div>
          </Link>
          <Link to="projects" smooth={true} duration={600}>
            <div className="link">
              <p>Projects</p>
              <div className="active"></div>
            </div>
          </Link>
          <Link to="contact" smooth={true} duration={600}>
            <div className="link">
              <p>Contact</p>
              <div className="active"></div>
            </div>
          </Link>
        </div>
      </nav>
      <Intro id="home" />
      <About id="about" />
      <Tech id="skills" />
      <Projects id="projects"  />
      <Contact id="contact" />
    </>
  );
}

export default App;
