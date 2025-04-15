import React from "react";
//import Navbar from "../components/Acceuil/Navbar";
import HeadSection from "../components/Acceuil/HeadSection";
import InfoSection from "../components/Acceuil/InfoSection";
//import Navbarone from "../components/Acceuil/Navbar1";
//import Footer from "../components/Footer/Footer";
import Prestation from "../components/Acceuil/Prestation";
import Produits  from "../components/Acceuil/Produits";
import Localisation  from "../components/Acceuil/location";
import Realisations from "../components/Acceuil/Realisation";


const HomePage = () => {
  return (
    <div className="font-sans">
   
      <HeadSection />

      <InfoSection />
      
      <Prestation/>

      <Produits/>

      <Localisation/>

      <Realisations/>

      

    </div>
  );
};

export default HomePage;
