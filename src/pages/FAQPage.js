import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
          {answer}
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
              question="How do I know if coaching is right for me?" 
              answer="Coaching is beneficial for individuals who are ready for change, open to feedback, and committed to their personal and professional growth. If you have specific goals you want to achieve or challenges you want to overcome, coaching can provide the structure and support you need." 
            />
            
            <FAQItem 
              question="How are coaching sessions conducted?" 
              answer="Coaching sessions can be conducted in person, via video call, or by phone, depending on your preference and location. Many clients find video calls to be convenient and effective, as they allow for face-to-face interaction without the need for travel." 
            />
            
            <FAQItem 
              question="Is everything discussed in coaching confidential?" 
              answer="Yes, confidentiality is a cornerstone of the coaching relationship. All information shared during coaching sessions is kept strictly confidential, with the exception of situations where there is a legal obligation to disclose information or if there is risk of harm to yourself or others." 
            />
            
            <FAQItem 
              question="What's the difference between coaching and therapy?" 
              answer="While both coaching and therapy can support personal growth, coaching focuses primarily on the present and future, helping you set and achieve specific goals. Therapy often addresses past experiences and healing emotional wounds. Coaching assumes you're starting from a place of basic wellness and are ready to move forward." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 