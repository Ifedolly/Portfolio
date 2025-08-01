import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import SkillsMarquee from './components/SkillsMarquee';
import Contact from './components/Contact';
import ProjectDetails from './pages/ProjectDetails'; 
import ScrollToTop from './components/ScrollToTop';
import ScrollToHash from "./components/ScrollToHash";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Projects />
              <About />
              <SkillsMarquee />
              <Contact />
            </>
          } 
        />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
