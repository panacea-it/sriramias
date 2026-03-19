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

const books: Book[] = [
  {
    id: 1,
    title: "UPSC Book sciences - 1",
    description: "Atomic Habits by James Clear explains how small daily habits lead to massive results.",
    price: "Rs.10,000/-",
    image: "/ourbook.png",
  },
  {
    id: 2,
    title: "UPSC Book History - 2",
    description: "A deep dive into historical events curated specifically for competitive excellence.",
    price: "Rs.10,000/-",
    image: "/ourbook.png",
  },
  // Add more unique books here if possible
];

const BookCard = ({ book }: { book: Book }) => (
  <div className="w-[300px] md:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col p-4 shrink-0">
    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-5 bg-[#fef5e7]">
      <Image src={book.image} alt={book.title} fill className="object-contain p-6" />
    </div>
    <div className="flex-1 px-1">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{book.title}</h3>
      <p className="text-sm text-slate-500 mb-4 line-clamp-3">{book.description}</p>
      <p className="text-[#0089d1] font-bold text-xl mb-5">{book.price}</p>
    </div>
    <div className="flex gap-3">
      <button className="flex-1 bg-[#164e63] text-white py-2.5 rounded-md font-bold text-sm hover:bg-[#0e3a4a] transition-colors">Buy Now</button>
      <button className="flex-1 border-2 border-[#0089d1] text-[#0089d1] py-2.5 rounded-md font-bold text-sm hover:bg-blue-50 transition-colors">Add To cart</button>
    </div>
  </div>
);

export default function BuyOurBooks() {
  // We double the array to create a seamless loop effect
  const duplicatedBooks = [...books, ...books, ...books, ...books];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-white">
      
      {/* Background Section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 -scale-x-100">
        <Image src="/ourbookbg.png" alt="design" fill className="object-cover" />
      </div>

      <div className="relative z-10">
        {/* Header Section: Animated from Bottom to Top */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#d17d7d] to-[#0089d1] bg-clip-text text-transparent">
              Buy Our Books
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore our collection of expertly curated books designed to simplify complex topics.
          </p>
        </motion.div>

        {/* Infinite Loop Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex overflow-hidden"
        >
          <motion.div 
  className="flex gap-8"
  // Tip: Ensure the -x value matches the total width of one set of cards
  animate={{ x: [0, -1000] }} 
  transition={{
    x: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10, // Lowering this number increases the speed
      ease: "linear",
    },
  }}
>
  {duplicatedBooks.map((book, idx) => (
    <BookCard key={idx} book={book} />
  ))}
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}