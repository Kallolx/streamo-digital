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
    id: 'unlimited-uploads',
    title: 'Unlimited Uploads',
    description: 'Distribute as much music and video contents as you want, to 150+ major streaming platforms – in as little as 7 days.',
    icon: '/icons/music.png',
    color: 'from-green-500/20 to-green-400/5'
  },
  {
    id: 'multiple-label',
    title: 'Multiple Label',
    description: 'Our platform allows labels to manage multiple artists under a single account, providing a seamless solution for handling large rosters.',
    icon: '/icons/album.png',
    color: 'from-blue-500/20 to-blue-400/5'
  },
  {
    id: '100-ownership',
    title: '100% Ownership',
    description: 'Streamo Digital Distribution does not own any stake in your music. You own all the rights to your music.',
    icon: '/icons/crown.png',
    color: 'from-purple-600/20 to-purple-500/5'
  },
  {
    id: 'monthly-royalties',
    title: 'Monthly Royalties Reporting',
    description: 'Access comprehensive monthly royalty reports to help you track your earnings from various stores.',
    icon: '/icons/chart.png',
    color: 'from-yellow-500/20 to-yellow-400/5'
  },
  {
    id: 'priority-service',
    title: 'Priority Customer Service',
    description: 'Get priority customer service from our dedicated team, ensuring that your queries and issues are resolved promptly.',
    icon: '/icons/public.png',
    color: 'from-pink-500/20 to-pink-400/5'
  },
  {
    id: 'analytics-accounting',
    title: 'Analytics & Accounting',
    description: 'Our in-depth royalty analytics provide you with a detailed understanding of where your income is coming from.',
    icon: '/icons/pie.png',
    color: 'from-green-600/20 to-green-500/5'
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Everything You Need</span> in One Place
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mb-6">
                  You pushed your music locally. Now, let's distribute your music and make you global.
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
              <div className="mb-10 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Services</span> we provide</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:bg-black/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 flex items-center justify-center mr-3">
                          <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{service.description}</p>
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
                className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8  text-center"
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

          {/* Service Information Sections */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Features</span></h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Discover the advanced capabilities that set Streamo Digital apart
                </p>
              </motion.div>

              {/* Verifications - Card Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-2xl font-bold text-white mb-4">Verifications</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Streamo Digital empowers artists and labels by offering verification services on TikTok, official partnerships with YouTube through MCN, and Spotify's Official Artist Channel (OAC). These features enable greater visibility and engagement across top platforms. Labels can manage an unlimited roster, making it ideal for record labels, distributors, and aggregators. Streamo Digital's services boost credibility, audience reach, and monetization options for creators.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Add Unlimited Artist & Labels - Split Layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Add Unlimited Artist & Labels</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Streamo Digital's audio distribution service offers the flexibility for labels or distributors to add an unlimited number of artists to their roster. This feature is particularly beneficial for record labels, music distributors, and aggregators who represent multiple artists and want to distribute their music across various online platforms. Streamo Digital likely offers label accounts, which are designed to cater to the needs of record labels, distributors, or aggregators.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Unlimited Artists</h4>
                      <p className="text-sm text-gray-300">Manage unlimited artists under one account</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Protect Your Content - Timeline Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-md rounded-2xl p-8 border border-red-500/20">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Protect Your Content</h3>
                    <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
                      Streamo Digital's distribution service goes beyond just distributing music to various platforms; it also prioritizes content protection to safeguard artists' intellectual property rights. Here's how Streamo Digital ensures content protection.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Video Distribution - Feature Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md rounded-2xl p-8 border border-green-500/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Video Distribution</h3>
                    <p className="text-gray-300 leading-relaxed">
                      While Streamo Digital primarily focuses on audio distribution, it appears that they also offer video distribution services to platforms like Vevo and Boomplay, among others.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Vevo</h4>
                      <p className="text-sm text-gray-300">Professional music video distribution</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Boomplay</h4>
                      <p className="text-sm text-gray-300">African market video distribution</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Multiple Platforms</h4>
                      <p className="text-sm text-gray-300">Wide video distribution network</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Faster Smoother Release - Stats Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Faster Smoother Release</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Streamo Digital boasts an impressive delivery speed for distributing music to online stores and streaming platforms. With a turnaround time that is 10-20 times faster than many other distributors, Streamo Digital ensures that your music reaches digital stores and streaming services in record time, typically within just 3 hours of upload.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-black/20 rounded-xl p-4">
                        <div className="text-3xl font-bold text-orange-500 mb-2">3</div>
                        <div className="text-sm text-gray-300">Hours</div>
                      </div>
                      <div className="text-center bg-black/20 rounded-xl p-4">
                        <div className="text-3xl font-bold text-orange-500 mb-2">20x</div>
                        <div className="text-sm text-gray-300">Faster</div>
                      </div>
                      <div className="text-center bg-black/20 rounded-xl p-4">
                        <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                        <div className="text-sm text-gray-300">Reliable</div>
                      </div>
                      <div className="text-center bg-black/20 rounded-xl p-4">
                        <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                        <div className="text-sm text-gray-300">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Monetize on TikTok and Facebook - Icon Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 backdrop-blur-md rounded-2xl p-8 border border-pink-500/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Monetize on TikTok and Facebook</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Streamo Digital offers Monetisation on TikTok, Facebook, and Instagram. Streamo Digital facilitates music distribution to the popular platform TikTok. Artists and labels using Streamo Digital can upload their music to the platform, allowing users to incorporate their tracks into TikTok videos. Similar to TikTok, Streamo Digital enables music distribution to Facebook and Instagram. Users can share their music on these platforms, including in videos, Stories, and other content formats.
                    </p>
                  </div>
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <img src="/icons/tiktok.png" alt="TikTok" className="w-16 h-16 mx-auto mb-3" />
                      <h4 className="font-semibold text-white">TikTok</h4>
                    </div>
                    <div className="text-center">
                      <img src="/icons/facebook.png" alt="Facebook" className="w-16 h-16 mx-auto mb-3" />
                      <h4 className="font-semibold text-white">Facebook</h4>
                    </div>
                    <div className="text-center">
                      <img src="/icons/instagram.png" alt="Instagram" className="w-16 h-16 mx-auto mb-3" />
                      <h4 className="font-semibold text-white">Instagram</h4>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 100% Copyright Royalties - Highlight Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/20 text-center">
                  <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">100% Copyright Royalties</h3>
                  <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    With Streamo Digital's distribution service, artists and content creators retain 100% ownership of their copyright royalties. This means that you maintain full control and ownership over the rights to your music, ensuring that you receive fair compensation for your creative work.
                  </p>
                </div>
              </motion.div>

              {/* Monthly Payouts - Process Flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Monthly Payouts In All Gateway</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-indigo-500">1</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Monthly Schedule</h4>
                      <p className="text-sm text-gray-300">Consistent monthly payout schedule</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-indigo-500">2</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Multiple Gateways</h4>
                      <p className="text-sm text-gray-300">Local and international payment options</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-indigo-500">3</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">Timely Compensation</h4>
                      <p className="text-sm text-gray-300">Quick and reliable payment processing</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-center mt-6 leading-relaxed">
                    Streamo Digital's audio distribution service offers monthly payouts to artists and labels, ensuring timely compensation for their music's performance. These payouts are facilitated through a combination of local and international payout gateways, providing flexibility and accessibility for recipients worldwide.
                  </p>
                </div>
              </motion.div>

              {/* Whitelisting - Feature List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 backdrop-blur-md rounded-2xl p-8 border border-teal-500/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Whitelisting For YouTube And Facebook</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Streamo Digital provides YouTube or Facebook whitelisting services. Streamo Digital can provide whitelisting services For YouTube and facebook to the artists and labels to avoid YouTube and Facebook conflicts.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          YouTube Content ID Protection
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Facebook Rights Manager
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Conflict Resolution
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-teal-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Maximum Revenue Share - Comparison Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-md rounded-2xl p-8 border border-emerald-500/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Maximum Revenue Share</h3>
                    <p className="text-gray-300 leading-relaxed">
                      While I don't have access to specific data on revenue comparisons between Streamo Digital and other distributors, Streamo Digital aims to provide artists and labels with opportunities to maximize their revenue share from music distribution. Streamo Digital likely negotiates competitive royalty rates with digital platforms on behalf of artists and labels. Higher royalty rates mean that artists and labels receive a larger portion of the revenue generated from their music's streams, downloads, and other forms of distribution.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-emerald-500 mb-2">100%</div>
                      <h4 className="font-semibold text-white mb-2">Your Royalties</h4>
                      <p className="text-sm text-gray-300">Keep all your earnings</p>
                    </div>
                    <div className="bg-black/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-emerald-500 mb-2">0%</div>
                      <h4 className="font-semibold text-white mb-2">Our Cut</h4>
                      <p className="text-sm text-gray-300">No hidden fees</p>
                    </div>
                  </div>
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