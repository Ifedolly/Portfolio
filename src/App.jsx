import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetails from './pages/ProjectDetails';

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" 
          element={
            <>
              <Hero />
              <Projects />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App