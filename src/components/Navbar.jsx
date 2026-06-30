import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home, GraduationCap, Lightbulb, MessageCircle, Smartphone, BookOpen } from 'lucide-react';
import content from '../constants/content.json';

const navLinks = [
  { label: 'الرئيسية', url: '#', icon: <Home size={16} /> },
  { label: 'لمن هذا الدليل؟', url: '#target-audience', icon: <GraduationCap size={16} /> },
  { label: 'المحتويات', url: '#features', icon: <Lightbulb size={16} /> },
  { label: 'آراء الطلاب', url: '#testimonials', icon: <MessageCircle size={16} /> },
  { label: 'اطلب الآن', url: '#cta-section', icon: <Smartphone size={16} /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop / Main Header */}
      <header
        id="main-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 9999,
          background: '#0A192F',
          borderBottom: '2px solid #C5AD7C',
          transition: 'all 0.4s cubic-bezier(0.2,0.9,0.4,1.1)',
          fontFamily: "'Cairo', sans-serif",
          direction: 'rtl',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '15px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 45, height: 45, background: 'linear-gradient(135deg, #C5AD7C, #FFD700)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A192F', boxShadow: '0 4px 15px rgba(197,173,124,0.4)' }}>
              <BookOpen size={24} />
            </div>
            <h1 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 800, margin: 0, display: 'none' }} className="nav-logo-text">دليل الذكاء الاصطناعي</h1>
          </a>

          {/* Desktop Nav Links */}
          <nav className="main-nav" style={{ display: 'flex', alignItems: 'center', gap: 35 }}>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: '0.3s',
                  position: 'relative',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
                onMouseOver={e => e.currentTarget.style.color = '#C5AD7C'}
                onMouseOut={e => e.currentTarget.style.color = 'white'}
              >
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Booking Button */}
          <div className="booking-btn">
            <a
              href="#cta-section"
              aria-label="اطلب دليل الذكاء الاصطناعي"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'linear-gradient(135deg, #C5AD7C, #b89a6a)',
                color: '#0A192F',
                padding: '10px 24px',
                borderRadius: 50,
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.85rem',
                transition: '0.3s',
                boxShadow: '0 4px 12px rgba(197,173,124,0.3)',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(197,173,124,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(197,173,124,0.3)'; }}
            >
              <Smartphone size={16} />
              اطلب الدليل
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <div
            className="menu-toggle-btn"
            onClick={() => setMobileOpen(true)}
            style={{
              display: 'none',
              cursor: 'pointer',
              width: 40,
              height: 40,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              background: 'rgba(197,173,124,0.15)',
              borderRadius: 8,
              transition: '0.3s',
            }}
          >
            <Menu size={22} color="#C5AD7C" />
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        />
      )}

      {/* Mobile Side Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mobileOpen ? 0 : '-100%',
          width: '80%',
          maxWidth: 320,
          height: '100%',
          background: '#0A192F',
          zIndex: 10000,
          padding: '90px 25px 30px',
          transition: '0.4s ease',
          boxShadow: '-5px 0 30px rgba(0,0,0,0.8)',
          borderLeft: '2px solid #C5AD7C',
          direction: 'rtl',
          fontFamily: "'Cairo', sans-serif",
        }}
      >
        {/* Close Button */}
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            width: 40,
            height: 40,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(197,173,124,0.1)',
            borderRadius: 8,
          }}
        >
          <X size={22} color="#C5AD7C" />
        </div>

        {/* Logo in mobile menu */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40, paddingBottom: 20, borderBottom: '1px solid rgba(197,173,124,0.2)', gap: 15 }}>
          <div style={{ width: 60, height: 60, background: 'linear-gradient(135deg, #C5AD7C, #FFD700)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A192F', boxShadow: '0 8px 20px rgba(197,173,124,0.3)' }}>
            <BookOpen size={32} />
          </div>
          <h2 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>دليل الذكاء الاصطناعي</h2>
        </div>

        {/* Mobile Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '12px 15px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                transition: '0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(197,173,124,0.15)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <span style={{ color: '#C5AD7C' }}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* CSS to toggle hamburger visibility */}
      <style>{`
        .nav-logo-text { display: block !important; }
        @media (max-width: 900px) {
          .main-nav { display: none !important; }
          .booking-btn { display: none !important; }
          .menu-toggle-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
