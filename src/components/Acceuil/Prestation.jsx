import React from "react";
import "../../styles/Prestation.css";

import img1 from "../../images/Extincteurs/Photo-extincteur.jpg";
import img2 from "../../images/Electronique/VIDEOSURVEILLANCE-3.jpg";
import img3 from "../../images/Formation/formation-securite-incendie.jpg";

const Prestation = () => {
  const prestations = [
    { id: 1, title: "SÉCURITE INCENDIE", image: img1 },
    { id: 2, title: "SÉCURITE ÉLECTRONIQUE", image: img2 },
    { id: 3, title: "SECTEUR FORMATION", image: img3 },
  ];

  return (
    <section className="prestation-section">
      <div className="Titre">
        <h2 className="prestation-title1">Nos différentes prestations</h2>
        <div className="Rond"></div>
      </div>
      
      <div className="prestation-container">
        {prestations.map((prestation) => (
          <div  key={prestation.id} className="prestation-card" >
            <img src={prestation.image} alt={prestation.title} className="prestation-image" />
            <div className="prestation-overlay">
              <p className="prestation-label">SECTEUR</p>
              <h3 className="prestation-title">{prestation.title}</h3>
              <button className="prestation-button">Découvrir</button>
            </div>
          </div>
        ))}
      </div>
      <button className="voir-plus">VOIR PLUS</button>
    </section>
  );
};

export default Prestation;
