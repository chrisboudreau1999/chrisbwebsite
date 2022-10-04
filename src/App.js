
import './App.css';
import React from 'react';
import Navbar from "./Components/Nav";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element/>
      </Routes>
    </Router>
  );
}

export default App;
