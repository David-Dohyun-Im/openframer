"use client";
import React from "react";
import { motion } from "framer-motion";

interface Pricing04Props {
  title?: string;
  subtitle?: string;
  plans?: {
    planName: string;
    description: string;
    price: string;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    buttonVariant?: 'primary' | 'secondary';
  }[];
  showAnimatedBackground?: boolean;
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PricingCard = ({
  planName, description, price, features, buttonText, isPopular = false, buttonVariant = 'primary'
}: {
  planName: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: 'primary' | 'secondary';
}) => {
  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    ${isPopular ? 'scale-105 relative ring-2 ring-black/20 dark:from-white/20 dark:to-white/10 dark:border-black/30 shadow-2xl' : ''}
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition
    ${buttonVariant === 'primary' 
      ? 'bg-black hover:bg-gray-800 text-white' 
      : 'bg-gray-500 hover:bg-gray-600 text-white border border-gray-500'
    }
  `;

  return (
    <motion.div 
      className={cardClasses.trim()}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {isPopular && (
        <div className="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-black text-white dark:bg-gray-800 dark:text-white">
          Most Popular
        </div>
      )}
      <div className="mb-3">
        <h2 
          className="text-[48px] font-extralight tracking-[-0.03em] text-foreground"
          style={{
            fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif'
          }}
        >
          {planName}
        </h2>
        <p 
          className="text-[16px] text-foreground/70 mt-1"
          style={{
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {description}
        </p>
      </div>
      <div className="my-6 flex items-baseline gap-2">
        <span className="text-[48px] font-extralight text-foreground font-display">${price}</span>
        <span 
          className="text-[14px] text-foreground/70"
          style={{
            fontFamily: 'Inter, sans-serif'
          }}
        >
          /mo
        </span>
      </div>
      <div className="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div>
      <ul 
        className="flex flex-col gap-2 text-[14px] text-foreground/90 mb-6"
        style={{
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="text-black dark:text-white w-4 h-4" /> {feature}
          </li>
        ))}
      </ul>
      <button className={`${buttonClasses.trim()} font-inter`}>
        {buttonText}
      </button>
    </motion.div>
  );
};

export default function Pricing04({
  title = "Plans",
  subtitle = "",
  plans = [
    { 
      planName: 'Basic', 
      description: 'Perfect for personal projects and hobbyists.', 
      price: '0', 
      features: ['1 User', '1GB Storage', 'Community Forum'], 
      buttonText: 'Get Started', 
      buttonVariant: 'secondary'
    },
    { 
      planName: 'Team', 
      description: 'Collaborate with your team on multiple projects.', 
      price: '49', 
      features: ['10 Users', '100GB Storage', 'Email Support', 'Shared Workspaces'], 
      buttonText: 'Choose Team Plan', 
      isPopular: true, 
      buttonVariant: 'primary' 
    },
    { 
      planName: 'Agency', 
      description: 'Manage all your clients under one roof.', 
      price: '149', 
      features: ['Unlimited Users', '1TB Storage', 'Dedicated Support', 'Client Invoicing'], 
      buttonText: 'Contact Us', 
      buttonVariant: 'primary' 
    },
  ],
  showAnimatedBackground = true
}: Pricing04Props) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-foreground min-h-screen w-full overflow-x-hidden relative">
      {showAnimatedBackground && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 opacity-50" />
      )}
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <motion.h1 
            className="text-[56px] leading-tight tracking-[-0.56px] bg-clip-text text-transparent inline-block text-center"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgb(14, 28, 41) 34%, rgb(255, 255, 255) 124%)',
              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
              fontSize: '56px',
              fontWeight: 100,
              letterSpacing: '-0.56px',
              lineHeight: '67.2px',
              WebkitFontSmoothing: 'antialiased'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="mt-3 text-foreground/80 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        <div className="flex flex-row gap-6 justify-center items-center w-full max-w-4xl">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.planName}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
