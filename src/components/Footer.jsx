import React from 'react';
import { BookOpen, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="main-footer" style={{ width: '100%', background: 'linear-gradient(145deg, var(--color-primary) 0%, var(--color-secondary) 30%, var(--color-primary) 100%)', direction: 'rtl', fontFamily: 'var(--font-family)', margin: 0, padding: 0, position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>

      {/* Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(197,173,124,0.06) 0%, transparent 70%)', borderRadius: '50%', animation: 'footerBg1 25s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)', borderRadius: '50%', animation: 'footerBg2 30s ease-in-out infinite 5s' }} />
        <div style={{ position: 'absolute', top: '40%', left: '20%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(197,173,124,0.05) 0%, transparent 70%)', borderRadius: '50%', animation: 'footerBg3 20s ease-in-out infinite 10s' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '70px 30px 40px' }}>

        {/* 4-col grid */}
        <div className="layout-4col" style={{ marginBottom: 55 }}>

          {/* Col 1: Company info */}
          <div style={{ animation: 'footerFadeUp 0.6s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <div style={{ width: 45, height: 45, background: 'var(--color-accent)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ color: 'white', fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0 }}>دليل الذكاء الاصطناعي</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: 'var(--text-sm)', marginBottom: 25 }}>
              جمعنا لك أفضل أدوات الذكاء الاصطناعي في مكان واحد، لتوفير وقتك وجهدك في مسيرتك الأكاديمية.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 25 }}>
              {[
                { href: '#', icon: <FaWhatsapp size={18} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-icon"
                  style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.06)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s', textDecoration: 'none', color: '#C5AD7C' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Links */}
          <div style={{ animation: 'footerFadeUp 0.6s ease-out 0.1s both' }}>
            <h4 style={{ color: 'var(--color-accent)', fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 25, position: 'relative', display: 'inline-block' }}>
              أهم الروابط
              <span style={{ position: 'absolute', bottom: -10, right: 0, width: 45, height: 2, background: 'var(--color-accent)', borderRadius: 2 }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0' }}>
              {[
                { href: '#who-for', label: 'لمن هذا الدليل؟' },
                { href: '#what-inside', label: 'المحتويات' },
                { href: '#testimonials', label: 'آراء الطلاب' },
                { href: '#cta-section', label: 'اطلب الدليل' },
              ].map((link, i) => (
                <li key={i} style={{ marginBottom: 14 }}>
                  <a href={link.href} className="footer-link"
                    style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.3s', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
                    <span style={{ color: '#C5AD7C' }}>✦</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div style={{ animation: 'footerFadeUp 0.6s ease-out 0.2s both' }}>
            <h4 style={{ color: 'var(--color-accent)', fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 25, position: 'relative', display: 'inline-block' }}>
              تواصل معنا
              <span style={{ position: 'absolute', bottom: -10, right: 0, width: 45, height: 2, background: 'var(--color-accent)', borderRadius: 2 }} />
            </h4>
            {[
              { icon: <MessageCircle size={18} />, label: 'واتس آب', value: '+966 57 510 9308' },
              { icon: <Phone size={18} />, label: 'هاتف', value: '057 510 9308' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 38, height: 38, background: 'rgba(197,173,124,0.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white' }}>
                  {item.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>{item.label}</span>
                  <span style={{ color: 'white', fontSize: '0.95rem', fontWeight: 600, direction: 'ltr', display: 'inline-block' }}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Col 4: Address */}
          <div style={{ animation: 'footerFadeUp 0.6s ease-out 0.3s both' }}>
            <h4 style={{ color: 'var(--color-accent)', fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 25, position: 'relative', display: 'inline-block' }}>
              موقعنا
              <span style={{ position: 'absolute', bottom: -10, right: 0, width: 45, height: 2, background: 'var(--color-accent)', borderRadius: 2 }} />
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 25 }}>
              <div style={{ width: 38, height: 38, background: 'rgba(197,173,124,0.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white' }}>
                <MapPin size={18} />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>جمهورية مصر العربية</span>
                <span style={{ color: 'white', fontSize: '0.95rem', fontWeight: 500 }}>القاهرة</span>
              </div>
            </div>
            <div style={{ background: 'rgba(197,173,124,0.08)', borderRadius: 'var(--radius-md)', padding: 18, marginTop: 15 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Clock size={16} color="var(--color-accent)" />
                <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 700 }}>ساعات الدعم</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-xs)', margin: 0, lineHeight: 1.6 }}>
                يومياً من 8 صباحاً<br />حتى 10 مساءً
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(197,173,124,0.12)', paddingTop: 30, marginTop: 20, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: '0 0 10px 0' }}>
            جميع الحقوق محفوظة © 2026 دليل أدوات الذكاء الاصطناعي
          </p>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              تم التصميم بواسطة 
              <a href="https://zack-river.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#C5AD7C', textDecoration: 'none', fontWeight: 600, transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#FFD700'} onMouseOut={e => e.currentTarget.style.color = '#C5AD7C'}>Zack River</a> 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
