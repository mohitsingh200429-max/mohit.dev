import { Layout, Code2, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Website Design',
    description: 'Modern websites designed to represent your business professionally and convert visitors into customers.'
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Landing Page Development',
    description: 'High-converting Performance ready landing pages designed specifically for marketing campaigns and lead generation.'
  },

   {
    icon: <Zap className="w-8 h-8" />,
    title: 'Full Stack Development',
    description: 'Complete website development from design to deployment, ensuring seamless functionality and performance.'
  }
  
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <p className="text-[14px] font-medium text-[#7B7B7B] uppercase tracking-wider mb-2">• Expertise</p>
        <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight">Services</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-[24px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-black/5 hover:border-black/10 transition-colors">
            <div className="w-16 h-16 bg-[#F8F8F8] rounded-[16px] flex items-center justify-center mb-8 text-[#222222]">
              {service.icon}
            </div>
            <h3 className="text-[22px] font-medium mb-4">{service.title}</h3>
            <p className="text-[16px] text-[#7B7B7B] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
