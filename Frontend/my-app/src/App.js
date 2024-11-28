import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Nutriton from './components/Nutrition';
import Excersie from './components/Excersie';



function App() {
  const [weather , setweather] = useState('');
  const[firstname , setfirstname] = useState('');
  const[lastname , setlastname] = useState('');
  // console.log(`${firstname} : ${lastname}`);


  localStorage.setItem("Fullname", JSON.stringify(firstname + lastname))
  return (
    <>
      <Router>
        <Navbar weather={weather} setweather={setweather} firstname={firstname} setfirstname={setfirstname} setlastname={setlastname}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/nutrition" element={<Nutriton/>} />
          <Route path="/excersie" element={<Excersie/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

