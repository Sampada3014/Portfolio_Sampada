import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sampada<span>.</span></h3>
            <p>Frontend Developer</p>
          </div>
          
          <div className="footer-social">
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
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Sampada. All Rights Reserved. Made with <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>

      {/* Footer styles are in index.css */}
    </footer>
  )
}

export default Footer