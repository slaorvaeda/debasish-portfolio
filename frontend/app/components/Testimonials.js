'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonial = {
    name: 'Rina Kurniawan',
    role: 'CTO at LuminaTech',
    text: "Collaborating with Debashis was an inspiring experience. He quickly grasped our vision, asked the right questions, and delivered a design that perfectly balanced aesthetics and functionality. His creative approach and attention to detail made every step of the process smooth and enjoyable.",
  };

  // Client photos with colored backgrounds - matching the image layout
  const clientPhotos = [
    { 
      bg: 'bg-purple-300', 
      position: { top: '5%', left: '2%' },
      image: 'https://i.pravatar.cc/150?img=1&ethnicity=indian',
      animation: 'float-animation',
      delay: '0s'
    }, // Top left - lavender
    { 
      bg: 'bg-green-400', 
      position: { top: '8%', right: '15%' },
      image: 'https://i.pravatar.cc/150?img=2&ethnicity=indian',
      animation: 'float-reverse-animation',
      delay: '0.5s'
    }, // Top right of title - green
    { 
      bg: 'bg-orange-400', 
      position: { top: '5%', right: '2%' },
      image: 'https://i.pravatar.cc/150?img=3&ethnicity=indian',
      animation: 'pulse-animation',
      delay: '1s'
    }, // Far right - orange
    { 
      bg: 'bg-purple-200', 
      position: { top: '35%', left: '8%' },
      image: 'https://i.pravatar.cc/150?img=4&ethnicity=indian',
      animation: 'float-animation',
      delay: '1.5s'
    }, // Left middle - light purple
    { 
      bg: 'bg-blue-300', 
      position: { top: '50%', left: '50%' },
      image: 'https://i.pravatar.cc/150?img=5&ethnicity=indian',
      animation: 'pulse-animation-center',
      delay: '0.3s',
      isCenter: true
    }, // Center below title - light blue
    { 
      bg: 'bg-blue-200', 
      position: { top: '40%', right: '20%' },
      image: 'https://i.pravatar.cc/150?img=6&ethnicity=indian',
      animation: 'float-reverse-animation',
      delay: '0.8s'
    }, // Right middle - light blue
    { 
      bg: 'bg-orange-500', 
      position: { bottom: '15%', left: '5%' },
      image: 'https://i.pravatar.cc/150?img=7&ethnicity=indian',
      animation: 'float-animation',
      delay: '1.2s'
    }, // Bottom left - orange
    { 
      bg: 'bg-orange-400', 
      position: { bottom: '8%', left: '45%' },
      image: 'https://i.pravatar.cc/150?img=8&ethnicity=indian',
      animation: 'pulse-animation',
      delay: '0.6s'
    }, // Bottom center - orange
  ];

  return (
    <section className="bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Title - Centered, stacked vertically with photos around it */}
        <div className="relative mb-16 sm:mb-24 md:mb-32 lg:mb-40 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white text-center relative z-20 leading-tight break-words" 
            data-aos="fade-up" 
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            <div className="block">STORIES</div>
            <div className="block">FROM</div>
            <div className="block">OUR</div>
            <div className="block">CLIENTS</div>
          </h2>

          {/* Client Photos Scattered around title */}
          <div className="absolute inset-0 w-full h-full">
            {clientPhotos.map((photo, index) => {
              return (
              <div
                key={index}
                className={`absolute ${photo.bg} w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden shadow-lg ${photo.animation} hidden sm:block`}
                style={{
                  ...photo.position,
                  animationDelay: photo.delay,
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={photo.image}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-cover object-center rounded-full"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial Bubble - Bottom Right */}
        <div className="max-w-2xl ml-auto mr-0 sm:mr-4 md:mr-8 lg:mr-16 w-full" data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-red-600 p-6 sm:p-8 md:p-10 rounded-2xl relative shadow-2xl">
            <div className="absolute -left-3 sm:-left-4 top-8 sm:top-12 w-0 h-0 border-t-[15px] sm:border-t-[20px] border-b-[15px] sm:border-b-[20px] border-r-[15px] sm:border-r-[20px] border-t-transparent border-b-transparent border-r-red-600"></div>
            <p className="text-white text-sm sm:text-base md:text-lg font-sans font-light leading-relaxed mb-4 sm:mb-6 break-words">
              "{testimonial.text}"
            </p>
            <div className="text-white">
              <div className="font-sans font-bold text-base sm:text-lg md:text-xl">{testimonial.name}</div>
              <div className="font-sans font-light text-sm sm:text-base md:text-lg opacity-90">— {testimonial.role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

