"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ04Props {
  title?: string;
  description?: string;
  items?: {
    question: string;
    answer: string;
    category?: string;
  }[];
  contactInfo?: {
    title: string;
    description?: string;
    buttonText: string;
  };
}

export default function FAQ04({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services",
  items = [
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
      category: "Getting Started",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
      category: "Billing",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
      category: "Pricing",
    },
    {
      question: "How can I contact support?",
      answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
      category: "Support",
    },
  ],
  contactInfo
}: FAQ04Props) {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="py-8 w-full bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          {title && (
            <motion.div 
              className="text-center space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2 
                style={{ 
                  fontSize: '40px', 
                  fontFamily: 'Inter, sans-serif',
                  color: '#121212',
                  fontWeight: 'normal'
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
              {description && (
                <motion.p 
                  style={{ 
                    fontSize: '18px', 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6D6D6D'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {description}
                </motion.p>
              )}
            </motion.div>
          )}

          {/* FAQ Items */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const itemId = `item-${index}`;
              const isOpen = openItems.includes(itemId);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut", 
                    delay: 0.3 + (index * 0.05)
                  }}
                  viewport={{ once: true }}
                  className="mb-4 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(itemId)}
                    className="w-full px-6 py-4 text-left hover:no-underline flex items-center justify-between transition-colors duration-200"
                  >
                    <div className="flex flex-col">
                      {item.category && (
                        <span className="w-fit text-xs font-normal mb-2 px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {item.category}
                        </span>
                      )}
                      <h3 
                        className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600"
                        style={{
                          fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif'
                        }}
                      >
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-4 w-4 shrink-0"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Answer Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pt-0 pb-6">
                          <motion.p 
                            className="text-gray-600 dark:text-gray-300 leading-relaxed"
                            style={{
                              fontFamily: 'Inter, sans-serif'
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                {contactInfo.title}
              </p>
              {contactInfo.description && (
                <p className="text-sm text-gray-600 mb-4">
                  {contactInfo.description}
                </p>
              )}
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                {contactInfo.buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
