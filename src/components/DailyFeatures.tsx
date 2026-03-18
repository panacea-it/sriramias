"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureProps {
  titlePrefix?: string;
  titleHighlight: string;
  description: string;
  mainImg: string;
  bgPatternImg: string;
  bgColor: string;
  highlightColor: string;
}

const FeatureSection = ({
  titlePrefix,
  titleHighlight,
  description,
  mainImg,
  bgPatternImg,
  bgColor,
  highlightColor,
}: FeatureProps) => {
  return (
    <section
      className="relative w-full py-20 md:py-28 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Pattern Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bgPatternImg}
          alt="background pattern"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Text Content */}
      <motion.div
        className="z-10 max-w-xl text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {titlePrefix} <span style={{ color: highlightColor }}>{titleHighlight}</span>
        </h2>
        <p className="text-gray-100 text-lg leading-relaxed mb-8 max-w-md opacity-90">
          {description}
        </p>
        <button className="bg-white text-black px-10 py-2.5 rounded-md font-bold hover:bg-gray-200 transition-all shadow-xl uppercase text-sm tracking-widest">
          Explore
        </button>
      </motion.div>

      {/* Image Composition */}
      <motion.div
        className="relative mt-20 md:mt-0 flex items-center justify-center w-full md:w-[500px] z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-2 duration-500">
          <img src={mainImg} alt="Feature" className="w-full h-auto object-contain rounded-xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default function DailyFeatures() {
  const features: FeatureProps[] = [
    {
      titlePrefix: "Daily",
      titleHighlight: "Quizzes",
      bgColor: "#000000",
      highlightColor: "#b06a7b",
      bgPatternImg: "/firstbg.svg",
      description: "Participate in our daily quizzes to test your knowledge, strengthen your understanding of key concepts, and stay consistent with your learning journey.",
      mainImg: "/firstright.svg",
    },
    {
      titlePrefix: "Daily",
      titleHighlight: "Current Affairs",
      bgColor: "#5a0505",
      highlightColor: "#eab308",
      bgPatternImg: "/secondbg.svg",
      description: "Engage with our daily current affairs designed to help you stay updated with key national and international events while improving your analytical understanding.",
      mainImg: "/secondright.svg",
    },
    {
      titlePrefix: "Daily",
      titleHighlight: "Mains Question",
      bgColor: "#0a46b5",
      highlightColor: "#eab308",
      bgPatternImg: "/thirdbg.svg",
      description: "Solve our Daily Mains Questions to improve your answer-writing skills, build strong arguments, and stay consistent with your UPSC Mains preparation.",
      mainImg: "/thirdright.svg",
    },
    {
      titlePrefix: "",
      titleHighlight: "Blogs",
      bgColor: "#054232",
      highlightColor: "#ffffff",
      bgPatternImg: "/fourthbg.svg",
      description: "Dive deep into our curated blogs to expand your perspective on various subjects, stay informed about the latest trends, and enhance your overall learning.",
      mainImg: "/fourthright.svg  ",
    }
  ];

  return (
    <div className="w-full">
      {/* Header Heading */}
      <div className="py-16 text-center flex flex-col items-center justify-center bg-white">
        <h3 className="text-[#0089d1] font-bold text-lg tracking-[0.3em] uppercase mb-2">
          Get
        </h3>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          <span className="bg-gradient-to-r from-[#d17d7d] via-[#8e95ad] to-[#0089d1] bg-clip-text text-transparent">
            Access Free Courses
          </span>
        </h2>
      </div>

      {/* Render All Sections */}
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
  );
}