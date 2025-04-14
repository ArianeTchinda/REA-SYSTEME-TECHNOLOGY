import React from 'react';
import '../../styles/Electronique.css';
import { ShieldCheck, Camera, Bell, Lock } from 'lucide-react';

const services = [
  {
    icon: <Camera size={40} />,
    title: 'Vidéosurveillance',
    description: 'Surveillez vos locaux en temps réel avec des caméras HD connectées.',
  },
  {
    icon: <Bell size={40} />,
    title: 'Alarmes & Intrusion',
    description: 'Détection instantanée et alertes en cas d’intrusion ou de mouvement suspect.',
  },
  {
    icon: <Lock size={40} />,
    title: 'Contrôle d’accès',
    description: 'Gérez qui entre et sort avec des systèmes de badges, biométrie, ou code.',
  },
  {
    icon: <ShieldCheck size={40} />,
    title: 'Sécurité intelligente',
    description: 'Solutions connectées et automatisées pour une protection 24/7.',
  },
];

export default function Electronique() {
  return (
    <div className="security-page">
      <div className="security-header">
        <h1>Sécurité Électronique</h1>
        <p>
          Protégez vos biens, vos locaux et vos proches avec nos solutions de sécurité électroniques fiables, modernes et connectées.
        </p>
      </div>
      <div className="security-services">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
