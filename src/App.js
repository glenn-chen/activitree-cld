import './App.css';

import React from 'react';
import NavBar from './components/NavBar/navBar';
import Welcome from './components/Welcome';
import Schedule from './components/Schedule';
import Shoutouts from './components/Shoutouts';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer/footer';
import About from './components/AboutUs/aboutUs';
import { HashRouter, Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/activitree-cld" element={<React.Fragment><NavBar/><Welcome/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/welcome" element={<React.Fragment><NavBar/><Welcome/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/schedule" element={<React.Fragment><NavBar/><Schedule/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/shoutouts" element={<React.Fragment><NavBar/><Shoutouts/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/about" element={<React.Fragment><NavBar/><About/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/sponsors" element={<React.Fragment><NavBar/><Sponsors/><Footer/></React.Fragment>}/>
      </Routes>
    </HashRouter>
  );
}

//<Route path="/activitree-cld" element={<React.Fragment><NavBar/><Welcome/><Footer/></React.Fragment>}/>