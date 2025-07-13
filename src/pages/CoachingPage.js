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
                    <li>Wo möchte ich meine berufliche Laufbahn starten?</li>
                    <li>Wie kann ich gelassener mit beruflichen Konflikten umgehen?</li>
                    <li>Ist jetzt die richtige Zeit für einen Job-Wechsel?</li>
                    <li>Wie schaffe ich den Einstieg in eine neue Branche?</li>
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
                    <li>Career path planning</li>
                    <li>Job search strategy</li>
                    <li>Interview preparation</li>
                    <li>Leadership development</li>
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
                    <li>Stress management</li>
                    <li>Time management techniques</li>
                    <li>Work-life integration</li>
                    <li>Prioritization strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray)' }}>
        <div className="container">
          <h2 className="section-title">Mein Ansatz</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '30px' }}>
              Mein Herangehen beim Coaching basiert auf systemischen und personenzentrierten Komponenten, sowie meiner persönlichen Erfahrung. Das wichtigste dabei ist, dass du einen sicheren und motivierenden Raum hast, dein Anliegen zu erforschen und Herausforderungen zu begnen, frei von Bewertungen und Ratschlägen. Auch wenn ich es spannend finde, mich ständig weiterzubilden und dir gerne verschiedene Tools anbieten, steht am Ende im Mittelpunkt, dass du selbst entscheidest, wie du deine Zeile erreichst.
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