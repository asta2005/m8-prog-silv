import { useState } from 'react';
import './FAQ.css';

export function FAQ() {
  const faqs = [
    {
      question: "Wat is dit project?",
      answer: "Dit is een React-project waarin frontend routing wordt gebruikt."
    },
    {
      question: "Hoe werkt routing in React?",
      answer: "React Router gebruikt componenten zoals <Route> en <Link> om pagina's te tonen zonder de pagina opnieuw te laden."
    },
    {
      question: "Waarom HashRouter in plaats van BrowserRouter?",
      answer: "Omdat je site waarschijnlijk lokaal of zonder server draait, is HashRouter betrouwbaarder bij refreshes."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Veelgestelde Vragen</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggle(index)}>
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
