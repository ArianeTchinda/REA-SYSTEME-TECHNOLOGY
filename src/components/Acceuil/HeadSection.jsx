
import React from "react";
import "../../styles/HeadSection.css";
import fleche from "../../images/icon/Arrow-right.svg" 

const HeadSection = () => {
  return (
    <header className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>REA SYSTEME <br /> TECHNOLOGY</h1>
        <p>Passion to Protect</p>
        <div className="ligne"></div>
        <a href="Apropos">
          <button>
          <p>Découvrir</p>
          <img src={fleche} alt="fleche" width={35}  height={35}/>
          </button>
      </a>
      </div>
    </header>
  );
};

export default HeadSection;
