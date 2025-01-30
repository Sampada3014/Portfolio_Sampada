import React from "react";
import "./experience.css";
import { BsCheck2Circle } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>Acquired Skills</h2>
      {/* ------------- START FRONT-END CARD ------------- */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>HTML5 (Semantic)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* ------------- START BACK-END CARD ------------- */}
        {/* <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Progressive Web Apps</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Version Control (Git)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Object-Oriented Programming</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Model-View-Controller Paradigm</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Experience;
