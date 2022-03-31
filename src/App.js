import './App.css';

import React from 'react';
import NavBar from './components/NavBar/navBar';
import Welcome from './components/Welcome/welcome';
import Schedule from './components/Schedule/schedule';
import Shoutouts from './components/Shoutouts/shoutouts';
import Sponsors from './components/Sponsors/sponsors.js';
import Footer from './components/Footer/footer';
import About from './components/AboutUs';
import { HashRouter, Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/shoutouts" element={<Shoutouts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sponsors" element={<Sponsors/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}
