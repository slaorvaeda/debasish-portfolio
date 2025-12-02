'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* Mobile Hero Section - Different Design */}
      <section id="home" className="md:hidden relative min-h-screen bg-gradient-to-br from-orange-500 to-red-600 flex flex-col items-center justify-center overflow-hidden px-4 py-16">
        {/* Profile Image - Top Center */}
        <div className="relative w-48 h-48 mb-8" data-aos="zoom-in" data-aos-duration="1500">
          <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
          <div className="w-full h-full relative rounded-full overflow-hidden">
            <Image
              src="/portfolio.png"
              alt="Debashis"
              fill
              className="object-cover object-center"
              style={{
                filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
              }}
            />
          </div>
        </div>

        {/* Name - Large and Centered */}
        <h1 
          className="text-6xl font-serif font-black leading-none text-center text-white mb-4" 
          style={{ fontFamily: 'var(--font-playfair), serif' }}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          DEBASHIS
        </h1>

        {/* Tagline */}
        <p 
          className="text-white/90 text-base font-sans font-light text-center mb-8 max-w-xs"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        >
          Crafting Designs That Connect People
        </p>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <span className="text-white/70 text-xs font-sans">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center overflow-hidden">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-scroll-bounce"></div>
          </div>
        </div>

        {/* Dark strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black"></div>
      </section>

      {/* Desktop Hero Section - Original Design */}
      <section id="home" className="hidden md:flex relative min-h-screen bg-gradient-to-br from-orange-500 to-red-600 items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center px-6 lg:px-12 py-20 lg:py-32">
          {/* Centered DEBASHIS text with profile */}
          <div className="relative flex items-center justify-center w-full max-w-full scale-125">
            {/* Profile silhouette positioned behind BA letters - centered */}
            <div className="absolute b left-1/2 top-1/2 -translate-x-[68%] -translate-y-1/2 w-[24rem] h-[24rem] lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] z-0" data-aos="zoom-in" data-aos-duration="1500">
              <div className="w-full h-full relative">
                <Image
                  src="/portfolio.png"
                  alt="Profile"
                  fill
                  className="object-cover object-center"
                  style={{
                    filter: 'grayscale(100%) contrast(1.3) brightness(0.8)',
                    transform: 'scaleX(-1)', // Flip horizontally to face left
                  }}
                />
              </div>
            </div>
            
            {/* DEBASHIS text - centered, blending with image */}
            <h1 
              className="text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[220px] font-serif font-black leading-none tracking-tight relative z-20 text-center whitespace-nowrap" 
              style={{ fontFamily: 'var(--font-playfair), serif' }}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <span className="text-white relative z-30">DE</span>
              <span 
                className="relative z-10"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px white',
                  textStroke: '2px white',
                  mixBlendMode: 'normal',
                }}
              >
                BA
              </span>
              <span className="text-white relative z-30">SHIS</span>
            </h1>
          </div>
        </div>
        
        {/* Dark strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black"></div>
      </section>
    </>
  );
}

