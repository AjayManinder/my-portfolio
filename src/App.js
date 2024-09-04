import React from 'react';

import ProfileCard from './components/ProfileCard/ProfileCard';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Sections/Main';
import Projects from './components/Sections/Projects';
import AcademicProjects from './components/Sections/AcademicProjects';
import PersonalProjects from './components/Sections/PersonalProjects';
import ProjectDetails from './components/DetailedProjectPage/ProjectDetails';
import './styles.css';

function App() {
  return (
   <div>
     <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route
            path="/main"
            element={<Main />}
          />
         
         <Route path="/academic-projects" element={<AcademicProjects />} />
         <Route path="/personal-projects" element={<PersonalProjects />} />
         <Route path="/professional-projects" element={<Projects />} />
         <Route path="/projects/:category/:id" element={<ProjectDetails />} />
        </Routes>
   </div>
  );
}

export default App;