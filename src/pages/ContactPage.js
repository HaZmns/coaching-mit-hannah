import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
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
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h1 className="section-title">{t('contact.title')}</h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
            {t('contact.description')}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--pistachio-dark)' }}>Get In Touch</h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '5px' }}>Email</h4>
                <p>hannah.ziemons@posteo.de</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '5px' }}>Phone</h4>
                <p>+1 123 456 7890</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '5px' }}>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '5px' }}>Location</h4>
                <p>123 Coaching Street</p>
                <p>City, State 12345</p>
                <p>Country</p>
              </div>
            </div>

            <div style={{ flex: '1', minWidth: '300px' }}>
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

export default ContactPage; 