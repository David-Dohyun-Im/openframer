"use client";

import { motion } from "framer-motion";

interface HeroMoodProps {
  title?: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  description?: string;
  solutionsButton?: {
    text: string;
    href: string;
  };
  adaptiveButton?: {
    text: string;
    href: string;
  };
}

export default function HeroMood({
  title = "Meet YourAI.",
  subtitle = "Reimagine work with adaptive thinking",
  primaryButton = {
    text: "Start free decoration",
    href: "#"
  },
  description = "It helps you explore, create, and refine ideas through natural interactions. From drafting concepts and options to shaping workflows and outputs, it adapts to your style.",
  solutionsButton = {
    text: "Solutions for complex tasks",
    href: "#"
  },
  adaptiveButton = {
    text: "Conversational & Adaptive",
    href: "#"
  }
}: HeroMoodProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ minHeight: '600px' }}>
      {/* Background with mood styling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg/mood-1.svg')`,
          filter: 'sepia(20%) saturate(0.8) hue-rotate(30deg) brightness(0.9)'
        }}
      >
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-yellow-100/40"></div>
      </div>

      {/* Main Content - Center */}
      <div className="relative z-10 hero flex items-center justify-center min-h-screen px-4">
        <div className="max-w-[720px] mx-auto text-center">
          
          {/* Main Title */}
          <motion.h1 
            className="text-[68px] font-light text-white leading-[1.05] mb-8"
            style={{ 
              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
              fontWeight: '100',
              letterSpacing: '-0.05em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {title}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            className="text-[60px] text-white leading-[1.05] mb-8"
            style={{ 
              fontFamily: 'Inter, SF Pro Display, Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
              letterSpacing: '-0.05em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <span 
              className="font-normal italic"
              style={{ 
                fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                fontWeight: '400',
                letterSpacing: '-0.05em'
              }}
            >
              Reimagine work
            </span>
            <span 
              className="font-normal"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100',
                letterSpacing: '-0.05em'
              }}
            >
              {" "}with
            </span>
            <br />
            <span 
              className="font-normal"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100',
                letterSpacing: '-0.05em'
              }}
            >
              adaptive thinking
            </span>
          </motion.h2>

          {/* CTA Button */}
          <motion.button 
            className="bg-white text-black rounded-2xl font-medium px-6 py-3 text-[16px] hover:bg-gray-100 transition-colors"
            style={{ 
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontWeight: '500'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {primaryButton.text}
          </motion.button>
        </div>
      </div>

      {/* Bottom Left - Description */}
      <motion.div 
        className="absolute bottom-8 left-8 max-w-md z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        <p 
          className="text-white text-lg"
          style={{ 
            fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
            fontWeight: '100',
            lineHeight: '1.2'
          }}
        >
          {description}
        </p>
      </motion.div>

      {/* Bottom Right - Action Buttons */}
      <motion.div 
        className="absolute bottom-8 right-8 max-w-sm z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <div className="space-y-2">
          <motion.button 
            className="w-full bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 transition-all duration-300 flex items-center group h-[50px]"
            style={{ 
              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
              fontWeight: '100'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg font-light">{solutionsButton.text}</span>
          </motion.button>

          <div className="flex items-center gap-2">
            <motion.button 
              className="flex-1 bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 transition-all duration-300 flex items-center group h-[50px]"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg font-light">{adaptiveButton.text}</span>
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white/30 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center w-[50px] h-[50px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100/20 to-transparent"></div>
      
      {/* Hero end blur overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/10 via-black/1 to-transparent backdrop-blur-sm z-10"></div>
    </div>
  );
}
