import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '../Input/page';
import { ChevronDown, MessageCircle, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-red-900">
     
      <nav className="flex justify-between items-center p-4 md:p-8 w-full">
        <Link href="/" className="text-white text-xl md:text-2xl font-bold">
          SOLwish
        </Link>
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-white">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/how-it-works">How it works</Link>
          <div className="relative group">
            <Link href="/faqs" className="flex items-center">
              FAQs <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-800 p-4">
          <Link href="/" className="block text-white py-2">Services</Link>
          <Link href="/" className="block text-white py-2">About</Link>
          <Link href="/" className="block text-white py-2">How it works</Link>
          <Link href="/" className="block text-white py-2">FAQs</Link>
        </div>
      )}

      
      <div className="flex flex-col md:flex-row flex-1">
      
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Welcome to SOLWISH.<br />
              Let&apos;s make your dreams<br className="hidden sm:inline" />
              a reality together.
            </h1>
            <p className="mb-8 text-sm md:text-base">
              Create, share, and get funded for your wildest dreams. No
              more awkward gifts or unfulfilled desires. Solwish
              revolutionizes gifting with Solana-powered funding
            </p>
            <Link href="/Input" className="bg-green-100 text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold inline-block text-sm md:text-base">
              Create your wishlist
            </Link>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/sideImage.png"
            alt="Colorful gift boxes"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
     
      <button className="fixed bottom-4 right-4 bg-green-100 text-gray-800 p-2 rounded-full">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Hero;