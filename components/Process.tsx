'use client';

import { motion, Variants } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "Understand business goals, target audience, and project requirements.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Create modern UI layouts focused on user experience and conversion.",
  },
  {
    num: "03",
    title: "Development",
    description:
      "Build fast, responsive websites using modern web technologies.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "Deploy the website, optimize for performance, and deliver the final product.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Process() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="bg-[#222222] text-white rounded-[32px] p-12 md:p-20">

        {/* Header */}
        <div className="mb-16 md:w-1/2">
          <p className="text-[14px] font-medium text-white/60 uppercase tracking-wider mb-2">
            • Workflow
          </p>

          <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight">
            The Process
          </h2>
        </div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 right-0 h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors" />
              )}

              {/* Step Number */}
              <div className="text-[14px] font-mono text-white/40 mb-6 transition-colors group-hover:text-white/60">
                {step.num}
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-medium mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] text-white/60 leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}