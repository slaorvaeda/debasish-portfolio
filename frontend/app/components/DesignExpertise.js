'use client';

export default function DesignExpertise() {
  const services = [
    {
      number: '01',
      title: 'PRODUCT DESIGN',
      description: 'Creating products that blend usability, functionality, and aesthetics for an enriching user experience. I focus on user needs, innovative solutions, and design that is both powerful and visually appealing.',
    },
    {
      number: '02',
      title: 'UI/UX DESIGN',
      description: 'Crafting intuitive interfaces and seamless user experiences that delight users and drive engagement.',
    },
    {
      number: '03',
      title: 'BRAND IDENTITY',
      description: 'Developing cohesive brand identities that communicate your values and resonate with your audience.',
    },
    {
      number: '04',
      title: 'PROTOTYPING & TESTING',
      description: 'Building interactive prototypes and conducting user testing to validate designs before development.',
    },
  ];

  return (
    <section id="services" className="bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight break-words">
            <span className="text-[#ff6b35]">DESIGN EXPERTISE TO</span>
            <br />
            <span className="text-white">TRANSFORM IDEAS INTO</span>
            <br />
            <span className="text-white">IMPACTFUL PRODUCTS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12 md:mb-16">
          {/* Left side - Description */}
          <div className="text-white" data-aos="fade-right">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-light leading-relaxed">
              From in-depth user research to polished final delivery, I offer a full spectrum of design skills and services. Every step is focused on transforming concepts into intuitive, visually engaging, and user-centered products that make a meaningful impact.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-6 sm:space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex items-start gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-8 border-b border-gray-800 hover:border-[#ff6b35] transition-colors cursor-pointer group"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white group-hover:text-[#ff6b35] transition-colors flex-shrink-0">
                {service.number}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-bold text-white mb-2 sm:mb-3 break-words">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-sm sm:text-base md:text-lg font-sans font-light text-gray-300 leading-relaxed break-words">
                    {service.description}
                  </p>
                )}
              </div>
              <div className="text-white group-hover:text-[#ff6b35] transition-colors flex-shrink-0 mt-1">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

