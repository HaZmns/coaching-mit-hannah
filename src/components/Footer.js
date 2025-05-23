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
            <h3>{t('nav.coaching')}</h3>
          </div>

          <div className="footer-section">
            <h3>{t('nav.about')}</h3>
          </div>

          <div className="footer-section">
            <h3>{t('nav.faq')}</h3>
          </div>
        
          <div className="footer-section">
            <h3>{t('nav.prices')}</h3>
          </div>

          <div className="footer-section">
            <h3>{t('nav.contact')}</h3>
            <p>
              Email: hannah.ziemons@posteo.de<br />
              Mobil: +49 15782580405
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p>
            <Link to="/impressum">{t('nav.impressum')}</Link> | 
            <span> {t('footer.privacy_policy')} | </span>
            <span>{t('footer.terms_of_service')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 