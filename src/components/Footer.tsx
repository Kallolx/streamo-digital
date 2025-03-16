'use client'

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Music Distribution", href: "#" },
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Licensing", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "DMCA", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-gray-800/50 mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 lg:gap-12">
          {/* Company info */}
          <div className="col-span-2">
            <div className="mb-4">
              <img src="/logo.svg" alt="Streamo Digital Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Empowering independent artists and labels with global music distribution, marketing tools, and analytics to help you grow your career while keeping 100% of your rights.
            </p>
            
            {/* Social links placeholder */}
            <div className="flex space-x-4">
              {/* Social icons will be added manually */}
              <span className="text-gray-400">Social Icons</span>
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Streamo Digital. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
        
        {/* Back to top link */}
        <div className="flex justify-center mt-8">
          <a 
            href="#top" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-green-400 transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 