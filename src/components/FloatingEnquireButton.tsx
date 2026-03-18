"use client";

import React from "react";

export default function FloatingEnquireButton() {
    const text = "ENQUIRE NOW".split("");

    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[100]">
            <button
                className="bg-[#18759a] hover:bg-[#125875] text-white py-5 px-3 rounded-l-md shadow-2xl flex flex-col items-center gap-[2px] transition-colors group"
            >
                {text.map((letter, idx) => (
                    <span
                        key={idx}
                        className={`text-[13px] font-bold leading-none ${letter === " " ? "h-3" : ""} group-hover:scale-110 transition-transform`}
                    >
                        {letter}
                    </span>
                ))}
            </button>
        </div>
    );
}
