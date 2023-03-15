import React, { useEffect } from 'react';
import Navbar from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import ContentCreation from './Components/pages/ContentCreation';
import Coding from './Components/pages/Coding';
import Adventure from './Components/pages/Adventure';
import AboutMe from './Components/pages/AboutMe';
import './Components/Footer.css';

function App() {
  useEffect(() => {
    document.title = "Chris Boudreau";
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ContentCreation" element={<ContentCreation />} />
        <Route exact path="/Coding" element={<Coding />} />
        <Route exact path="/Adventures" element={<Adventure />} />
        <Route exact path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;