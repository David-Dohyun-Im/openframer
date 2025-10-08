"use client";
import React from "react";
import { motion } from "framer-motion";

interface CTA04Props {
  subtitle?: string;
  words?: {
    text: string;
    className?: string;
  }[];
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTA04({
  subtitle = "The road to freedom starts from here",
  words = [
    { text: "Build" },
    { text: "awesome" },
    { text: "apps" },
    { text: "with" },
    { text: "Aceternity.", className: "text-blue-500 dark:text-blue-500" }
  ],
  primaryButton = {
    text: "Join now",
    href: "#"
  },
  secondaryButton = {
    text: "Signup",
    href: "#"
  }
}: CTA04Props) {
  // Typewriter effect component
  const TypewriterEffectSmooth = ({ words, className }: { words: { text: string; className?: string; }[]; className?: string }) => {
    const wordsArray = words.map((word) => ({
      ...word,
      text: word.text.split(""),
    }));

    const renderWords = () => {
      return (
        <div>
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={`dark:text-white text-black ${word.className || ''}`}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          ))}
        </div>
      );
    };

    return (
      <div className={`flex space-x-1 my-6 ${className || ''}`}>
        <motion.div
          className="overflow-hidden pb-2"
          initial={{ width: "0%" }}
          whileInView={{ width: "fit-content" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "linear", delay: 1 }}
        >
          <div
            className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
            style={{ whiteSpace: "nowrap" }}
          >
            {renderWords()}
          </div>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-50 dark:bg-gray-900">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        {subtitle}
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gray-800 transition-colors">
          {primaryButton.text}
        </button>
        <button className="w-40 h-10 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          {secondaryButton.text}
        </button>
      </div>
    </div>
  );
}
