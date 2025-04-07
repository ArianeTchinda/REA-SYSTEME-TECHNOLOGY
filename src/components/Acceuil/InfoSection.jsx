import React from 'react';
import '../../styles/InfoSection.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import img1 from '../../images/Extincteurs/Fire-Safety-in-Uganda.jpg';
import img2 from '../../images/Formation/formation-securite-incendie.jpg';
import img3 from '../../images/Imeuble.jpeg';

const InfoSection = () => {
  const images = [img1, img2, img3];

  
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="info-section">
      <div className="info-content">
        <div className="section-header">
          <div className="red-line"></div>
          <h2>Votre expert en sécurité incendie au Cameroun</h2>
        </div>
        <div className="text-content">
          <p className="highlight">
            Entreprises, particuliers : vous rencontrez des besoins de sécurisation de votre habitation, vos locaux, vos agents, vos usagers, vos collaborateurs ou vos infrastructures ? Nos experts de la protection sont à votre service !
          </p>
          <p>
           {/* Notre agence de sécurité vous fournit des solutions de protection électronique et humaine, ainsi qu'une expertise reconnue en termes de prévention incendie. */}

            Chez <strong>REA SYSTEME TECHNOLOGY</strong>, nous savons qu’un simple retard dans la prévention peut avoir des conséquences dramatiques. C’est pourquoi nous mettons notre expertise au service de votre sécurité, en vous offrant des solutions adaptées pour protéger efficacement vos biens, vos proches et vos collaborateurs.

            Que vous soyez un particulier ou une entreprise, la menace est bien réelle : <strong>départs de feu accidentels, équipements défectueux, absence de dispositifs de protection, manque de formation face aux situations d’urgence… </strong>Autant de facteurs qui augmentent les risques d’un incendie incontrôlable.

            Anticiper, c’est sauver des vies et préserver ce qui compte le plus pour vous. En intégrant des solutions de sécurité fiables et en adoptant les bonnes pratiques, vous réduisez les risques, minimisez les pertes et garantissez un environnement sûr pour tous.

            Ne prenez pas de risques inutiles. La sécurité incendie est une responsabilité que l’on ne peut se permettre de négliger. Agissez dès aujourd’hui, car demain il pourrait être trop tard. 
          </p>
        </div>
      </div>
      <div className="carousel">
        
        <Carousel
          responsive={responsive}
          autoPlay={true} 
          autoPlaySpeed={5000} 
          infinite={true} 
          showDots={true} 
          arrows={false} 
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="carousel-image" />
          ))}
        </Carousel>
          
        </div>
    
    </section>
  );
};

export default InfoSection;
