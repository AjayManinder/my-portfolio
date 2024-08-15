import React from 'react';

import ProfileCard from './components/ProfileCard/ProfileCard';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
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
         
         
        </Routes>
   </div>
  );
}

export default App;