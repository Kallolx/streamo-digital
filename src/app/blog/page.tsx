'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { usePageLoading } from '@/hooks/usePageLoading'

// Define blog posts with their details
const blogPosts = [
  {
    id: 'music-distribution-guide',
    title: 'The Complete Guide to Music Distribution in 2024',
    excerpt: 'Learn everything you need to know about distributing your music effectively across all major platforms while maximizing your revenue and reach.',
    date: 'March 18, 2024',
    category: 'Distribution',
    image: '/blog/music-distribution.jpg',
    featured: true,
    readTime: '8 min read'
  },
  {
    id: 'streaming-royalties',
    title: 'Understanding Streaming Royalties: How Artists Get Paid',
    excerpt: 'A comprehensive breakdown of how royalties work on different streaming platforms and how to ensure youre getting every penny you deserve.',
    date: 'March 10, 2024',
    category: 'Revenue',
    image: '/blog/streaming-royalties.jpg',
    featured: true,
    readTime: '6 min read'
  },
  {
    id: 'social-media-promotion',
    title: '10 Effective Social Media Strategies for Musicians',
    excerpt: 'Discover proven tactics to grow your audience and promote your music across TikTok, Instagram, and other social platforms.',
    date: 'March 5, 2024',
    category: 'Marketing',
    image: '/blog/social-media.jpg',
    featured: false,
    readTime: '7 min read'
  },
  {
    id: 'music-copyright',
    title: 'Music Copyright Explained: Protecting Your Creative Work',
    excerpt: 'Everything artists need to know about copyright law, registration, and defending your intellectual property in the digital age.',
    date: 'February 28, 2024',
    category: 'Legal',
    image: '/blog/copyright.jpg',
    featured: false,
    readTime: '9 min read'
  },
  {
    id: 'release-strategy',
    title: 'Building the Perfect Release Strategy for Your Next Single',
    excerpt: 'Step-by-step guide to planning, promoting, and executing a successful music release that maximizes streams and engagement.',
    date: 'February 20, 2024',
    category: 'Strategy',
    image: '/blog/release-strategy.jpg',
    featured: false,
    readTime: '5 min read'
  },
]

export default function BlogPage() {
  // Initialize page loading
  usePageLoading();
  
  // Get featured and non-featured posts
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
                  Streamo <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Blog</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  Industry insights, music distribution tips, and strategies to help independent artists thrive in today's music landscape.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">             
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:bg-black/40 transition-all duration-300 h-full"
                  >
                    <div className="relative aspect-[16/9]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <div 
                        className="absolute inset-0 bg-center bg-cover"
                        style={{backgroundImage: `url(${post.image})`}}
                      ></div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-green-500/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-xs text-gray-400">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{post.title}</h3>
                      <p className="text-gray-300 mb-6 text-sm">{post.excerpt}</p>
                      <a 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-green-400 font-medium text-sm"
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Latest Posts */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Articles</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:bg-black/40 transition-all duration-300 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative aspect-[16/9]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <div 
                        className="absolute inset-0 bg-center bg-cover"
                        style={{backgroundImage: `url(${post.image})`}}
                      ></div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-green-500/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-xs text-gray-400">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-white">{post.title}</h3>
                      <p className="text-gray-300 mb-6 text-sm line-clamp-3">{post.excerpt}</p>
                      <a 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-green-400 font-medium text-sm"
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <motion.div 
                className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get the latest music industry insights, distribution tips, and exclusive content delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                  />
                  <button 
                    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Blog Categories */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Browse by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Category</span></h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Distribution', 'Marketing', 'Revenue', 'Strategy', 'Legal', 'Promotion', 'Industry News', 'Success Stories'].map((category, index) => (
                  <motion.a
                    key={category}
                    href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                    className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4 text-center hover:bg-black/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="text-white font-medium">{category}</span>
                  </motion.a>
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