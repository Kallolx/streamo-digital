'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {/* Music note icon */}
          <div className="mb-6 flex justify-center">
            <svg className="w-24 h-24 text-green-500 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          {/* Error code */}
          <h1 className="text-8xl sm:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">404</h1>
          
          {/* Error message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Track Not Found</h2>
          
          {/* Description */}
          <p className="text-gray-400 text-lg mb-8">
            Looks like this track is missing from our playlist. The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-green-500/25 transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border border-green-500/50 hover:border-green-400 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-green-500/10 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
          
          {/* Vinyl record animation */}
          <motion.div 
            className="mt-12 mx-auto w-32 h-32 sm:w-40 sm:h-40 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"></div>
            <div className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-green-500"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 