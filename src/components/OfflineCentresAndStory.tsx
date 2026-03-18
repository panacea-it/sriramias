"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Star, Calendar, Users, Award, Building2 } from 'lucide-react'; // Basic icons
import { motion } from 'framer-motion';

const OfflineCentresAndStory = () => {
  const centres = [
    { city: "New Delhi", image: "/delhi.png", rating: "4.8" },
    { city: "Hyderabad", image: "/hyderabad.png", rating: "4.8" },
    { city: "Pune", image: "/pune.png", rating: "4.8" },
  ];

  const stats = [
    { icon: <Calendar className="text-pink-500" />, count: "300 +", label: "Selections in UPSC CSE 2026" },
    { icon: <Users className="text-blue-600" />, count: "3500 +", label: "Selections in UPSC" },
    { icon: <Award className="text-green-600" />, count: "40 +", label: "Years of Excellence" },
    { icon: <Users className="text-indigo-600" />, count: "3500 +", label: "Selections in UPSC" },
    { icon: <Building2 className="text-olive-600" />, count: "3", label: "Centers Over all India" },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-24 bg-white overflow-hidden">
      {/* Shared Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image src="/ourbookbg.png" alt="background" fill className="object-cover" />
      </div>

      <div className="relative z-10">
        {/* --- SECTION 1: OFFLINE CENTRES --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span className="text-[#d17d7d]">Find Our </span>
            <span className="text-[#0089d1]">Offline Centres</span>
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto">
            Explore our comprehensive UPSC courses designed to cover Prelims, Mains, and Interview preparation with structured learning, expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {centres.map((centre, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-2xl aspect-[4/5]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Image src={centre.image} alt={centre.city} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between text-white mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <MapPin size={18} />
                    </div>
                    <span className="font-bold text-xl">{centre.city}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 font-bold">
                    <span>{centre.rating}</span>
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#0089d1] text-white py-2 rounded-md text-sm font-semibold hover:bg-[#0071ad] transition-colors">Contact Us</button>
                  <button className="flex-1 border border-white text-white py-2 rounded-md text-sm font-semibold hover:bg-white/10 transition-colors">View Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 2: OUR STORY --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            <span className="text-[#d17d7d]">Our </span>
            <span className="text-[#0089d1]">Story</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left: Building Image */}
          <motion.div
            className="relative w-full lg:w-1/2 min-h-[350px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/sriram.png" alt="Sriram IAS Building" fill className="object-cover" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/20 text-white">
              <h4 className="text-xl font-bold mb-1">Since 1985</h4>
              <p className="text-sm opacity-80">Serving the nation in civil services like IAS, IPS</p>
            </div>
          </motion.div>

          {/* Right: Stats & Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-xl font-black text-gray-800">{stat.count}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 1985 in New Delhi, Sriram's IAS Academy was born from a singular belief:
                that India's civil services demand not just knowledge, but character...
              </p>
              <blockquote className="border-l-4 border-[#0089d1] pl-6 italic text-gray-800 font-medium">
                "The examination tests your understanding of India. We teach you to understand India."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfflineCentresAndStory;