import React from 'react';
import { Link } from 'react-scroll';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import RightArrow from '../../assets/rightArrow.png';
import './Plans.css';

const Plans = () => {
  return (
    <section className="plans" id="plans">
      <div className="blur plans__blur plans__blur-1"></div>
      <div className="blur plans__blur plans__blur-2"></div>
      <h2 className="plans__title">
        <span className="border-text">Ready to start</span>
        <span>your journey</span>
        <span className="border-text">with us</span>
      </h2>
      <div className="plans__categories">
        {plansData.map((plan, i) => {
          return (
            <div className="plans__category" key={i}>
              {plan.icon}
              <h3 className="category__title">{plan.name}</h3>
              <p className="category__price">$ {plan.price}</p>
              <div className="category__features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature" key={i}>
                      <img src={whiteTick} alt="" />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <p>
                <span>See more benefits</span>
                <img src={RightArrow} alt="arrow right icon" />
              </p>
              <Link
                className="features__btn btn"
                to="join"
                span={true}
                smooth={true}
              >
                Join now
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Plans;
