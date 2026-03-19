"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Star, Calendar, Users, Award, Building2, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';


// 🔥 FULL CARD BLACK CONTENT (NO BLUR)
const CardGhostContent = () => {
  return (
    <motion.div
      className="absolute inset-0 z-[1] bg-black/80 text-white flex flex-col justify-between p-6"
      
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 1, 0, 0, 0], // 🔥 visible hold + invisible hold
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.7, 0.85, 0.95, 1],
      }}
    >

      {/* TOP */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Hyderabad</h3>
        <div className="flex items-center gap-1 text-yellow-400 font-bold">
          4.8 <Star size={16} fill="currentColor" />
        </div>
      </div>

      {/* STATS */}
      <div className="flex gap-3 text-sm">
        <div className="border border-white/20 px-3 py-2 rounded-lg text-center">
          <p className="font-bold">1000+</p>
          <p className="text-xs opacity-70">Students</p>
        </div>
        <div className="border border-white/20 px-3 py-2 rounded-lg text-center">
          <p className="font-bold">98%</p>
          <p className="text-xs opacity-70">Success</p>
        </div>
        <div className="border border-white/20 px-3 py-2 rounded-lg text-center">
          <p className="font-bold">2.4L</p>
          <p className="text-xs opacity-70">Avg Fee</p>
        </div>
      </div>

      {/* ADDRESS */}
      <p className="text-xs text-white/70">
        SRIRAM'S IAS TOWER, 10 B, Pusa Road, Old Rajinder Nagar, New Delhi
      </p>

      {/* CONTACT */}
      <div className="flex justify-between text-xs">
        <span>📞 9811489560</span>
        <span>✉️ sriram@gmail.com</span>
      </div>

      {/* BUTTON */}
      <div className="bg-[#0089d1] text-center py-2 text-sm font-semibold">
        Explore Now
      </div>

    </motion.div>
  );
};


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
    { icon: <Building2 className="text-indigo-600" />, count: "3", label: "Centers Over all India" },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-24 bg-white overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image src="/ourbookbg.png" alt="background" fill className="object-cover" />
      </div>

      <div className="relative z-10">

        {/* TITLE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span className="text-[#d17d7d]">Find Our </span>
            <span className="text-[#0089d1]">Offline Centres</span>
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto">
            Explore our comprehensive UPSC courses designed to cover Prelims, Mains, and Interview preparation.
          </p>
        </motion.div>

        {/* 🔥 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {centres.map((centre, idx) => (
            <motion.div
              key={idx}
              className="relative group  overflow-hidden shadow-2xl aspect-[4/5]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >

              {/* IMAGE */}
              <Image src={centre.image} alt={centre.city} fill className="object-cover" />

              {/* 🔥 BLACK CONTENT LOOP */}
              <CardGhostContent />

              {/* MAIN CONTENT */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="flex items-center justify-between text-white mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/20 rounded-lg">
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
                  <button className="flex-1 bg-[#0089d1] text-white py-2.5  text-sm font-bold hover:bg-[#0071ad] transition-all flex items-center justify-center gap-2">
                    Explore now
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* STORY */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div
            className="relative w-full lg:w-1/2 h-[450px]  overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image src="/sriram.png" alt="Sriram IAS" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-8 left-8 p-6 bg-white/10  border border-white/20 text-white max-w-xs">
              <h4 className="text-2xl font-black mb-1">Since 1985</h4>
              <p className="text-sm font-medium opacity-90">
                Decades of trust in UPSC coaching.
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-black uppercase mb-8"
            >
              <span className="text-[#d17d7d]">Our </span>
              <span className="text-[#0089d1]">Story</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 p-5 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-2xl font-black text-slate-800">{stat.count}</div>
                  <div className="text-[11px] uppercase font-bold text-slate-400 tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OfflineCentresAndStory;