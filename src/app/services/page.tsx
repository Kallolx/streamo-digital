'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Comparison from '@/components/comparison'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { handleHashScroll, scrollToSection } from '@/utils/scrollUtils'
import { usePageLoading } from '@/hooks/usePageLoading'

// Define services with their descriptions and icons
const services = [
  {
    id: 'verification',
    title: 'Verification',
    description: 'Get official verification badges across all major platforms to establish authenticity and build trust with your audience. Our verification service ensures your profile stands out and helps fans find your official content.',
    icon: '/icons/crown.png',
    color: 'from-green-500/20 to-green-400/5',
    buttonColor: 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
  },
  {
    id: 'unlimited-artists',
    title: 'Unlimited Artists and Labels',
    description: 'No restrictions on the number of artists or labels you can manage under a single account. Perfect for record labels, management companies, and distributors who need to handle multiple artist catalogs efficiently.',
    icon: '/icons/music.png',
    color: 'from-blue-500/20 to-blue-400/5',
    buttonColor: 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
  },
  {
    id: 'video-distribution',
    title: 'Video Distribution',
    description: 'Expand your reach beyond audio with our comprehensive video distribution service. Get your music videos on YouTube, Vevo, Apple Music, and other major video platforms to increase visibility and engagement.',
    icon: '/icons/youtube.png',
    color: 'from-red-500/20 to-red-400/5',
    buttonColor: 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
  },
  {
    id: 'faster-release',
    title: 'Faster Release',
    description: 'Skip the waiting game with our expedited release process. While standard distributions can take weeks, our priority service ensures your music is available on all platforms within days, not weeks.',
    icon: '/icons/reward.png',
    color: 'from-yellow-500/20 to-yellow-400/5',
    buttonColor: 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
  },
  {
    id: 'social-monetization',
    title: 'Social Monetization',
    description: 'Generate revenue from social media platforms like TikTok, Instagram, and Facebook when your music is used in videos, reels, and stories. Capture value from viral trends and user-generated content featuring your tracks.',
    icon: '/icons/instagram.png',
    color: 'from-pink-500/20 to-pink-400/5',
    buttonColor: 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30'
  },
  {
    id: 'copyright-royalties',
    title: '100% Copyright Royalties',
    description: 'Keep 100% of your copyright royalties. Unlike traditional record deals, we never take ownership of your creative work. You maintain complete control of your music while still accessing professional distribution services.',
    icon: '/icons/visa.png',
    color: 'from-green-600/20 to-green-500/5',
    buttonColor: 'bg-green-600/20 text-green-500 hover:bg-green-600/30'
  },
  {
    id: 'monthly-payouts',
    title: 'Monthly Payouts in All Gateways',
    description: 'Receive your earnings monthly through a wide range of payment methods including PayPal, direct bank transfer, cryptocurrency, and more. Flexible payment options ensure you can access your revenue regardless of your location.',
    icon: '/icons/visa.png',
    color: 'from-blue-600/20 to-blue-500/5',
    buttonColor: 'bg-blue-600/20 text-blue-500 hover:bg-blue-600/30'
  },
  {
    id: 'whitelisting',
    title: 'Whitelisting',
    description: 'Gain priority consideration for playlists, features, and promotional opportunities across streaming platforms. Our whitelisting service puts your releases at the front of the line for editorial reviews and algorithmic boosts.',
    icon: '/icons/spotify.png',
    color: 'from-purple-600/20 to-purple-500/5',
    buttonColor: 'bg-purple-600/20 text-purple-500 hover:bg-purple-600/30'
  },
  {
    id: 'maximum-revenue',
    title: 'Maximum Revenue',
    description: 'Optimize your earnings with our comprehensive revenue maximization strategies. We identify and capture income from all available sources including streaming, sync licensing, performance royalties, and mechanical royalties.',
    icon: '/icons/chart.png',
    color: 'from-red-600/20 to-red-500/5',
    buttonColor: 'bg-red-600/20 text-red-500 hover:bg-red-600/30'
  }
]

export default function ServicesPage() {
  // Initialize page loading
  usePageLoading();
  
  // Add useEffect to handle hash scrolling when the page loads
  useEffect(() => {
    handleHashScroll();
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-x-hidden w-full">      
      <div className="relative z-20">
        <Navbar />
        <div className="pt-20 md:pt-24">
          {/* Hero Section */}
          <section className="relative mt-8 md:mt-12 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Services</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mb-6">
                  Comprehensive solutions to help independent artists and labels succeed in the music industry. Keep 100% of your rights while accessing professional services.
                </p>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('comparison');
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-green-500 text-green-400 hover:bg-green-500/10 rounded-lg font-medium transition-all duration-200 text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Compare Our Services
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:bg-black/40 transition-all duration-300"
                  >
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 flex items-center justify-center mr-3">
                          <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
                      <button 
                        className={`text-sm font-medium py-2 px-4 rounded-md transition-colors ${service.buttonColor}`}
                      >
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to action section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <motion.div 
                className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Take Your Music Career to the Next Level?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join Streamo Digital today and access all these premium services while keeping 100% of your rights and royalties.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://apply.streamodigital.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    Get Started Now
                  </a>
                  <a 
                    href="/contact" 
                    className="bg-transparent hover:bg-white/10 text-white border border-gray-500 hover:border-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Comparison Table */}
          <Comparison />

          {/* FAQ Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <motion.div 
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Questions</span></h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Find answers to common questions about our services
                </p>
              </motion.div>

              <div className="grid gap-4 md:gap-6 max-w-3xl mx-auto">
                {[
                  {
                    question: "How long does it take for my music to be available on streaming platforms?",
                    answer: "With our standard service, your music will be available on major platforms within 2-3 weeks. With our Faster Release service, we can reduce this time to just 3-5 days for most platforms."
                  },
                  {
                    question: "Do I really keep 100% of my copyright royalties?",
                    answer: "Yes, absolutely. Unlike traditional record labels, we never take ownership of your music. You maintain complete control of your creative work and keep 100% of your copyright royalties."
                  },
                  {
                    question: "How are monthly payouts processed?",
                    answer: "We process payouts monthly for all earnings once your balance reaches the minimum threshold of $20. We support multiple payment methods including PayPal, direct bank transfers, and more."
                  },
                  {
                    question: "What platforms do you distribute to?",
                    answer: "We distribute to over 150 streaming platforms worldwide, including Spotify, Apple Music, Amazon Music, YouTube Music, TikTok, Instagram/Facebook, and many more regional services."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{faq.question}</h3>
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  )
} 