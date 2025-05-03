"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/utils/scrollUtils";

const Navbar = () => {
  // Removed isScrolled state since we're always showing the scrolled version
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Removed scroll event listener since we don't need it anymore

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle clicking the Compare button
  const handleCompareClick = (event: React.MouseEvent) => {
    event.preventDefault();
    scrollToSection("comparison", setIsMenuOpen);
  };

  return (
    <div className="w-full flex justify-center fixed top-0 z-50">
      <nav className="w-full transition-all duration-300 max-w-[95%] sm:max-w-[90%] md:max-w-5xl px-4 sm:px-6 py-3 bg-black/80 sm:backdrop-blur-lg shadow-lg rounded-full mt-2 mx-auto">
        {/* Logo - Left */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Streamo Digital"
                width={150}
                height={40}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center justify-center space-x-6 mx-auto">
            <Link
              href="/"
              className="text-green-500 hover:text-green-400 transition-colors duration-200 text-base font-medium"
            >
              Home
            </Link>

            <div className="relative group">
              <Link
                href="/services"
                className="text-white hover:text-green-400 transition-colors duration-200 text-base font-medium"
              >
                Features
              </Link>

              {/* Mega Menu Dropdown */}
              <div className="absolute transform -translate-x-1/3 mt-8 w-screen max-w-5xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-50">
                <div className="bg-black backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Column 1 - Title & Description */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Features
                      </h3>
                      <p className="text-gray-400 mb-4">
                        A Complete Music Ecosystem
                      </p>

                      {/* New Image Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <img
                          src="/images/album1.png"
                          alt="Album 1"
                          className="w-full rounded-lg object-cover"
                        />
                        <img
                          src="/images/album2.png"
                          alt="Album 2"
                          className="w-full rounded-lg object-cover"
                        />
                      </div>
                    </div>

                    {/* Column 2 - Links */}
                    <div className="p-6">
                      <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">
                        ALL-IN-ONE
                      </h4>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/services/catalog"
                            className="text-white hover:text-green-400 transition-colors duration-200"
                          >
                            Catalog Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/rights"
                            className="text-white hover:text-green-400 transition-colors duration-200"
                          >
                            Rights Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/distribution"
                            className="text-white hover:text-green-400 transition-colors duration-200"
                          >
                            Distribution & Delivery
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/income"
                            className="text-white hover:text-green-400 transition-colors duration-200"
                          >
                            Income Tracking
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/royalty"
                            className="text-white hover:text-green-400 transition-colors duration-200"
                          >
                            Royalty Accounting
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/payments"
                            className="text-white hover:text-green-400 transition-colors duration-200"
                          >
                            Global Payments
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/analytics"
                            className="text-white hover:text-green-400 transition-colors duration-200"
                          >
                            Analytics & Insights
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 - Spotlight Items */}
                    <div className="p-6">
                      <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">
                        SPOTLIGHT
                      </h4>

                      {/* Spotlight Item 1 */}
                      <div className="bg-gray-950 hover:bg-gradient-to-b from-green-300 via-green-600 to-green-700 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 rounded-lg p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-400 mr-2">✦</span>
                          <h5 className="text-white font-medium">
                            Distribution Dashboard
                          </h5>
                        </div>
                        <p className="text-white text-sm">
                          Connect your systems with our powerful API solutions
                        </p>
                      </div>

                      {/* Spotlight Item 2 */}
                      <div className="bg-gray-950 hover:bg-gradient-to-b from-green-300 via-green-600 to-green-700 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-400 mr-2">✦</span>
                          <h5 className="text-white font-medium">
                            White Label
                          </h5>
                        </div>
                        <p className="text-white text-sm">
                          Custom branded solutions for your distribution
                          business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/music-distribution"
              className="text-white hover:text-green-400 transition-colors duration-200 text-base font-medium"
            >
              Music Distribution
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-green-400 transition-colors duration-200 text-base font-medium"
            >
              About us
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-green-400 transition-colors duration-200 text-base font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Apply Button - Right */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://backstage.streamodigital.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-green-300 via-green-600 to-green-700 text-white font-bold px-6 py-2.5 rounded-full text-base hover:bg-green-500 transition-colors duration-200"
            >
              Client Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-400 hover:bg-black/50 transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              className="mobile-menu md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black/95 backdrop-blur-md shadow-2xl border-l border-gray-800 z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/logo.svg"
                    alt="Streamo Digital"
                    width={120}
                    height={30}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <Link
                    href="/"
                    className="block text-lg font-medium text-green-500 hover:text-green-400 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/music-distribution"
                    className="block text-lg font-medium text-white hover:text-green-400 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Music Distribution
                  </Link>
                  <div className="space-y-3">
                    <Link
                      href="/services"
                      className="block text-lg font-medium text-white hover:text-green-400 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </Link>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/services/catalog"
                        className="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Catalog Management
                      </Link>
                      <Link
                        href="/services/rights"
                        className="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Rights Management
                      </Link>
                      <Link
                        href="/services/distribution"
                        className="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Distribution & Delivery
                      </Link>
                      <Link
                        href="/services/analytics"
                        className="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Analytics & Insights
                      </Link>
                    </div>
                  </div>
                  <a
                    href="#comparison"
                    className="block text-lg font-medium text-white hover:text-green-400 transition-colors duration-200 cursor-pointer"
                    onClick={handleCompareClick}
                  >
                    Compare
                  </a>
                  <Link
                    href="/blog"
                    className="block text-lg font-medium text-white hover:text-green-400 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>

                  <div className="pt-6 mt-6 border-t border-gray-800">
                    <Link
                      href="https://backstage.streamodigital.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-b from-green-300 via-green-600 to-green-700 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-500 transition-colors duration-200 text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Client Login
                    </Link>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
