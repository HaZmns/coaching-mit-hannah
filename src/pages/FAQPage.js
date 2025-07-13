import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ 
      marginBottom: '20px', 
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div 
        style={{
          padding: '15px 20px',
          backgroundColor: 'var(--white)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          fontWeight: '500'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{question}</div>
        <div>{isOpen ? '−' : '+'}</div>
      </div>
      {isOpen && (
        <div style={{
          padding: '15px 20px',
          backgroundColor: 'var(--pistachio-light)',
          borderTop: '1px solid #eee'
        }}>
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h1 className="section-title">{t('faq.title')}</h1>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQItem 
              question={t('faq.question1')} 
              answer={t('faq.answer1')} 
            />
            <FAQItem 
              question={t('faq.question2')} 
              answer={t('faq.answer2')} 
            />
            <FAQItem 
              question={t('faq.question3')} 
              answer={t('faq.answer3')} 
            />
            <FAQItem 
              question={t('faq.question4')} 
              answer={t('faq.answer4')} 
            />
            <FAQItem 
              question={t('faq.question5')} 
              answer={t('faq.answer5')} 
            />
            <FAQItem 
              question={t('faq.question6')} 
              answer={t('faq.answer6')} 
            />
            <FAQItem 
              question={t('faq.question7')} 
              answer={t('faq.answer7')} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 