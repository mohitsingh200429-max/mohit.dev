'use client';

import { Layout, Code2, Zap } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Website Design',
    description:
      'Modern, conversion-focused websites designed to represent your business professionally and turn visitors into customers.',
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Landing Page Development',
    description:
      'High-converting, performance-optimized landing pages built specifically for marketing campaigns and lead generation.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Full Stack Development',
    description:
      'Complete website development from design to deployment using modern technologies for speed, scalability, and reliability.',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-[1200px] mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[14px] font-medium text-[#7B7B7B] uppercase tracking-wider mb-2">
          • Expertise
        </p>

        <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight">
          Services
        </h2>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-6"
      >

        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group bg-white p-8 rounded-[24px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-black/5 transition-all duration-300 hover:border-black/10 hover:-translate-y-1"
          >

            {/* Icon */}
            <div className="w-16 h-16 bg-[#F8F8F8] rounded-[16px] flex items-center justify-center mb-8 text-[#222222] transition-colors group-hover:bg-[#F2F2F2]">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-medium mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[16px] text-[#7B7B7B] leading-relaxed">
              {service.description}
            </p>

          </motion.div>
        ))}

      </motion.div>
    </section>
  );
}