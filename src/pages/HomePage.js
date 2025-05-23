import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CoachingImage from '../components/CoachingImage';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="hero">
        <div className="container" style={{ padding: '0 200px' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '30px'
          }}>
            <div className="hero-content" style={{ flex: '1', minWidth: '300px' }}>
              <h1>{t('home.hero_title')}</h1>
              <h2>{t('home.hero_subtitle')}</h2>
              <p>{t('home.description')}</p>
              <Link to="/coaching" className="btn">
                {t('home.cta_button')}
              </Link>
            </div>
            <div style={{ 
              flex: '1', 
              minWidth: '200px', 
              maxWidth: '350px', 
              margin: '0 auto',
              paddingTop: '0'
            }}>
              <CoachingImage />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray)' }}>
        <div className="container">
          <div className="hero-content">
            <h1>{t('coaching.hero_title')}</h1>
            <h2>{t('coaching.hero_subtitle')}</h2>
            <p>{t('coaching.description')}</p>
            <h2>{t('coaching.second_subtitle')}</h2>
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '20px',
              margin: '15px 0 25px',
              lineHeight: '1.7',
              fontSize: '20px',
              fontWeight: '300',
              fontFamily: 'var(--font-body)',
              color: 'var(--blue)'
            }}>
              <li>berufliche (Neu-) Orientierung</li>
              <li>Konflikte im Privat- oder Arbeitsleben</li>
              <li>Umgang mit Unsicherheit & Selbstzweifeln</li>
              <li>Eintscheidungssituationen</li>
              <li>persönliche Veränderungsprozesse & -wünsche</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hero-content">
            <h1>{t('about.hero_title')}</h1>
            <p>{t('about.description')}</p>          
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
            {t('contact.description')}
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '40px', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ marginBottom: '10px', fontWeight: '400' }}>Email</h3>
                <p style={{ 
                  fontSize: '20px', 
                  fontWeight: '300', 
                  fontFamily: 'var(--font-body)', 
                  color: 'var(--blue)'
                }}>
                  hannah.ziemons@posteo.de
                </p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ marginBottom: '10px', fontWeight: '400' }}>Telefon</h3>
                <p style={{ 
                  fontSize: '20px', 
                  fontWeight: '300', 
                  fontFamily: 'var(--font-body)', 
                  color: 'var(--blue)'
                }}>
                  +49 15782580405
                </p>
              </div>
              
            </div>
            
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Link to="/contact" className="btn" style={{ marginTop: '20px', alignSelf: 'flex-start' }}>
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 