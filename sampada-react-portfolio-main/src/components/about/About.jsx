import React from "react";
import "./about.css";
import meAbout from "../../assets/WhatsApp Image 2025-01-31 at 10.23.49.jpeg";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="Creator in About Section" />
          </div>
        </div>

        <div className="about__content">
  <div className="about__cards">
    <article className="about__card">
      <icon className="about__icon">
        <FaUsers />
      </icon>
      <h5>Education</h5>
      <small>B.Sc IT in Information Technology</small>
    </article>
    <article className="about__card">
      <icon className="about__icon">
        <FaAward />
      </icon>
      <h5>Experience</h5>
      <small>2+ Years Working</small>
    </article>
    
    <article className="about__card">
      <icon className="about__icon">
        <FaTasks />
      </icon>
      <h5>Projects</h5>
      <small>10+ Completed</small>
    </article>
  </div>
  <p>
    I graduated from Mumbai University (Devgad College) in 2022 with a Bachelor of Science in Information Technology. Currently, I am working as a front-end developer, leveraging my skills to create user-friendly and responsive web designs. I have 2+ years of experience in front-end development, working with HTML, CSS, JavaScript, and various front-end frameworks like React.
    <br/> <br/>
    My attention to detail and passion for clean code drives me to constantly improve my skills. I'm eager to learn and grow, and I'm currently exploring opportunities to work on advanced front-end development projects.
  </p>

  <a href="#contact" className="btn btn-primary about__btn">
    Connect
  </a>
</div>

      </div>
    </section>
  );
}

export default About;
