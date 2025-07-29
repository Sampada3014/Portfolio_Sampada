import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-container">
              {/* Replace with actual image when available */}
              <div className="placeholder-image">S</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Frontend Developer </h3>
         <p>
  I’m Sampada Kuveskar, a frontend developer with over 2.5 years of professional experience specializing in front-end technologies and WordPress. Currently, I am working at BC Web Wise (since January 2025), where I develop responsive, SEO-friendly websites and collaborate with cross-functional teams on web projects. Previously, at AdEngage, I worked as a Full Stack Developer, contributing to front-end development, backend integration, and feature enhancements. Earlier, I gained experience at MITR Learning & Media, where I converted educational templates into interactive web formats, ensured cross-browser compatibility, and contributed to the UI of the Alef_NCE_MOE project using HTML5, CSS3, and JavaScript.
</p>

            
            
            
  <a
  href="/assets/Sampada_kuveskar_Resume.pdf"
  className="btn"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV <FaDownload className="icon" />
</a>


          </motion.div>
        </div>
      </div>

      {/* About styles are in index.css */}
    </section>
  )
}

export default About