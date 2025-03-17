'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FaqContact = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    setShowSuccessModal(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  // Success Modal Component
  const SuccessModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowSuccessModal(false)} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-gradient-to-br from-black/80 to-green-950/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-green-500/20 max-w-md w-full shadow-xl"
      >
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-300 mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
          
          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 shadow-md hover:shadow-green-500/25 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )

  const faqs = [
    {
      question: "How does music distribution work?",
      answer: "Our music distribution service delivers your music to all major streaming platforms like Spotify, Apple Music, Amazon Music, and more. Simply upload your tracks, provide the necessary metadata, and we'll handle the rest. Your music will typically be live within 1-3 business days."
    },
    {
      question: "Do I keep all rights to my music?",
      answer: "Absolutely! You retain 100% ownership of your music. We never take any rights to your content. Our service is non-exclusive, meaning you're free to distribute your music through other services as well."
    },
    {
      question: "How and when do I get paid?",
      answer: "We offer weekly payments with no minimum threshold. Once your music starts generating revenue, you'll receive your earnings directly to your connected payment method. Our analytics dashboard provides real-time tracking of your streams and earnings."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept WAV files (16-bit or 24-bit, 44.1kHz) for audio. For cover art, we require JPEG or PNG files with minimum dimensions of 3000x3000 pixels. All files should meet industry quality standards for the best results."
    },
    {
      question: "Can I remove my music from streaming platforms?",
      answer: "Yes, you can request to take down your music at any time through your dashboard. Most platforms will remove your content within 1-7 business days, though some may take longer depending on their processes."
    },
    {
      question: "Do you offer marketing and promotion services?",
      answer: "Yes! We provide various marketing and promotion services including playlist pitching, social media promotion, and release strategy consultation. These services can be added to any distribution package to help maximize your music's reach."
    }
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-500 via-black to-black"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Help?</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Find answers to common questions or reach out to our support team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-green-500/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Questions</span></h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="border border-green-500/10 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center bg-black/40 hover:bg-black/60 transition-colors text-left"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-green-400 transition-transform ${activeQuestion === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 sm:p-6 text-gray-300 text-sm sm:text-base bg-black/20">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
              <a 
                href="#contact-form" 
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center"
              >
                Contact our support team
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-green-500/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Us</span></h3>
            
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/30 text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/30 text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/30 text-white placeholder-gray-500"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Distribution">Music Distribution</option>
                  <option value="Payments">Payments & Royalties</option>
                  <option value="Technical">Technical Support</option>
                  <option value="Marketing">Marketing & Promotion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-green-500/20 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/30 text-white placeholder-gray-500 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 shadow-md hover:shadow-green-500/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-green-500/10">
              <h4 className="font-medium text-white mb-4">Other Ways to Reach Us</h4>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">Email Support</p>
                    <a href="mailto:support@streamodigital.com" className="text-green-400 hover:text-green-300">support@streamodigital.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">Phone Support</p>
                    <a href="tel:+18005551234" className="text-green-400 hover:text-green-300">+1 (800) 555-1234</a>
                    <p className="text-xs text-gray-400 mt-1">Monday-Friday, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">Live Chat</p>
                    <button className="text-green-400 hover:text-green-300">Start a conversation</button>
                    <p className="text-xs text-gray-400 mt-1">Available 24/7 for premium users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && <SuccessModal />}
      </AnimatePresence>
    </section>
  )
}

export default FaqContact