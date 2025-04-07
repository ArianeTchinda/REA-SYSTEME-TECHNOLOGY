import React from "react";
import "../../styles/Navbar1.css";
import logo from "../../images/icon/logo-removebg-preview.png" ;
import location from "../../images/icon/location_on.svg";
import phone from "../../images/icon/tel.svg"


const Navbarone = () => {
  return (
    <nav className="navbar1">
      <div className="logo">
        <a href="Acceuil"><img src={logo} alt="" width={100} height={100}/></a>
      </div>
      <div className="Contact">
        <div className="numero">
            <img src={phone} alt="logo-location" width={35} height={35}/>
            <p>+237 686 67 74 86<br/>+237 686 67 74 86</p>
        </div>
        <div className="lieu">
            <img src={location} alt="logo-location" width={35} height={35} />
            <p>Yaounde <br/>SCDP-NSAM</p>
        </div>
    
      </div>
      <a href="contact"><button className="contact-btn">Nous contacter</button></a>
    </nav>
  );
};

export default Navbarone;
