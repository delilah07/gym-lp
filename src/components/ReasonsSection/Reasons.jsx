import React from 'react';
import './Reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <section className="reasons">
      <div className="reasons__left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="reasons__right">
        <h3 className="reasons__subtitle">some reasons</h3>
        <h2 className="reasons__title">
          <span className="border-text">Why </span>
          choose us?
        </h2>
        <div className="reasons__details">
          <div className="reasons__detail">
            <img src={tick} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div className="reasons__detail">
            <img src={tick} alt="" />
            <span>train smarter and waster than before</span>
          </div>
          <div className="reasons__detail">
            <img src={tick} alt="" />
            <span>1 free program gor new member</span>
          </div>
          <div className="reasons__detail">
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>
        <div className="reasons__partners">
          <h3 className="partners__title">our Partners</h3>
          <div className="partners__list">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
