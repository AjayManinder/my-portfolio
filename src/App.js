import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Make sure the component name matches
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Education from './components/Education';
import AcademicProjects from './components/AcademicProjects';
import './styles.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* Professional Summary Section */}
      <section id="professional-summary">
        <About />
      </section>

      {/* Technologies Section */}
      <section id="technologies">
        <Technologies />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Academic Experience Section */}
      <section id="academic-experience">
        <h2>Academic Experience</h2>
        <AcademicProjects />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>
    </div>
  );
}

export default App;
