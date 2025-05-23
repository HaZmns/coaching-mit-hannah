import React from 'react';
import { useTranslation } from 'react-i18next';

const ImpressumPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h1 className="section-title">{t('impressum.title')}</h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
            {t('impressum.description')}
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--pistachio-dark)' }}>
                {t('impressum.responsible_person')}
              </h3>
              <p>John Doe</p>
              <p>Coaching mit Hannah</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--pistachio-dark)' }}>
                {t('impressum.address')}
              </h3>
              <p>123 Coaching Street</p>
              <p>City, State 12345</p>
              <p>Country</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--pistachio-dark)' }}>
                {t('impressum.contact')}
              </h3>
              <p>Email: hannah.ziemons@posteo.de</p>
              <p>Phone: +1 123 456 7890</p>
              <p>Website: www.coaching-mit-hannah.com</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--pistachio-dark)' }}>
                {t('impressum.register')}
              </h3>
              <p>Commercial Register: Sample Commercial Court</p>
              <p>Registration Number: 123456789</p>
              <p>VAT ID: DE123456789</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--pistachio-dark)' }}>
                {t('impressum.disclaimer')}
              </h3>
              <h4 style={{ marginBottom: '10px' }}>Limitation of Liability for Internal Content</h4>
              <p style={{ marginBottom: '20px' }}>
                The content of our website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for the up-to-dateness, completeness or accuracy of any of the pages.
              </p>
              
              <h4 style={{ marginBottom: '10px' }}>Limitation of Liability for External Links</h4>
              <p style={{ marginBottom: '20px' }}>
                Our website contains links to the websites of third parties ("external links"). As the content of these websites is not under our control, we cannot assume any liability for such external content. In all cases, the provider of information of the linked websites is liable for the content and accuracy of the information provided.
              </p>
              
              <h4 style={{ marginBottom: '10px' }}>Copyright</h4>
              <p style={{ marginBottom: '20px' }}>
                The content and works published on this website are governed by the copyright laws. Any duplication, processing, distribution or any form of utilization beyond the scope of copyright law shall require the prior written consent of the author or authors in question.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage; 