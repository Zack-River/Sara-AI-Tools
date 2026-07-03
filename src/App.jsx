import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

// Lazy loaded components (Below the fold)
const TargetAudienceSection = lazy(() => import('./components/TargetAudienceSection'));
const WhyThisGuideSection = lazy(() => import('./components/WhyThisGuideSection'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

// Simple loading skeleton/spinner for Suspense fallback
const FallbackLoader = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center', color: 'var(--color-accent)' }}>
    جاري التحميل...
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* Above the fold (Eagerly loaded) */}
        <HeroSection />
        
        {/* Below the fold (Lazy loaded) */}
        <Suspense fallback={<FallbackLoader />}>
          <TargetAudienceSection />
          <FeaturesSection />
          <WhyThisGuideSection />
          <TestimonialsSection />
          <CTASection />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton phoneNumber="+966575109308" />
      </Suspense>
    </div>
  );
}

export default App;
