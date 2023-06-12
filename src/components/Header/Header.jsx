import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import Logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';

const Header = (menuOpemFromApp) => {
  const mobile = window.innerWidth <= 670 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <img src={Logo} alt="The fit clum" className="header__logo" />

      <nav className="header__nav">
        {!menuOpen && mobile ? (
          <div className="header__bars" onClick={() => setMenuOpen(true)}>
            <img src={bars} alt="choose to open menu" />
          </div>
        ) : (
          <ul className="nav__list">
            <li className="list__item">
              <Link
                onClick={() => setMenuOpen(false)}
                to="hero"
                span={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li className="list__item">
              <Link
                onClick={() => setMenuOpen(false)}
                to="programs"
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li className="list__item">
              <Link
                onClick={() => setMenuOpen(false)}
                to="reasons"
                span={true}
                smooth={true}
              >
                Why us
              </Link>
            </li>
            <li className="list__item">
              <Link
                onClick={() => setMenuOpen(false)}
                to="plans"
                span={true}
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li className="list__item">
              <Link
                onClick={() => setMenuOpen(false)}
                to="testimonials"
                span={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
