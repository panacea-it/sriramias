"use client";

import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = ["GS Foundation", "Mentorship", "Optional Foundation", "Test Series", "Enrichment Courses"];

const courses = Array(6).fill({
    title: "1 Year General Studies Foundation Course",
    description: "Transform your civils journey by joining our GS Foundation Course now and start preparing to your career from now in SRI RAM Ias to get better Future.",
    price: "Rs. 50,000 /-",
    locations: ["Delhi", "Hyd", "Pune"],
    image: "/courseimage.png"
});

export default function ExploreCourses() {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden flex flex-col items-center">
            
            {/* Background */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FDF3E7] blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-70 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">

                {/* 🔥 HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center"
                >
                    <span className="text-[#EF5A68]">EXPLORE </span>
                    <span className="text-[#4BA6D7]">OUR COURSES</span>
                </motion.h2>

                {/* 🔥 DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#4B5563] text-lg max-w-4xl mx-auto mb-10 leading-relaxed text-center"
                >
                    Explore our comprehensive <span className="text-[#4BA6D7] font-medium">UPSC courses</span> designed to cover Prelims, Mains, and Interview preparation.
                </motion.p>

                {/* 🔥 TABS */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center bg-[#F4F5F7] p-1.5 mb-12 shadow-sm border border-gray-100 max-w-fit mx-auto"
                >
                    {tabs.map((tab, idx) => (
                        <button key={idx} className={`px-6 py-2.5 text-sm font-medium transition-all ${idx === 0 ? "bg-[#0b6b94] text-white shadow-md" : "text-gray-500 hover:text-gray-800"}`}>
                            {tab}
                        </button>
                    ))}
                </motion.div>

                {/* 🔥 COURSE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: idx * 0.15, // 🔥 stagger effect
                                ease: "easeOut"
                            }}
                            className="group relative overflow-hidden aspect-[4/3] bg-[#1a1a1a] cursor-pointer shadow-md"
                        >

                            {/* IMAGE */}
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover z-0 transition-opacity duration-500 group-hover:opacity-20"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 z-10 bg-black/40 transition-all duration-500 group-hover:bg-black/80"></div>

                            {/* CONTENT */}
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                                
                                {/* HEADER */}
                                <div className="transition-transform duration-500 group-hover:-translate-y-32">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Star className="text-[#DAE000] fill-[#DAE000] shrink-0" size={24} />
                                        <h3 className="text-[#DAE000] font-bold text-sm leading-tight whitespace-nowrap overflow-hidden truncate">
                                            {course.title}
                                        </h3>
                                    </div>
                                    <div className="w-full h-[0.5px] bg-white/30"></div>
                                </div>

                                {/* HOVER CONTENT */}
                                <div className="absolute left-6 right-6 bottom-8 opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-gray-200 text-sm leading-relaxed mb-6">
                                        {course.description}
                                    </p>

                                    <div className="flex flex-col gap-5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#EAB308] font-bold text-xl">{course.price}</span>
                                            <div className="flex gap-3">
                                                {course.locations.map((loc: string, i: number) => (
                                                    <div key={i} className="flex items-center gap-1 text-white text-xs">
                                                        <MapPin size={12} fill="white" className="text-black" />
                                                        <span>{loc}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-fit bg-white text-black px-8 py-2 font-bold hover:bg-gray-100 transition-colors">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
