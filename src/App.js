import './App.css';

import React from 'react';
import NavBar from './components/NavBar/navBar';
import Welcome from './components/Welcome/welcome';
import Schedule from './components/Schedule/schedule';

function App() {
  return (
    <div>
      <NavBar />
      <Schedule />
    </div>
  );
}

export default App;
