import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  MessageSquareHeart,
  Video,
  LayoutDashboard,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { TempleArchCorner } from '../IndianMotifs';

/**
 * Scene Six: Our Approach and Platform Features
 *
 * Heading: ONE PLATFORM. A MORE PERSONAL WELLNESS JOURNEY.
 * Present the 5 existing HitAyu 2.0 modules:
 * 1. AYURVEDIC INTELLIGENCE (Prakriti assessment, Vata/Pitta/Kapha -> /prakriti)
 * 2. AYU AI (Intelligent chatbot -> /ayu-ai)
 * 3. YOGA AI (Computer vision pose recognition -> /yoga-ai)
 * 4. WELLNESS DASHBOARD (Centralized space for preferences, habits, yoga -> /dashboard)
 * 5. AYURVEDIC KNOWLEDGE HUB (Curated educational content -> /knowledge)
 *
 * Each feature has:
 * - Refined visual card
 * - Subtle 3D hover animation
 * - Elegant icons
 * - Short descriptions
 * - Real functioning link to its corresponding existing website feature
 */
export default function OurApproachFeatures({ onNavigateAway }) {
  const features = [
    {
      title: 'AYURVEDIC INTELLIGENCE',
      sanskrit: 'प्रकृति विश्लेषण',
      description: 'Prakriti assessment and indicative Vata, Pitta, and Kapha wellness insights.',
      path: '/prakriti',
      icon: Compass,
      badge: 'Interactive Assessment',
    },
    {
      title: 'AYU AI',
      sanskrit: 'आयुः परामर्श',
      description: 'An intelligent Ayurvedic chatbot that explains traditional concepts and provides responsible wellness education.',
      path: '/ayu-ai',
      icon: MessageSquareHeart,
      badge: 'Groq LLM + MongoDB Text Base',
    },
    {
      title: 'YOGA AI',
      sanskrit: 'योगः कर्मसु कौशलम्',
      description: 'Computer vision-powered yoga pose recognition and real-time posture feedback right in your browser.',
      path: '/yoga-ai',
      icon: Video,
      badge: 'Zero-Upload Local CV',
    },
    {
      title: 'WELLNESS DASHBOARD',
      sanskrit: 'व्यक्तिगत तालिका',
      description: 'A centralized space for wellness preferences, daily habits, Prakriti scores, and yoga session progress.',
      path: '/dashboard',
      icon: LayoutDashboard,
      badge: 'Habits & Practice History',
    },
    {
      title: 'AYURVEDIC KNOWLEDGE HUB',
      sanskrit: 'आयुर्वेद ज्ञानकोश',
      description: 'Curated educational content covering Ayurveda fundamentals, medicinal herbs, nutrition, Dinacharya, and Ritucharya.',
      path: '/knowledge',
      icon: BookOpen,
      badge: 'Curated Vedic Encyclopedia',
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 relative bg-[#F8F5EC] border-t border-[#C6A15B]/20">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#B58A3C]">
            Scene 04 • The Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173F35] tracking-tight">
            ONE PLATFORM. A MORE PERSONAL WELLNESS JOURNEY.
          </h2>
          <p className="text-sm sm:text-base text-[#78847C] leading-relaxed">
            Experience our 5 integrated modules engineered to harmonize ancient self-care with intelligent software.
          </p>
        </motion.div>

        {/* Modular Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-white rounded-3xl p-8 border border-[#C6A15B]/30 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <TempleArchCorner className="w-9 h-9 absolute top-3 right-3 text-[#C6A15B]/30 group-hover:text-[#C6A15B]/60 transition-colors" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#173F35] text-[#E6D5A8] flex items-center justify-center border border-[#C6A15B]/30 shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#C6A15B]" />
                    </div>
                    <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-[#E8F0E9] text-[#173F35] tracking-wide">
                      {f.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#B58A3C] tracking-wide block mb-1">
                      {f.sanskrit}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#173F35] group-hover:text-[#254B3B] transition-colors">
                      {f.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#78847C] leading-relaxed font-normal">
                    {f.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E4E9E2] mt-6">
                  <Link
                    to={f.path}
                    onClick={() => onNavigateAway?.()}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#173F35] hover:text-[#B58A3C] group-hover:gap-3 transition-all"
                  >
                    <span>Launch Module</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
