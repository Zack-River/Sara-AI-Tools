import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const TargetAudienceSection = () => {
  return (
    <section id="target-audience" style={{ width: '100%', background: 'linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg-subtle) 50%, var(--color-bg-light) 100%)', position: 'relative', overflow: 'hidden', direction: 'rtl', fontFamily: 'var(--font-family)', padding: 'var(--space-2xl) 0', boxSizing: 'border-box' }}>

      {/* Animated background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: -200, right: -100, width: 500, height: 500, background: 'radial-gradient(circle, rgba(197,173,124,0.08) 0%, rgba(197,173,124,0) 70%)', borderRadius: '50%', animation: 'aboutCircle1 20s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(10,25,47,0.04) 0%, rgba(10,25,47,0) 70%)', borderRadius: '50%', animation: 'aboutCircle2 18s ease-in-out infinite 3s' }} />
        <div style={{ position: 'absolute', top: '50%', left: '30%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(197,173,124,0.06) 0%, rgba(197,173,124,0) 70%)', borderRadius: '50%', animation: 'aboutCircle3 22s ease-in-out infinite 6s' }} />
        {/* Stars */}
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <div style={{ position: 'absolute', top: '12%', left: '8%', width: 3, height: 3, background: '#C5AD7C', borderRadius: '50%', boxShadow: '0 0 6px #FFD700', animation: 'aboutStarFast 6s linear infinite' }} />
          <div style={{ position: 'absolute', top: '35%', left: '92%', width: 4, height: 4, background: '#FFD700', borderRadius: '50%', boxShadow: '0 0 8px #FFD700', animation: 'aboutStarFast 8s linear infinite' }} />
          <div style={{ position: 'absolute', top: '78%', left: '15%', width: 2, height: 2, background: 'white', borderRadius: '50%', animation: 'aboutStarFast 5s linear infinite' }} />
          <div style={{ position: 'absolute', top: '22%', left: '65%', width: 3, height: 3, background: '#C5AD7C', borderRadius: '50%', animation: 'aboutStarFast 7s linear infinite' }} />
          <div style={{ position: 'absolute', top: '45%', left: '25%', width: 3, height: 3, background: '#FFD700', borderRadius: '50%', animation: 'aboutStarSlow 15s linear infinite' }} />
          <div style={{ position: 'absolute', top: '68%', left: '78%', width: 4, height: 4, background: '#C5AD7C', borderRadius: '50%', boxShadow: '0 0 6px #FFD700', animation: 'aboutStarSlow 18s linear infinite' }} />
          <div style={{ position: 'absolute', top: '88%', left: '45%', width: 2, height: 2, background: 'white', borderRadius: '50%', animation: 'aboutStarSlow 12s linear infinite' }} />
          <div style={{ position: 'absolute', top: '15%', left: '48%', width: 3, height: 3, background: '#C5AD7C', borderRadius: '50%', animation: 'aboutStarSlow 20s linear infinite' }} />
          <div style={{ position: 'absolute', top: '55%', left: '85%', width: 3, height: 3, background: '#FFD700', borderRadius: '50%', animation: 'aboutStarSlow 14s linear infinite' }} />
          <div style={{ position: 'absolute', top: '60%', left: '12%', width: 2, height: 2, background: 'white', borderRadius: '50%', animation: 'aboutStarMedium 10s linear infinite' }} />
          <div style={{ position: 'absolute', top: '28%', left: '38%', width: 3, height: 3, background: '#C5AD7C', borderRadius: '50%', animation: 'aboutStarMedium 12s linear infinite' }} />
          <div style={{ position: 'absolute', top: '82%', left: '65%', width: 2, height: 2, background: '#FFD700', borderRadius: '50%', animation: 'aboutStarMedium 8s linear infinite' }} />
          <div style={{ position: 'absolute', top: '48%', left: '58%', width: 4, height: 4, background: 'white', borderRadius: '50%', animation: 'aboutStarMedium 11s linear infinite' }} />
        </div>
        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(197,173,124,0.05) 40px, rgba(197,173,124,0.05) 80px)', animation: 'aboutWave 25s linear infinite' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 30px' }}>

        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: 50, animation: 'aboutFadeUp 0.8s ease-out' }}>
          <span id="who-for" className="badge">
            <GraduationCap size={16} />
            لمن هذا الدليل؟
          </span>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, margin: '20px 0 15px', color: 'var(--color-primary)' }}>هذا الدليل مناسب لك إذا كنت:</h2>
          <div style={{ width: 60, height: 3, background: 'var(--color-accent)', margin: '0 auto', borderRadius: 3, animation: 'aboutLineScale 1s ease-out' }} />
        </div>

        {/* 2-column grid */}
        <div className="layout-1x1" style={{ alignItems: 'stretch' }}>

          {/* Right column: Text */}
          <div style={{ animation: 'aboutFadeRight 0.8s ease-out 0.2s both' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 20, lineHeight: 1.3 }}>
              وفّر وقتك وجهدك<br />
              <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xl)', display: 'inline-block', marginTop: 5 }}>في مسيرتك الأكاديمية</span>
            </h3>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
              {[
                { title: 'طالب في أي مرحلة دراسية.' },
                { title: 'تواجه صعوبة في التلخيص وفهم المراجع.' },
                { title: 'تضيع وقت طويل في البحث عن الأدوات المناسبة.' },
                { title: 'تحتاج تنجز عروضك وواجباتك بسرعة واحترافية.' },
              ].map((f, i) => (
                <div key={i} className="about-feature-item" style={{ display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(2px)', padding: '15px 20px', borderRadius: 'var(--radius-md)', transition: 'var(--transition-normal)', borderRight: '4px solid var(--color-accent)', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: 45, height: 45, background: 'rgba(10,25,47,0.06)', color: 'var(--color-accent)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>{f.title}</h4>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Left column: Image */}
          <div style={{ animation: 'aboutFadeLeft 0.8s ease-out 0.4s both', position: 'relative', height: '100%' }}>
            <style>{`
              .target-image-wrapper { position: absolute; top: 0; left: 0; height: 100%; width: 100%; }
              @media (max-width: 768px) {
                .target-image-wrapper { position: relative; height: auto; aspect-ratio: 1/1; }
              }
            `}</style>
            <div className="about-spirit-card target-image-wrapper" style={{ borderRadius: 35, overflow: 'hidden', boxShadow: '0 25px 45px -12px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.5)' }}>
              <img src="/images/audience.webp" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} alt="Students" loading="lazy" decoding="async" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
