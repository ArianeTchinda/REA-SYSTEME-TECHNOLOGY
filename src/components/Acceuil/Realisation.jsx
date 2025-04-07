import React from "react";
import { motion } from "framer-motion";
import "../../styles/Realisation.css"; 
import adclogo from "../../images/icon/ADC.png";
import irdlogo from "../../images/icon/IRD.png";
import camwaterlogo from "../../images/icon/camwater.jpg";

const Realisations = () => {
  const projets = [
    {
      id: 1,
      image: adclogo,
      date: "24 déc. 2025",
      titre: "Maintenance aux ADC",
      description: "Aspernatur excepturi eum deserunt temporibus architecto",
    },
    {
      id: 2,
      image: irdlogo,
      date: "24 déc. 2025",
      titre: "Maintenance IRD",
      description: "Aspernatur excepturi eum deserunt temporibus architecto",
    },
    {
      id: 3,
      image: camwaterlogo,
      date: "24 déc. 2025",
      titre: "Maintenance CAMWATER",
      description: "Aspernatur excepturi eum deserunt temporibus architecto",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.3, duration: 0.3 ,ease: "easeInOut" } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <motion.section 
      className="realisations-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="realisations-title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nos réalisations
      </motion.h2>

      <motion.div className="realisations-container">
        {projets.map((projet) => (
          <motion.div 
            key={projet.id} 
            className="realisations-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
              
          >
            <img src={projet.image} alt={projet.titre} className="realisations-image" />
            <div className="realisations-content">
              <p className="realisations-date">{projet.date}</p>
              <h3 className="realisations-card-title">{projet.titre}</h3>
              <p className="realisations-text">{projet.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button 
        className="realisations-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contactez-nous pour un devis
      </motion.button>
    </motion.section>
  );
};

export default Realisations;
