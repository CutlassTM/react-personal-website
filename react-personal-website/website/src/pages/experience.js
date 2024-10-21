import React, { useEffect } from "react";
import "./experience.css";
import AOS from "aos"; // AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <>
      <div className="experience-container">
        {/* Experience Header */}
        <section className="experience-header">
          <h1 className="experience-title">Professional Experience</h1>
          <p className="experience-intro">A journey of innovation, creativity, and leadership in software development and architecture.</p>
        </section>

        {/* Experience Timeline */}
        <section className="experience-timeline">
          <div className="timeline-item" data-aos="fade-right">
            <h2 className="timeline-role">Software Architect</h2>
            <h3 className="timeline-company">Tech Innovations Ltd. (2021 - Present)</h3>
            <p className="timeline-description">
              Spearheading the architecture and development of scalable software solutions, with a focus on cutting-edge technology and cloud infrastructure.
            </p>
            <ul className="timeline-achievements">
              <li>Led the development of an enterprise-level SaaS platform, reducing operating costs by 30%.</li>
              <li>Integrated AI-driven solutions to optimize user engagement and data analytics.</li>
              <li>Collaborated cross-functionally with design, marketing, and operations teams.</li>
            </ul>
            <p className="timeline-tech">Technologies: AWS, React, Node.js, Docker, Microservices</p>
          </div>

          <div className="timeline-item" data-aos="fade-left">
            <h2 className="timeline-role">Lead Full-Stack Developer</h2>
            <h3 className="timeline-company">Innovative Web Solutions (2018 - 2021)</h3>
            <p className="timeline-description">
              Managed a team of developers in building dynamic web applications for diverse industries, ensuring scalability and performance.
            </p>
            <ul className="timeline-achievements">
              <li>Built and maintained 10+ highly performant applications, serving over 100,000 daily users.</li>
              <li>Redesigned legacy systems, improving efficiency by 40%.</li>
              <li>Mentored junior developers and implemented agile methodologies for continuous improvement.</li>
            </ul>
            <p className="timeline-tech">Technologies: React, Angular, MongoDB, Express, Jenkins, Git</p>
          </div>

          <div className="timeline-item" data-aos="fade-right">
            <h2 className="timeline-role">Frontend Developer</h2>
            <h3 className="timeline-company">Creative Agency XYZ (2015 - 2018)</h3>
            <p className="timeline-description">
              Developed engaging, responsive user interfaces for clients in e-commerce, finance, and education, focusing on delivering smooth user experiences.
            </p>
            <ul className="timeline-achievements">
              <li>Designed and implemented mobile-first web applications that increased conversion rates by 25%.</li>
              <li>Optimized UI components for performance, achieving a 40% reduction in load times.</li>
              <li>Collaborated closely with designers to ensure pixel-perfect execution.</li>
            </ul>
            <p className="timeline-tech">Technologies: JavaScript, HTML5, CSS3, Bootstrap, SASS</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
