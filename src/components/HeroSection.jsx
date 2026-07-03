import React, { useEffect, useRef, useState } from 'react';
import { Rocket, MessageCircle } from 'lucide-react';
import content from '../constants/content.json';

const particles = [
  { top: '10%', left: '15%', size: 5, color: '#C5AD7C', shadow: '0 0 10px #FFD700, 0 0 20px rgba(197,173,124,0.5)', anim: 'm1 6s' },
  { top: '25%', left: '45%', size: 4, color: '#FFD700', shadow: '0 0 10px #FFD700', anim: 'm2 8s' },
  { top: '55%', left: '70%', size: 6, color: '#C5AD7C', shadow: '0 0 15px #FFD700', anim: 'm3 7s' },
  { top: '75%', left: '20%', size: 4, color: 'white', shadow: '0 0 10px rgba(255,255,255,0.8)', anim: 'm4 9s' },
  { top: '15%', left: '85%', size: 5, color: '#FFD700', shadow: '0 0 12px #FFD700', anim: 'm1 10s' },
  { top: '45%', left: '10%', size: 3, color: '#C5AD7C', shadow: 'none', anim: 'm2 5s' },
  { top: '85%', left: '55%', size: 5, color: 'white', shadow: 'none', anim: 'm3 11s' },
  { top: '35%', left: '90%', size: 4, color: '#FFD700', shadow: 'none', anim: 'm4 7s' },
  { top: '65%', left: '35%', size: 5, color: '#C5AD7C', shadow: 'none', anim: 'm1 13s' },
  { top: '5%',  left: '50%', size: 3, color: 'white', shadow: 'none', anim: 'm2 6s' },
  { top: '92%', left: '80%', size: 5, color: '#FFD700', shadow: 'none', anim: 'm3 15s' },
  { top: '50%', left: '30%', size: 4, color: '#C5AD7C', shadow: 'none', anim: 'm4 12s' },
  { top: '20%', left: '60%', size: 6, color: '#FFD700', shadow: '0 0 15px #FFD700', anim: 'm1 14s' },
  { top: '70%', left: '75%', size: 3, color: 'white', shadow: 'none', anim: 'm2 8s' },
  { top: '40%', left: '50%', size: 5, color: '#C5AD7C', shadow: 'none', anim: 'm3 9s' },
];

const HeroSection = () => {
  return (
    <header
      id="hero-section"
      style={{
        width: '100%',
        background: 'var(--color-bg-light)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        direction: 'rtl',
        fontFamily: 'var(--font-family)',
        boxSizing: 'border-box',
        paddingTop: '80px',
      }}
    >
      {/* Background particles */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: 'radial-gradient(circle at 30% 40%, rgba(197,173,124,0.1) 0%, transparent 70%)' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          {particles.map((p, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: p.color,
                borderRadius: '50%',
                boxShadow: p.shadow !== 'none' ? p.shadow : undefined,
                animation: `${p.anim} ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: -150, right: -150, width: 500, height: 500, background: 'radial-gradient(circle, rgba(197,173,124,0.4) 0%, rgba(197,173,124,0) 70%)', borderRadius: '50%', filter: 'blur(50px)', animation: 'p1 6s ease-in-out infinite', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(10,25,47,0.2) 0%, rgba(10,25,47,0) 70%)', borderRadius: '50%', filter: 'blur(50px)', animation: 'p2 8s ease-in-out infinite 2s', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '50%', left: '10%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'p3 10s ease-in-out infinite 4s', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '20%', left: '40%', width: 200, height: 200, background: 'radial-gradient(circle, rgba(197,173,124,0.3) 0%, rgba(197,173,124,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', animation: 'p1 7s ease-in-out infinite 1s', zIndex: 0 }} />

      {/* Content */}
      <div style={{ width: '100%', position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '60px 30px 120px' }}>
        <div className="layout-1x1" style={{ position: 'relative', zIndex: 2 }}>

          {/* Text side */}
          <div style={{ animation: 'fUp 0.9s ease-out' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(10,25,47,0.06)', padding: '8px 24px', borderRadius: 50, fontSize: '0.9rem', color: '#0A192F', fontWeight: 600, marginBottom: 30 }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, background: '#C5AD7C', color: 'white', borderRadius: '50%', animation: 'pd 1.5s infinite' }}>
                <Rocket size={12} />
              </span>
              دليل حصري
            </div>

            <h1 style={{ margin: '0 0 20px' }}>
              <span style={{ display: 'block', fontSize: 'var(--text-3xl)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.2 }}>
                دليل أدوات الذكاء الاصطناعي
              </span>
              <span style={{ display: 'block', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-accent)', marginTop: 10 }}>
                للطالب السعودي
              </span>
            </h1>

            <div style={{ width: 70, height: 4, background: '#C5AD7C', margin: '20px 0 25px', borderRadius: 2 }} />

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#4a5568', marginBottom: 30 }}>
              وفّر وقتك في المذاكرة... وخلّ الذكاء الاصطناعي ينجز عنك المهام الروتينية.<br /><br />
              تم جمع أفضل أدوات الذكاء الاصطناعي في دليل واحد، مع شرح مختصر ورابط مباشر لكل أداة، عشان تقدر تبدأ تستخدمها من أول يوم.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 30, marginBottom: 40, flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-primary)' }}>+١٠٠٠</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>طالب مستفيد</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-primary)' }}>+١٥٠٠</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>تقييم إيجابي</span>
              </div>
              <div style={{ width: 1, height: 40, background: 'rgba(0,0,0,0.1)' }} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-primary)' }}>+٥٠</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>أداة مشروحة</span>
              </div>
            </div>


          </div>

          {/* Images side */}
          <div>
            <div style={{ borderRadius: 30, overflow: 'hidden', marginBottom: 20, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)' }}>
              <img
                src="/images/hero_main.webp"
                style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
                alt="AI Tools Guide"
                loading="lazy"
              />
            </div>
            <div className="layout-3col">
              <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src="/images/hero_ai.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="AI Technology" loading="lazy" />
              </div>
              <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src="/images/hero_learn.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Learning" loading="lazy" />
              </div>
              <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src="/images/hero_student.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Student" loading="lazy" />
              </div>
            </div>
          </div>

        </div>

        {/* Centered Buttons */}
        <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginTop: 60, position: 'relative', zIndex: 2 }}>
          <a href="https://wa.me/966575109308" target="_blank" rel="noopener noreferrer" className="btn-dark" aria-label="اطلب دليل الذكاء الاصطناعي عبر الواتساب">
            <MessageCircle size={20} />
            اطلب الدليل الآن
          </a>
          <a href="#what-inside" className="btn-outline">
            ماذا داخل الدليل؟
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <div style={{ width: 31, height: 50, border: '2px solid #C5AD7C', borderRadius: 22, position: 'relative', animation: 'bnc 2s infinite' }}>
          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 5, height: 10, background: '#0A192F', borderRadius: 2, animation: 'wh 1.5s infinite' }} />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
