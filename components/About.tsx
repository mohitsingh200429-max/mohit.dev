import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative h-[300px] rounded-[24px] overflow-hidden bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
              <Image 
                src="https://picsum.photos/seed/portrait1/400/600" 
                alt="Mohit" 
                fill 
                className="object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-black/5">
              <p className="text-[36px] font-bold tracking-tight mb-1">100%</p>
              <p className="text-[14px] text-[#7B7B7B]">Client Satisfaction</p>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="bg-white p-6 rounded-[24px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-black/5">
              <p className="text-[36px] font-bold tracking-tight mb-1">3+</p>
              <p className="text-[14px] text-[#7B7B7B]">Years Experience</p>
            </div>
            <div className="relative h-[300px] rounded-[24px] overflow-hidden bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
              <Image 
                src="https://picsum.photos/seed/code/400/600" 
                alt="Coding" 
                fill 
                className="object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6 md:pl-12">
          <p className="text-[14px] font-medium text-[#7B7B7B] uppercase tracking-wider mb-2">• About Me</p>
          <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight leading-[1.2]">
            Hi, I'm Mohit — a web developer focused on building modern conversion-optimized websites for service businesses.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#7B7B7B] leading-relaxed">
            My goal is simple: build websites that not only look good but also bring real customers. I specialize in turning complex problems into elegant solutions, blending creativity with strategic thinking.
          </p>
          <div className="pt-4 flex flex-wrap gap-2">
            {['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'SEO', 'Google Ads', 'Nodejs'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white border border-black/10 rounded-full text-[14px] font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
