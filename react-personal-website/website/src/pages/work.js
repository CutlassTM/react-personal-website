import React, { useEffect } from "react";
import "./work.css";
import AOS from "aos"; // AOS for animations
import "aos/dist/aos.css"; // AOS styles

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-fledged e-commerce platform built with React, Node.js, and MongoDB, featuring user authentication, product catalog, and payment integration.",
      link: "https://ecommerceplatform.com",
      technologies: "React, Node.js, MongoDB, Stripe",
      imgUrl: "ecommerce.jpg",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing design and development skills, with a focus on responsive design and performance.",
      link: "https://portfolio.com",
      technologies: "HTML, CSS, JavaScript, Bootstrap",
      imgUrl: "portfolio.jpg",
    },
    {
      title: "Project Management Tool",
      description: "An internal tool for managing tasks and timelines for teams, with role-based access control and real-time collaboration.",
      link: "https://pmtool.com",
      technologies: "Angular, Node.js, PostgreSQL, WebSockets",
      imgUrl: "pmtool.jpg",
    },
  ];

  return (
    <>
      <div className="work-container">
        {/* Work Header */}
        <section className="work-header">
          <h1 className="work-title">My Projects</h1>
          <p className="work-intro">A collection of projects demonstrating my skills in web development, design, and collaboration.</p>
        </section>

        {/* Project Showcase */}
        <section className="work-showcase">
          {projects.map((project, index) => (
            <div className="project-card" data-aos="fade-up" key={index}>
              <img className="project-image" src={project.imgUrl} alt={project.title} />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Work;
