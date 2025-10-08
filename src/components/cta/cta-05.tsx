"use client";
import React from "react";
import { motion } from "framer-motion";

interface CTA05Props {
  category?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA05({
  category = "Our Story",
  title = "Explore our journey and learn what sets us apart in",
  description = "crafting impactful digital experiences.",
  buttonText = "About Us",
  buttonHref = "#about"
}: CTA05Props) {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-[1990px] mx-auto w-full">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[16px] font-medium text-black dark:text-white font-['Manrope'] mb-4"
          >
            {category}
          </motion.p>
        </div>
        
        <div className="flex items-start justify-between" style={{ maxWidth: '1800px', margin: '0 auto' }}>
          {/* Center Section - Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 px-8"
          >
            <p 
              style={{
                color: 'rgb(0, 0, 0)',
                fontSize: '40px',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: '500',
                lineHeight: '56px',
                margin: 0,
                padding: 0,
                textAlign: 'left',
                textDecoration: 'none',
                textTransform: 'none',
                WebkitFontSmoothing: 'antialiased'
              }}
              className="dark:text-white"
            >
              {title}{' '}
              <span style={{ color: '#969696' }} className="dark:text-gray-400">
                {description}
              </span>
            </p>
          </motion.div>

          {/* Right Section - About Us Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex-shrink-0"
            style={{ alignSelf: 'flex-start' }}
          >
            <motion.a 
              href={buttonHref}
              className="inline-block"
              whileHover="hover"
              initial="initial"
              style={{
                borderRadius: '64px',
                opacity: 1,
                willChange: 'auto',
                cursor: 'pointer'
              }}
            >
              <motion.div 
                variants={{
                  initial: { 
                    backgroundColor: '#F0F0F0',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: '1px'
                  },
                  hover: { 
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(0, 0, 0)',
                    borderWidth: '1px'
                  }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                style={{
                  borderStyle: 'solid',
                  borderRadius: '64px',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexShrink: 0,
                  transform: 'none',
                  opacity: 1,
                  willChange: 'auto'
                }}
              >
                <motion.h4 
                  variants={{
                    initial: { color: 'rgb(0, 0, 0)' },
                    hover: { color: 'rgb(0, 0, 0)' }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="dark:text-white"
                  style={{
                    margin: 0,
                    padding: '12px 20px',
                    fontSize: '18px',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: '500',
                    lineHeight: '28px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    textTransform: 'none',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                >
                  {buttonText}
                </motion.h4>
                <motion.svg
                  variants={{
                    initial: { color: 'rgb(0, 0, 0)' },
                    hover: { color: 'rgb(0, 0, 0)' }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="dark:text-white"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '20px' }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </motion.svg>
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
