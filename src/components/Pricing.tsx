'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const [isHovering, setIsHovering] = useState<number | null>(null)

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for beginners looking to distribute their first releases",
      features: [
        "Distribution to 2 platforms",
        "Basic analytics",
        "Standard release timeline",
        "Email support",
        "Keep 85% of your royalties"
      ],
      cta: "Get Started",
      popular: true,
      tier: 1,
      link: "https://apply.streamodigital.com/"
    },
    {
      name: "Artist",
      price: "$9.99",
      period: "per year",
      description: "For serious artists ready to expand their reach",
      features: [
        "Distribution to 50+ platforms",
        "Advanced analytics dashboard",
        "Priority release timeline",
        "24/7 email support",
        "Keep 90% of your royalties",
        "Pre-save campaigns",
        "Spotify canvas support"
      ],
      cta: "Choose Plan",
      popular: false,
      tier: 2,
      link: "https://apply.streamodigital.com/"
    },
    {
      name: "Record Label",
      price: "$49.99",
      period: "per year",
      description: "Complete solution for labels managing multiple artists",
      features: [
        "Distribution to 150+ platforms",
        "Label analytics dashboard",
        "Express release timeline",
        "Priority 24/7 support",
        "Keep 95% of your royalties",
        "Unlimited pre-save campaigns",
        "Spotify canvas & playlist pitching",
        "Multiple artist management",
        "Bulk upload releases"
      ],
      cta: "Choose Plan",
      popular: false,
      tier: 3,
      link: "https://apply.streamodigital.com/"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 via-black to-black"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Transparent</span> Pricing</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">Choose the plan that fits your needs. No hidden fees, cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              {/* Glow effect for free tier */}
              {plan.popular && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-sm opacity-70 animate-pulse"></div>
              )}
              
              <div className={`relative h-full backdrop-blur-md p-4 rounded-2xl flex flex-col ${
                plan.tier === 1 
                  ? 'bg-gradient-to-br from-black/80 to-green-950/30 border border-green-500/20' 
                  : plan.tier === 2
                    ? 'bg-gradient-to-br from-black/80 to-green-900/20 border border-green-600/20'
                    : 'bg-gradient-to-br from-black/80 to-green-800/20 border border-green-700/20'
              }`}>
                
                {/* Plan name */}
                <h3 className={`text-lg sm:text-xl font-bold mb-1 ${
                  plan.tier === 1 ? 'text-green-400' : 
                  plan.tier === 2 ? 'text-green-300' : 
                  'text-green-200'
                }`}>{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-400 ml-1 text-sm">/{plan.period}</span>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-3">{plan.description}</p>
                
                {/* Features */}
                <ul className="mb-4 flex-grow text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start mb-1.5">
                      <svg className={`w-4 h-4 mr-1.5 mt-0.5 flex-shrink-0 ${
                        plan.tier === 1 ? 'text-green-500' : 
                        plan.tier === 2 ? 'text-green-400' : 
                        'text-green-300'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <a 
                  href="https://apply.streamodigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 rounded-lg font-bold text-white text-sm transition-all duration-300 text-center ${
                    plan.tier === 1 
                      ? 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 shadow-md hover:shadow-green-500/25' 
                      : plan.tier === 2
                        ? 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 shadow-md hover:shadow-green-600/25'
                        : 'bg-gradient-to-r from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 shadow-md hover:shadow-green-700/25'
                  }`}
                >
                  {plan.cta}
                </a>
                
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-br from-black/60 to-green-950/20 backdrop-blur-md p-4 sm:p-6 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Get Started?</span></h3>
            <p className="text-gray-300 text-sm mb-4">Join thousands of artists and labels who trust Streamo Digital with their music.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="https://apply.streamodigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:shadow-green-500/25 transition-all duration-300 text-sm text-center"
              >
                Start For Free
              </a>
              <a 
                href="https://apply.streamodigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-green-500/50 hover:border-green-400 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:shadow-green-500/10 transition-all duration-300 text-sm text-center"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  )
}

export default Pricing 