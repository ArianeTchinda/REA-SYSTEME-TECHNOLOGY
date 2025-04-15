import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import facebook from '../../images/icon/Facebook.svg'
import linkedin from '../../images/icon/Linkedin.svg'
import whatsapp from '../../images/icon/icons8-whatsapp-75.png'
/*import facebookIcon from '../Assets/facebook.svg';
import instagramIcon from '../Assets/instagram.svg';
import twitterIcon from '../Assets/twitter-alt-circle.svg';
import youtubeIcon from '../Assets/youtube.svg';*/

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-section"  >
          <h3>Information</h3>
          <p>RST Incendie vous accompagne pour faire de la sécurité incendie une  priorité pour votre entreprise, votre administration ou votre  établissement.</p>
          <div className="social-icons">
          <a href="https://facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://linkedin.com">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://wa.me/658087428">
            <img src={whatsapp} alt="Whatsapp" className='Whatsapp' />
          </a>
         
        </div>

        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="/information#about" style={{ textDecoration: 'none' }}>Vente d'extincteurs</a></li>
            <li><a href="/information#portfolio" style={{ textDecoration: 'none' }}>Formation en SI</a></li>
            <li> <Link to='/Dashboard' style={{textDecoration: 'none'}}>Maintenance </Link></li>
            <li><a href="/information#faq" style={{ textDecoration: 'none' }}>controle d'acces</a></li>
            <li><a href="/information#reviews" style={{ textDecoration: 'none'}}>Barrenage et cuvage</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/information#contact" style={{ textDecoration: 'none' }}>Home</a></li>
            <li><a href="/information#privacy" style={{ textDecoration: 'none' }}>Services</a></li>
            <li><a href="/information#terms" style={{ textDecoration: 'none' }}>Produits</a></li>
            <li><a href="/information#buy-sell" style={{ textDecoration: 'none' }}>A propos</a></li>
            <li><a href="/information#reviews" style={{ textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Nsam, Yaounde</li>
            <li>+237 686677486</li>
            <li>Reasytemetech@gmail.com</li>
            <li><a href="/à-propos" style={{ textDecoration: 'none' }}>Voir plus</a></li>
           
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <a href="/information#terms" style={{ textDecoration: 'none'}}><p>Terms of Services</p></a>
        <a href="/information#privacy" style={{ textDecoration: 'none' }}><p>Privacy Policy</p></a>
        <div className="copyright">
          <p> Copyright &copy; 2025 REA SYSTEME TECHNOLOGY. Designed By  @Ariane Tchinda </p>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;