import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sliders, Layers, Cpu } from 'lucide-react';
import { TempleArchCorner } from '../IndianMotifs';

/**
 * Scene Four: Why Did We Build HitAyu?
 *
 * Heading: WHY DID WE BUILD HITAYU?
 * Four animated sections:
 * 01 – Knowledge Accessibility: Traditional Ayurvedic knowledge is extensive, but many people struggle to understand and apply it in everyday life.
 * 02 – Lack of Personalization: Most wellness platforms provide generalized recommendations without considering individual preferences and Ayurvedic constitution.
 * 03 – Fragmented Experience: Users often need multiple applications for wellness education, yoga, nutrition, and lifestyle management.
 * 04 – Technology Gap: Traditional wellness knowledge needs modern digital tools to improve accessibility, engagement, and practical application.
 */
export default function WhyHitayu() {
  const problems = [
    {
      number: '01',
      title: 'Knowledge Accessibility',
      sanskrit: 'ज्ञान सुगमता',
      icon: BookOpen,
      desc: 'Traditional Ayurvedic knowledge is extensive, but many people struggle to understand and apply it in everyday life.',
    },
    {
      number: '02',
      title: 'Lack of Personalization',
      sanskrit: 'व्यक्तिगत मार्गदर्शन',
      icon: Sliders,
      desc: 'Most wellness platforms provide generalized recommendations without considering individual preferences and Ayurvedic constitution.',
    },
    {
      number: '03',
      title: 'Fragmented Experience',
      sanskrit: 'एकीकृत अनुभव',
      icon: Layers,
      desc: 'Users often need multiple applications for wellness education, yoga, nutrition, and lifestyle management.',
    },
    {
      number: '04',
      title: 'Technology Gap',
      sanskrit: 'आधुनिक सेतु',
      icon: Cpu,
      desc: 'Traditional wellness knowledge needs modern digital tools to improve accessibility, engagement, and practical application.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 relative bg-[#F1EBDD] border-t border-[#C6A15B]/20">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#B58A3C]">
            Scene 02 • The Impetus
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173F35] tracking-tight">
            WHY DID WE BUILD HITAYU?
          </h2>
          <p className="text-sm sm:text-base text-[#78847C] leading-relaxed">
            Every breakthrough begins with observing where conventional solutions fall short. Here are the four critical challenges that inspired HitAyu 2.0.
          </p>
        </motion.div>

        {/* 4 Interactive Problem Pillars */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#C6A15B]/30 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <TempleArchCorner className="w-10 h-10 absolute top-3 right-3 text-[#C6A15B]/30 group-hover:text-[#C6A15B]/60 transition-colors" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#B58A3C]/70 group-hover:text-[#B58A3C] transition-colors tracking-tight">
                      {p.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#173F35] text-[#E6D5A8] flex items-center justify-center border border-[#C6A15B]/30 shadow-sm group-hover:bg-[#102E28] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#C6A15B]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#173F35] group-hover:text-[#254B3B] transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs font-medium text-[#C6A15B] tracking-wide block mt-1">
                      {p.sanskrit}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#78847C] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="h-0.5 w-12 bg-[#C6A15B]/40 group-hover:w-full transition-all duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
