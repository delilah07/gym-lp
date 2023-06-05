import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <Header />
        <div className="hero__best">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <h1 className="hero__title">
          <span className="border-text">shape</span> your <br />
          ideal body{' '}
        </h1>
        <p className="hero__text">
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </p>
        <ul className="hero__figures">
          <li className="figure__item">
            <span className="figure__top">+ 140</span>
            <span className="figure__bottom">expert coaches</span>
          </li>
          <li className="figure__item">
            <span className="figure__top">+ 978</span>
            <span className="figure__bottom">members joined</span>
          </li>
          <li className="figure__item">
            <span className="figure__top">+ 50</span>
            <span className="figure__bottom">fitness programs</span>
          </li>
        </ul>
        <div className="hero__btns">
          <button className="btn btn-orange">Get Started</button>
          <button className="btn btn-orange-border">Learn More</button>
        </div>
      </div>
      <div className="hero__right">
        <button className="right__btn btn">Join now</button>
        <div className="hero__heart-rate">
          <img src={heart} alt="heart icon" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="man is training" className="hero__img" />
        <img
          src={hero_image_back}
          alt="icon of strokes"
          className="hero__icon"
        />
        <div className="hero__calories">
          <img src={calories} alt="calories icon" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
