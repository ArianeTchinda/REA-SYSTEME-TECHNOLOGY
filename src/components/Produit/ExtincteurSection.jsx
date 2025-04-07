import React from "react";
import "../../styles/ExtincteurSection.css";

const keywordList = ["Classe A", "Classe B", "efficace", "feux", "Bureaux", "Écoles", "Bibliothèques"];

const formatText = (text) => {
  return text.split(" ").map((word, index) => {
    const cleanedWord = word.replace(/[^a-zA-ZÀ-ÿ]/g, "");
    if (keywordList.includes(cleanedWord)) {
      return <strong key={index}>{word} </strong>;
    }
    return word + " ";
  });
};

const ExtincteurSection = ({ title, description, products }) => {
  const parts = description.split("Pourquoi le choisir ?");
  const before = formatText(parts[0]);
  const after = parts[1] ? <><br /><br/><span className="highlight">Pourquoi le choisir ?</span>{formatText(parts[1])}</> : null;

  return (
    <div className="extincteur-section">
      <h2 className="extincteur-title">{title}</h2>
      <p className="extincteur-description">
        {before}{after}
      </p>
      <div className="extincteur-products">
        {products.map((product, index) => (
          <div key={index} className="extincteur-card">
            <img src={product.image} alt={product.name} className="extincteur-image" />
            <h3 className="extincteur-name">{product.name}</h3>
            <p className="extincteur-capacity">{product.capacity}</p>
            <p className="extincteur-price">{product.price} CFA</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtincteurSection;
