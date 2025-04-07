import React from "react";
import ExtincteurSection from "./ExtincteurSection";
import image1 from "../../images/Extincteurs/Photo-extincteur.jpg"

const ExtincteursPage = () => {
  const extincteursData = [
    {
      title: "Extincteurs à CO2",
      description:
        "N'endommage pas les équipements, parfait pour des zones ensibles. Et surtout est efficace contre tous les types de feux.Recommandé pour les salles informatiques, laboratoires, zones avec équipements électroniques, domiciles etc. Pourquoi le choisir ? C’est le meilleur choix pour protéger vos équipements électroniques tout en garantissant votre sécurité",
      products: [
        { name: "Extincteur à CO2", capacity: "1Kg", price: "10000", image: image1 },
        { name: "Extincteur à CO2", capacity: "2Kg", price: "20000", image: image1 },
        { name: "Extincteur à CO2", capacity: "5Kg", price: "30000", image: image1 },
      ],
    },
    {
      title: "Extincteurs à eau pulvérisée avec additif",
      description:
        "Adaptés aux feux de bois, de déchets et d'autres matériaux solides, avec un additif pour une meilleure efficacité.",
      products: [
        { name: "Extincteur à eau", capacity: "6L", price: "15000", image: "/images/eau_6l.png" },
        { name: "Extincteur à eau", capacity: "9L", price: "25000", image: "/images/eau_9l.png" },
      ],
    },
    {
      title: "Extincteurs à poudre polyvalente ABC",
      description:
        "Polyvalents, adaptés aux feux de bois, d'huile, et de liquides inflammables.",
      products: [
        { name: "Extincteur à poudre", capacity: "1Kg", price: "9000", image: "/images/poudre_1kg.png" },
        { name: "Extincteur à poudre", capacity: "2Kg", price: "18000", image: "/images/poudre_2kg.png" },
        { name: "Extincteur à poudre", capacity: "6Kg", price: "30000", image: "/images/poudre_6kg.png" },
      ],
    },
  ];

  return (
    <div className="extincteurs-page">
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
