import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PriceCard = ({ title, price, description, features, isPopular }) => {
  const { t } = useTranslation();
  
  return (
    <div style={{ 
      backgroundColor: 'var(--white)',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative',
      transform: isPopular ? 'scale(1.05)' : 'scale(1)',
      zIndex: isPopular ? 2 : 1
    }}>
      {/* {isPopular && (
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          backgroundColor: 'var(--pistachio)',
          color: 'var(--white)',
          padding: '5px 10px',
          fontSize: '14px',
          fontWeight: 'bold',
          borderBottomLeftRadius: '8px'
        }}>
          Most Popular
        </div>
      )} */}
      <div style={{
        padding: '30px',
        backgroundColor: isPopular ? 'var(--pistachio-light)' : 'var(--white)',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '15px' }}>{title}</h3>
        <div style={{ 
          fontSize: '36px', 
          fontWeight: 'bold',
          marginBottom: '15px'
        }}>
          {price}
        </div>
        <p style={{ marginBottom: '20px' }}>{description}</p>
      </div>
      <div style={{ padding: '20px 30px 30px' }}>
        <ul style={{ 
          listStyle: 'none',
          marginBottom: '30px'
        }}>
          {features.map((feature, index) => (
            <li key={index} style={{ 
              marginBottom: '10px',
              paddingLeft: '20px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                color: 'var(--pistachio)',
                fontWeight: 'bold'
              }}>✓</span> {feature}
            </li>
          ))}
        </ul>
        <Link 
          to="/contact" 
          className="btn"
          style={{ 
            display: 'block',
            textAlign: 'center',
            width: '100%',
            backgroundColor: isPopular ? 'var(--pistachio-real)' : 'var(--pistachio)'
          }}
        >
          {t('contact.title')}
        </Link>
      </div>
    </div>
  );
};

const PricesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h1 className="section-title">{t('prices.title')}</h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
            {t('prices.description')}
          </p>

          <div className="prices-grid">
            <div className="prices-card">
              <PriceCard
                title={t('prices.package1_title')}
                price={t('prices.package1_price')}
                description={t('prices.package1_description')}
                features={[
                  t('prices.package1_feature1'),
                  t('prices.package1_feature2'),
                  t('prices.package1_feature3'),
                  t('prices.package1_feature4')
                ]}
                isPopular={false}
              />
            </div>

            <div className="prices-card">
              <PriceCard
                title={t('prices.package2_title')}
                price={t('prices.package2_price')}
                description={t('prices.package2_description')}
                features={[
                  t('prices.package2_feature1'),
                  t('prices.package2_feature2'),
                  t('prices.package2_feature3'),
                  t('prices.package2_feature4')
                ]}
                isPopular={true}
              />
            </div>

            <div className="prices-card">
              <PriceCard
                title={t('prices.package3_title')}
                price={t('prices.package3_price')}
                description={t('prices.package3_description')}
                features={[
                  t('prices.package3_feature1'),
                  t('prices.package3_feature2'),
                  t('prices.package3_feature3'),
                  t('prices.package3_feature4')
                ]}
                isPopular={false}
              />
            </div>
          </div>

          <div style={{ 
            maxWidth: '800px', 
            margin: '50px auto 0',
            backgroundColor: 'var(--pistachio-very-light)',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '15px' }}>{t('prices.other_format_title')}</h3>
            <p style={{ marginBottom: '20px' }}>
              {t('prices.other_format_description')}
            </p>
            <Link to="/contact" className="btn" style={{ backgroundColor: 'var(--pistachio)' }}>
              {t('contact.title')}
            </Link>
          </div>

          <div style={{ 
            maxWidth: '800px', 
            margin: '30px auto 0',
            textAlign: 'center',
            fontSize: '14px',
            color: '#666'
          }}>
            <p>{t('prices.note')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricesPage; 