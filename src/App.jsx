import { useRef, useState } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Intro from "./assets/Components/Intro";
import About from "./assets/Components/About";
import Tech from "./assets/Components/Tech";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";

function App() {
  const [item, setItem] = useState ('home')

  const handleLink = (section) => {
    setItem (section)
  }
  return (
    <>
      <nav>
        <div className="port-folio">
          <p>Portfolio</p>
        </div>
        <div>
          <Link to="home" smooth={true} duration={600} onClick={()=> handleLink("home")}>
            <div className="link">
              <p>Home</p>
              <div className={item==="home" ? "active" : ""}></div>
            </div>
          </Link>
          <Link to="about" smooth={true} duration={600} onClick={()=> handleLink("about")}>
            <div className="link">
              <p>About</p>
              <div className={item==="about" ? "active" : ""}></div>
            </div>
          </Link>
          <Link to="skill" smooth={true} duration={600} onClick={()=> handleLink("skills")}>
            <div className="link">
              <p>Skills</p>
              <div className={item==="skills" ? "active" : ""}></div>
            </div>
          </Link>
          <Link to="projects" smooth={true} duration={600} onClick={()=>handleLink("projects")}>
            <div className="link">
              <p>Projects</p>
              <div className={item==="projects" ? "active" : ""}></div>
            </div>
          </Link>
          <Link to="contact" smooth={true} duration={600} onClick={()=>handleLink("contact")}>
            <div className="link">
              <p>Contact</p>
              <div className={item==="contact" ? "active" : ""}></div>
            </div>
          </Link>
        </div>
      </nav><>
      <Intro id="home" />
      <About id="about" />
      <Tech id="skill" />
      <Projects id="projects"  />
      <Contact id="contact" />
      </>
    </>
  );
}

export default App;
