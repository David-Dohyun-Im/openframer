"use client";

import { motion } from "framer-motion";

interface HeroVisionProps {
  title?: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
}

// Fluid Blob Component
const LavaLamp = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default function HeroVision({
  title = "Creative Vision",
  subtitle = "Where ideas come to life and innovation flows like liquid creativity through endless possibilities.",
  primaryButton = {
    text: "Explore Now",
    href: "#"
  }
}: HeroVisionProps) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative bg-black overflow-hidden" style={{ minHeight: '600px' }}>
      <LavaLamp />
      
      <motion.h1 
        className="text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed relative z-10 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {subtitle}
      </motion.p>

      {primaryButton && (
        <motion.button
          className="mt-12 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {primaryButton.text}
        </motion.button>
      )}
    </div>
  );
}
