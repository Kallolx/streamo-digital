"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FaqContact from "@/components/FaqContact";
import Comparison from "@/components/comparison";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-x-hidden w-full">
      <div className="relative z-20">
        <Navbar />
        <div className="pt-24">
          <Hero />
          <Features />
          <Comparison />
          <Testimonials />
          <Pricing />
          <FaqContact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
