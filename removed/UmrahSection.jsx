import React from 'react';

const packages = [
  { emoji: '🕋', badge: 'برونزية', badgeBg: '#C5AD7C15', days: '3 أيام', title: 'رحلات عمره', desc: 'إقامة اقتصادية مريحة ومواصلات حديثة', iconBg: '#0A192F', featured: false },
  { emoji: '⭐🕋', badge: 'فضية', badgeBg: '#C5AD7C15', days: '5 أيام', title: 'رحلات عمره', desc: 'إقامة فاخرة ووجبات إفطار وبرنامج سياحي', iconBg: '#0A192F', featured: false },
  { emoji: '✨🕋', badge: 'ذهبية', badgeBg: '#C5AD7C15', days: '7 أيام', title: 'رحلات عمره', desc: 'باقة متكاملة إقامة 5 نجوم وجميع الوجبات', iconBg: '#C5AD7C', featured: true },
  { emoji: '👑🕋', badge: 'ملكية', badgeBg: '#C5AD7C15', days: '10 أيام', title: 'رحلات عمره', desc: 'أشمل رحلة إقامة فاخرة وبرامج دينية وثقافية', iconBg: '#0A192F', featured: false },
];

const schedule = [
  { trip: '🕋 رحلة يوم السبت', type: 'اقتصاديه', days: '3 أيام', vip: false, alt: false },
  { trip: '⭐ عمرة يوم الاحد', type: 'اقتصاديه', days: '3 أيام', vip: false, alt: true },
  { trip: '✨ عمرة يوم الاثنين', type: 'VIP', days: '3 – 5 أيام', vip: true, alt: false },
  { trip: '🕌 عمرة يوم الثلاثاء', type: 'اقتصاديه', days: '3 أيام', vip: false, alt: false },
  { trip: '🌟 رحلة يوم الاربعاء', type: 'اقتصاليه', days: '3 أيام', vip: false, alt: true },
  { trip: '⭐ رحلة يوم الخميس', type: 'VIP', days: '3 – 5 أيام', vip: true, alt: false },
];

const UmrahSection = () => {
  return (
    <div id="umrah-final" style={{ width: '100%', background: 'linear-gradient(135deg, #ffffff, #faf8f5)', position: 'relative', direction: 'rtl', fontFamily: "'Cairo',sans-serif", margin: 0, padding: 0, overflow: 'hidden', boxSizing: 'border-box' }}>

      {/* Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(197,173,124,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(10,25,47,0.03) 0%, transparent 70%)', borderRadius: '50%' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '60px 25px' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(197,173,124,0.12)', padding: '6px 18px', borderRadius: 60, marginBottom: 15 }}>
            <span style={{ fontSize: '0.85rem', color: '#C5AD7C', fontWeight: 600 }}>🕋 رحلات روحانية</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, color: '#0A192F' }}>رحلات العمرة اليومية</h2>
          <div style={{ width: 60, height: 3, background: '#C5AD7C', margin: '18px auto' }} />
          <p style={{ maxWidth: 650, margin: '15px auto 0', fontSize: '0.95rem', color: '#4a5568' }}>نقدم لكم أفضل باقات العمرة بمدد مختلفة تناسب جميع الراغبين في أداء المناسك</p>
        </div>

        {/* Package cards */}
        <div className="umrah-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 25, marginBottom: 50 }}>
          {packages.map((pkg, i) => (
            <div key={i} className={`umrah-card${pkg.featured ? ' featured' : ''}`}
              style={{
                background: 'white',
                borderRadius: 24,
                padding: '25px 18px',
                textAlign: 'center',
                boxShadow: pkg.featured ? '0 12px 28px -12px rgba(197,173,124,0.2)' : '0 8px 20px -10px rgba(0,0,0,0.04)',
                border: pkg.featured ? '2px solid #C5AD7C' : '1px solid rgba(197,173,124,0.1)',
                position: 'relative',
              }}
            >
              {pkg.featured && (
                <div style={{ position: 'absolute', top: -10, right: 15, background: '#C5AD7C', padding: '3px 12px', borderRadius: 30, fontSize: '0.6rem', fontWeight: 700, color: '#0A192F' }}>الأكثر طلباً</div>
              )}
              <div style={{ width: 65, height: 65, background: pkg.iconBg, borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.8rem' }}>{pkg.emoji}</span>
              </div>
              <span style={{ background: pkg.badgeBg, padding: '3px 12px', borderRadius: 30, fontSize: '0.65rem', fontWeight: 700, color: '#C5AD7C' }}>{pkg.badge}</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0A192F', margin: '12px 0 5px' }}>{pkg.title}</h3>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#C5AD7C', margin: '8px 0' }}>{pkg.days}</div>
              <p style={{ color: '#718096', fontSize: '0.8rem', lineHeight: 1.5, margin: '12px 0 18px' }}>{pkg.desc}</p>
              <a href="https://wa.me/966544591931" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: pkg.featured ? '#C5AD7C' : '#0A192F', color: pkg.featured ? '#0A192F' : 'white', padding: '8px 20px', borderRadius: 40, fontSize: '0.75rem', fontWeight: pkg.featured ? 700 : 600, textDecoration: 'none', transition: '0.3s' }}>
                <span>📞</span> سارع بالاتصال
              </a>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div style={{ marginTop: 45 }}>
          <div style={{ textAlign: 'center', marginBottom: 25 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A192F' }}>جدول رحلات عمرة من <span style={{ color: '#C5AD7C' }}>الرياض</span></h3>
            <div style={{ width: 50, height: 2, background: '#C5AD7C', margin: '10px auto' }} />
          </div>
          <div style={{ background: 'white', borderRadius: 24, overflowX: 'auto', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', border: '1px solid #eee' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
              <thead>
                <tr style={{ background: '#0A192F' }}>
                  <th style={{ padding: 14, color: 'white', fontWeight: 600, fontSize: '0.85rem', textAlign: 'center', fontFamily: "'Cairo',sans-serif" }}>رحلة العمره</th>
                  <th style={{ padding: 14, color: '#C5AD7C', fontWeight: 600, fontSize: '0.85rem', textAlign: 'center', fontFamily: "'Cairo',sans-serif" }}>نوع الرحله</th>
                  <th style={{ padding: 14, color: 'white', fontWeight: 600, fontSize: '0.85rem', textAlign: 'center', fontFamily: "'Cairo',sans-serif" }}>عدد الايام</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < schedule.length - 1 ? `1px solid ${row.vip ? 'rgba(197,173,124,0.2)' : '#f0f0f0'}` : 'none', background: row.vip ? 'rgba(197,173,124,0.03)' : row.alt ? '#fafaf8' : 'white' }}>
                    <td style={{ padding: 12, textAlign: 'center', fontWeight: row.vip ? 700 : 500, color: row.vip ? '#C5AD7C' : 'inherit', fontFamily: "'Cairo',sans-serif" }}>{row.trip}</td>
                    <td style={{ padding: 12, textAlign: 'center', fontFamily: "'Cairo',sans-serif" }}>
                      <span style={{ background: row.vip ? 'rgba(197,173,124,0.13)' : 'rgba(197,173,124,0.08)', padding: '3px 12px', borderRadius: 20, fontSize: '0.7rem', fontWeight: row.vip ? 700 : 400, color: row.vip ? '#C5AD7C' : 'inherit' }}>{row.type}</span>
                    </td>
                    <td style={{ padding: 12, textAlign: 'center', fontWeight: row.vip ? 700 : 500, color: row.vip ? '#C5AD7C' : 'inherit', fontFamily: "'Cairo',sans-serif" }}>{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <a href="https://wa.me/966544591931" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, #C5AD7C, #b89a6a)', color: '#0A192F', padding: '14px 38px', borderRadius: 60, fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none', transition: '0.3s', boxShadow: '0 6px 15px rgba(197,173,124,0.2)' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(197,173,124,0.35)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(197,173,124,0.2)'; }}
          >
            <span>📞</span> سارع بالاتصال لحجز رحلتك الآن
          </a>
        </div>
      </div>
    </div>
  );
};

export default UmrahSection;
