import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="The fit clum" className="header__logo" />
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="list__item">Home</li>
          <li className="list__item">Programs</li>
          <li className="list__item">Why us</li>
          <li className="list__item">Plans</li>
          <li className="list__item">Testimonials</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
