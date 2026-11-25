import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Video, BookOpen, Sparkles } from 'lucide-react';
import { LotusEmblem, MandalaWatermark } from '../IndianMotifs';
import { Link } from 'react-router-dom';

/**
 * Scene Eight: Final Scene – Explore HitAyu
 *
 * Requirements:
 * Display:
 * # HITAYU
 * ANCIENT WISDOM. INTELLIGENT WELLNESS.
 *
 * CTA: EXPLORE HITAYU
 *
 * On clicking the CTA:
 * - Transition smoothly back to the existing homepage.
 * - Restore normal navigation.
 * - Allow the user to explore the existing platform.
 */
export default function ExploreHitayuCta({ onExplore, onNavigateAway }) {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-4 sm:px-8 py-24 text-center bg-[#0E2620] text-[#F8F5EC] overflow-hidden">
      {/* Sacred Watermark */}
      <MandalaWatermark className="w-[700px] h-[700px] opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Champagne Gold Ambient Light */}
      <div className="absolute inset-0 bg-radial-gradient from-[#C6A15B]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#173F35] border border-[#C6A15B]/50 shadow-2xl flex items-center justify-center p-3 text-[#E6D5A8]">
            <LotusEmblem className="w-10 h-10" color="#E6D5A8" />
          </div>
        </motion.div>

        {/* Brand Lockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.1em] uppercase text-[#F8F5EC]">
            HITAYU
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
          <p className="font-serif text-sm sm:text-lg md:text-xl tracking-[0.25em] uppercase font-medium text-[#C6A15B]">
            ANCIENT WISDOM. INTELLIGENT WELLNESS.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base text-[#E8F0E9]/80 leading-relaxed max-w-xl mx-auto"
        >
          Your personal journey toward holistic vitality begins now. Explore your constitution, practice mindful asanas, and learn timeless health principles.
        </motion.p>

        {/* Primary CTA: EXPLORE HITAYU */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-[#C6A15B] to-[#D4B475] text-[#102E28] font-bold text-base tracking-wider uppercase shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all group"
          >
            <span>EXPLORE HITAYU</span>
            <ArrowRight className="w-5 h-5 text-[#102E28] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>

        {/* Quick Launch Links into existing platform */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E8F0E9]/70"
        >
          <Link
            to="/prakriti"
            onClick={() => onNavigateAway?.()}
            className="flex items-center gap-1.5 hover:text-[#C6A15B] transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Prakriti Test</span>
          </Link>
          <span>•</span>
          <Link
            to="/yoga-ai"
            onClick={() => onNavigateAway?.()}
            className="flex items-center gap-1.5 hover:text-[#C6A15B] transition-colors"
          >
            <Video className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>YogaAI Studio</span>
          </Link>
          <span>•</span>
          <Link
            to="/knowledge"
            onClick={() => onNavigateAway?.()}
            className="flex items-center gap-1.5 hover:text-[#C6A15B] transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Ayurvedic Hub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
