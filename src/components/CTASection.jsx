import React from 'react';
import { Smartphone } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta-section" style={{ width: '100%', background: 'linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg-subtle) 50%, var(--color-bg-light) 100%)', position: 'relative', direction: 'rtl', fontFamily: 'var(--font-family)', margin: 0, padding: 'var(--space-2xl) 0', overflow: 'hidden', boxSizing: 'border-box' }}>

      {/* Background blobs */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(197,173,124,0.06) 0%, transparent 70%)', borderRadius: '50%', animation: 'formBg1 25s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(10,25,47,0.03) 0%, transparent 70%)', borderRadius: '50%', animation: 'formBg2 30s ease-in-out infinite 5s' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', padding: '0 25px', textAlign: 'center' }}>
        
        <div style={{ animation: 'formSlideUp 0.8s ease-out' }}>
          <div className="badge" style={{ marginBottom: 20 }}>
            <Smartphone size={18} color="var(--color-accent)" />
            <span>الخطوة الأخيرة</span>
          </div>
          
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, margin: '15px 0', color: 'var(--color-primary)', letterSpacing: -1 }}>
            جاهز <span style={{ color: 'var(--color-accent)' }}>تبدأ؟</span>
          </h2>
          
          <div style={{ width: 80, height: 3, background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)', margin: '20px auto', borderRadius: 3 }} />
          
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: 'var(--text-lg)', marginBottom: 40 }}>
            ابدأ باستخدام الذكاء الاصطناعي بطريقة صحيحة، ووفّر وقتك وجهدك في الدراسة.
          </p>

          <a href="https://wa.me/+201017346421" target="_blank" rel="noopener noreferrer" className="btn-dark" aria-label="اطلب دليل الذكاء الاصطناعي عبر واتساب" style={{ fontSize: 'var(--text-lg)', padding: '18px 45px' }}>
            اطلب الدليل عبر واتساب
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
