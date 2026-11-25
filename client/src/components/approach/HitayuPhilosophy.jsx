import React from 'react';
import { motion } from 'framer-motion';
import { LotusEmblem, SanskritDivider } from '../IndianMotifs';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

/**
 * Scene Seven: Our Philosophy
 *
 * Requirements:
 * Display this statement prominently:
 * "We believe technology should not replace traditional wisdom. It should help make knowledge
 * more accessible, understandable, and meaningful."
 *
 * Follow with:
 * "At HitAyu, we bring ancient wellness principles and modern intelligent technologies together
 * to support informed and sustainable lifestyle choices."
 *
 * Minimal layout, elegant typography, subtle golden animation.
 * Does not position Ayurveda as a replacement for modern medical treatment.
 */
export default function HitayuPhilosophy() {
  return (
    <section className="py-28 sm:py-36 px-4 sm:px-8 relative bg-gradient-to-b from-[#F8F5EC] to-[#F1EBDD] border-t border-[#C6A15B]/20 text-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-radial-gradient from-[#E6D5A8]/25 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#173F35] text-[#E6D5A8] border border-[#C6A15B]/40 shadow-xl flex items-center justify-center p-3">
            <LotusEmblem className="w-8 h-8" color="#E6D5A8" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#B58A3C] block">
            Scene 05 • Our Guiding Creed
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#173F35] font-normal leading-relaxed max-w-3xl mx-auto">
            “We believe technology should not replace traditional wisdom. It should help make knowledge{' '}
            <span className="italic font-medium text-[#B58A3C]">more accessible, understandable, and meaningful</span>.”
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <p className="text-base sm:text-lg text-[#78847C] leading-relaxed font-normal">
            At HitAyu, we bring ancient wellness principles and modern intelligent technologies together to support informed and sustainable lifestyle choices.
          </p>

          {/* Responsible Health Disclaimer Note */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#E8F0E9]/80 border border-[#C6A15B]/20 text-xs text-[#254B3B] text-left">
            <ShieldCheck className="w-4 h-4 text-[#B58A3C] shrink-0" />
            <span>
              HitAyu is dedicated to preventive lifestyle wellness and education, honoring traditional Ayurveda while respecting modern medical science.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
