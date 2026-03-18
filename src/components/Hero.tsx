"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Search, User, ChevronDown, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay Navbar - Top Layer */}
      <div className="relative z-10 w-full px-6 py-6 md:px-12 lg:px-16 flex justify-between items-start" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)' }}>

        {/* Left Logos */}
        <motion.div
          className="flex items-center gap-5 mt-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logoleft.png"
            alt="40+ Years of Excellence"
            width={75}
            height={55}
            className="object-contain"
          />
          <div className="h-10 w-px bg-white/40"></div>
          <Image
            src="/logo.svg"
            alt="SRIRAM's IAS"
            width={228}
            height={40}
            className="object-contain"
          />
        </motion.div>

        {/* Right Nav Links and Actions */}
        <motion.div
          className="flex flex-col items-end gap-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Row */}
          <div className="flex items-center gap-6 text-white/90 text-[13px] tracking-wide">
            <Link href="/blog" className="hover:text-white transition-colors uppercase font-medium">
              Blog
            </Link>

            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
              <Languages size={15} />
              <span className="font-medium uppercase">Eng</span>
              <ChevronDown size={14} />
            </div>

            <div className="border border-white/30 rounded-md py-1.5 px-4 font-medium backdrop-blur-md bg-black/40">
              + 91 9811489560
            </div>

            <Link href="/contact" className="hover:text-white transition-colors uppercase font-medium">
              Contact Us
            </Link>

            <button className="bg-[#005c8a] hover:bg-[#00486d] text-white px-5 py-2 rounded font-medium transition-colors uppercase text-xs tracking-wider">
              Book a Demo
            </button>

            <div className="flex items-center gap-2">
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white/90">
                <Search size={16} />
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white/90">
                <User size={16} />
              </button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center gap-8 text-white/90 text-[15px] font-medium tracking-wide">
            {['Courses', 'Test Series', 'Free Resources', 'Current Affairs', 'About us', 'Books', 'Our Toppers'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Enquiry Form Button */}
      <button className="fixed bottom-6 right-6 z-50 bg-[#005c8a] hover:bg-[#00486d] text-white rounded-full px-6 py-2.5 font-medium shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] transition-transform hover:-translate-y-0.5 border border-[#005c8a]">
        Enquiry Form
      </button>
    </div>
  );
}
