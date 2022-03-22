import './App.css';

import React from 'react';
import NavBar from './components/NavBar/navBar';
import Welcome from './components/Welcome/welcome';
import Schedule from './components/Schedule/schedule';
import Shoutouts from './components/Shoutouts/shoutouts';
import Sponsors from './components/Sponsors/sponsors';
import Footer from './components/Footer/footer';
import About from './components/AboutUs/aboutUs';
import { HashRouter, Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/activitree-cld/schedule" element={<Schedule/>}/>
        <Route path="/activitree-cld/shoutouts" element={<Shoutouts/>}/>
        <Route path="/activitree-cld/about" element={<About/>}/>
        <Route path="/activitree-cld/sponsors" element={<Sponsors/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}
