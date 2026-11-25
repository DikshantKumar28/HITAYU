import React from 'react';
import { motion } from 'framer-motion';
import { Flame, BrainCircuit, Activity, Link2 } from 'lucide-react';
import { MandalaWatermark } from '../IndianMotifs';

/**
 * Scene Five: The Need for HitAyu
 *
 * Heading: BRIDGING TRADITION AND TECHNOLOGY
 * Content:
 * "India possesses a rich heritage of traditional wellness knowledge. However, making this
 * knowledge accessible to the next generation requires a modern, interactive, and responsible approach.
 *
 * HitAyu uses artificial intelligence and digital technologies to help users explore traditional
 * wellness practices, understand their individual constitution, and build healthier everyday habits."
 *
 * Three visual pillars:
 * - AYURVEDA – Traditional wellness knowledge.
 * - ARTIFICIAL INTELLIGENCE – Intelligent and personalized assistance.
 * - INTERACTIVE WELLNESS – Yoga, habits, and lifestyle engagement.
 * Connected visually to represent the HitAyu ecosystem.
 */
export default function TheNeedForHitayu() {
  const pillars = [
    {
      title: 'AYURVEDA',
      subtitle: 'Traditional Wellness Knowledge',
      sanskrit: 'प्राचीन आयुर्वेद',
      icon: Flame,
      color: '#B58A3C',
      description: 'Foundational insights from Tridosha theory, Dincharya, and classical botanicals.',
    },
    {
      title: 'ARTIFICIAL INTELLIGENCE',
      subtitle: 'Intelligent & Personalized Assistance',
      sanskrit: 'कृत्रिम प्रज्ञा',
      icon: BrainCircuit,
      color: '#173F35',
      description: 'Responsible LLMs & local CV engines grounding traditional wisdom in tailored user context.',
    },
    {
      title: 'INTERACTIVE WELLNESS',
      subtitle: 'Yoga, Habits & Daily Practice',
      sanskrit: 'सक्रिय स्वास्थ्य',
      icon: Activity,
      color: '#C6A15B',
      description: 'Real-time biomechanical guidance, streak tracking, and sustainable micro-habits.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 relative bg-gradient-to-b from-[#F1EBDD] to-[#F8F5EC] border-t border-[#C6A15B]/20 overflow-hidden">
      <MandalaWatermark className="w-[600px] h-[600px] opacity-5 absolute -top-20 -right-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#B58A3C]">
            Scene 03 • The Convergence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173F35] tracking-tight">
            BRIDGING TRADITION AND TECHNOLOGY
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
        </motion.div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-[#C6A15B]/30 shadow-card text-center max-w-4xl mx-auto space-y-4"
        >
          <p className="text-base sm:text-lg text-[#26352F] leading-relaxed font-normal">
            India possesses a rich heritage of traditional wellness knowledge. However, making this knowledge accessible to the next generation requires a modern, interactive, and responsible approach.
          </p>
          <p className="text-sm sm:text-base text-[#78847C] leading-relaxed font-normal">
            HitAyu uses artificial intelligence and digital technologies to help users explore traditional wellness practices, understand their individual constitution, and build healthier everyday habits.
          </p>
        </motion.div>

        {/* Three Visually Connected Pillars */}
        <div className="relative pt-6">
          {/* Connector line behind cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#C6A15B]/20 via-[#B58A3C]/60 to-[#C6A15B]/20 -translate-y-6 pointer-events-none" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.95, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="rounded-3xl bg-white p-8 sm:p-10 border-2 border-[#C6A15B]/30 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group"
                >
                  <div className="space-y-6">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-[#173F35] text-[#E6D5A8] flex items-center justify-center border border-[#C6A15B]/40 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#C6A15B]" />
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold tracking-widest text-[#B58A3C] uppercase block mb-1">
                        {pillar.sanskrit}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173F35]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-medium text-[#78847C] mt-1">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#78847C] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 flex justify-center items-center gap-2 text-xs font-semibold text-[#B58A3C] tracking-wider uppercase">
                    <Link2 className="w-3.5 h-3.5" />
                    <span>HitAyu Synergy Node</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
