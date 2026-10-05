import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, FileText, BookOpen } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';
import { resources, faqs } from '../data/resources';

const typeIcon = (type: string) => type === 'Guide' ? <BookOpen size={12} /> : <FileText size={12} />;

export default function LatestResources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="resources" style={{ background: '#F5F6F7', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.035, pointerEvents: 'none', backgroundImage: 'radial-gradient(#E31B23 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Red bar top */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: 4, background: '#E31B23', opacity: 0.7 }} />

      <CornerDeco position="tl" size={44} color="#E31B23" opacity={0.18} />
      <CornerDeco position="br" size={44} color="#E31B23" opacity={0.12} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }} className="resources-inner">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <SectionLabel number="11" label="Latest Resources" />
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: '#15171A', lineHeight: 1.1, fontWeight: 400, margin: 0 }}>
            Latest <span style={{ color: '#E31B23' }}>Resources</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>
        </motion.div>

        <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }} className="resources-flex">
          {/* Resource cards */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {resources.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
                style={{ background: 'white', border: '1px solid #E9ECEF', display: 'flex', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s', position: 'relative' }}
              >
                <div style={{ width: 140, flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                  <img src={r.image} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} loading="lazy" />
                  {/* Left color bar */}
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: '#E31B23' }} />
                </div>
                <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Inter', fontSize: 10, fontWeight: 700, color: '#E31B23', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {typeIcon(r.type)} {r.type}
                      </span>
                      <span style={{ width: 3, height: 3, background: '#ccc', borderRadius: '50%' }} />
                      <span style={{ fontFamily: 'Inter', fontSize: 10, color: '#999' }}>{r.date}</span>
                    </div>
                    <h4 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 18, color: '#15171A', lineHeight: 1.3, fontWeight: 400, whiteSpace: 'pre-line' }}>
                      {r.title}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12 }}>
                    <button
                      onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}
                    >
                      <span style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 600, color: '#E31B23' }}>Know More</span>
                      <ArrowRight size={12} color="#E31B23" />
                    </button>
                  </div>
                </div>
                <CornerDeco position="br" size={18} color="#E31B23" opacity={0.2} />
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '0 0 420px', position: 'relative' }}
            className="faq-col"
          >
            <div style={{ background: 'white', border: '1px solid #E9ECEF', padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
              <CornerDeco position="tl" size={24} color="#E31B23" opacity={0.3} />
              <CornerDeco position="br" size={24} color="#E31B23" opacity={0.2} />
              <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 26, color: '#15171A', fontWeight: 400, marginBottom: 28 }}>
                Frequently Asked <span style={{ color: '#E31B23' }}>Questions</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #E9ECEF' }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', textAlign: 'left', gap: 16 }}
                      aria-expanded={openFaq === i}
                    >
                      <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#15171A', lineHeight: 1.4 }}>{faq.q}</span>
                      <span style={{ flexShrink: 0, color: '#E31B23' }}>
                        {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#666', lineHeight: 1.75, paddingBottom: 18 }}>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .resources-inner { padding: 0 40px !important; }
          .resources-flex { flex-direction: column !important; gap: 48px !important; }
          .faq-col { flex: none !important; width: 100% !important; }
        }
        @media (max-width: 600px) {
          .resources-inner { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
