"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = [
    "GS Foundation",
    "Mentorship",
    "Optional Foundation",
    "Test Series",
    "Enrichment Courses"
];

const courses = Array(6).fill({
    title: "1 Year General Studies Foundation Course",
    description: "Transform your civils journey by joining our GS Foundation Course now and start preparing to your career",
    image: "/courseimage.png"
});

export default function ExploreCourses() {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden flex flex-col items-center">

            {/* Background radial glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FDF3E7] rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-70 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FDF3E7] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-70 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center">

                {/* Headings */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    <span className="text-[#EF5A68]">EXPLORE </span>
                    <span className="text-[#4BA6D7]">OUR COURSES</span>
                </h2>

                <p className="text-[#4B5563] text-lg max-w-4xl mx-auto mb-10 leading-relaxed">
                    Explore our comprehensive <span className="text-[#4BA6D7] font-medium">UPSC courses</span> designed to cover Prelims, Mains, and Interview preparation with structured learning, expert guidance.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap items-center justify-center bg-[#F4F5F7] rounded-full p-1.5 mb-12 shadow-sm border border-gray-100 max-w-fit mx-auto">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${idx === 0
                                ? "bg-[#0b6b94] text-white shadow-md"
                                : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative rounded-lg overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] flex flex-col justify-end transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Background Image */}
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover z-0"
                            />

                            {/* Overlay Gradient (darker at bottom) */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            {/* Content overlay */}
                            <div className="relative z-20 p-5 w-full flex flex-col justify-end">
                                <div className="flex items-center gap-2 mb-2">
                                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                                    <h3 className="text-yellow-400 font-semibold text-sm">
                                        {course.title}
                                    </h3>
                                </div>

                                <div className="w-full h-px bg-white/20 my-2"></div>

                                <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                                    {course.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
