'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Independent Artist",
      image: "/images/testimonial1.svg",
      quote: "Streamo Digital transformed my music career. Their global distribution helped me reach fans I never thought possible, and their weekly payments keep my career sustainable.",
      rating: 5
    },
    {
      name: "Marcus Williams",
      role: "Label Owner",
      image: "/images/testimonial2.svg",
      quote: "As a small label, we needed a partner who understood our needs. Streamo Digital's team provided personalized support and helped our artists grow their audience exponentially.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Singer-Songwriter",
      image: "/images/testimonial3.svg",
      quote: "The marketing support from Streamo Digital got my latest single featured on major playlists. Their team genuinely cares about artist success and goes above and beyond.",
      rating: 5
    }
  ]

  const partners = [
    { name: "Spotify", logo: "/images/p1.png" },
    { name: "Apple Music", logo: "/images/p2.png" },
    { name: "Amazon Music", logo: "/images/p3.png" },
    { name: "YouTube Music", logo: "/images/p4.png" }
  ]

  const achievements = [
    { 
      number: "20,000+", 
      text: "Music Distributed",
      icon: (
        <img src="/icons/music.png" alt="icon1" className="w-16 h-16 sm:w-20 sm:h-20" />
      )
    },
    { 
      number: "500+", 
      text: "Artists Signed",
      icon: (
        <img src="/icons/guitar.png" alt="icon2" className="w-16 h-16 sm:w-20 sm:h-20" />
      )
    },
    { 
      number: "180+", 
      text: "Labels Signed",
      icon: (
        <img src="/icons/album.png" alt="icon3" className="w-16 h-16 sm:w-20 sm:h-20" />
      )
    },
    { 
      number: "10+", 
      text: "Industry Awards",
      icon: (
        <img src="/icons/reward.png" alt="icon4" className="w-16 h-16 sm:w-20 sm:h-20" />
      )
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500 via-black to-black"></div>      
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 overflow-hidden">
        {/* Testimonials Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Clients Say</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Hear from artists and labels who have transformed their music careers with Streamo Digital.</p>
          </div>

          {/* Redesigned Testimonial Cards - 3 Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px -10px rgba(29, 185, 84, 0.2)',
                }}
              >
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
                
                {/* Quote mark */}
                <div className="absolute top-4 right-6 opacity-10">
                  <svg className="w-20 h-20 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg text-white italic mb-6">"{testimonial.quote}"</blockquote>
                  
                  {/* Profile */}
                  <div className="mt-auto flex items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-500/30 to-purple-500/30 p-0.5">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="ml-4 text-left">
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-green-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners and Achievements Section - Unified Layout */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Impact</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Trusted by leading platforms and artists worldwide.</p>
          </div>

          {/* Partners Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-white text-center">Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Partnerships</span></h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-black/40 to-black/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 flex items-center justify-center h-24 sm:h-28 md:h-32 lg:h-40 shadow-lg hover:shadow-green-500/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10, 
                      boxShadow: '0 20px 40px -10px rgba(29, 185, 84, 0.2)',
                      scale: 1.05
                    }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="bg-gradient-to-t from-black/60 to-black/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-white text-center">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Achievements</span></h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      {achievement.icon}
                    </div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{achievement.number}</h4>
                    <p className="text-sm sm:text-base text-gray-300">{achievement.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 sm:mt-12 md:mt-16 text-center">
                <button className="bg-gradient-to-b from-green-300 via-green-600 to-green-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-green-500 transition-colors duration-200 shadow-lg hover:shadow-green-500/20">
                 <a href="https://apply.streamodigital.com/" target="_blank" rel="noopener noreferrer"> Start Your Journey Today</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 