'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Topper {
    name: string;
    rank: string;
    course: string;
}

const toppers: Topper[] = Array(10).fill({
    name: "Kotla Darshan",
    rank: "AIR 08",
    course: "GS Foundation Course"
});

export default function OurToppers() {
    return (
        <section className="relative w-full py-16 overflow-hidden bg-[#f8f9fa] flex flex-col items-center">

            {/* Background with wave image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/topperbg.png"
                    alt="Topper Background Wave"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">

                {/* Headings */}
                <div className="text-center px-4 mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                        <span className="text-[#EF5A68]">OUR </span>
                        <span className="text-[#4BA6D7]">TOPPERS</span>
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg font-medium">
                        Celebrating Our Toppers Success With You
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="w-full relative">
                    <div className="flex overflow-hidden relative w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        
                        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-6 py-4 px-4 items-stretch">
                            {[...toppers, ...toppers].map((topper, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (idx % 10) * 0.05 }}
                                    /* Reduced card width from 260px to 210px and reduced padding */
                                    className="w-[210px] shrink-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col items-center text-center py-8 px-4 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* --- Image Composition - Scaled Down --- */}
                                    <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
                                        
                                        {/* 1. The Wreath */}
                                        <div className="absolute inset-0 z-10">
                                            <Image
                                                src="/personbackground.png"
                                                alt="Golden Wreath"
                                                fill
                                                className="object-contain pointer-events-none"
                                            />
                                        </div>

                                        {/* 2. The Person - Perfectly fit for a smaller card */}
                                        <div className="absolute w-[62%] h-[62%] bottom-[24%] z-20 overflow-hidden rounded-full shadow-inner bg-gray-50">
                                            <Image
                                                src="/person.png"
                                                alt={topper.name}
                                                fill
                                                className="object-cover object-top scale-110" 
                                            />
                                        </div>
                                    </div>

                                    {/* Text Info - Adjusted font sizes for the smaller card */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                                        {topper.name}
                                    </h3>

                                    <div className="inline-block bg-[#de8200] text-white text-[10px] font-bold px-4 py-1 rounded-full mb-3 shadow-sm uppercase tracking-wide">
                                        {topper.rank}
                                    </div>

                                    <p className="text-gray-500 text-xs font-semibold leading-snug">
                                        {topper.course}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}