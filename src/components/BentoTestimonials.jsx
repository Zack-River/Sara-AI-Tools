import React, { useState } from 'react';
import { X } from 'lucide-react';

const BentoTestimonials = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const reviews = Array.from({ length: 10 }, (_, i) => `/images/reviews/${(i + 1).toString().padStart(2, '0')}.webp`);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  // Define grid layout patterns
  const getGridStyle = (index) => {
    // A simple pattern for bento grid look
    const styles = [
      { gridColumn: 'span 2', gridRow: 'span 2' }, // 0: Large
      { gridColumn: 'span 1', gridRow: 'span 1' }, // 1: Small
      { gridColumn: 'span 1', gridRow: 'span 2' }, // 2: Tall
      { gridColumn: 'span 1', gridRow: 'span 1' }, // 3: Small
      { gridColumn: 'span 2', gridRow: 'span 1' }, // 4: Wide
      { gridColumn: 'span 1', gridRow: 'span 2' }, // 5: Tall
      { gridColumn: 'span 1', gridRow: 'span 1' }, // 6: Small
      { gridColumn: 'span 1', gridRow: 'span 1' }, // 7: Small
      { gridColumn: 'span 2', gridRow: 'span 2' }, // 8: Large
      { gridColumn: 'span 1', gridRow: 'span 1' }, // 9: Small
    ];
    return styles[index % styles.length];
  };

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: '150px',
        gridAutoFlow: 'dense',
        gap: '15px',
        width: '100%',
        height: '450px', // matches the Author info card
        overflowY: 'auto', // scrollable if content overflows
        padding: '10px',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(197,173,124,0.1)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        {reviews.map((src, index) => (
          <div 
            key={index}
            style={{
              ...getGridStyle(index),
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'zoom-in',
              background: 'rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease',
            }}
            onClick={() => openModal(src)}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={src} 
              alt={`Review ${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'opacity 0.3s' }}
              onMouseOver={(e) => e.target.style.opacity = 1}
              onMouseOut={(e) => e.target.style.opacity = 0.9}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          onClick={() => setModalOpen(false)}
        >
          <button 
            style={{ position: 'absolute', top: 30, right: 30, background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
            onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}
            aria-label="إغلاق"
          >
            <X size={28} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Zoomed Review" 
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 10, cursor: 'default' }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default BentoTestimonials;
