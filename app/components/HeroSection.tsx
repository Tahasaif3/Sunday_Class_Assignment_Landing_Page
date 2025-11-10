'use client'
import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-[#6A0DAD] via-[#4A90E2] to-[#00C6A7]">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
      <div className="text-white text-3xl font-[Pacifico] italic font-bold">
        Canva
      </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Design</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Product</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Plans</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Business</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Education</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Help</Link>
        </nav>

<div className="flex space-x-3">
  {/* Sign up button */}
  <button className="bg-[#a259ff] hover:bg-[#8e3fff] text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-sm">
    Sign up
  </button>

  {/* Log in button */}
  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-5 py-2 rounded-lg border border-gray-200 transition-all duration-200 shadow-sm">
    Log in
  </button>
</div>

      </header>

      {/* Hero Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-7xl md:text-8xl lg:text-8xl font-semibold leading-tight mb-6 max-w-4xl">
          A new era <br />    of imagination
        </h1>
        <p className="text-[28px] font-sans md:text-4xl mb-10 max-w-2xl">
          Discover a whole world of skills and tools designed to put your imagination to work. 
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-purple-800 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-200 transition-colors duration-200">
            Start designing for free
          </button>
          <button className="bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-600 transition-colors duration-200">
            Explore our launches
          </button>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;