
import './App.css';
import React from 'react';
import Navbar from "./Components/Nav";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/pages/Home'
import ContentCreation from './Components/pages/ContentCreation'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ContentCreation" element={<ContentCreation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
