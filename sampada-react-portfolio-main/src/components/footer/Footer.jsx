import React from 'react';
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import {TfiTwitter} from 'react-icons/tfi'
import {FiGithub, FiLinkedin} from 'react-icons/fi'
import Signature from '../../assets/Signature-White.png'


function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">Sampada</a>


      <ul className="permaLinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
  <a href="https://wa.me/9067552771" target="_blank" rel="noopener noreferrer">
    <AiOutlineWhatsApp />
  </a>
  <a href="https://instagram.com/sampada757" target="_blank" rel="noopener noreferrer">
    <AiOutlineInstagram />
  </a>
  <a href="https://linkedin.com/in/sampada-kuveskar-07514525a" id="linkedin__logo" target="_blank" rel="noopener noreferrer">
    <FiLinkedin />
  </a>
  <span className="mobile__socials">
    <a href="https://github.com/sampada" target="_blank" rel="noopener noreferrer">
      <FiGithub />
    </a>
    <a href="https://linkedin.com/in/sampada-kuveskar-07514525a" target="_blank" rel="noopener noreferrer">
      <FiLinkedin />
    </a>
  </span>
</div>

      <div className="footer__copyright">
        <small>&copy; Sampada Creative Services 2024</small>
      </div>
    </footer>
  )
}

export default Footer