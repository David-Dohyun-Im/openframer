"use client";

import { motion } from "framer-motion";

interface HeroDarkProps {
  title?: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  announcement?: string;
}

export default function HeroDark({
  title = "The AI layer that brings clarity to complexity.",
  subtitle = "Our platform integrates seamlessly into your stack to deliver real-time understanding, not just predictions.",
  primaryButton = {
    text: "Get started",
    href: "#"
  },
  secondaryButton = {
    text: "Learn more",
    href: "#"
  },
  announcement = "Announcing API 2.0"
}: HeroDarkProps) {
  return (
    <div className="relative w-full bg-black text-zinc-100 min-h-screen flex flex-col justify-center" style={{ minHeight: '600px' }}>
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/30 to-transparent opacity-30" />
      
      {/* Main Content */}
      <div className="relative z-10 px-6 pt-12 pb-0 md:px-10 lg:px-12 space-y-4">
        {/* Announcement Banner */}
        <motion.div 
          className="flex justify-center py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm bg-white/5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor"/>
            </svg>
            <span className="text-sm font-medium text-white/80 font-['Geist']">{announcement}</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div 
          className="text-center py-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="mx-auto w-[800px] h-[153px] flex items-center justify-center">
            <h1 className="text-[64px] font-medium tracking-[-0.04em] text-white font-['Geist'] leading-tight">
              {title.split('clarity').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <span 
                      className="italic"
                      style={{ 
                        fontFamily: '"Source Serif 4", "Source Serif 4 Placeholder", serif',
                        fontWeight: '500'
                      }}
                    >
                      clarity
                    </span>
                  )}
                </span>
              ))}
            </h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          className="text-center py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mx-auto w-[600px] h-[50px] flex items-center justify-center">
            <p className="text-[18px] text-white/80 font-['Geist']">
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex items-center justify-center gap-4 pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-[16px] font-['Geist']"
          >
            {primaryButton.text}
          </button>
          <button 
            className="px-6 py-3 text-white rounded-full font-medium transition-colors text-[16px] font-['Geist'] border border-white/15 backdrop-blur-sm bg-white/5 hover:bg-white/10"
          >
            {secondaryButton.text}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
