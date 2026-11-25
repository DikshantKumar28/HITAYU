import React from 'react';
import { motion } from 'framer-motion';
import { LotusEmblem } from '../IndianMotifs';

/**
 * Scene Two: HitAyu Brand Reveal
 *
 * Requirements:
 * - Immediately after video ends, transition into a warm ivory-white environment (#F8F5EC / #F1EBDD)
 *   with subtle champagne-gold lighting (#C6A15B / #B58A3C).
 * - Display # HITAYU in extremely large, elegant typography.
 * - Animation: Start low opacity, slightly blurred, emerge into sharp focus, slowly scale up,
 *   subtle golden illumination, refined metallic gold appearance.
 * - Below logo: ANCIENT WISDOM. INTELLIGENT WELLNESS.
 *   Tagline appears through gentle fade-in after logo.
 */
export default function HitayuBrandReveal() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-4 sm:px-8 py-20 text-center overflow-hidden">
      {/* Subtle champagne-gold radial illumination */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial-gradient from-[#E6D5A8]/30 via-[#C6A15B]/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C6A15B]/15 blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Sacred Lotus Watermark Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-[#173F35] to-[#102E28] border border-[#C6A15B]/40 shadow-2xl flex items-center justify-center p-3 text-[#E6D5A8] shadow-[#C6A15B]/20">
            <LotusEmblem className="w-10 h-10 sm:w-12 sm:h-12" color="#E6D5A8" />
          </div>
        </motion.div>

        {/* Subtitle / Sanskrit Salutation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#B58A3C]">
            हितायुः • THE LUXURY OF BALANCE
          </span>
        </motion.div>

        {/* Massive HITAYU Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 1.6,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold tracking-[0.08em] leading-none uppercase select-none">
            <span className="bg-gradient-to-b from-[#173F35] via-[#254B3B] to-[#102E28] bg-clip-text text-transparent drop-shadow-sm">
              HITAYU
            </span>
          </h1>

          {/* Golden metallic gleam effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A15B]/15 to-transparent pointer-events-none opacity-80" />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.2, ease: 'easeOut' }}
          className="space-y-3 pt-2"
        >
          <div className="h-px w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
          <p className="font-serif text-lg sm:text-2xl md:text-3xl tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium text-[#B58A3C]">
            ANCIENT WISDOM. INTELLIGENT WELLNESS.
          </p>
          <p className="text-xs sm:text-sm text-[#78847C] tracking-widest uppercase">
            Scroll down to discover our philosophy & architecture
          </p>
        </motion.div>
      </div>

      {/* Gentle Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B58A3C]"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-[#C6A15B]/50 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#B58A3C]"
          />
        </div>
      </motion.div>
    </section>
  );
}
