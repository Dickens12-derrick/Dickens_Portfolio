import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaEnvelope 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './App.css';

// 1. IMPORT YOUR IMAGE HERE
// import derrickImg from './assets/derrick.jpeg';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const skills = [
    'JavaScript',
    'React Native',
    'TypeScript',
    'Tailwind CSS',
    'Mobile Application',
    'React',
    // 'Adobe Photoshop',
    'Python',
    'Express.js',
    'Postgre SQL',
    'SWI Prolog',
    'HTML5 & CSS3',
    'Git & GitHub',
    'Website Design',
    'Node.js (Basic)',
    'REST APIs'
  ];

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A responsive single-page portfolio built showcasing projects, skills, and contact options.',
      tags: ['React', 'Tailwind CSS', 'Responsive'],
      link: "#",
      repo: "#",
      featured: true,
      github: 'https://github.com/Dickens12-derrick',
      demo: '#'
    },
    {
      title: 'E Katale ConsumerApp',
      description: 'Front-end web application featuring a product gallery, filtering options, and an interactive shopping cart.',
      tags: ['React Native', 'TypeScript', 'Expo', 'CSS'],
      github: 'https://github.com/Dickens12-derrick',
      demo: '#'
    },
    {
      title: 'E Katale Landing Page',
      description: 'A Web Page showing various frameworks of the E Katale like farmer, sho, products, warehouse, e.t.c.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Dickens12-derrick',
      demo: '#'
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">Derrick Dickens Omoding</a>
          <div className="nav-controls">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Derrick Dickens Omoding</span> <br />

             <p className='dickens'>
              I'm a student at Nkumba University. I'm an ICT student developing foundational skills incomputer systems and digital problem solving. I enjoy turning ideas practical solutions using technology and I am focused in building proffessional habbits like teamwork, documentation, and continuous learning. My goal is to grow into a reliable ICT professional who can support organization with efficient, secure and user-friendly systems. 
            </p> <br />
            
            </h1>
            {/* <h2 className="hero-subtitle">Software Developer</h2>
            <p className="hero-tagline">
              Passionate about building clean, performant, and user-friendly web applications.
            </p> */}
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/Dickens12-derrick" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={26} />
              </a>
              <a href="https://www.linkedin.com/in/derrick-dickens-omoding-19278840b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={26} />
              </a>
              <a href="https://wa.me/256742258343" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={26} />
              </a>
              <a href="https://x.com/Omoding45968" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaXTwitter size={26} />
              </a>
              <a href="https://www.instagram.com/omodingderrick?igsh=YmZnanp0b2ZvcmY2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={26} />
              </a>
              <a href="https://www.facebook.com/da.dext.ding" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={26} />
              </a>
              <a href="mailto:ddickensomoding@gmail.com" aria-label="Email">
                <FaEnvelope size={26} />
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className="hero-avatar">
            <img 
              src="/derrick.jpeg" 
              alt="Derrick Dickens Omoding" 
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div>
              <p>
                As a beginner in ICT, I'm learning how technology connects people, data and processes. I am a dedicated software developer driven by crafting practical solutions to real-world problems. 
                My current focus lies in modern web technologies, building scalable interfaces, and constantly improving 
                my technical workflow.
              </p>
              <h3 className="skills-heading">Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
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

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p>I'm open to new opportunities, collaborations, or general questions. Feel free to drop a message!</p>
              <p><strong>Email:</strong> ddickensomoding@gmail.com</p>
              <p><strong>Phone:</strong> 0742258343</p>
            </div>
            <form 
              className="contact-form" 
              action="mailto:ddickensomoding@gmail.com" 
              method="post" 
              encType="text/plain"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Derrick Dickens Omoding.</p>
        </div>
      </footer>
    </div>
  );
}