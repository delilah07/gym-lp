import React from 'react';
import './Footer.css';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__socials">
        <li className="socials__item">
          <a href="#">
            <img src={github} alt="" />
          </a>
        </li>
        <li className="socials__item">
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li className="socials__item">
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
        </li>
      </ul>
      <div className="footer__logo">
        <img src={logo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
