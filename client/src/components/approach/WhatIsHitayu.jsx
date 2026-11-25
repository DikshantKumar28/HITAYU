import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Shield } from 'lucide-react';
import { SanskritDivider, TempleArchCorner } from '../IndianMotifs';

/**
 * Scene Three: What is HitAyu?
 *
 * Heading: WHAT IS HITAYU?
 * Content:
 * "HitAyu 2.0 is an AI-powered Ayurvedic wellness ecosystem that brings together traditional
 * Ayurvedic knowledge, artificial intelligence, and interactive wellness technologies.
 *
 * Our vision is to make Ayurveda more accessible, understandable, and relevant to modern
 * lifestyles through intelligent personalization and practical wellness guidance."
 */
export default function WhatIsHitayu() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 relative overflow-hidden bg-gradient-to-b from-[#F8F5EC] to-[#F1EBDD] border-t border-[#C6A15B]/20">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <motion.div {...fadeUp} className="text-center space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#B58A3C]">
            Scene 01 • The Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#173F35] tracking-tight">
            WHAT IS HITAYU?
          </h2>
          <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
        </motion.div>

        {/* Narrative Card */}
        <motion.div
          {...fadeUp}
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-14 border border-[#C6A15B]/30 shadow-xl space-y-8"
        >
          <TempleArchCorner className="w-12 h-12 absolute top-4 right-4 text-[#C6A15B]/40" />

          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#254B3B] leading-relaxed font-normal">
            “HitAyu 2.0 is an{' '}
            <span className="font-semibold text-[#B58A3C] underline decoration-[#C6A15B]/40 underline-offset-8">
              AI-powered Ayurvedic wellness ecosystem
            </span>{' '}
            that brings together traditional Ayurvedic knowledge, artificial intelligence, and interactive wellness technologies.”
          </p>

          <div className="h-px w-full bg-[#E4E9E2]" />

          <p className="text-base sm:text-lg text-[#78847C] leading-relaxed max-w-3xl font-normal">
            Our vision is to make Ayurveda more accessible, understandable, and relevant to modern lifestyles through intelligent personalization and practical wellness guidance.
          </p>

          {/* Core Values Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F5EC] border border-[#C6A15B]/20">
              <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#E6D5A8] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#C6A15B]" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[#173F35] text-sm">Authentic Heritage</h4>
                <p className="text-xs text-[#78847C]">Rooted in Charaka Samhita</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F5EC] border border-[#C6A15B]/20">
              <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#E6D5A8] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#C6A15B]" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[#173F35] text-sm">Responsible AI</h4>
                <p className="text-xs text-[#78847C]">Context-aware intelligence</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F5EC] border border-[#C6A15B]/20">
              <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#E6D5A8] flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#C6A15B]" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[#173F35] text-sm">Privacy by Design</h4>
                <p className="text-xs text-[#78847C]">Local-first computer vision</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
