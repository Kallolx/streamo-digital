'use client'

import { ArrowUpIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [openOffice, setOpenOffice] = useState(0)
  
  const officeLocations = [
    {
      title: "Bangladesh Office",
      address: [
        "House 53/55, Flat 5C, Road-3, Block-B",
        "Niketon Housing Soceity, Gulshan, Dhaka",
        "Mobile: +880 9697055022"
      ]
    },
    {
      title: "USA Office",
      address: [
        "52 Brentwood Ln,",
        "Windsor, CT 06095"
      ]
    },
    {
      title: "India Office",
      address: [
        "New Link Rd, Phase D, Oshiwara,",
        "Andheri West, Mumbai,",
        "Maharashtra 400053, India"
      ]
    },
    {
      title: "Nepal Office",
      address: [
        "Shantinagar, Baneshwar,",
        "Kathmandu, 44600, Nepal"
      ]
    }
  ]

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Distribution", href: "/distribution" },
    { name: "Marketing", href: "/marketing" },
    { name: "Analytics", href: "/analytics" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" }
  ]

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/StreamoDigitalbd",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@StreamoDigital",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/streamodigital/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/streamodigitalbd/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      )
    }
  ]

  // Handle toggling the office locations
  const toggleOffice = (index: number) => {
    setOpenOffice(openOffice === index ? -1 : index)
  }

  return (
    <footer className="mt-12 sm:mt-16 md:mt-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main footer section */}
        <div className="pt-12 pb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Company card - Boxed */}
            <div className="lg:w-1/3">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img src="/logo.svg" alt="Streamo Digital Logo" className="w-12 h-12" />
                  <h2 className="ml-3 text-xl font-bold text-white">Streamo Digital</h2>
                </div>
                <p className="text-gray-300 mb-5 text-sm">
                  Empowering independent artists and labels with global music distribution, marketing tools, and analytics to help you grow your career while keeping 100% of your rights.
                </p>
                
                {/* Social links */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-all bg-gray-800/50 hover:bg-green-500/80 p-2 rounded-lg"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Links & Office Locations */}
            <div className="lg:w-2/3 lg:pl-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Links */}
                <div className="md:col-span-1">
                  <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    {navLinks.slice(0, 5).map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-gray-300 hover:text-green-400 text-sm hover:underline transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="md:col-span-1">
                  <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                  <ul className="space-y-2">
                    {navLinks.slice(5).map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-gray-300 hover:text-green-400 text-sm hover:underline transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Office Locations - Compact */}
                <div className="md:col-span-1">
                  <h3 className="text-white font-semibold text-lg mb-4">Global Offices</h3>
                  <div className="space-y-4">
                    {officeLocations.map((office, index) => (
                      <div key={office.title} className="border-b border-gray-700/10 last:border-b-0 pb-2 last:pb-0">
                        <div 
                          onClick={() => toggleOffice(index)}
                          className="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-200 hover:text-green-400"
                        >
                          {office.title}
                          <span className={`transition-transform ${openOffice === index ? 'rotate-180' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>
                        {openOffice === index && (
                          <div className="pl-2 mt-2 space-y-1">
                            {office.address.map((line, lineIndex) => (
                              <p key={lineIndex} className="text-gray-400 text-xs">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal Links - Border removed */}
        <div className="py-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-gray-400 hover:text-green-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Streamo Digital. All rights reserved.
              </p>
              <span className="hidden sm:inline text-gray-700">|</span>
              <a 
                href="https://webbytestudio.unaux.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors"
              >
                Developed by WebbyteStudio
              </a>
            </div>

            <a 
              href="#top" 
              className="inline-flex items-center text-sm font-medium text-black hover:text-white transition-colors bg-gradient-to-r from-green-400/90 to-green-500/90 hover:from-green-500 hover:to-green-600 px-4 py-2 rounded-full"
            >
              <ArrowUpIcon className="w-4 h-4 mr-2" />
              Back to top
            </a>
          </div>
        </div>      
      </div>
    </footer>
  )
}

export default Footer 