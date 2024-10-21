import React, { useEffect } from "react";
import "./playground.css";
import AOS from "aos"; // AOS for animations
import "aos/dist/aos.css"; // AOS styles

const Playground = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="playground-container">
        {/* About Me Header */}
        <section className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-intro">
            I'm Sanraj, a passionate developer and designer, always exploring new ideas, creating unique projects, and learning new technologies.
          </p>
        </section>

        {/* Personal Highlights */}
        <section className="highlights">
          <div className="highlight-item" data-aos="fade-up">
            <h2 className="highlight-title">My Journey</h2>
            <p className="highlight-description">
              I started my coding journey with JavaScript and never looked back. Over the years, I've worked on full-stack development, diving deep into frameworks like React and Express.
            </p>
          </div>
          <div className="highlight-item" data-aos="fade-up">
            <h2 className="highlight-title">Fun Facts</h2>
            <p className="highlight-description">
              When I'm not coding, I enjoy playing chess, tinkering with VR setups, and creating digital art. I believe in balancing work with creativity!
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="skills-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card" data-aos="fade-right">
              <h3 className="skill-name">JavaScript</h3>
              <p className="skill-description">Experience building SPAs using React, Node.js, and more.</p>
            </div>
            <div className="skill-card" data-aos="fade-right">
              <h3 className="skill-name">UI/UX Design</h3>
              <p className="skill-description">Designing beautiful, user-friendly interfaces with Figma and Sketch.</p>
            </div>
            <div className="skill-card" data-aos="fade-left">
              <h3 className="skill-name">3D Modeling</h3>
              <p className="skill-description">Crafting immersive 3D environments and assets in Blender.</p>
            </div>
            <div className="skill-card" data-aos="fade-left">
              <h3 className="skill-name">Game Development</h3>
              <p className="skill-description">Creating interactive experiences in Unity, focusing on VR and AI.</p>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="hobbies-section">
          <h2 className="hobbies-title">Hobbies & Interests</h2>
          <div className="hobbies-grid">
            <div className="hobby-card" data-aos="zoom-in">
              <img src="chess.jpg" alt="Chess" className="hobby-image" />
              <h3 className="hobby-name">Chess</h3>
              <p className="hobby-description">I love solving complex puzzles, and chess is my go-to for brain workouts!</p>
            </div>
            <div className="hobby-card" data-aos="zoom-in">
              <img src="vr.jpg" alt="VR Gaming" className="hobby-image" />
              <h3 className="hobby-name">VR Gaming</h3>
              <p className="hobby-description">Exploring new realities with my HTC Vive, creating virtual worlds.</p>
            </div>
            <div className="hobby-card" data-aos="zoom-in">
              <img src="art.jpg" alt="Digital Art" className="hobby-image" />
              <h3 className="hobby-name">Digital Art</h3>
              <p className="hobby-description">I enjoy creating vibrant, imaginative artwork in my free time.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Playground;
