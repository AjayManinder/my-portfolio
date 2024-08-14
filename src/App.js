import React from 'react';

import Home from './components/Home';
import About from './components/About'; // Make sure the component name matches
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Education from './components/Education';
import PersonalProjects from './components/PersonalProjects';
import AcademicProjects from './components/AcademicProjects';
import './styles.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>

<Navbar />
        <Home />
      

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
  );
}

export default App;
