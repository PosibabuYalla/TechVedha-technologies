import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SectionNav from '../components/SectionNav';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import TrainingExpertise from '../components/TrainingExpertise';
import WhyTechVedha from '../components/WhyTechVedha';
import ConsultingServices from '../components/ConsultingServices';
import FeaturedPrograms from '../components/FeaturedPrograms';
import HowWeWork from '../components/HowWeWork';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const sectionIds = ['#hero', '#what', '#training', '#why', '#consulting', '#programs', '#how', '#industries', '#testimonials', '#cta'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('#hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowFloatingCTA(scrollTop > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.querySelector(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Desktop: scale a section's content down if it doesn't fit inside its 100vh box
  useEffect(() => {
    const fit = () => {
      document.querySelectorAll<HTMLElement>('main > section').forEach(section => {
        const content = [...section.children].filter(
          (c): c is HTMLElement => c instanceof HTMLElement && c.tagName !== 'STYLE' && getComputedStyle(c).position !== 'absolute'
        );
        content.forEach(c => { c.style.zoom = ''; });
        if (window.innerWidth <= 1280) return;
        const cs = getComputedStyle(section);
        const available = section.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        const needed = content.reduce((sum, c) => sum + c.offsetHeight, 0);
        if (needed > available) {
          const scale = String(Math.floor(((available - 2) / needed) * 1000) / 1000);
          content.forEach(c => { c.style.zoom = scale; });
        }
      });
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    window.addEventListener('load', fit);
    return () => {
      window.removeEventListener('resize', fit);
      window.removeEventListener('load', fit);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar />
      <SectionNav active={activeSection} />

      <main>
        <Hero />
        <WhatWeDo />
        <TrainingExpertise />
        <WhyTechVedha />
        <ConsultingServices />
        <FeaturedPrograms />
        <HowWeWork />
        <Testimonials />
        <Industries />
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating CTA - Desktop */}
      {showFloatingCTA && (
        <button
          onClick={scrollToContact}
          className="btn-primary floating-cta-desktop"
          style={{
            position: 'fixed', right: 24, bottom: 32, zIndex: 800,
            boxShadow: '0 8px 32px rgba(227,27,35,0.35)',
            fontSize: 13, padding: '12px 20px',
          }}
        >
          Book a Consultation <span className="arrow">→</span>
        </button>
      )}

      {/* Mobile sticky CTA */}
      <div className="mobile-sticky-cta" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 800,
        background: '#E31B23', padding: '14px 24px',
        display: 'none',
      }}>
        <button onClick={scrollToContact} style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'Inter', fontSize: 15, fontWeight: 700, color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          Book a Consultation →
        </button>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .floating-cta-desktop { display: none !important; }
          .mobile-sticky-cta { display: block !important; }
        }
      `}</style>
    </>
  );
}
