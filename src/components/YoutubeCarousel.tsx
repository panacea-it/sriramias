"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const YoutubeCarousel = () => {
  const videos = [
    { id: 1, thumbnail: "/youtubeleft.png" },
    { id: 2, thumbnail: "/youtubemiddle.png" },
    { id: 3, thumbnail: "/youtuberight.png" },
    { id: 4, thumbnail: "/youtubemiddle.png" },
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Background Decorative Glow (Top Right) */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-orange-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span className="text-[#d17d7d]">Youtube </span>
            <span className="text-[#0089d1]">Videos</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Our Videos Corner offers carefully curated lectures, strategy sessions, and concept-based discussions designed to make learning simple and effective.
          </p>
        </div>

        {/* Custom Swiper Container */}
        <motion.div
          className="youtube-carousel-wrapper px-4 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides={true}
            loop={true}
            spaceBetween={-100} // This overlaps the slides to pull the side ones in closer
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 1.8,
                spaceBetween: -150,
              },
              1280: {
                slidesPerView: 2.2,
                spaceBetween: -200,
              },
            }}
            className="!overflow-visible" // Crucial for showing side videos
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="transition-all duration-500 py-10">
                {({ isActive }) => (
                  <div
                    className={`relative transition-all duration-500 ease-in-out ${isActive
                        ? 'scale-110 z-30 opacity-100'
                        : 'scale-75 z-10 opacity-40 blur-[1px]'
                      }`}
                  >
                    {/* The Blue "Frame" Border from your photo */}
                    <div className={` overflow-hidden shadow-2xl transition-all duration-500 
                      `}>
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail}
                          alt="Thumbnail"
                          fill
                          className="object-cover"
                        />

                        {/* YouTube Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                            <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.21 1 34 1 34 1s-21.21 0-26.5.72c-2.93.78-5.24 3.09-6.02 6.02C.72 13.04 0 24 0 24s.72 10.96 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02 5.29.72 26.5.72 26.5.72s21.21 0 26.5-.72c2.93-.78 5.24-3.09 6.02-6.02C67.28 34.96 68 24 68 24s-.72-10.96-1.48-16.26z" fill="#FF0000" />
                              <path d="M27 34l18-10-18-10v20z" fill="#fff" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .youtube-carousel-wrapper .swiper-pagination {
          bottom: 0px !important;
        }
        .youtube-carousel-wrapper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .youtube-carousel-wrapper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 4px;
          background: #0089d1;
        }
      `}</style>
    </section>
  );
};

export default YoutubeCarousel;