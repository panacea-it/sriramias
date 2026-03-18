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
        <section className="relative w-full py-20 overflow-hidden bg-[#f8f9fa] flex flex-col items-center">

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

            <div className="relative z-10 w-full flex flex-col items-center text-center">

                {/* Headings */}
                <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                    <span className="text-[#EF5A68]">OUR </span>
                    <span className="text-[#4BA6D7]">TOPPERS</span>
                </h2>

                <p className="text-gray-800 text-lg md:text-xl font-medium mb-12">
                    Celebrating Our Toppers Success With You
                </p>

                {/* Carousel Container */}
                <div className="w-full relative py-6">
                    <div className="flex overflow-hidden relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>

                        {/* Sliding Track */}
                        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-6 px-3">
                            {[...toppers, ...toppers].map((topper, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: (idx % 10) * 0.1 }}
                                    className="w-[240px] shrink-0 bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex flex-col items-center justify-center py-8 px-5 m-2 transition-transform hover:-translate-y-2 border border-gray-100"
                                >

                                    {/* Image Composition */}
                                    <div className="relative w-36 h-36 mb-5 flex items-center justify-center">
                                        {/* Golden Wreath - Back Layer */}
                                        <Image
                                            src="/personbackground.png"
                                            alt="Golden Wreath"
                                            fill
                                            className="object-contain z-10 pointer-events-none drop-shadow-lg"
                                        />

                                        {/* Person Image - Front Layer */}
                                        <div className="absolute w-[68%] h-[68%] rounded-full overflow-hidden bg-transparent z-20">
                                            <Image
                                                src="/person.png"
                                                alt={topper.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Text Info */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{topper.name}</h3>

                                    <div className="inline-flex items-center justify-center bg-[#de8200] text-white text-[13px] font-bold px-6 py-1 rounded-full mb-3 shadow-sm">
                                        {topper.rank}
                                    </div>

                                    <p className="text-gray-600 text-[13px] font-medium text-center">
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
