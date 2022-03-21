import './App.css';

import React from 'react';
import NavBar from './components/NavBar/navBar';
import Welcome from './components/Welcome';
import Schedule from './components/Schedule';
import Shoutouts from './components/Shoutouts';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer/footer';
import About from './components/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/activitree-cld" element={<React.Fragment><NavBar/><Welcome/><Footer/></React.Fragment>}/>
        <Route path="/Welcome/index.js" element={<React.Fragment><NavBar/><Welcome/><Footer/></React.Fragment>}/>
        <Route path="/Schedule/index.js" element={<React.Fragment><NavBar/><Schedule/><Footer/></React.Fragment>}/>
        <Route path="/Shoutouts/index.js" element={<React.Fragment><NavBar/><Shoutouts/><Footer/></React.Fragment>}/>
        <Route path="/AboutUs/index.js" element={<React.Fragment><NavBar/><About/><Footer/></React.Fragment>}/>
        <Route path="/Sponsors/index.js" element={<React.Fragment><NavBar/><Sponsors/><Footer/></React.Fragment>}/>
      </Routes>
    </BrowserRouter>
  );
}
