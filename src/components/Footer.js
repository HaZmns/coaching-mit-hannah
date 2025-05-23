import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">

          <div className="footer-section">
            <h3><Link to="/coaching">{t('nav.coaching')}</Link></h3>
          </div>

          <div className="footer-section">
            <h3><Link to="/about">{t('nav.about')}</Link></h3>
          </div>

          <div className="footer-section">
            <h3><Link to="/faq">{t('nav.faq')}</Link></h3>
          </div>
        
          <div className="footer-section">
            <h3><Link to="/prices">{t('nav.prices')}</Link></h3>
          </div>

          <div className="footer-section">
            <h3><Link to="/contact">{t('nav.contact')}</Link></h3>
            <p>
              Email: <a href="mailto:hannah.ziemons@posteo.de">hannah.ziemons@posteo.de</a><br />
              Mobil: <a href="tel:+4915782580405">+49 15782580405</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p>
            <Link to="/impressum">{t('nav.impressum')}</Link> | 
            <Link to="/privacy"> {t('footer.privacy_policy')}</Link> | 
            <Link to="/terms">{t('footer.terms_of_service')}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 