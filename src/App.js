
import './App.css';
import React from 'react';
import Navbar from "./Components/Nav";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/pages/Home'
import ContentCreation from './Components/pages/ContentCreation'
import Coding from './Components/pages/Coding'
import Adventure from './Components/pages/Adventure'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path="/ContenCreation" element={<ContentCreation/>}/> 
      </Routes>
      <Routes>
        <Route exact path="/Coding" element={<Coding/>}/> 
      </Routes>
      <Routes>
        <Route exact path="/Adventures" element={<Adventure/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
