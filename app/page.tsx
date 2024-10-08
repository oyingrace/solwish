"use client"

import Image from "next/image";
import Link from "next/link";
import Input from "./Input/page";
import HeroSection from "./components/heroSection";
import FirstHero from "./components/firstHero";
import SecondHero from "./components/secondHero";
import ThirdHero from "./components/thirdHero";
import FAQSection from "./components/FaqSection";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="min-w-full">
      <div className="w-full h-full">
        <div>
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
