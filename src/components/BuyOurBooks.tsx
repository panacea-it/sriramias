"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Book {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

// Example Data
const books: Book[] = [
  {
    id: 1,
    title: "UPSC Book sciences - 1",
    description: "Atomic Habits by James Clear is a bestselling self-improvement book that explains how small daily habits.",
    price: "Rs.10,000/-",
    image: "/ourbook.png",
  },
  {
    id: 2,
    title: "UPSC Book sciences - 1",
    description: "Atomic Habits by James Clear is a bestselling self-improvement book that explains how small daily habits.",
    price: "Rs.10,000/-",
    image: "/ourbook.png",
  },
];

const BookCard = ({ book, index }: { book: Book, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
    className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col p-4 transition-transform hover:-translate-y-2 duration-300">
    {/* Book Image Container with beige/warm background */}
    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-5 bg-[#fef5e7]">
      <Image
        src={book.image}
        alt={book.title}
        fill
        className="object-contain p-6"
      />
    </div>

    {/* Content */}
    <div className="flex-1 px-1">
      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{book.title}</h3>
      <p className="text-sm text-slate-500 mb-4 line-clamp-3 leading-relaxed">
        {book.description}
      </p>
      <p className="text-[#0089d1] font-bold text-xl mb-5">{book.price}</p>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-3">
      <button className="flex-1 bg-[#164e63] text-white py-2.5 rounded-md font-bold text-sm hover:bg-[#0e3a4a] transition-colors shadow-md">
        Buy Now
      </button>
      <button className="flex-1 border-2 border-[#0089d1] text-[#0089d1] py-2.5 rounded-md font-bold text-sm hover:bg-blue-50 transition-colors">
        Add To cart
      </button>
    </div>
  </motion.div>
);

export default function BuyOurBooks() {
  return (
    <section className="relative w-full py-20 px-6 md:px-24 bg-white overflow-hidden">

      {/* Background Decorative Pattern - FLIPPED REVERSE */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 -scale-x-100">
        <Image
          src="/ourbookbg.png"
          alt="background design"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#d17d7d] to-[#0089d1] bg-clip-text text-transparent">
              Buy Our Books
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Explore our collection of expertly curated books designed to simplify complex topics
            and strengthen your exam preparation. Each book is carefully structured with clear explanation.
          </p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="flex overflow-x-auto gap-8 pb-10 snap-x no-scrollbar scroll-smooth">
          {/* Replicating the scroll look */}
          {[...books, ...books, ...books, ...books].map((book, idx) => (
            <div key={idx} className="snap-start first:ml-0">
              <BookCard book={book} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}