import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import FaqContact from '@/components/FaqContact';
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden w-full">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      {/* Green to white gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-white/5 z-10 pointer-events-none"></div>
      
      <div className="relative z-20">
        <Navbar />
        <div className="pt-24">
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <FaqContact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
