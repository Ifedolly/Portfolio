import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about-container'>
        <div className="about-text">
          <h2>About Me</h2>
            <p>
              My first lines of code barely worked—but they were mine.
              And with every broken layout and late-night bug fix, I got better.
              <br />
              Since starting this year,
              I’ve completed 3 projects from scratch
              and spent countless hours sharpening my skills.
              <br />
              It’s been messy, humbling, and absolutely worth it.
              <br />
              Now, I create sleek, responsive apps that feel smooth and human.
              <br />
          </p>
           <p>
              I’m the developer who gets your vision
              and brings it to life with clarity and creativity.
            </p>
          <a
            href="/ifedolapo-olawale-resume.pdf"
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