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
                <div style={{ backgroundColor: 'var(--pistachio-light)', padding: '15px', marginTop: '15px', borderRadius: '4px' }}>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Self-awareness development</li>
                    <li>Goal setting and achievement</li>
                    <li>Overcoming limiting beliefs</li>
                    <li>Building confidence and resilience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>{t('coaching.feature2_title')}</h3>
                <p>{t('coaching.feature2_description')}</p>
                <div style={{ backgroundColor: 'var(--pistachio-light)', padding: '15px', marginTop: '15px', borderRadius: '4px' }}>
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
                <div style={{ backgroundColor: 'var(--pistachio-light)', padding: '15px', marginTop: '15px', borderRadius: '4px' }}>
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

      <section className="section" style={{ backgroundColor: 'var(--pistachio-light)' }}>
        <div className="container">
          <h2 className="section-title">My Coaching Approach</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '30px' }}>
              My coaching methodology is based on a holistic approach that considers all aspects of your life. I believe in creating a safe, supportive space where you can explore challenges, discover insights, and create meaningful change.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
                <h3 style={{ color: 'var(--pistachio-dark)', marginBottom: '15px' }}>My Process</h3>
                <ol style={{ paddingLeft: '20px' }}>
                  <li>Initial consultation to understand your needs</li>
                  <li>Goal setting and action planning</li>
                  <li>Regular coaching sessions</li>
                  <li>Progress evaluation and adjustments</li>
                  <li>Celebration of achievements</li>
                </ol>
              </div>
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
                <h3 style={{ color: 'var(--pistachio-dark)', marginBottom: '15px' }}>My Tools</h3>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Positive psychology techniques</li>
                  <li>Cognitive-behavioral strategies</li>
                  <li>Solution-focused approaches</li>
                  <li>Personality assessments</li>
                  <li>Mindfulness practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingPage; 