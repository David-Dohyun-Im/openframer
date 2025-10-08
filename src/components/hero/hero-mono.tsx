"use client";

import { motion } from "framer-motion";

interface HeroMonoProps {
  badge?: string;
  logo?: string;
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
}

export default function HeroMono({
  badge = "PREMIUM DESIGN SOLUTIONS",
  logo = "https://framerusercontent.com/images/6ZRrNs4Gy2rcMzXTLB8Tl2NZ51I.svg?width=64&height=64",
  title = "DESIGN",
  subtitle = "Professional design solutions, crafted for modern businesses",
  primaryButton = {
    text: "Get Started",
    href: "#"
  },
  secondaryButton = {
    text: "Learn More",
    href: "#"
  }
}: HeroMonoProps) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative bg-white" style={{ minHeight: '600px' }}>
      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-4"
      >
        
        {/* AI Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 shadow-lg mb-6"
          style={{
            boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.09), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.09), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.09), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.08), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.05), 0px 3px 1px 0px rgba(255, 255, 255, 1) inset'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 256 256" 
            className="w-4 h-4 text-gray-600"
          >
            <path 
              d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-xs font-medium text-black font-['Satoshi']">
            {badge}
          </p>
        </div>

        {/* Logo and Title */}
        <div className="flex items-center gap-4 mb-6">
          {/* Logo Container */}
          <div className="relative">
            {/* Outer gradient container */}
            <div 
              className="w-[116px] h-[116px] rounded-full flex items-center justify-center p-2.5"
              style={{
                background: 'linear-gradient(180deg, rgb(14, 18, 41) -278%, rgb(255, 255, 255) 136%)',
                boxShadow: 'rgba(122, 122, 122, 0.58) 0px 0.706592px 0.989229px -0.541667px, rgba(122, 122, 122, 0.57) 0px 1.80656px 2.52919px -1.08333px, rgba(122, 122, 122, 0.55) 0px 3.62176px 5.07046px -1.625px, rgba(122, 122, 122, 0.52) 0px 6.8656px 9.61184px -2.16667px, rgba(122, 122, 122, 0.46) 0px 13.6468px 19.1055px -2.70833px, rgba(122, 122, 122, 0.32) 0px 30px 42px -3.25px'
              }}
            >
              {/* Inner gradient container */}
              <div 
                className="w-[96px] h-[96px] rounded-full flex items-center justify-center p-4 relative"
                style={{
                  background: 'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 213%)',
                  boxShadow: 'rgba(16, 49, 77, 0.24) 0px 0.706592px 0.706592px -0.666667px, rgba(16, 49, 77, 0.23) 0px 1.80656px 1.80656px -1.33333px, rgba(16, 49, 77, 0.22) 0px 3.62176px 3.62176px -2px, rgba(16, 49, 77, 0.2) 0px 6.8656px 6.8656px -2.66667px, rgba(16, 49, 77, 0.16) 0px 13.6468px 13.6468px -3.33333px, rgba(16, 49, 77, 0.06) 0px 30px 30px -4px'
                }}
              >
                <img 
                  src={logo}
                  alt="logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h1 
            className="text-[100px] font-normal leading-[1.05] tracking-[-6px]"
            style={{
              background: 'linear-gradient(25deg, rgb(0, 0, 0) 34%, rgb(255, 255, 255) 124%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base text-black text-center font-['Inter'] mb-8">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center items-stretch">
          {/* Primary Button */}
          <motion.a 
            href={primaryButton.href}
            className="inline-flex items-center justify-center bg-black text-white rounded-[10px] px-6 py-3 h-full shadow-lg"
            whileHover={{ 
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              transition: { duration: 0.1 }
            }}
          >
            <div className="flex items-center gap-2">
              <p className="text-white text-sm font-medium font-['Inter']">
                {primaryButton.text}
              </p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 256 256" 
                className="w-4 h-4 text-white"
              >
                <path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z" fill="currentColor" />
              </svg>
            </div>
          </motion.a>

          {/* Secondary Button */}
          <motion.a 
            href={secondaryButton.href}
            className="inline-flex items-center justify-center rounded-[10px] px-6 py-3 h-full bg-gray-100 text-black shadow-lg"
            whileHover={{ 
              backgroundColor: "rgb(250, 250, 250)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              backgroundColor: "rgb(240, 240, 240)",
              transition: { duration: 0.1 }
            }}
          >
            <p className="text-black text-sm font-medium font-['Inter']">
              {secondaryButton.text}
            </p>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
