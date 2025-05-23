import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h1 className="section-title">{t('about.title')}</h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
            {t('about.description')}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '0 0 300px', textAlign: 'center' }}>
              <div style={{ 
                width: '250px', 
                height: '250px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--pistachio-light)', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--pistachio-dark)'
              }}>
                Profile Photo
              </div>
              <h3 style={{ marginBottom: '10px' }}>John Doe</h3>
              <p>Professional Coach</p>
            </div>

            <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
              <p style={{ marginBottom: '20px' }}>{t('about.bio')}</p>
              
              <h3>{t('about.values_title')}</h3>
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                marginTop: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{ 
                  flex: '1',
                  minWidth: '150px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.value1')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '150px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.value2')}</h4>
                </div>
                <div style={{ 
                  flex: '1',
                  minWidth: '150px',
                  backgroundColor: 'var(--pistachio-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h4>{t('about.value3')}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray)' }}>
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '30px'
            }}>
              <div style={{ 
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--pistachio)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div>
                  <h3>Early Career</h3>
                  <p>I began my professional journey in the corporate world, where I quickly realized my passion for helping others develop their potential.</p>
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--pistachio)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  2
                </div>
                <div>
                  <h3>Professional Training</h3>
                  <p>I pursued certifications in coaching methodologies, positive psychology, and behavioral science to build a strong foundation for my practice.</p>
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--pistachio)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  3
                </div>
                <div>
                  <h3>Coaching Practice</h3>
                  <p>For the past decade, I've been helping individuals transform their lives through personalized coaching programs tailored to their unique needs and goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 