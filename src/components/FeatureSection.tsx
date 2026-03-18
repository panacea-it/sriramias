"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
    titlePrefix: string;
    titleMain: string;
    description: string;
    buttonText: string;
    variant: 'dark' | 'red';
    mainImageSrc: string;
    overlayImages: {
        src: string;
        alt: string;
        position: string; // Tailwind positioning classes
    }[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
    titlePrefix,
    titleMain,
    description,
    buttonText,
    variant,
    mainImageSrc,
    overlayImages,
}) => {
    const isDark = variant === 'dark';

    return (
        <section
            className={`relative overflow-hidden px-6 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between min-h-[500px] ${isDark
                ? 'bg-black text-white'
                : 'bg-gradient-to-r from-[#500000] to-[#900000] text-white'
                }`}
        >
            {/* Decorative Wave Background (Simplified SVG or Background Pattern) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 30 50 50 T 100 50" stroke="white" fill="transparent" strokeWidth="0.1" />
                </svg>
            </div>

            {/* Left Content */}
            <motion.div
                className="relative z-10 max-w-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {titlePrefix} <span className={isDark ? "text-pink-400" : "text-yellow-500"}>{titleMain}</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {description}
                </p>
                <button className="bg-white text-black font-semibold px-8 py-2 rounded-md hover:bg-gray-200 transition-colors">
                    {buttonText}
                </button>
            </motion.div>

            {/* Right Image Composition */}
            <motion.div
                className="relative mt-12 md:mt-0 w-full md:w-1/2 flex justify-center items-center h-[400px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                {/* Main Subject Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-20">
                    <img
                        src={mainImageSrc}
                        alt="Feature focus"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Overlay Images */}
                {overlayImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute z-30 shadow-xl transition-transform hover:scale-105 ${img.position}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-contain bg-white p-1"
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default FeatureSection;