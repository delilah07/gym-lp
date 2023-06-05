import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <section className="programs">
      <h2 className="programs__header">
        <span className="border-text">Explore our</span>
        <span>programs</span>
        <span className="border-text">to shape you</span>
      </h2>
      <div className="programs__categories">
        {programsData.map((program, i) => {
          return (
            <div key={i} className="category">
              {program.image}
              <h3 className="category__heading">{program.heading}</h3>
              <p className="category__text">{program.details}</p>
              <button className="category__btn btn">
                <span>Join Now</span>
                <img src={RightArrow} alt="arrow right icon" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
