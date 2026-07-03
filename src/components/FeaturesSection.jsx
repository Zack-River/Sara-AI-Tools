import React from 'react';
import { Lightbulb, CheckCheck, Library, Edit3, Mic, FileText, Video } from 'lucide-react';

const features = [
  {
    // icon: <Library size={48} opacity={0.3} />,
    icon: <CheckCheck size={48} opacity={0.3} />,
    title: 'تلخيص الكتب وملفات PDF',
    headerBg: 'linear-gradient(135deg, #0A192F, #1e3a6b)',
  },
  {
    // icon: <Edit3 size={48} opacity={0.3} />,
    icon: <CheckCheck size={48} opacity={0.3} />,
    title: 'أدوات لحل الواجبات مع الشرح',
    headerBg: 'linear-gradient(135deg, #1e3a6b, #0A192F)',
  },
  {
    // icon: <Mic size={48} opacity={0.3} />,
    icon: <CheckCheck size={48} opacity={0.3} />,
    title: 'أدوات للعروض التقديمية',
    headerBg: 'linear-gradient(135deg, #C5AD7C, #b89a6a)',
  },
  {
    // icon: <FileText size={48} opacity={0.3} />,
    icon: <CheckCheck size={48} opacity={0.3} />,
    title: 'أدوات للبحث الأكاديمي',
    headerBg: 'linear-gradient(135deg, #0A192F, #1e3a6b)',
  },
  {
    // icon: <Video size={48} opacity={0.3} />,
    icon: <CheckCheck size={48} opacity={0.3} />,
    title: 'أدوات للفيديو والصور',
    headerBg: 'linear-gradient(135deg, #1e3a6b, #0A192F)',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" style={{ width: '100%', background: 'linear-gradient(135deg, #ffffff 0%, var(--color-bg-light) 100%)', position: 'relative', overflow: 'hidden', direction: 'rtl', fontFamily: 'var(--font-family)', margin: 0, padding: 'var(--space-2xl) 0', boxSizing: 'border-box' }}>

      {/* Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(197,173,124,0.06) 0%, transparent 70%)', borderRadius: '50%', animation: 'hotelBgMove1 20s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(10,25,47,0.04) 0%, transparent 70%)', borderRadius: '50%', animation: 'hotelBgMove2 22s ease-in-out infinite 3s' }} />
        <div style={{ position: 'absolute', top: '40%', left: '20%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(197,173,124,0.05) 0%, transparent 70%)', borderRadius: '50%', animation: 'hotelBgMove3 18s ease-in-out infinite 6s' }} />
        <div style={{ position: 'absolute', top: '60%', right: '15%', width: 250, height: 250, background: 'radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)', borderRadius: '50%', animation: 'hotelBgMove1 15s ease-in-out infinite 2s' }} />
        {[
          { top: '15%', left: '10%', size: 3, color: '#C5AD7C', anim: 'hotelDotMove1 12s linear infinite' },
          { top: '30%', right: '15%', size: 2, color: '#C5AD7C', anim: 'hotelDotMove2 14s linear infinite' },
          { top: '70%', left: '20%', size: 4, color: '#FFD700', anim: 'hotelDotMove3 10s linear infinite' },
          { top: '85%', right: '30%', size: 2, color: '#C5AD7C', anim: 'hotelDotMove1 16s linear infinite' },
          { top: '45%', left: '35%', size: 3, color: 'white', anim: 'hotelDotMove2 11s linear infinite' },
          { top: '55%', right: '45%', size: 2, color: '#C5AD7C', anim: 'hotelDotMove3 13s linear infinite' },
        ].map((d, i) => (
          <div key={i} style={{ position: 'absolute', top: d.top, left: d.left, right: d.right, width: d.size, height: d.size, background: d.color, borderRadius: '50%', opacity: 0.35, animation: d.anim }} />
        ))}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 80, background: 'repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(197,173,124,0.03) 30px, rgba(197,173,124,0.03) 60px)', animation: 'hotelWaveMove 20s linear infinite' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '60px 25px' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="badge" style={{ marginBottom: 15 }}>
            <Lightbulb size={16} color="var(--color-accent)" />
            <span>المحتويات</span>
          </div>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, margin: 0, color: 'var(--color-primary)' }}>
            ماذا ستجد داخل الدليل؟
          </h2>
          <div style={{ width: 60, height: 3, background: 'var(--color-accent)', margin: '15px auto' }} />
        </div>

        {/* Features cards */}
        <div className="hotels-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 25, margin: '30px 0 50px' }}>
          {features.map((f, i) => (
            <div key={i} className="hotel-pro-card" style={{ background: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: '0 8px 25px -8px rgba(0,0,0,0.05)', border: '1px solid rgba(197,173,124,0.1)' }}>
              <div style={{ height: 120, background: f.headerBg, color: 'var(--color-highlight)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {f.icon}
              </div>
              <div style={{ padding: 20, textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>{f.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
