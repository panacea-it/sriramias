"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DownloadApp = () => {
  return (
    /* py-10 reduces top/bottom space; min-h-fit ensures it doesn't force extra height */
    <section className="relative w-full py-10 md:py-12 bg-white overflow-hidden min-h-fit flex items-center">
      
      {/* --- INTENSE BLUE GLOW BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Primary Large Soft Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[0%] w-[1200px] h-[1200px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(186,230,253,0.8) 0%, rgba(255,255,255,0) 70%)'
          }}
        />

        {/* Secondary Intense Center Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[10%] w-[600px] h-[600px] opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'
          }}
        />

        {/* Thin Structural Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[5%] w-[650px] h-[650px] border-[1px] border-blue-200/50 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[5%] w-[900px] h-[900px] border-[1px] border-blue-100/30 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content Side */}
        <motion.div 
          className="max-w-xl flex-1 py-4" /* Added small internal padding for vertical balance */
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-[1.1] tracking-tight">
            <span className="text-[#d17d7d]">Download </span>
            <span className="text-[#0089d1]">Our App</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 max-w-md font-medium">
            Download our app to access high-quality learning resources,
            daily quizzes, current affairs updates, and expert guidance
            anytime, anywhere.
          </p>

          <div className="flex flex-col items-start gap-6">
            {/* QR Code Section */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-36 h-36 p-3 bg-white rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-blue-50 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image 
                    src="/scanner.png"
                    alt="Scan QR"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.4em] uppercase">
                Scan To Get App
              </span>
            </div>

            {/* Store Badges */}
            <div className="flex items-center gap-3">
              <a href="#" className="hover:scale-105 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 w-auto" />
              </a>
              <a href="#" className="hover:scale-105 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 w-auto" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Phone Image (Mirrored) */}
        <motion.div 
          className="relative flex-1 flex justify-center md:justify-end items-center" /* Changed items-end to items-center for height alignment */
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-[280px] h-[380px] md:w-[500px] md:h-[650px] lg:w-[550px] lg:h-[700px] scale-x-[-1] md:-mr-40">
            <Image 
              src="/downloadappright.png"
              alt="Hand holding phone"
              fill
              className="object-contain object-center drop-shadow-[-30px_30px_60px_rgba(0,0,0,0.12)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadApp;