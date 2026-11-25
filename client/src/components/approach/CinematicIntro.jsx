import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

/**
 * Scene One: Full-Screen Cinematic Video
 *
 * Requirements:
 * - 100vw, 100vh, object-fit: cover, object-position: center
 * - Exact Pinterest video asset: /assets/hitayu-intro.mp4
 * - 1.2x playback speed
 * - ~5s duration with subtle cinematic fade transitions
 * - Muted autoplay, playsInline
 * - Background scroll locked
 * - Visible Skip Intro option with luxury gold styling
 */
export default function CinematicIntro({ onComplete, onSkip }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback speed to 1.2x as required
    video.playbackRate = 1.2;

    const handleLoadedMetadata = () => {
      // Use either video duration or cap around 5-6s for optimal intro experience
      if (video.duration && !isNaN(video.duration)) {
        setDuration(Math.min(video.duration / 1.2, 5.5));
      }
    };

    const handleTimeUpdate = () => {
      if (!video) return;
      const current = video.currentTime / 1.2;
      const targetDuration = duration || 5;
      const pct = Math.min((current / targetDuration) * 100, 100);
      setProgress(pct);

      // Transition when approaching ~5s duration mark
      if (current >= targetDuration - 0.25) {
        onComplete();
      }
    };

    const handleEnded = () => {
      onComplete();
    };

    const handleError = (e) => {
      console.warn('[CinematicIntro] Video load fallback:', e);
      setVideoError(true);
      // Auto-fallback gracefully after brief pause
      const timer = setTimeout(() => {
        onComplete();
      }, 2500);
      return () => clearTimeout(timer);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('[CinematicIntro] Autoplay prevented, waiting for interaction:', err);
      });
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
    };
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-[#0A1612] select-none flex items-center justify-center"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/assets/hitayu-intro.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 scale-100"
      />

      {/* Cinematic Vignette & Ambient Gold Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1612]/80 via-transparent to-[#0A1612]/60" />
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-[#0A1612]/20 to-[#0A1612]/70" />

      {/* Top Bar: Brand Watermark & Skip Button */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 sm:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full border border-[#C6A15B]/50 bg-[#173F35]/60 backdrop-blur-md flex items-center justify-center text-[#E6D5A8]">
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div>
            <span className="font-serif text-sm tracking-[0.25em] text-[#F8F5EC] uppercase font-semibold">
              HITAYU
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#C6A15B] block uppercase">
              Our Approach
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Audio toggle (if user wishes to hear original track) */}
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = !isMuted;
                setIsMuted(!isMuted);
              }
            }}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="w-10 h-10 rounded-full border border-[#C6A15B]/30 bg-[#0A1612]/60 backdrop-blur-md text-[#E6D5A8] hover:text-[#F8F5EC] hover:border-[#C6A15B] flex items-center justify-center transition-all"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Luxury Skip Intro Button */}
          <motion.button
            onClick={onSkip}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C6A15B]/60 bg-[#173F35]/80 hover:bg-[#102E28] backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-[#F8F5EC] shadow-lg hover:border-[#C6A15B] transition-all"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Center Cinematic Title Overlay (Fades out as video progresses) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: progress > 70 ? 0 : 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-2xl pointer-events-none"
      >
        <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#C6A15B] drop-shadow-md mb-2">
          A Cinematic Journey
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F8F5EC] font-light tracking-wide drop-shadow-lg">
          The Art of Mindful Living
        </h2>
      </motion.div>

      {/* Bottom Progress Line */}
      <div className="absolute bottom-0 inset-x-0 z-20 h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#B58A3C] via-[#C6A15B] to-[#E6D5A8]"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      {/* Fallback notification if video fails */}
      {videoError && (
        <div className="absolute bottom-6 z-30 px-4 py-2 rounded-full bg-[#173F35]/90 border border-[#C6A15B]/40 text-xs text-[#E6D5A8]">
          Advancing to HitAyu Experience...
        </div>
      )}
    </motion.div>
  );
}
