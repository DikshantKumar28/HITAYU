import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageSquareHeart,
  Video,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Compass,
  BookOpen,
  Activity,
  Sparkles,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import OurApproachExperience from '../components/approach/OurApproachExperience';
import {
  LotusEmblem,
  MandalaWatermark,
  SanskritDivider,
  TempleArchCorner,
} from '../components/IndianMotifs';

export default function LandingPage() {
  const [showOurApproach, setShowOurApproach] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#approach') {
        setShowOurApproach(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleCloseOurApproach = () => {
    setShowOurApproach(false);
    if (window.location.hash === '#approach') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#26352F] flex flex-col">
      <Navbar onOurApproachClick={() => setShowOurApproach(true)} />

      {/* Cinematic Our Approach Experience Overlay */}
      <OurApproachExperience
        isOpen={showOurApproach}
        onClose={handleCloseOurApproach}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0E2620] pt-16 pb-24 lg:pt-24 lg:pb-32 min-h-[660px] flex items-center">
        {/* Traditional Indian Ayurvedic Artwork Background - Full & Richly Darkened */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hero-indian-ayurveda.jpg"
            alt="Traditional Indian Ayurvedic practitioner preparing herbs and botanicals"
            className="w-full h-full object-cover object-center brightness-[0.58] contrast-[1.08]"
          />
          {/* Rich dark forest gradient for crisp ivory/gold text contrast while keeping artwork visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2620]/90 via-[#0E2620]/55 to-[#0E2620]/20" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0E2620]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-7"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#102E28]/80 backdrop-blur-sm border border-[#C6A56B]/50 text-[#F8F6EF] text-xs font-semibold tracking-wide shadow-sm">
                <LotusEmblem className="w-4 h-4" />
                <span>हितायुः • Ancient Vedic Wisdom. Intelligent Wellness.</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F6EF] leading-[1.08] tracking-tight drop-shadow-md">
                Wellness, Reimagined Through{' '}
                <span className="italic font-medium text-[#C6A56B] underline decoration-[#C6A56B]/60 decoration-2 underline-offset-8">
                  Intelligence.
                </span>
              </h1>

              <p className="text-lg text-[#E8F0E9]/90 leading-relaxed max-w-xl font-normal drop-shadow-xs">
                Rooted in timeless Indian Ayurvedic philosophy (<span className="italic text-[#C6A56B]">Āyurveda</span>),
                personalized with Prakriti intelligence, and guided by real-time YogaAI computer vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/prakriti" className="hitayu-btn-gold text-base px-7 py-3.5 shadow-lg">
                  <span>Discover Your Prakriti</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
                <Link
                  to="/yoga-ai"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#F8F6EF]/40 bg-[#102E28]/60 backdrop-blur-sm text-[#F8F6EF] font-medium hover:bg-[#173F35] hover:border-[#C6A56B] transition-all text-base shadow-lg"
                >
                  <Video className="w-4.5 h-4.5 text-[#C6A56B]" />
                  <span>Explore YogaAI Studio</span>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-[#E8F0E9]/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A56B]" />
                  <span>Browser-Local Computer Vision</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A56B]" />
                  <span>Tridosha Constitution Profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A56B]" />
                  <span>Zero Video Uploads</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THREE DIMENSIONS */}
      <section id="approach" className="py-20 bg-white border-y border-[#E4E9E2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SanskritDivider label="Trividha Wellness" className="mb-6" />

          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173F35]">
              Three Dimensions. One Holistic Experience.
            </h2>
            <p className="text-[#78847C] mt-3">
              “स्वस्थस्य स्वास्थ्य रक्षणम्” — Preserving the vitality of the healthy through
              understanding, personalization, and daily practice.
            </p>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowOurApproach(true)}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#C6A15B]/60 bg-gradient-to-r from-[#173F35] to-[#102E28] text-[#E6D5A8] text-xs font-semibold tracking-widest uppercase hover:brightness-110 shadow-md hover:border-[#C6A15B] transition-all group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Launch Cinematic Brand Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeUp} className="hitayu-card-royal p-8 flex flex-col justify-between">
              <TempleArchCorner className="w-10 h-10 absolute top-3 right-3" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F0E9] text-[#173F35] flex items-center justify-center mb-6 border border-[#C6A56B]/20">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#173F35]">
                  Prakriti Intelligence
                </h3>
                <p className="text-xs font-medium text-[#C6A56B] mt-0.5">प्रकृति परीक्षण</p>
                <p className="text-sm text-[#78847C] mt-3 leading-relaxed">
                  Explore your constitutional tendencies across Vata, Pitta, and Kapha through a
                  structured 10-question assessment with transparent scoring and personalized
                  lifestyle takeaways.
                </p>
              </div>
              <Link
                to="/prakriti"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] mt-6 hover:gap-3 transition-all"
              >
                <span>Take Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div {...fadeUp} className="hitayu-card-royal p-8 flex flex-col justify-between">
              <TempleArchCorner className="w-10 h-10 absolute top-3 right-3" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F0E9] text-[#173F35] flex items-center justify-center mb-6 border border-[#C6A56B]/20">
                  <MessageSquareHeart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#173F35]">
                  Ayu AI Assistant
                </h3>
                <p className="text-xs font-medium text-[#C6A56B] mt-0.5">आयुः संवाद</p>
                <p className="text-sm text-[#78847C] mt-3 leading-relaxed">
                  Converse with an Ayurvedic educational companion powered by Groq LLM and grounded
                  in our curated MongoDB classical texts, tailored to your saved Prakriti profile.
                </p>
              </div>
              <Link
                to="/ayu-ai"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] mt-6 hover:gap-3 transition-all"
              >
                <span>Ask Ayu AI</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="rounded-3xl bg-gradient-to-br from-[#173F35] to-[#102E28] text-[#F8F6EF] p-8 flex flex-col justify-between shadow-card border border-[#C6A56B]/30 relative overflow-hidden"
            >
              <MandalaWatermark className="w-44 h-44 opacity-10 absolute -bottom-10 -right-10 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#244F42] text-[#C6A56B] flex items-center justify-center mb-6 border border-[#C6A56B]/30">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  YogaAI Computer Vision
                </h3>
                <p className="text-xs font-medium text-[#C6A56B] mt-0.5">योगः कर्मसु कौशलम्</p>
                <p className="text-sm text-[#E8F0E9]/85 mt-3 leading-relaxed">
                  Practice directly in your browser using MediaPipe 33-point skeletal tracking and
                  real-time joint angle evaluation. Zero video uploaded—100% private local
                  processing.
                </p>
              </div>
              <Link
                to="/yoga-ai"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6A56B] mt-6 hover:gap-3 transition-all relative z-10"
              >
                <span>Enter Yoga Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRADITIONAL VISUAL SHOWCASE: JHAROKHA COURTYARD & APOTHECARY */}
      <section className="py-20 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <SanskritDivider label="Vedic Heritage" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173F35]">
              Timeless Indian Traditions, Awakened
            </h2>
            <p className="text-[#78847C] mt-3">
              From sunrise yoga inside serene courtyard arches to classical botanical preparations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Yoga Heritage Card */}
            <motion.div
              {...fadeUp}
              className="group rounded-3xl overflow-hidden bg-white border border-[#C6A56B]/30 shadow-card flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/yoga-heritage.jpg"
                  alt="Indian yogi practicing Tree Pose inside sandstone Jharokha arch at sunrise"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102E28]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 px-3 py-1 rounded-full bg-[#102E28]/80 backdrop-blur-md text-[#C6A56B] text-xs font-semibold border border-[#C6A56B]/30">
                  स्थिर सुखम् आसनम् • YogaAI Studio
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#173F35]">
                    Guided Asana & Prana Practice
                  </h3>
                  <p className="text-sm text-[#78847C] mt-2 leading-relaxed">
                    Experience live skeletal alignment feedback for Tadasana, Vrikshasana, and
                    Virabhadrasana II directly in your browser.
                  </p>
                </div>
                <Link
                  to="/yoga-ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] hover:gap-3 transition-all"
                >
                  <span>Begin Practice</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Botanical Apothecary Card */}
            <motion.div
              {...fadeUp}
              className="group rounded-3xl overflow-hidden bg-white border border-[#C6A56B]/30 shadow-card flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/botanical-apothecary.jpg"
                  alt="Ayurvedic botanical apothecary with amber jars, rose petals, ashwagandha, and cardamom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102E28]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 px-3 py-1 rounded-full bg-[#102E28]/80 backdrop-blur-md text-[#C6A56B] text-xs font-semibold border border-[#C6A56B]/30">
                  द्रव्यगुण • Ayurvedic Apothecary
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#173F35]">
                    Herbs, Shrubs & Sattvic Recipes
                  </h3>
                  <p className="text-sm text-[#78847C] mt-2 leading-relaxed">
                    Explore curated monographs on Tulsi, Guduchi, Shatavari, Ashwagandha, and
                    healing recipes like Tridoshic Kitchari and Haldi Doodh.
                  </p>
                </div>
                <Link
                  to="/knowledge"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] hover:gap-3 transition-all"
                >
                  <span>Explore Knowledge Library</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE LIBRARY & HERITAGE HIGHLIGHTS */}
      <section className="py-20 bg-white border-t border-[#E4E9E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
                Charaka & Sushruta Inspired
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173F35]">
                Daily Dinacharya & Mindful Living
              </h2>
              <p className="text-[#78847C] leading-relaxed">
                Don't just tell people how to live healthier—help them understand their unique
                constitution, personalize their daily rhythm, and practice mindfully every day.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    icon: BookOpen,
                    title: 'Herbs, Shrubs & Sattvic Recipes',
                    desc: 'Search traditional monographs with modern scientific context and precautions.',
                  },
                  {
                    icon: Activity,
                    title: 'Dinacharya Habit Tracking',
                    desc: 'Turn Ayurvedic wisdom into daily morning and evening routines with streaks.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Responsible Wellness Boundaries',
                    desc: 'Designed strictly for wellness education and posture guidance—never medical diagnosis.',
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F0E9] text-[#173F35] flex items-center justify-center shrink-0 mt-0.5 border border-[#C6A56B]/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#173F35]">{item.title}</h4>
                        <p className="text-sm text-[#78847C]">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Relocated Live Prakriti Intelligence Preview Widget */}
              <div className="mt-6 rounded-2xl bg-[#173F35] text-white p-5 border border-[#C6A56B]/30 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#244F42] flex items-center justify-center border border-[#C6A56B]/30 shrink-0">
                    <LotusEmblem className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C6A56B] block">
                      Sample Prakriti Intelligence Profile
                    </span>
                    <span className="text-xs text-[#E8F0E9]/90">
                      Vata 45% • Pitta 35% • Kapha 20%
                    </span>
                  </div>
                </div>
                <Link
                  to="/prakriti"
                  className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#C6A56B] text-[#102E28] hover:brightness-105 transition-all text-center shrink-0"
                >
                  Check Yours →
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  tag: 'Asana • ताडासन',
                  title: 'Tadasana (Mountain Pose)',
                  desc: 'Grounds Vata energy and establishes upright spinal alignment.',
                },
                {
                  tag: 'Asana • वृक्षासन',
                  title: 'Vrikshasana (Tree Pose)',
                  desc: 'Cultivates concentration, ankle stability, and calm focus.',
                },
                {
                  tag: 'Shrub • गुडूची',
                  title: 'Guduchi & Shatavari',
                  desc: 'Revered Rasayana shrubs supporting natural vitality and balance.',
                },
                {
                  tag: 'Recipe • खिचड़ी',
                  title: 'Kitchari & Haldi Doodh',
                  desc: 'Classical Sattvic comfort recipes that kindle balanced Agni.',
                },
              ].map((card) => (
                <div key={card.title} className="hitayu-card-royal p-6 space-y-2.5 bg-[#F8F6EF]/50">
                  <TempleArchCorner className="w-7 h-7 absolute top-2 right-2" />
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0E9] text-[#173F35]">
                    {card.tag}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#173F35]">{card.title}</h4>
                  <p className="text-xs text-[#78847C] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA WITH SACRED LOTUS ARTWORK */}
      <section className="py-20 bg-[#173F35] text-[#F8F6EF] relative overflow-hidden">
        <MandalaWatermark className="w-96 h-96 opacity-10 absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C6A56B]/50 shadow-2xl bg-[#F8F6EF] p-2 max-w-[240px]">
                <img
                  src="/images/sacred-lotus-om.jpg"
                  alt="Sacred Golden Lotus and Om Mandala"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8 text-center md:text-left space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A56B]">
                ॐ सह नाववतु • Mindful Beginning
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Begin Your Mindful Wellness Journey Today
              </h2>
              <p className="text-[#A8BDA8] max-w-xl leading-relaxed">
                Create your free HitAyu account to save your Prakriti profile, converse with Ayu
                AI, and practice YogaAI with real-time skeletal tracking.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                <Link to="/register" className="hitayu-btn-gold px-8 py-3.5">
                  <span>Create Free Account</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/25 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  <span>Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#102E28] text-[#A8BDA8] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <LotusEmblem className="w-6 h-6" />
            <span className="font-serif text-lg font-bold text-white">HITAYU 2.0 • हितायुः</span>
          </div>
          <p className="text-xs text-center md:text-right max-w-xl leading-relaxed">
            Disclaimer: HitAyu is a wellness education and fitness assistance platform, not a
            medical diagnosis or clinical treatment tool. Always consult qualified healthcare
            professionals for medical concerns.
          </p>
        </div>
      </footer>
    </div>
  );
}
