const steps = [
  {
    num: '01',
    title: 'Discovery',
    description: 'Understand business goals, target audience, and project requirements.'
  },
  {
    num: '02',
    title: 'Design',
    description: 'Create modern UI layouts focused on user experience and conversion.'
  },
  {
    num: '03',
    title: 'Development',
    description: 'Build fast, responsive websites using modern web technologies.'
  },
  {
    num: '04',
    title: 'Launch',
    description: 'Deploy the website, optimize for performance, and hand over.'
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="bg-[#222222] text-white rounded-[32px] p-12 md:p-20">
        <div className="mb-16 md:w-1/2">
          <p className="text-[14px] font-medium text-white/60 uppercase tracking-wider mb-2">• Workflow</p>
          <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight">The Process</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 right-0 h-[1px] bg-white/10" />
              )}
              <div className="text-[14px] font-mono text-white/40 mb-6">{step.num}</div>
              <h3 className="text-[22px] font-medium mb-3">{step.title}</h3>
              <p className="text-[16px] text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
