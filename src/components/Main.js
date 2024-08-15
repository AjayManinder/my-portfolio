import React from 'react'
import Home from './Home';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import Education from './Education';
import PersonalProjects from './PersonalProjects';
import AcademicProjects from './AcademicProjects';
import Navbar from './Navbar';
const Main = () => {
  return (
    <div>

    <Navbar />
    
            <div id='home'>
            <Home />
            </div>
    
          <section id="professional-summary">
            <About />
          </section>
    
          <section id="technologies">
            <Technologies />
          </section>
    
          <section id="projects">
            <Projects />
          </section>
          <section id="academic">
            <AcademicProjects />
          </section>
    
          <section id="personal">
            <PersonalProjects />
          </section>
          <section id="education">
            <Education />
          </section>
        </div>
  )
}

export default Main;
