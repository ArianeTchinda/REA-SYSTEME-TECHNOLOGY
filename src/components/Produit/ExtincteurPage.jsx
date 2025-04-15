import React from "react";
import ExtincteurSection from "./ExtincteurSection";
import eau9l from '../../images/Extincteurs/eau-9l.jpg';
import eau6l from "../../images/Extincteurs/eau-6L.jpg"
import CO21kg from "../../images/Extincteurs/CO2-2kg.jpg"
import co22Kg from "../../images/Extincteurs/CO2-2kilos.jpeg"
import CO25kg from "../../images/Extincteurs/5KG-CO2.jpeg"
import ABC1kg from "../../images/Extincteurs/Extincteur-1kg-ABC.webp"
import ABC2kg from "../../images/Extincteurs/ABC2KG.jpg"
import ABC5KG from "../../images/Extincteurs/ABC5kg.jpg"
import eau25L from "../../images/Extincteurs/Eau-25L.jpg"
import extincteur from "../../images/Extincteurs/Photo-extincteur.jpg"
import "../../styles/ExtincteurPage.css";

const ExtincteursPage = () => {
  const extincteursData = [
    {
      title: "Extincteurs à CO2",
      description:
        "N'endommage pas les équipements, parfait pour des zones ensibles. Et surtout est efficace contre tous les types de feux.Recommandé pour les salles informatiques, laboratoires, zones avec équipements électroniques, domiciles etc. Pourquoi le choisir ? C’est le meilleur choix pour protéger vos équipements électroniques tout en garantissant votre sécurité",
      products: [
        { name: "Extincteur à CO2", capacity: "1Kg", price: "10000", image: CO21kg },
        { name: "Extincteur à CO2", capacity: "2Kg", price: "20000", image: co22Kg },
        { name: "Extincteur à CO2", capacity: "5Kg", price: "30000", image: CO25kg },
      ],
    },
    {
      title: "Extincteurs à eau pulvérisée avec additif",
      description:
        "Adaptés aux feux de bois, de déchets et d'autres matériaux solides, avec un additif pour une meilleure efficacité.",
      products: [
        { name: "Extincteur à eau", capacity: "6L", price: "15000", image: eau6l },
        { name: "Extincteur à eau", capacity: "9L", price: "25000", image: eau9l },
        { name: "Extincteur à eau", capacity: "25L", price: "15000", image: eau25L },
      ],
    },
    {
      title: "Extincteurs à poudre polyvalente ABC",
      description:
        "Polyvalents, adaptés aux feux de bois, d'huile, et de liquides inflammables.",
      products: [
        { name: "Extincteur à poudre", capacity: "1Kg", price: "9000", image: ABC1kg },
        { name: "Extincteur à poudre", capacity: "2Kg", price: "18000", image: ABC2kg},
        { name: "Extincteur à poudre", capacity: "6Kg", price: "30000", image: ABC5KG },
      ],
    },
  ];

  return (
    <div className="extincteurs-page">
      <div className="extincteur-intro">
      <div className="extincteur-breadcrumb">
        <strong>Accueil</strong> &raquo; Produits &raquo; <strong>Extincteurs</strong>
      </div>
      <div className="extincteur-header">
        <div className="extincteur-header-image">
          <img src={extincteur} alt="Extincteurs" />
        </div>
        <div className="extincteur-header-text">
          <h2 className="extincteur-title1">Extincteurs</h2>
          <div className="color-bar"></div>
          <p className="extincteur-intro-text">
          Face à un départ de feu, chaque seconde compte. Trop souvent négligé ou mal entretenu, l’extincteur est pourtant le premier rempart contre les flammes, avant même l’intervention des secours. Dans les maisons, les bureaux, les entrepôts, les écoles ou les commerces, il joue un rôle crucial de prévention et de protection immédiate. 
          <br />

          Avoir un extincteur ne suffit pas. Il faut qu’il soit adapté aux types de risques présents, qu’il soit visible, facilement accessible et surtout, fonctionnel à tout moment. Un incendie peut démarrer de manière inattendue : un court-circuit, une friteuse laissée sans surveillance, une étincelle dans un entrepôt de matériaux inflammables... et en quelques minutes, le pire peut survenir.
          <br />
          Avec le bon extincteur, bien choisi et bien positionné, vous avez le pouvoir d'agir immédiatement pour éviter un désastre. Cela peut faire la différence entre un petit incident vite maîtrisé et un drame humain, matériel, voire financier.

          Protégez ce qui compte le plus : vos proches, vos collègues, vos clients... et votre avenir. L’extincteur n’est pas un luxe, c’est une nécessité vitale. <br />
            <strong className="StrongRouge">Êtes-vous vraiment prêt en cas d’urgence ?</strong>
          </p>

        </div>
      </div>
    </div>
      {extincteursData.map((section, index) => (
        <ExtincteurSection
          key={index}
          title={section.title}
          description={section.description}
          products={section.products}
        />
      ))}
    </div>
  );
};

export default ExtincteursPage;
