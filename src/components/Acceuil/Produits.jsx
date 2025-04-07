import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/Produit.css"
import img1 from "../../images/Extincteurs/Photo-extincteur.jpg";
import img2 from "../../images/ReseauHydraulique/RIA.jpeg";
import img3 from "../../images/Extincteurs/fire-extinguishers.jpg";

const Produits = () => {
  const images = [img1, img2, img3];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="produits-section">
      <div className="produits-content">
        <h2 className="produits-title">
          <span className="title-underline">Nos</span> Produits
        </h2>
        <p className="produits-description">
          Nos produits répondent aux besoins de nos clients en termes de sécurité 
          et de protection des biens et des personnes.
        </p>
      </div>

      <div className="produits-carousel-container">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          showDots={true}
          arrows={true}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Produit ${index + 1}`} className="produits-image" />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Produits;
