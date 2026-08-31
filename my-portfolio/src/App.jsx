import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Import the updated X (formerly Twitter) icon from react-icons/fa6
import './App.css'; // Import the CSS file for styling and theme management

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark'); // Default to dark theme if no preference is stored

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3']
    },
    {
      category: 'Mobile & Apps',
      items: ['React Native', 'Expo', 'Responsive UI', 'Mobile UX']
    },
    {
      category: 'Backend & Tools',
      items: ['Node.js', 'Express.js', 'REST APIs', 'Git & GitHub', 'PostgreSQL']
    }
  ];

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A polished one-page portfolio that highlights projects, experience, and ways to connect.',
      tags: ['React', 'CSS', 'Responsive'],
      github: 'https://github.com/Dickens12-derrick',
      demo: '#'
    },
    {
      title: 'E Katale ConsumerApp',
      description: 'An interactive shopping experience with product browsing, filtering, and cart-friendly interactions.',
      tags: ['React Native', 'TypeScript', 'Expo'],
      github: 'https://github.com/Dickens12-derrick',
      demo: '#'
    },
    {
      title: 'E Katale Landing Page',
      description: 'A clean landing page for showcasing product categories, services, and partner offerings.',
      tags: ['React', 'Tailwind CSS', 'UI Design'],
      github: 'https://github.com/Dickens12-derrick',
      demo: '#'
    },

    {
      title: 'ShanbaLink Mobile Application',
      description: 'An application built for showcasing product categories, services, and partner offerings. I built this app for my Project Course Work.',
      tags: ['Kotlin'],
      github: 'https://github.com/Dickens12-derrick',
      demo: '#'
    }


  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">DDO</a>
          <div className="nav-controls">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'},
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">ICT Student • Learning Modern Tech</p>
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Derrick Dickens Omoding</span>
            </h1>
            <p className="hero-copy">
              I'm a student at Nkumba University building practical skills in computer systems, web development, and digital problem solving. I enjoy turning ideas into usable solutions through thoughtful design, clear code, and steady learning.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Dickens12-derrick" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/derrick-dickens-omoding-19278840b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://wa.me/256742258343" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://x.com/Omoding45968" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/omodingderrick?igsh=YmZnanp0b2ZvcmY2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/da.dext.ding" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="mailto:ddickensomoding@gmail.com" aria-label="Email">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          <div className="hero-avatar">
            <img src="/derrick.jpeg" alt="Derrick Dickens Omoding" />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects / Work</p>
            <h2 className="section-title">Selected work</h2>
            <p className="section-description">
              I enjoy translating ideas into practical digital experiences that are useful, polished, and easy to navigate.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">Source Code</a>
                  <a href={project.demo}>Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">What I work with</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-card">
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2 className="section-title">A little more about me</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <p>
                I am an aspiring ICT professional who enjoys learning by building. My focus is on creating dependable digital experiences, improving my technical foundation, and growing into a confident developer who can solve real problems with clear thinking and practical solutions.
              </p>
              <p>
                Beyond the screen, I value teamwork, curiosity, and continuous improvement. I am especially interested in web and mobile development because it lets me turn ideas into tools that people can use every day.
              </p>
            </div>
            <div className="about-card">
              <h3>What I bring</h3>
              <ul className="about-list">
                <li>Strong interest in user-friendly design</li>
                <li>Willingness to learn quickly and adapt</li>
                <li>Focus on clean structure and practical delivery</li>
                <li>Comfort working with modern web tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let's connect</h2>
            <p className="section-description">
              I'm open to collaborations, internships, and conversations about building something meaningful.
            </p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <p>Feel free to reach out for ideas, opportunities, or a simple hello.</p>
              <p>
                <strong>Email:</strong>{' '}
                <a className="contact-link" href="mailto:ddickensomoding@gmail.com" data-hover="Send email" aria-label="Send an email to Derrick Dickens Omoding">
                  ddickensomoding@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a className="contact-link" href="tel:+256742258343" data-hover="Call Now" aria-label="Call Derrick Dickens Omoding">
                  0742258343
                </a>
              </p>
              <p><strong>Location:</strong> Uganda • Open to remote and collaborative work</p>
            </div>
            <form className="contact-form" action="mailto:ddickensomoding@gmail.com" method="post" encType="text/plain">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" autoComplete="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" autoComplete="off" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} DDO. Crafted with care.</p>
        </div>
      </footer>
    </div>
  );
}