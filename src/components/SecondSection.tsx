"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SecondSection() {
    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-white overflow-hidden flex items-center">
            {/* Background Image on Right */}
            <div className="absolute top-0 right-0 w-full md:w-[75%] h-full z-0">
                <Image
                    src="/secondsection.png"
                    alt="Sriram IAS Excellence"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay to fade into white on the left */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent w-full md:w-[60%]"></div>
                {/* Additional gradient directly from the left edge for smoother transition */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">

                {/* Left Side Content */}
                <motion.div
                    className="max-w-xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.25] mb-8 tracking-tight">
                        <span className="text-[#555d66] block">40 + Years of Excellence in</span>
                        <span className="text-[#555d66] block mb-2">Shaping Officers .</span>
                        <span className="text-[#d17d7d]">
                            Now it's your turn to serve <span className="text-[#0089d1]">the</span>
                        </span>
                        <br />
                        <span className="text-[#d17d7d]">nation</span>
                    </h2>

                    <button className="bg-[#005c8a] hover:bg-[#00486d] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-[15px] tracking-wide shadow-md">
                        Start Your UPSC CSE Journey
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
