import React from 'react';
import { useTranslation } from 'react-i18next';

const CoachingPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h1 className="section-title">{t('coaching.title')}</h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
            {t('coaching.description')}
          </p>

          <div className="card-grid">
            <div className="card">
              <div className="card-content">
                <h3>{t('coaching.feature1_title')}</h3>
                <p>{t('coaching.feature1_description')}</p>
                <div style={{ backgroundColor: 'var(--gray)', padding: '15px', marginTop: '15px', borderRadius: '4px' }}>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>{t('coaching.feature1_item1')}</li>
                    <li>{t('coaching.feature1_item2')}</li>
                    <li>{t('coaching.feature1_item3')}</li>
                    <li>{t('coaching.feature1_item4')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>{t('coaching.feature2_title')}</h3>
                <p>{t('coaching.feature2_description')}</p>
                <div style={{ backgroundColor: 'var(--gray)', padding: '15px', marginTop: '15px', borderRadius: '4px' }}>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>{t('coaching.feature2_item1')}</li>
                    <li>{t('coaching.feature2_item2')}</li>
                    <li>{t('coaching.feature2_item3')}</li>
                    <li>{t('coaching.feature2_item4')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>{t('coaching.feature3_title')}</h3>
                <p>{t('coaching.feature3_description')}</p>
                <div style={{ backgroundColor: 'var(--gray)', padding: '15px', marginTop: '15px', borderRadius: '4px' }}>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>{t('coaching.feature3_item1')}</li>
                    <li>{t('coaching.feature3_item2')}</li>
                    <li>{t('coaching.feature3_item3')}</li>
                    <li>{t('coaching.feature3_item4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray)' }}>
        <div className="container">
          <h2 className="section-title">{t('coaching.approach_title')}</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '30px' }}>
              {t('coaching.approach_description')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingPage; 