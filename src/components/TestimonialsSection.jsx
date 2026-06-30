import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

const TestimonialsSection = () => {
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
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(197,173,124,0.1)', borderRadius: 'var(--radius-lg)', padding: 30, textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <Star size={32} />
            </div>
            <h3 style={{ color: 'white', fontSize: 'var(--text-lg)', margin: '0 0 10px 0' }}>سارة العباس</h3>
            <p style={{ color: 'var(--color-accent)', margin: 0, fontSize: 'var(--text-sm)', fontWeight: 600 }}>مؤلفة الدليل</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', margin: '15px 0 0 0', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
              "صممت هذا الدليل بعد معاناة شخصية مع تشتت مصادر الذكاء الاصطناعي.. هدفي أختصر عليك الوقت اللي ضيعته."
            </p>
          </div>

          {/* Testimonials Grid (Glass style) */}
          <div className="layout-testimonials" style={{ gridTemplateRows: '1fr 1fr', height: '100%' }}>
            {[
              "الدليل فك أزمة كبيرة عندي في بحوث الجامعة، شكراً لك سارة!",
              "أدوات التلخيص اختصرت علي مجهود أسابيع.. أنصح فيه وبقوة 🤍",
              "شرحك للأدوات واضح وبسيط، وبدأت أعتمد عليها يومياً",
              "أفضل استثمار سويته لدراستي، الأدوات جداً مفيدة للواجبات."
            ].map((text, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(197,173,124,0.1)', borderRadius: '15px 15px 0 15px', padding: 20, position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ color: 'white', margin: 0, fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>{text}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 5, marginTop: 10 }}>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)' }}>12:4{i} م</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }}>✓✓</span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
