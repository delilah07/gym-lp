import { React, useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [review, setReview] = useState(0);
  const reviewsLength = testimonialsData.length;

  const prevReview = () =>
    review === 0 ? setReview(reviewsLength - 1) : setReview((prev) => prev - 1);

  const nextReview = () =>
    review === reviewsLength - 1 ? setReview(0) : setReview((next) => next + 1);

  const transition = { type: 'spring', duration: 3 };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__left">
        <h3 className="reasons__subtitle">some reasons</h3>
        <h2 className="testimonials__title">
          <span className="border-text">what they</span>
          <span>say about us</span>
        </h2>
        <div className="testimonials__reviews">
          <div className="review">
            <motion.p
              className="review__text"
              key={review}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              // exit={{ opacity: 0, x: -100 }}
              transition={transition}
            >
              {testimonialsData[review].review}{' '}
            </motion.p>
            <p className="review__author">
              <span className="review__name">
                {testimonialsData[review].name}
              </span>{' '}
              -{' '}
              <span className="review__prof">
                {testimonialsData[review].status}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="testimonials__right">
        <div className="arrows">
          {' '}
          <img onClick={prevReview} src={leftArrow} alt="leftArrow icon" />
          <img onClick={nextReview} src={rightArrow} alt="rightArrow icon" />
        </div>
        <div className="reviews__img">
          <motion.div
            className="border"
            transition={{ ...transition, duration: 2 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>
          <motion.div
            className="borderBg"
            transition={{ ...transition, duration: 2 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>
          <motion.img
            key={review}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={testimonialsData[review].image}
            alt={testimonialsData[review].name}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
