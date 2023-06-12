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
            <li onClick={() => setMenuOpen(false)} className="list__item">
              <Link>Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="list__item">
              <Link>Programs</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="list__item">
              <Link>Why us</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="list__item">
              <Link>Plans</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="list__item">
              <Link>Testimonials</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
