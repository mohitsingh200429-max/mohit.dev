'use client';

import Image from 'next/image';
import { motion, Variants} from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-[1200px] mx-auto">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT GRID */}
        <motion.div
          variants={item}
          className="order-2 md:order-1 grid grid-cols-2 gap-4"
        >

          {/* LEFT COLUMN */}
          <div className="space-y-4">

            {/* IMAGE 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative h-[300px] rounded-[24px] overflow-hidden bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)]"
            >
              <Image
                src="/images/about1.jpg"
                alt="Developer workspace building modern websites"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover grayscale"
              />
            </motion.div>

            {/* STAT */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-[24px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-black/5"
            >
              <p className="text-[36px] font-bold tracking-tight mb-1">100%</p>
              <p className="text-[14px] text-[#7B7B7B]">Client Satisfaction</p>
            </motion.div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4 pt-12">

            {/* EXPERIENCE */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-[24px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-black/5"
            >
              <p className="text-[36px] font-bold tracking-tight mb-1">3+</p>
              <p className="text-[14px] text-[#7B7B7B]">Years Experience</p>
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative h-[300px] rounded-[24px] overflow-hidden bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)]"
            >
              <Image
                src="/images/about2.jpeg"
                alt="Coding modern web applications using React and Next.js"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover grayscale"
              />
            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={container}
          className="order-1 md:order-2 space-y-6 md:pl-12"
        >

          <motion.p
            variants={item}
            className="text-[14px] font-medium text-[#7B7B7B] uppercase tracking-wider"
          >
            • About Me
          </motion.p>

          <motion.h2
            variants={item}
            className="text-[36px] md:text-[44px] font-semibold tracking-tight leading-[1.2]"
          >
            Hi, I'm Mohit — a web developer focused on building modern
            conversion-optimized websites for service businesses.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-[16px] md:text-[18px] text-[#7B7B7B] leading-relaxed"
          >
            My goal is simple: build websites that not only look good but also
            bring real customers. I specialize in turning complex problems into
            elegant solutions, blending creativity with strategic thinking.
          </motion.p>

          {/* SKILLS */}
          <motion.div
            variants={container}
            className="pt-4 flex flex-wrap gap-2"
          >
            {[
              'Next.js',
              'React',
              'Tailwind CSS',
              'Framer Motion',
              'UI/UX Design',
              'SEO',
              'Google Ads',
              'Node.js'
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={item}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 bg-white border border-black/10 rounded-full text-[14px] font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}