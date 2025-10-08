"use client";

import { motion } from "framer-motion";

interface HeroSimpleProps {
  title?: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  screenshot?: string;
  screenshotAlt?: string;
}

export default function HeroSimple({
  title = "Modern App Your Digital Hub",
  subtitle = "Modern App is an all-in-one productivity system that centralizes tasks, projects, notes, resources, and everything in between.",
  primaryButton = {
    text: "Get Started",
    href: "#"
  },
  screenshot = "https://framerusercontent.com/images/vrfEi2EEdCjeaPndjlriPJlIKI.png",
  screenshotAlt = "Modern App Screenshot"
}: HeroSimpleProps) {
  return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center py-32" style={{ minHeight: '600px' }}>
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4">
        
        {/* Title */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          <h1 className="text-[56px] font-medium leading-[67.2px] tracking-[-3px] text-center text-[#121212] font-['Inter']">
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {word}
                {index < title.split(' ').length - 1 && ' '}
                {index === 1 && <br />}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="text-center max-w-[768px] mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          <p className="text-[18px] font-normal leading-[27px] text-center text-[#6D6D6D] font-['Inter']">
            {subtitle}
          </p>
        </motion.div>

        {/* Button */}
        <motion.div 
          className="flex justify-center mt-[30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          <motion.button
            className="border border-gray-200 bg-white text-black rounded-full px-8 py-3 text-[18px] font-normal leading-[27px] hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {primaryButton.text}
          </motion.button>
        </motion.div>

        {/* Screenshot Image */}
        <motion.div 
          className="w-[950px] h-[633px] border-4 border-[#121212] rounded-2xl bg-white overflow-hidden shadow-2xl mt-[250px]"
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            y: 50 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0 
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.3
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <img
            src={screenshot}
            alt={screenshotAlt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
