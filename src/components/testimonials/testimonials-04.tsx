"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonials04Props {
  title?: string;
  testimonials?: {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
    company?: string;
    companyLogo?: string;
  }[];
}

export default function Testimonials04({
  title = "Testimonials",
  testimonials = [
    {
      id: "1",
      name: "Shekinah Tshiokufila",
      role: "Software Engineer",
      content: "Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development",
      avatar: "https://tailus.io/images/reviews/shekinah.webp",
      company: "Nike",
      companyLogo: "https://html.tailus.io/blocks/customers/nike.svg"
    },
    {
      id: "2",
      name: "Jonathan Yombo",
      role: "Software Engineer",
      content: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
      avatar: "https://tailus.io/images/reviews/jonathan.webp"
    },
    {
      id: "3",
      name: "Yucel Faruksahan",
      role: "Creator, Tailkits",
      content: "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
      avatar: "https://tailus.io/images/reviews/yucel.webp"
    },
    {
      id: "4",
      name: "Rodrigo Aguilar",
      role: "Creator, TailwindAwesome",
      content: "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
      avatar: "https://tailus.io/images/reviews/rodrigo.webp"
    }
  ]
}: Testimonials04Props) {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-6">
            <span 
              className="bg-clip-text text-transparent inline-block text-center"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgb(14, 28, 41) 34%, rgb(255, 255, 255) 124%)',
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontSize: '56px',
                fontWeight: 100,
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              {title}
            </span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Main testimonial (spans 2 columns and 2 rows) */}
          <div className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              {testimonials[0]?.companyLogo && (
                <img
                  className="h-6 w-fit dark:invert"
                  src={testimonials[0].companyLogo}
                  alt={`${testimonials[0].company} Logo`}
                  height="24"
                  width="auto"
                />
              )}
            </div>
            <div className="p-6 pt-0">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium text-gray-900 dark:text-white">
                  {testimonials[0]?.content}
                </p>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <div className="size-12 rounded-full overflow-hidden">
                    <img
                      src={testimonials[0]?.avatar}
                      alt={testimonials[0]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <cite className="text-sm font-medium text-gray-900 dark:text-white">
                      {testimonials[0]?.name}
                    </cite>
                    <span className="text-gray-600 dark:text-gray-400 block text-sm">
                      {testimonials[0]?.role}
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Other testimonials */}
          {testimonials.slice(1).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="h-full p-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className={`${index === 0 ? 'text-xl' : ''} font-medium text-gray-900 dark:text-white`}>
                    {testimonial.content}
                  </p>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <div className="size-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <cite className="text-sm font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </cite>
                      <span className="text-gray-600 dark:text-gray-400 block text-sm">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
