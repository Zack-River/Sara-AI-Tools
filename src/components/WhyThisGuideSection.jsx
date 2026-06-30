import React, { useRef } from 'react';
import { Star } from 'lucide-react';

const WhyThisGuideSection = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  // Canvas particle animation
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let w, h;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
      particles = Array.from({ length: 30 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.1
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 173, 124, ${p.alpha})`; // Gold particles
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCardMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rx = (y - centerY) / 20;
    const ry = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-10px)`;
  };
  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section id="why-this" ref={sectionRef} style={{ width: '100%', position: 'relative', overflow: 'hidden', direction: 'rtl', fontFamily: 'var(--font-family)', padding: 'var(--space-2xl) 0', background: 'var(--color-primary-dark)', boxSizing: 'border-box' }}>
      
      {/* Glowing Golden Divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)', zIndex: 5, opacity: 0.6, boxShadow: '0 0 20px var(--color-accent)' }} />

      {/* Canvas particles */}
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, display: 'block' }} />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, rgba(10,25,47,0.95) 0%, #0A192F 100%)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(197,173,124,0.15) 0%, rgba(197,173,124,0) 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: 'proPulse1 6s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0) 70%)', borderRadius: '50%', filter: 'blur(70px)', animation: 'proPulse2 8s ease-in-out infinite 2s' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(197,173,124,0.08) 0%, rgba(197,173,124,0) 70%)', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(-50%,-50%)', animation: 'proPulse3 10s ease-in-out infinite 4s' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: 1280, margin: '0 auto', padding: '0 30px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 50, animation: 'proFadeUp 0.8s ease-out' }}>
          <span className="badge" style={{ color: 'var(--color-accent)' }}>
            <Star size={16} /> لماذا هذا الدليل؟
          </span>
        </div>

        {/* Big Card */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <div
            className="pro-card"
            style={{ maxWidth: 800, width: '100%', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', borderRadius: 30, padding: '50px 40px', textAlign: 'center', border: '1px solid rgba(197,173,124,0.2)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)', transformStyle: 'preserve-3d', cursor: 'pointer' }}
            onMouseMove={e => handleCardMove(e, e.currentTarget)}
            onMouseLeave={handleCardLeave}
          >
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
              بدل ما تضيع ساعات تدور في تيك توك أو جوجل، جمعنا لك أهم أدوات الذكاء الاصطناعي في مكان واحد، مع شرح مختصر يساعدك تختار الأداة المناسبة بسرعة.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div style={{ textAlign: 'center', marginTop: 60, animation: 'proFadeUp 0.8s ease-out 0.4s both' }}>
          <a href="https://wa.me/+201017346421" target="_blank" rel="noopener noreferrer" className="btn-primary">
            احصل على الدليل الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyThisGuideSection;
