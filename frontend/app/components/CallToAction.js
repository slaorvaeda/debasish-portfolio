'use client';

export default function CallToAction() {
  return (
    <section id="contact" className="bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center w-full">
        {/* Main Heading - Two lines, serif font */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-white mb-8 sm:mb-10 md:mb-12 leading-tight break-words px-2" 
          data-aos="fade-up"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          <div className="block">LET'S BUILD SOMETHING</div>
          <div className="block">EXTRAORDINARY TOGETHER</div>
        </h2>
        
        {/* CTA Button - Orange-red with rounded corners, arrow icon in circle */}
        <button 
          className="bg-[#ff6b35] text-white px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 rounded-full flex items-center gap-3 sm:gap-4 mx-auto hover:bg-[#e55a2b] transition-colors text-sm sm:text-base md:text-lg font-sans font-medium" 
          data-aos="zoom-in" 
          data-aos-delay="200"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span>Work with Me</span>
        </button>

        {/* Scrolling/Animated Text - Horizontal scroll with varying opacity */}
        <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 overflow-hidden relative">
          <div className="flex whitespace-nowrap marquee-animation">
            <span className="text-gray-400/40 text-xs sm:text-sm md:text-base font-sans mx-3 sm:mx-4 md:mx-6 inline-flex items-center gap-1 sm:gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-sm sm:text-base md:text-lg">*</span>
            </span>
            <span className="text-gray-400/60 text-xs sm:text-sm md:text-base font-sans mx-3 sm:mx-4 md:mx-6 inline-flex items-center gap-1 sm:gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-sm sm:text-base md:text-lg">*</span>
            </span>
            <span className="text-gray-400 text-xs sm:text-sm md:text-base font-sans mx-3 sm:mx-4 md:mx-6 inline-flex items-center gap-1 sm:gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-sm sm:text-base md:text-lg">*</span>
            </span>
            <span className="text-gray-400/40 text-xs sm:text-sm md:text-base font-sans mx-3 sm:mx-4 md:mx-6 inline-flex items-center gap-1 sm:gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-sm sm:text-base md:text-lg">*</span>
            </span>
            <span className="text-gray-400/60 text-xs sm:text-sm md:text-base font-sans mx-3 sm:mx-4 md:mx-6 inline-flex items-center gap-1 sm:gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-sm sm:text-base md:text-lg">*</span>
            </span>
            <span className="text-gray-400 text-xs sm:text-sm md:text-base font-sans mx-3 sm:mx-4 md:mx-6 inline-flex items-center gap-1 sm:gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-sm sm:text-base md:text-lg">*</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

