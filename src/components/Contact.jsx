import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully!'
    })
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      })
    }, 5000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'Sampadakuveskar505@gmail.com',
      link: 'mailto:Sampadakuveskar505@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '(+91) 8799987886',
      link: 'tel:+918799987886'
    }
  ]

  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">
                Send Message <FaPaperPlane className="icon" />
              </button>
              
              {formStatus.submitted && (
                <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Contact styles are in index.css */}
    </section>
  )
}

export default Contact