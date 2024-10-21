import React, { useEffect } from "react";
import "./homepage.css";
import AOS from "aos"; // AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelector(".hero").style.backgroundPositionY = `${scrollY * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        {/* Hero Section with Parallax Effect */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Unleash Your Creativity</h1>
            <p className="hero-subtitle">Innovative projects, built to inspire</p>
            <button
              onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
              className="hero-button"
            >
              Explore Now
            </button>
          </div>
        </section>

        {/* About Section with Reveal Animation */}
        <section className="about-section" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am a software architect, focusing on building immersive and cutting-edge solutions. My passion lies in blending technology and creativity to deliver unparalleled user experiences.
          </p>
        </section>

        {/* Portfolio Section with Interactive Cards */}
        <section id="portfolio" className="portfolio-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-container">
            {/* Existing Projects */}
            <div className="project-card" data-aos="fade-up">
              <img src="path/to/image1.jpg" alt="VR Platform" className="project-image" />
              <h3>Interactive VR Platform</h3>
              <p>Virtual worlds with endless possibilities. Fully immersive VR experiences for education and entertainment.</p>
            </div>
            <div className="project-card" data-aos="fade-up">
              <img src="path/to/image2.jpg" alt="Web Apps" className="project-image" />
              <h3>Next-Gen Web Applications</h3>
              <p>Modern, responsive web apps utilizing React and cloud-based backends for ultra-fast performance.</p>
            </div>
            <div className="project-card" data-aos="fade-up">
              <img src="path/to/image3.jpg" alt="Mobile App" className="project-image" />
              <h3>Cross-Platform Mobile App</h3>
              <p>Designed a multi-functional mobile app, bringing powerful productivity tools to your fingertips.</p>
            </div>
            {/* New Projects */}
            <div className="project-card" data-aos="fade-up">
              <img src="path/to/image4.jpg" alt="AI Chatbot" className="project-image" />
              <h3>AI-Powered Chatbot</h3>
              <p>An intelligent chatbot that enhances customer support experiences through natural language processing.</p>
            </div>
            <div className="project-card" data-aos="fade-up">
              <img src="path/to/image5.jpg" alt="E-Commerce Site" className="project-image" />
              <h3>E-Commerce Platform</h3>
              <p>A feature-rich online store with a user-friendly interface and seamless checkout experience.</p>
            </div>
            <div className="project-card" data-aos="fade-up">
              <img src="path/to/image6.jpg" alt="Data Visualization Tool" className="project-image" />
              <h3>Data Visualization Dashboard</h3>
              <p>A powerful tool for visualizing complex data sets, enabling informed decision-making.</p>
            </div>
          </div>
        </section>

        {/* Extra Features Section */}
        <section className="features-section" data-aos="fade-up">
          <h2 className="section-title">Skills & Technologies</h2>
          <ul className="features-list">
            <li>🔹 React & Redux</li>
            <li>🔹 Node.js & Express</li>
            <li>🔹 MongoDB & SQL Databases</li>
            <li>🔹 VR Development (HTC Vive)</li>
            <li>🔹 Cloud Services (AWS, Azure)</li>
            <li>🔹 UI/UX Design Principles</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="contact-section" data-aos="fade-up">
          <h2 className="section-title">Get in Touch</h2>
          <p>If you're interested in collaborating or have any questions, feel free to reach out!</p>
          <button className="contact-button" onClick={() => alert("Contact form coming soon!")}>
            Contact Me
          </button>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section" data-aos="fade-up">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonial-card">
            <p>"Sanraj's work is outstanding! His creativity knows no bounds." - Client A</p>
          </div>
          <div className="testimonial-card">
            <p>"He brought our vision to life with innovative solutions!" - Client B</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 Sanraj. Elevating Possibilities. All Rights Reserved.</p>
          <div className="social-icons">
            <button className="social-icon" onClick={() => alert("Facebook link goes here!")}>FB</button>
            <button className="social-icon" onClick={() => alert("Twitter link goes here!")}>TW</button>
            <button className="social-icon" onClick={() => alert("Instagram link goes here!")}>IG</button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;
