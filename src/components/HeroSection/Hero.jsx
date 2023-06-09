import React from 'react';
import { Link } from 'react-scroll';
import NumberCounter from 'number-counter';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 1000 ? true : false;
  return (
    <section className="hero" id="hero">
      <div className="blur hero__blur"></div>
      <div className="hero__left">
        <Header />
        <div className="hero__best">
          <motion.div
            initial={{ left: mobile ? '158px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
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
            <span className="figure__top">
              + <NumberCounter className="increment" end={140} delay={1} />
            </span>
            <span className="figure__bottom">expert coaches</span>
          </li>
          <li className="figure__item">
            <span className="figure__top">
              + <NumberCounter className="increment" end={978} delay={1} />
            </span>
            <span className="figure__bottom">members joined</span>
          </li>
          <li className="figure__item">
            <span className="figure__top">
              + <NumberCounter className="increment" end={50} delay={1} />
            </span>
            <span className="figure__bottom">fitness programs</span>
          </li>
        </ul>
        <div className="hero__btns">
          <Link className="btn btn-orange" to="plans" spy={true} smooth={true}>
            Get Started
          </Link>

          <Link
            className="btn btn-orange-border"
            to="programs"
            spy={true}
            smooth={true}
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="hero__right">
        <Link className="right__btn btn" to="join" spy={true} smooth={true}>
          Join now
        </Link>

        <motion.div
          className="hero__heart-rate"
          transition={transition}
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
        >
          <img src={heart} alt="heart icon" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="man is training" className="hero__img" />
        <motion.img
          src={hero_image_back}
          alt="icon of strokes"
          className="hero__icon"
          transition={transition}
          initial={{ right: '11vw' }}
          whileInView={{ right: '23vw' }}
        />
        <motion.div
          className="hero__calories"
          transition={transition}
          initial={{ x: '-7rem' }}
          whileInView={{ x: '0rem' }}
        >
          <img src={calories} alt="calories icon" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
