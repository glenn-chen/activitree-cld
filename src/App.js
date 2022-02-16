import './App.css';

import React from 'react';
import NavBar from './components/NavBar/navBar';
import Welcome from './components/Welcome/welcome';
import Shoutouts from './components/Shoutouts/shoutouts';
import Sponsors from './components/Sponsors/sponsors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Welcome />
        <Shoutouts />
        <Sponsors />
      </div>
    </Router>
    
  );
}
