import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:5000/send", formData);
      setResponseMessage("Message sent successfully!");
    } catch (error) {
      setResponseMessage("There was an error sending your message.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:sampadakuveskar505@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://linkedin.com/in/sampada-kuveskar-07514525a"
              target="_blank"
            >
              Connect with me
            </a>
          </article>
          <article className="contact__option">
            <FiGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <a href="https://www.github.com/sampada" target="_blank">
              Browse my projects
            </a>
          </article>
        </div>

        {/* START CONTACT FORM */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message here"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            id="contact__btn"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;
