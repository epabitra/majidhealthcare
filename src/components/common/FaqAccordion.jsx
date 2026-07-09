import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FaqAccordion.css';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
            <button
              className="faq-item__trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <FaChevronDown aria-hidden="true" className="faq-item__chevron" />
            </button>
            <div className="faq-item__panel">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
