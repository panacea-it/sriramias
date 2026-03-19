"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const YoutubeCarousel = () => {
  const videos = [
    { id: 1, thumbnail: "/youtubeleft.png" },
    { id: 2, thumbnail: "/youtubemiddle.png" },
    { id: 3, thumbnail: "/youtuberight.png" },
    { id: 4, thumbnail: "/youtubemiddle.png" },
    { id: 5, thumbnail: "/youtubeleft.png" },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      
      {/* Background Glow - Aesthetic touch */}
      <div className="absolute top-0 right-0 w-[30%] h-full bg-gradient-to-bl from-blue-50/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-full bg-gradient-to-tr from-orange-50/50 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              <span className="text-[#d17d7d]">Youtube </span>
              <span className="text-[#0089d1]">Videos</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Expertly curated lectures and strategy sessions designed to simplify your preparation journey.
            </p>
          </motion.div>
        </div>

        {/* 3D Stack Carousel */}
        <motion.div
          className="youtube-carousel-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.4} // Shows a bit of the side slides
            coverflowEffect={{
              rotate: 0,        // No rotation for a flat stack look
              stretch: -20,     // Pulls slides closer together
              depth: 300,       // Pushes side slides deep into the background
              modifier: 1,      // Multiplier for the effect
              slideShadows: false,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 2.5 },
            }}
            className="!overflow-visible"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="py-12 flex justify-center">
                {({ isActive }) => (
                  <div
                    className={`relative w-full transition-all duration-700 ease-in-out overflow-hidden shadow-2xl ${
                      isActive
                        ? 'scale-125 z-50 opacity-100 blur-0'
                        : 'scale-90 z-10 opacity-40 blur-[4px]'
                    }`}
                  >
                    
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video w-full">
                      <Image
                        src={video.thumbnail}
                        alt="Youtube Content"
                        fill
                        className="object-cover"
                      />

                      {/* Play Button Overlay - Only visible on the Active Slide */}
                      <div className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                         <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="cursor-pointer"
                         >
                          <svg width="80" height="56" viewBox="0 0 68 48" fill="none">
                            <path d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.21 1 34 1 34 1s-21.21 0-26.5.72c-2.93.78-5.24 3.09-6.02 6.02C.72 13.04 0 24 0 24s.72 10.96 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02 5.29.72 26.5.72 26.5.72s21.21 0 26.5-.72c2.93-.78 5.24-3.09 6.02-6.02C67.28 34.96 68 24 68 24s-.72-10.96-1.48-16.26z" fill="#FF0000" />
                            <path d="M27 34l18-10-18-10v20z" fill="#fff" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Pagination Dot Customization */}
      <style jsx global>{`
        .youtube-carousel-wrapper {
          padding-bottom: 50px;
        }
        .youtube-carousel-wrapper .swiper-pagination {
          bottom: 10px !important;
        }
        .youtube-carousel-wrapper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #e2e8f0;
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .youtube-carousel-wrapper .swiper-pagination-bullet-active {
          width: 35px;
          border-radius: 6px;
          background: #0089d1;
        }
      `}</style>

    </section>
  );
};

export default YoutubeCarousel;