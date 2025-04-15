import React from 'react';
import Image1 from '../../images/Formation/formation-securite-incendie.jpg';
import { CheckCircle } from 'lucide-react';
import '../../styles/Ourmission.css';
import ADC from "../../images/icon/ADC.png"
import IRD  from "../../images/icon/IRD.png"
import camwater from "../../images/icon/camwater.jpg"
import img1 from "../../images/Extincteurs/Photo-extincteur.jpg";
import img2 from "../../images/Electronique/VIDEOSURVEILLANCE-3.jpg";
import img3 from "../../images/Formation/formation-securite-incendie.jpg";
import { FaTools, FaCertificate, FaLightbulb, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa';



const valeurs = [
    {
      titre: 'Expertise',
      description: "L'entreprise met en avant son savoir-faire et son expérience dans le domaine de la sécurité incendie, acquise grâce à de nombreuses années d'activité et à une équipe d'experts qualifiés.",
      icone: <FaTools size={80} color="#ff0000" />
    },
    {
      titre: 'Qualité',
      description: "REA SYSTEME TECHNOLOGY s'engage à fournir des prestations de qualité irréprochable, répondant aux exigences les plus strictes en matière de sécurité incendie.",
      icone: <FaCertificate size={80} color="#ff0000" />
    },
    {
      titre: 'Innovation',
      description: "L'entreprise veille à rester à la pointe des dernières technologies en matière de sécurité incendie pour proposer des solutions performantes.",
      icone: <FaLightbulb size={80} color="#ff0000" />
    },
    {
      titre: 'Responsabilité',
      description: "REA SYSTEME TECHNOLOGY s'engage à agir de manière responsable sur le plan économique, écologique et sociétal.",
      icone: <FaHandHoldingHeart size={80} color="#ff0000" />
    },
    {
      titre: 'Engagement',
      description: "L'entreprise est engagée dans la prévention des incendies et la protection des personnes et des biens.",
      icone: <FaShieldAlt size={80} color="#ff0000" />
    }
  ];

const Ourmission = () => {

    return (
        <div className="PresentationFrame">
            <div className="presentation">
                        <div className="titreP">
                            <h2>Qui sommes-nous?</h2>
                            <div className="ligne2"></div>
                        </div>
                       
                        <p>
                        <strong>REA SYSTEME TECHNOLOGY</strong> en abrégé RST est l’aboutissement de plusieurs années de travail dans le cadre
                        de la sécurité incendie crée en 2012 par le Directeur Général. Aux vues des cas de multiples 
                        incendies dans nos marchés, nos ministères et dans la société en général, il a pris la fève 
                        conviction de se faire former afin de palier à ce fléau en mettant sur pied une structure
                        pouvant implémenter les systèmes de prévention et de lutte contre l’incendie qu’il a 
                        nommé REA SYSTEME TECHNOLOGY avec un siège social situé au carrefour <strong>SCDP NSAM</strong>
                        Yaoundé ou nous exerçons jusqu’à ce jour.
                        </p>
                    </div>

                   <div className="Ourmission">
                        <div className="bordure-image">
                            <img src = {Image1}  alt="" />
                        </div>
                        <div className="Ourmission-texte">
                            <div className="titreM">
                                <h2>
                                    Notre Mission
                                </h2>
                                <div className="ligne2">

                                </div>
                            </div>
                            
                            <p>
                            Ayant pour vision Devenir le leader de la sécurité incendie en Afrique, reconnu pour son expertise,
                            son innovation et son engagement envers la protection des personnes et des biens. Le fonctionnement
                            interne de RST repose sur ces principales forces que sont ses missions
                            </p>
                    <ul className="tipsList">
                    <li><CheckCircle size={40} color="red" /> Proposer des solutions de sécurité incendie de hautes qualités, fiables et accessibles à tous les clients, dans tous les secteurs d'activité.</li>
                    <li><CheckCircle size={40} color="red" /> Accurate fire safety measures are crucial to prevent accidents.</li>
                    <li><CheckCircle size={40} color="red" /> Awareness a4nd training significantly reduce fire hazards.</li>
                    <li><CheckCircle size={40} color="red" /> Deliberate cruelty is more to be extinguished than a fire.</li>
                </ul>
             </div>

        </div>

        <div className="valeurs-container">
                {valeurs.map((valeur, index) => (
                    <div key={index} className="valeur-item">
                    <div className="icone">{valeur.icone}</div>
                    <h3>{valeur.titre}</h3>
                    <p>{valeur.description}</p>
                    </div>
                ))}
            </div>
            
             <div className="section-conteneur">
            {/* Section Galerie */}
            <div className="galerie">
                <div className="image-item"><img src={img1} alt="Traffic Control" /></div>
                <div className="image-item"><img src={img2} alt="Wildfire" /></div>
                <div className="image-item"><img src={img3} alt="Rescue Team" /></div>
                <div className="image-item"><img src={img1} alt="Traffic Control" /></div>
                <div className="image-item"><img src={img2} alt="Wildfire" /></div>
                <div className="image-item"><img src={img3} alt="Rescue Team" /></div>
            </div>

            {/* Section Statistiques */}
            <div className="stats">
                <div className="stat-item">
                    <h3>90%</h3>
                    <p>Taux de réussite</p>
                </div>
                <div className="stat-item">
                    <h3>4,567+</h3>
                    <p>Interventions</p>
                </div>
                <div className="stat-item">
                    <h3>94%</h3>
                    <p>Satisfaction client</p>
                </div>
                <div className="stat-item">
                    <h3>3,320+</h3>
                    <p>Formations dispensées</p>
                </div>
            </div>

            {/* Section Partenaires */}
        <div className="partenaires">
            <div className="scrolling-container">
                <img src={ADC} alt="Partner 1" width={150} />
                <img src={IRD} alt="Partner 2" width={150}/>
                <img src={camwater} alt="Partner 3"  width={150}/>
                <img src="/images/partner4.png" alt="Partner 4" />
            </div>
        </div>
        </div>

             
        </div>

        
        
       
    );
};

export default Ourmission;
