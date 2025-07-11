import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CoachingImage from '../components/CoachingImage';

const HomePage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send the form data to a server
    // For this example, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: t('contact.success_message')
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-flex-container">
            <div className="hero-content" style={{ flex: '1', minWidth: '300px' }}>
              <h1>{t('home.hero_title')}</h1>
              <h2>{t('home.hero_subtitle')}</h2>
              <p>{t('home.description')}</p>
              <Link to="/contact" className="btn">
                {t('home.cta_button')}
              </Link>
            </div>
            <div style={{ 
              flex: '1', 
              minWidth: '200px', 
              maxWidth: '350px', 
              margin: '0 auto',
              paddingTop: '5px'
            }}>
              <CoachingImage />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray)' }}>
        <div className="hero-flex-container">
          <div className="hero-content">
            <h1>{t('coaching.hero_title')}</h1>
            <h2>{t('coaching.hero_subtitle')}</h2>
            <p>{t('coaching.description')}</p>
            <h2>{t('coaching.second_subtitle')}</h2>
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '20px',
              margin: '15px 0 25px',
              lineHeight: '1.7'
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

      <section className="section" >
        <div className="hero-flex-container">
          <div className="hero-content">
            <h1>{t('about.hero_title')}</h1>
            <p>{t('about.description')}</p>          
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: 'var(--gray)' }}>
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
              <div className="contact-section">
                <h3>Email</h3>
                <p>
                  hannah.ziemons@posteo.de
                </p>
              </div>
              
              <div className="contact-section">
                <h3>Telefon</h3>
                <p>
                  +49 15782580405
                </p>
              </div>
              
            </div>
            
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {formStatus.submitted && formStatus.success ? (
                <div style={{ 
                  backgroundColor: 'var(--pistachio-light)', 
                  padding: '20px', 
                  borderRadius: '8px',
                  marginBottom: '20px'
                }}>
                  <p>{formStatus.message}</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} style={{ 
                backgroundColor: 'var(--white)',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <label 
                    htmlFor="name" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '5px',
                      fontWeight: '500'
                    }}
                  >
                    {t('contact.name_label')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label 
                    htmlFor="email" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '5px',
                      fontWeight: '500'
                    }}
                  >
                    {t('contact.email_label')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label 
                    htmlFor="message" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '5px',
                      fontWeight: '500'
                    }}
                  >
                    {t('contact.message_label')}
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn"
                  style={{ width: '100%' }}
                >
                  {t('contact.submit_button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 