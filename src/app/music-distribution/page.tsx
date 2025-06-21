'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MusicDistributionForm from '@/components/MusicDistributionForm'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { handleHashScroll, scrollToSection } from '@/utils/scrollUtils'

const allPlatforms = [
  {
    name: 'Spotify',
    icon: '/icons/spotify.png',
    color: '#1DB954',
    features: ['Playlist Pitching', 'Artist Profile', 'Real-time Analytics']
  },
  {
    name: 'Gaana',
    icon: '/icons/ganna.png',
    color: '#FF0092',
    features: ['Featured Playlists', 'Artist Page', 'Trending Charts']
  },
  {
    name: 'Hungama',
    icon: '/icons/hungama.png',
    color: '#1F93FF',
    features: ['Artist Marketing', 'Editorial Playlists', 'Trending Now']
  },
  {
    name: 'YouTube Music',
    icon: '/icons/youtube.png',
    color: '#FF0000',
    features: ['Content ID', 'Artist Channel', 'Analytics Suite']
  },
  {
    name: 'iHeart Radio',
    icon: '/icons/iheart.png',
    color: '#C6002B',
    features: ['Radio Airplay', 'Artist Radio', 'Playlist Features']
  },
  {
    name: 'Resso',
    icon: '/icons/resso.png',
    color: '#131314',
    features: ['Social Sharing', 'Lyrics Display', 'User Engagement']
  },
  {
    name: 'iTunes',
    icon: '/icons/itunes.png',
    color: '#FB5BC5',
    features: ['iTunes Store', 'Charts Ranking', 'Global Reach']
  },
  {
    name: 'Jio Saavn',
    icon: '/icons/jio.png',
    color: '#1EB9D0',
    features: ['Pro Subscription', 'Original Programs', 'Featured Playlists']
  },
  {
    name: 'Saavn',
    icon: '/icons/saavn.png',
    color: '#2BC5B4',
    features: ['Artist Originals', 'Editorial Playlists', 'Podcast Integration']
  },
  {
    name: 'Amazon Music',
    icon: '/icons/amazon.png',
    color: '#00A8E1',
    features: ['HD Streaming', 'Alexa Integration', 'Prime Music']
  },
  {
    name: 'TikTok',
    icon: '/icons/tiktok.png',
    color: '#000000',
    features: ['Sound Library', 'Creator Tools', 'Viral Tracking']
  },
  {
    name: 'Deezer',
    icon: '/icons/deezer.png',
    color: '#FEAA2D',
    features: ['Flow Technology', 'Editorial Support', 'HiFi Quality']
  },
  {
    name: 'Anghami',
    icon: '/icons/anghami.png',
    color: '#8A5CFF',
    features: ['Regional Focus', 'Exclusive Content', 'Video Support']
  },
  {
    name: 'SoundCloud',
    icon: '/icons/soundcloud.png',
    color: '#FF5500',
    features: ['Direct Upload', 'Stats Pro', 'Monetization']
  },
  {
    name: 'Apple Music',
    icon: '/icons/itunes.png',
    color: '#FA466A',
    features: ['Connect Integration', 'Artist Page', 'Editorial Playlists']
  },
  {
    name: 'Boomplay',
    icon: '/icons/boomplay.png',
    color: '#0273F5',
    features: ['African Markets', 'Chart Rankings', 'Artist Spotlight']
  },
  {
    name: 'Shazam',
    icon: '/icons/shazam.png',
    color: '#0088FF',
    features: ['Music Discovery', 'Charts', 'Artist Tracking']
  },
  {
    name: 'Facebook',
    icon: '/icons/facebook.png',
    color: '#1877F2',
    features: ['Sound Collection', 'Creator Studio', 'Monetization']
  },
]

export default function MusicDistributionPage() {
  const [showAllPlatforms, setShowAllPlatforms] = useState(false)
  const displayedPlatforms = showAllPlatforms ? allPlatforms : allPlatforms.slice(0, 9)

  // Handle Compare button click
  const handleCompareClick = (event: React.MouseEvent) => {
    event.preventDefault();
    // Navigate to services page with comparison hash
    window.location.href = '/services#comparison';
  };

  return (
    <main className="min-h-screen text-white relative overflow-x-hidden w-full">
      <div className="relative z-20">
        <Navbar />
        <div className="pt-20 md:pt-24">
          {/* Hero Section */}
          <div className="relative mt-8 md:mt-16 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white">
                  Distribute Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Music</span> Everywhere
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  Get your music on all major streaming platforms while keeping 100% of your rights and royalties. One-time fee, no hidden costs.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  <img src="/icons/spotify.png" alt="Spotify" className="h-8 md:h-10" />
                  <img src="/icons/itunes.png" alt="Apple Music" className="h-8 md:h-10" />
                  <img src="/icons/youtube.png" alt="YouTube Music" className="h-8 md:h-10" />
                  <img src="/icons/ganna.png" alt="Gaana" className="h-8 md:h-10" />
                  <img src="/icons/amazon.png" alt="Amazon Music" className="h-8 md:h-10" />
                  <img src="/icons/tiktok.png" alt="TikTok" className="h-8 md:h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Platforms Grid */}
          <section className="py-8 md:py-16">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-white">
                Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Platforms</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {displayedPlatforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-green-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center mb-2 md:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mr-2 sm:mr-3 md:mr-4" style={{ backgroundColor: `${platform.color}20` }}>
                        <img src={platform.icon} alt={platform.name} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      </div>
                      <h3 className="text-sm sm:text-base md:text-xl font-bold text-white">{platform.name}</h3>
                    </div>
                    <ul className="space-y-1 md:space-y-2">
                      {platform.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300 text-xs sm:text-sm">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 text-center">
                <motion.button
                  onClick={() => setShowAllPlatforms(!showAllPlatforms)}
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500/20 to-green-500/10 hover:from-green-500/30 hover:to-green-500/20 text-green-400 rounded-lg text-sm sm:text-base transition-all duration-300 border border-green-500/30 hover:border-green-500/50 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {showAllPlatforms ? (
                    <>
                      Show Less
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      View More Platforms
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </section>

          {/* Distribution Process */}
          <section className="py-8 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Works</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">1. Verify Your Identity</h3>
                  <p className="text-sm md:text-base text-gray-300">Connect your existing artist profiles for quick verification</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V8" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">2. Upload Your Music</h3>
                  <p className="text-sm md:text-base text-gray-300">Upload your tracks with artwork and metadata</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">3. Global Distribution</h3>
                  <p className="text-sm md:text-base text-gray-300">We distribute your music to 50+ platforms worldwide</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Compare Section */}
          <section className="py-8 md:py-16 bg-gradient-to-br from-black/60 to-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Streamo Digital</span>?
                </h2>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                  Compare our services with traditional distributors and record labels to see why thousands of independent artists choose us
                </p>
                <motion.button
                  onClick={handleCompareClick}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-green-300 via-green-600 to-green-700 text-white rounded-full font-bold transition-all duration-200 shadow-lg hover:shadow-green-500/20 text-base sm:text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Compare Services
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-8 md:py-16">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-6xl">
              {/* Global Reach Description */}
              <div className="mb-8 md:mb-12">
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-green-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">Global Reach</h3>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        Music distribution allows artists to reach a global audience. With the advent of digital platforms, music can be accessed from virtually anywhere in the world. By distributing their music through platforms like Spotify, Apple Music, TikTok, Facebook, Resso, Amazon, and iTunes, artists can tap into millions of listeners worldwide. This global reach provides exposure and opportunities for artists to connect with diverse audiences, expanding their fan base and increasing their visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Music Distribution Form */}
              <div className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                <MusicDistributionForm />
              </div>
            </div>
          </section>

          {/* Benefits Sections */}
          <section className="py-8 md:py-16">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Streamo Digital</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Monetization */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">Monetization</h3>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        Distribution platforms like Streamo Digital enable artists to monetize their music. Through streaming services and digital downloads, artists can earn royalties for each play or purchase of their songs. This revenue stream is essential for sustaining a career in music, allowing artists to invest in their craft, cover production costs, and generate income from their creative work.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Accessibility */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">Accessibility</h3>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        Music distribution platforms make music easily accessible to listeners. Gone are the days when physical distribution channels like CDs and vinyl were the primary means of accessing music. Today, streaming services offer instant access to vast libraries of music at the touch of a button, fostering engagement and loyalty.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Flexibility and Control */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">Flexibility & Control</h3>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        Streamo Digital empowers artists with flexibility and control over their music. The platform allows artists to upload their tracks, set pricing, and manage their catalog according to their preferences. This level of control enables artists to tailor their distribution strategy to suit their artistic vision and business objectives.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Ease of Use */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">Ease of Use</h3>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        Streamo Digital offers a user-friendly platform that simplifies the music distribution process. From uploading tracks to tracking performance metrics, the platform is designed to be intuitive and accessible. This ease of use ensures that artists can focus on creating music while Streamo Digital handles the complexities of distribution and monetization.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 md:mt-16 text-center"
              >
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-green-500/20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Ready to Share Your Music with the World?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-6 max-w-3xl mx-auto">
                    By leveraging Streamo Digital's global reach, monetization opportunities, accessibility, flexibility, and ease of use, artists can turn their musical dreams into reality and connect with audiences worldwide.
                  </p>
                  <motion.button
                    onClick={() => scrollToSection('form')}
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-green-300 via-green-600 to-green-700 text-white rounded-full font-bold transition-all duration-200 shadow-lg hover:shadow-green-500/20 text-base sm:text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Distribution Journey
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  )
} 