"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingEnquireButton() {
    const text = "ENQUIRE NOW".split("");

    return (
        <div className="fixed top-[60%] right-0 -translate-y-1/2 z-[100]">
            <motion.button
                // Initial: Gradient background with 90% opacity
                initial={{ 
                    paddingTop: "30px", 
                    paddingBottom: "30px", 
                    background: "linear-gradient(to bottom, rgba(14, 116, 144, 0.9), rgba(56, 189, 248, 0.9))" 
                }}
                // Hover: Height increases and opacity becomes solid
                whileHover={{ 
                    paddingTop: "60px", 
                    paddingBottom: "60px",
                    background: "linear-gradient(to bottom, rgba(14, 116, 144, 1), rgba(56, 189, 248, 1))"
                }}
                transition={{ 
                    duration: 0.4, 
                    ease: "circOut" 
                }}
                className="text-white px-4 rounded-l-2xl shadow-2xl flex flex-col items-center group border-l border-white/20"
            >
                <div className="flex flex-col items-center gap-1">
                    {text.map((letter, idx) => (
                        <span
                            key={idx}
                            className={`text-[14px] font-bold leading-none tracking-widest ${
                                letter === " " ? "h-6" : "h-[18px]"
                            } transition-transform duration-300 group-hover:scale-110`}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </motion.button>
        </div>
    );
}