import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowUp } from 'lucide-react';
import CinematicIntro from './CinematicIntro';
import HitayuBrandReveal from './HitayuBrandReveal';
import WhatIsHitayu from './WhatIsHitayu';
import WhyHitayu from './WhyHitayu';
import TheNeedForHitayu from './TheNeedForHitayu';
import OurApproachFeatures from './OurApproachFeatures';
import HitayuPhilosophy from './HitayuPhilosophy';
import ExploreHitayuCta from './ExploreHitayuCta';
import { LotusEmblem } from '../IndianMotifs';

/**
 * OurApproachExperience Orchestrator
 *
 * Sequence:
 * 1. OUR APPROACH CLICK
 * 2. FULL-SCREEN PINTEREST REFERENCE VIDEO (CinematicIntro)
 * 3. GOLD AND WHITE TRANSITION
 * 4. HITAYU BRAND REVEAL (HitayuBrandReveal)
 * 5. WHAT IS HITAYU? (WhatIsHitayu)
 * 6. WHY DID WE BUILD IT? (WhyHitayu)
 * 7. THE NEED FOR HITAYU (TheNeedForHitayu)
 * 8. OUR APPROACH AND FEATURES (OurApproachFeatures)
 * 9. OUR PHILOSOPHY (HitayuPhilosophy)
 * 10. EXPLORE HITAYU CTA (ExploreHitayuCta)
 */
export default function OurApproachExperience({ isOpen, onClose }) {
  const [phase, setPhase] = useState('video'); // 'video' | 'story'
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reset phase when opened
  useEffect(() => {
    if (isOpen) {
      setPhase('video');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to exit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose?.();
  };

  const handleVideoComplete = () => {
    setPhase('story');
  };

  const handleScroll = (e) => {
    if (e.currentTarget.scrollTop > 400) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="our-approach-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-50 bg-[#F8F5EC] text-[#26352F] overflow-y-auto"
        onScroll={handleScroll}
        id="our-approach-scroll-container"
      >
        {/* Phase 1: Fullscreen Pinterest Cinematic Intro Video */}
        {phase === 'video' && (
          <CinematicIntro
            onComplete={handleVideoComplete}
            onSkip={() => setPhase('story')}
          />
        )}

        {/* Phase 2: Gold and White Storytelling Journey */}
        {phase === 'story' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen"
          >
            {/* Luxury Sticky Top Navigation */}
            <header className="sticky top-0 z-40 w-full bg-[#F8F5EC]/90 backdrop-blur-md border-b border-[#C6A15B]/30 transition-all">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#173F35] text-[#E6D5A8] border border-[#C6A15B]/40 flex items-center justify-center">
                    <LotusEmblem className="w-5 h-5" color="#E6D5A8" />
                  </div>
                  <div>
                    <span className="font-serif text-sm font-bold tracking-widest text-[#173F35] uppercase">
                      HITAYU 2.0
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-[#B58A3C] block -mt-0.5">
                      Our Approach Experience
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Replay Video Intro Button */}
                  <button
                    onClick={() => {
                      setPhase('video');
                      const container = document.getElementById('our-approach-scroll-container');
                      if (container) container.scrollTop = 0;
                    }}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#173F35] hover:text-[#B58A3C] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Replay Intro</span>
                  </button>

                  {/* Close / Return to Site Button */}
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C6A15B]/50 bg-white/80 hover:bg-[#173F35] hover:text-[#F8F5EC] text-[#173F35] text-xs font-semibold tracking-wider uppercase shadow-sm transition-all group"
                  >
                    <span>Return to Site</span>
                    <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />
                  </button>
                </div>
              </div>
            </header>

            {/* SCENES SEQUENCE */}
            <main>
              {/* Scene 2: Brand Reveal */}
              <HitayuBrandReveal />

              {/* Scene 3: What is HitAyu? */}
              <WhatIsHitayu />

              {/* Scene 4: Why Did We Build HitAyu? */}
              <WhyHitayu />

              {/* Scene 5: The Need for HitAyu (Tradition & Technology) */}
              <TheNeedForHitayu />

              {/* Scene 6: Our Approach & 5 Features */}
              <OurApproachFeatures onNavigateAway={handleClose} />

              {/* Scene 7: Our Philosophy */}
              <HitayuPhilosophy />

              {/* Scene 8: Final Scene & Explore HitAyu CTA */}
              <ExploreHitayuCta
                onExplore={handleClose}
                onNavigateAway={handleClose}
              />
            </main>

            {/* Floating Back to Top Button */}
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => {
                  const container = document.getElementById('our-approach-scroll-container');
                  if (container) {
                    container.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#173F35] text-[#E6D5A8] border border-[#C6A15B]/50 shadow-xl flex items-center justify-center hover:bg-[#102E28] hover:scale-105 transition-all"
              >
                <ArrowUp className="w-5 h-5 text-[#C6A15B]" />
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
