import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about-container'>
        <div className="about-text">
          <h2>My Approach</h2>
            <p>
              I learn by doing — trying, breaking, fixing, and improving. 
              <br />
              Every coding decision I make is intentional, leading an iterative path to better solutions.
              <br />
              Since starting this year,
              I’ve completed 3 projects from scratch
              and spent countless hours sharpening my skills.
              {/* <br /> */}
              {/* It’s been messy, humbling, and absolutely worth it. */}
              <br />
              Now, I create sleek, responsive apps that feel smooth and human.
              <br />
          </p>
           <p>
              I’m the developer who gets your vision
              and brings it to life with clarity and creativity.
            </p>
          <a
            href="/ifedolapo-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta"
          >
            VIEW RESUME <span className="arrow">→</span>
          </a>
        </div>
        <div className="about-image">
          <img src="/images/about-image.jpg" alt="My picture" />
        </div>
      </div>
    </section>
  )
}

export default About