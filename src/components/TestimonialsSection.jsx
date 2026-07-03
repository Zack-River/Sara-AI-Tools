import React, { useState } from 'react';
import { MessageCircle, Star, ChevronRight, ChevronLeft, X } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const reviews = Array.from({ length: 10 }, (_, i) => `/images/reviews/${(i + 1).toString().padStart(2, '0')}.webp`);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  return (
    <section id="testimonials" style={{ width: '100%', background: 'var(--color-primary)', position: 'relative', direction: 'rtl', fontFamily: 'var(--font-family)', margin: 0, padding: 'var(--space-2xl) 0', overflow: 'hidden', boxSizing: 'border-box' }}>

      {/* Background blobs & Grid Pattern */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(197, 173, 124, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(197,173,124,0.08) 0%, transparent 70%)', borderRadius: '50%', animation: 'blogBg1 25s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)', borderRadius: '50%', animation: 'blogBg2 30s ease-in-out infinite 5s' }} />
        <div style={{ position: 'absolute', top: '40%', left: '20%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(197,173,124,0.06) 0%, transparent 70%)', borderRadius: '50%', animation: 'blogBg3 20s ease-in-out infinite 10s' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 25px' }}>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 45 }}>
          <div className="badge" style={{ marginBottom: 20 }}>
            <MessageCircle size={16} color="var(--color-accent)" />
            <span>قصص نجاح</span>
          </div>
          <h2 style={{ color: 'white', fontSize: 'var(--text-3xl)', fontWeight: 800, margin: 0, letterSpacing: -1, textAlign: 'center' }}>
            آراء <span style={{ color: 'var(--color-accent)' }}>الطلاب</span>
          </h2>
          <div style={{ width: 70, height: 3, background: 'var(--color-accent)', margin: '18px 0', borderRadius: 3 }} />
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 20, flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 25px', borderRadius: 'var(--radius-md)' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xl)', fontWeight: 800, display: 'block' }}>+١٠٠٠</span>
              <span style={{ color: 'white', fontSize: 'var(--text-sm)' }}>طالب مستفيد</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 25px', borderRadius: 'var(--radius-md)' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xl)', fontWeight: 800, display: 'block' }}>+١٥٠٠</span>
              <span style={{ color: 'white', fontSize: 'var(--text-sm)' }}>تقييم إيجابي</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 25px', borderRadius: 'var(--radius-md)' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xl)', fontWeight: 800, display: 'block' }}>+٥٠</span>
              <span style={{ color: 'white', fontSize: 'var(--text-sm)' }}>أداة مشروحة</span>
            </div>
          </div>
        </div>

        {/* Layout: Author info & Testimonials */}
        <div className="layout-1x2" style={{ alignItems: 'stretch' }}>
          
          {/* Author info (Glass card) */}
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(197,173,124,0.1)', borderRadius: 'var(--radius-lg)', padding: 30, textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 450 }}>
            <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <Star size={32} />
            </div>
            <h3 style={{ color: 'white', fontSize: 'var(--text-lg)', margin: '0 0 10px 0' }}>سارة العباس</h3>
            <p style={{ color: 'var(--color-accent)', margin: 0, fontSize: 'var(--text-sm)', fontWeight: 600 }}>مؤلفة الدليل</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', margin: '15px 0 0 0', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
              "صممت هذا الدليل بعد معاناة شخصية مع تشتت مصادر الذكاء الاصطناعي.. هدفي أختصر عليك الوقت اللي ضيعته."
            </p>
          </div>

          {/* Testimonials Carousel (Glass style) */}
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(197,173,124,0.1)', borderRadius: 'var(--radius-lg)', padding: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', height: 450 }}>
            
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden', borderRadius: '10px', background: 'rgba(0,0,0,0.2)', cursor: 'zoom-in' }} onClick={() => setModalOpen(true)}>
              <img 
                src={reviews[currentIndex]} 
                alt={`Review ${currentIndex + 1}`} 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                loading="lazy"
              />
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', gap: 15, marginTop: 25, alignItems: 'center' }}>
              <button 
                onClick={prevReview} 
                style={{ background: 'transparent', border: '1px solid var(--color-accent)', color: 'var(--color-accent)', borderRadius: '50%', width: 45, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                aria-label="السابق"
              >
                <ChevronRight size={24} />
              </button>
              
              <button 
                onClick={nextReview} 
                style={{ background: 'var(--color-accent)', border: '1px solid var(--color-accent)', color: 'var(--color-primary)', borderRadius: '50%', width: 45, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                aria-label="التالي"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            {/* Dots */}
            <div style={{ display: 'flex', gap: 6, marginTop: 20 }}>
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  style={{ width: i === currentIndex ? 24 : 8, height: 8, borderRadius: 4, background: i === currentIndex ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)', transition: 'all 0.3s', cursor: 'pointer' }}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>

          </div>
          
        </div>
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
          
          <button 
            style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
            onClick={(e) => { e.stopPropagation(); prevReview(); }}
            aria-label="السابق"
          >
            <ChevronRight size={32} />
          </button>
          
          <img 
            src={reviews[currentIndex]} 
            alt="Zoomed Review" 
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 10, cursor: 'default' }} 
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            style={{ position: 'absolute', left: 40, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
            onClick={(e) => { e.stopPropagation(); nextReview(); }}
            aria-label="التالي"
          >
            <ChevronLeft size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
