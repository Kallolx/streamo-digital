'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { img } from 'framer-motion/client'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [currentTrack, setCurrentTrack] = useState(0)
  
  // Sample tracks for the music player
  const tracks = [
    {
      title: "Neon Dreams",
      artist: "Electro Wave",
      image: "/images/album4.png",
      duration: "3:45"
    },
    {
      title: "Midnight Groove",
      artist: "Funk Masters",
      image: "/images/album1.png",
      duration: "4:12"
    },
    {
      title: "Ocean Waves",
      artist: "Chill Vibes",
      image: "/images/album2.png",
      duration: "3:28"
    },
    {
      title: "Urban Rhythm",
      artist: "Beat Collective",
      image: "/images/album3.png",
      duration: "2:56"
    }
  ]
  
  // Auto-change track every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrack((prev) => (prev + 1) % tracks.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [tracks.length])
  
  // Handle next and previous track
  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
  }
  
  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const features = [
    {
      title: "Global Music Distribution",
      description: "Distribute your music to over 200+ DSPs (like Spotify, Amazon, iTunes, and more) within 6–10 days and easily collect your earnings.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/earth.png" alt="Global Music Distribution" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-green-500/20 to-green-500/5"
    },
    {
      title: "Marketing Campaigns",
      description: "We craft strategic marketing campaigns customized to your goals and budget — driving real engagement, visibility, and fan growth.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/chart.png" alt="Tailored Marketing Campaigns" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      title: "Analytics & Accounting",
      description: "Access in-depth royalty analytics that show you exactly where your income is coming from — from which store, country, and more.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/pie.png" alt="Analytics & Accounting" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      title: "YouTube MCN Services",
      description: "As a YouTube Certified Service Provider, we help you monetize your music — even if others have uploaded it — and make sure you get paid fairly.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/play.png" alt="YouTube MCN Services" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-red-500/20 to-red-500/5"
    },
    {
      title: "Music Publishing",
      description: "From copyright registration to royalty collection and licensing, we handle every aspect of your music publishing with precision and care.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/plane.png" alt="Music Publishing Support" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      title: "A&R & Artist Network",
      description: "Once you're part of Streamo, you'll get access to a network of talented artists, opening doors for collaboration and creative growth.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/music2.png" alt="A&R & Artist Network" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-pink-500/20 to-pink-500/5"
    },
    {
      title: "Label Services",
      description: "Partner with our in-house Marketing & PR Team as you release music — we bring the record label experience directly to you, with none of the hassle.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/label.png" alt="Label Services" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
      title: "Public Relations (PR)",
      description: "Our PR team works closely with top-tier media outlets to boost your brand, tell your story, and build the visibility you deserve.",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/icons/public.png" alt="Public Relations (PR)" className="w-full h-full object-contain" />
        </div>
      ),
      color: "from-cyan-500/20 to-cyan-500/5"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-90"></div>
        
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Music wave lines */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="128" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1DB954"/>
              <stop offset="1" stopColor="#1DB954" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What We Do at <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Streamo Digital</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">We're a next-generation music distribution and artist services platform, providing all the tools and support you need — with full freedom, control, and a reliable partner by your side.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveFeature(index)}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              
              <div className={`h-full backdrop-blur-sm bg-black/50 p-4 sm:p-4 md:p-5 lg:p-6 flex flex-col ${activeFeature === index ? 'ring-2 ring-green-500' : ''}`}>
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex-shrink-0 mr-3">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-300 flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Music player UI element with changing images */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto">
          <motion.div 
            className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-4 sm:p-5 md:p-6 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-lg overflow-hidden relative group max-w-[200px] mx-auto md:max-w-none">
                  {/* Image that changes automatically or on button click */}
                  <motion.div
                    key={currentTrack}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={tracks[currentTrack].image} 
                      alt={`${tracks[currentTrack].title} by ${tracks[currentTrack].artist}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* Track info */}
                <div className="mt-3 text-center md:text-left">
                  <h4 className="text-white font-medium">{tracks[currentTrack].title}</h4>
                  <p className="text-gray-400 text-sm">{tracks[currentTrack].artist}</p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 mt-4 md:mt-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center md:text-left">Start Your Music Journey Today</h3>
                <p className="text-gray-300 mb-4 text-center md:text-left text-sm sm:text-base">Join thousands of independent artists who trust Streamo Digital with their music distribution.</p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-300 h-1.5 sm:h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <span>2:14</span>
                    <span>{tracks[currentTrack].duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
                    {/* Previous button */}
                    <button 
                      className="text-white/70 hover:text-white transition-colors"
                      onClick={prevTrack}
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 20L9 12L19 4V20Z" fill="currentColor"/>
                        <path d="M5 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    
                    {/* Play button */}
                    <button className="bg-white rounded-full p-2 sm:p-3 text-black hover:bg-green-400 transition-colors">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4L15 12L5 20V4Z" fill="currentColor"/>
                        <path d="M19 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    
                    {/* Next button */}
                    <button 
                      className="text-white/70 hover:text-white transition-colors"
                      onClick={nextTrack}
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4L15 12L5 20V4Z" fill="currentColor"/>
                        <path d="M19 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features 