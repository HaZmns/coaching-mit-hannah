import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section" style={{ paddingTop: '60px'}}>
        <div className="container">
          <h1 className="section-title">{t('about.title')}</h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 0px' }}>
            {t('about.description')}
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray)', padding: '60px 0'}}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '0 0 300px', textAlign: 'center' }}>
              <div style={{ 
                width: '250px', 
                height: '250px', 
                borderRadius: '50%', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}>
                <img 
                  src="./images/hannah_profile_sw.png"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 style={{ marginBottom: '10px' }}>{t('about.name')}</h3>
              <p>{t('about.title')}</p>
            </div>

            <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
              <h3>{t('about.values_title')}</h3>

              <p style={{ marginBottom: '20px' }}>{t('about.bio')}</p>
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                marginTop: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.value1')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.value2')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.value3')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.value4')}</h4>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mirrored section with image on the right */}
      <section className="section" >
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
              <h3>{t('about.interests_title')}</h3>
              <p style={{ marginBottom: '20px' }}>
                {t('about.interests_description')}
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                marginTop: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.interest1')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.interest2')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.interest3')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '130px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.interest4')}</h4>
                </div>
              </div>
            </div>

            <div style={{ flex: '0 0 300px', textAlign: 'center' }}>
              <div style={{ 
                width: '250px', 
                height: '250px', 
                borderRadius: '50%', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}>
                <img 
                  src="./images/hannah_lake_sw.png"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.target.style.display = 'none';
                  }}
                /> 
              </div>
              {/* <h3 style={{ marginBottom: '10px' }}>Systemisches Coaching</h3>
              <p>Gemeinsam Lösungen finden</p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 