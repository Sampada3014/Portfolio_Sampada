import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Home = () => {
  return (
       <section className="home-section">
      <div className="container">
        <div className="home-content">
          <motion.div 
            className="home-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Hi, I'm <span className="highlight">Sampada</span></h1>
            <h2>Frontend Developer</h2>
            <p>
              I create beautiful, responsive websites with modern technologies.
              Let's work together to bring your ideas to life!
            </p>
            
            <div className="cta-buttons">
              <Link to="/projects" className="btn">
                View My Work <FaArrowRight className="icon" />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </div>
            
            <div className="social-links">
               <a href="https://github.com/Sampada3014" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href="https://in.linkedin.com/in/sampada-kuveskar-07514525a" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="https://wa.me/918799987886" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/sampadacreativestudio/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="home-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              {/* Replace with actual image path when available */}
              <div className="placeholder-image">S</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Home styles are in index.css */}
    </section>
  )
}

export default Home