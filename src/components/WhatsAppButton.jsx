import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = "966575109308", message = "هلا ، ودي استفسر عن دليل ادوات الذكاء الاصطناعي." }) => {
  // If no phone number is provided, we can fallback to a generic link or just open WhatsApp
  const whatsappUrl = phoneNumber 
    ? `https://wa.me/${phoneNumber}?text=${message}`
    : `https://wa.me/`;

  return (
    <div className="whatsapp-btn-container">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn"
        aria-label="تواصل معنا عبر واتساب"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
