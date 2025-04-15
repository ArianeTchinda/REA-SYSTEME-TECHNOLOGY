import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaHome } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <FaEnvelope size={30} color="#050397" />
        <h1><span>CONTACTEZ</span> NOUS</h1>
        <div className="underline1"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <FaPhoneAlt size={50} color="white" />
          <h3>CONTACTEZ-NOUS PAR TÉLÉPHONE</h3>
          <p>Rapide et efficace, pour toute demande, n’hésitez pas à nous appeler au :</p>
          <strong>+237 686868686</strong>
        </div>

        <div className="contact-card">
          <FaEnvelope size={50} color="white" />
          <h3>FORMULAIRE DE CONTACT</h3>
          <p>
            Vous pouvez utiliser le formulaire ci-dessous pour nous envoyer un mail, nous vous
            recontacterons dans les meilleurs délais.
          </p>
         <a href="contact#nom"><button className="contact-btn1">CONTACT</button></a> 
        </div>

        <div className="contact-card">
          <FaHome size={50} color="white" />
          <h3>L'ÉQUIPE</h3>
          <p>
            Venez prendre un café ou un thé à l’agence, nous serons ravis de vous accueillir à
            l’adresse suivante :
          </p>
          <strong>Yaounde<br />Centre Cameroun</strong>
          <button className="contact-btn">PLAN</button>
        </div>
      </div>
      <form className="contact-form">
  <h3>RENSEIGNEZ CE FORMULAIRE</h3>

  <label htmlFor="nom">Nom :</label>
  <input type="text" id="nom" name="nom" placeholder="Votre nom" required />

  <label htmlFor="email">Email :</label>
  <input type="email" id="email" name="email" placeholder="Votre email" required />

  <label htmlFor="message">Message :</label>
  <textarea id="message" name="message"  placeholder="Votre message" required></textarea>

  <button type="submit" className="contact-btn1">Envoyer</button>
</form>

    </div>
  );
};

export default Contact;
