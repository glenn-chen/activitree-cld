import './App.css';

import React from 'react';
import NavBar from './components/NavBar/navBar';
import Welcome from './components/Welcome/welcome';
import Schedule from './components/Schedule/schedule';
import Shoutouts from './components/Shoutouts/shoutouts';
import Sponsors from './components/Sponsors/sponsors';
import Footer from './components/Footer/footer';
import About from './components/AboutUs/aboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/activitree-cld" element={<React.Fragment><NavBar/><Welcome/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/Welcome" element={<React.Fragment><NavBar/><Welcome/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/schedule" element={<React.Fragment><NavBar/><Schedule/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/shoutouts" element={<React.Fragment><NavBar/><Shoutouts/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/about" element={<React.Fragment><NavBar/><About/><Footer/></React.Fragment>}/>
        <Route path="/activitree-cld/sponsors" element={<React.Fragment><NavBar/><Sponsors/><Footer/></React.Fragment>}/>
      </Routes>
    </BrowserRouter>
  );
}
