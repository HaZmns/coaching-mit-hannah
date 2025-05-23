import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <span className="logo-line">Coaching</span>
            <span className="logo-line">mit</span>
            <span className="logo-line">Hannah</span>
          </Link>
          
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
          
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/coaching" onClick={toggleMenu}>{t('nav.coaching')}</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>{t('nav.about')}</Link>
            </li>
            <li>
              <Link to="/faq" onClick={toggleMenu}>{t('nav.faq')}</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>{t('nav.contact')}</Link>
            </li>
            <li>
              <Link to="/prices" onClick={toggleMenu}>{t('nav.prices')}</Link>
            </li>
            <li className="language-row">
              <button 
                onClick={() => { changeLanguage('en'); toggleMenu(); }} 
                className={i18n.language === 'en' ? 'active' : ''}
              >{t('language_switcher.en')}</button><span className="separator">/</span><button 
                onClick={() => { changeLanguage('de'); toggleMenu(); }} 
                className={i18n.language === 'de' ? 'active' : ''}
              >{t('language_switcher.de')}</button>
            </li>
          </ul>
          
          {menuOpen && <div className="menu-overlay open" onClick={toggleMenu}></div>}
        </nav>
      </div>
    </header>
  );
};

export default Header; 