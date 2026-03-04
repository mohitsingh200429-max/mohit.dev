import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Local Services Provider',
    industry: 'Marketplace',
    description: 'Full E-commerce website for a local services marketplace connecting customers with Skilled professionals.',
    image: '/services/1.png',
  },
  {
    title: 'Local Barbershop',
    industry: 'Barbershop',
    description: 'Modern website for a local barbershop in Australia for Google Ads Campaigns and Increasing store visits.',
    image: '/services/2.png',
  },
  {
    title: 'Acer For IT Resellers',
    industry: 'B2B',
    description: 'Landing page for Acer’s B2B division targeting IT resellers with a focus on lead generation and product showcase.',
    image: '/services/3.png',
  },
  {
    title: 'Verdant Seeds',
    industry: 'Marketplace',
    description: 'In Progress: E-commerce website for a local seed company in India to expand their online presence and sales.',
    image: '/services/4.png',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-[1200px] mx-auto">

      {/* Section Header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-[14px] font-medium text-[#7B7B7B] uppercase tracking-wider mb-2">
            • Portfolio
          </p>

          <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight">
            Latest Works
          </h2>
        </div>

        <Link
          href="#projects"
          className="hidden md:flex items-center gap-2 text-[14px] font-medium hover:text-[#7B7B7B] transition-colors"
        >
          View All Projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">

            {/* Image */}
            <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-6 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">

                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 text-[#222222]" />
                </div>

              </div>

            </div>

            {/* Content */}
            <div className="flex items-start justify-between">

              <div>
                <h3 className="text-[22px] font-medium mb-2">
                  {project.title}
                </h3>

                <p className="text-[16px] text-[#7B7B7B] max-w-[80%]">
                  {project.description}
                </p>
              </div>

              <span className="px-3 py-1 bg-white border border-black/10 rounded-full text-[12px] font-medium text-[#7B7B7B]">
                {project.industry}
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}