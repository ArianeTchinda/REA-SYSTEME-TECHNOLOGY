import React from 'react';
import '../../styles/Localisation.css';
import countryCart from '../../images/Country.svg'
import locationIcon from '../../images/icon/location_on.svg'

const Localisation = () => {
  return (
    <div className="localisation-container">
      <div className="map-section">
        
            <img src={countryCart} alt="" />
    
      </div>
      
    <div className="agencies-info">
        <h3>NOS AGENCES</h3>
        
        <div className="agency-detail">
          <div className="agency-header red-marker">
            <img src={locationIcon} alt="" />
            <h4>SCDP NSAM Yaounde</h4>
          </div>
          <div className="contact-info">
            <span className="phone-icon">📞</span>
            <p>00 00 00 00 00</p>
          </div>
        </div>
        <hr />
        <div className="agency-detail">
          <div className="agency-header black-marker">
          <img src={locationIcon} alt="" />
            <h4>NOM LIEU Bertua</h4>
          </div>
          <div className="contact-info">
            <span className="phone-icon">📞</span>
            <p>00 00 00 00 00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localisation;